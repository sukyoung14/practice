import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import { useSelector } from "react-redux";

export default function ChatMessage({ message }) {
  const isUser = message["role"] === "user";
  const isAi = message["role"] === "ai";
  const BASE_URL = import.meta.env.VITE_SUPABASE_MEMO_URL;
  const ANON_KEY = import.meta.env.VITE_SUPABASE_MEMO_ANON_KEY;
  const [decodeToken, setDecodeToken] = useState(null);
  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    if (token) {
      try {
        console.log(token);
        setDecodeToken(jwtDecode(token));
        console.log(decodeToken.email);
      } catch (error) {}
    } else {
      setMemos([]); // 토큰이 없으면 메모 목록 초기화
    }
  }, [token]);

  function isJsonString(str) {
    try {
      const parsed = JSON.parse(str);
      return typeof parsed === "object" && parsed !== null;
    } catch (e) {
      return false;
    }
  }
  let value;
  if (isJsonString(message.content)) {
    value = JSON.parse(message.content);
  }
  function handleClick() {
    postMemo(decodeToken.email);
  }

  async function postMemo(email) {
    try {
      const url = `${BASE_URL}/rest/v1/tb_memo`;
      const config = {
        method: "POST",
        url: url,
        headers: {
          apikey: ANON_KEY,
          "Content-Type": "application/json",
        },
        data: {
          content: value.content,
          dueDate: value.dueDate,
          userId: email,
          // priority: "...",
          // category: "...",
        },
      };

      const response = await axios(config);
      alert("메모가 생성되었습니다.");
      console.log("Memo Insert successfully.");
    } catch (err) {
      console.error("InsertMemo error:", err);
      alert("메모 생성에 실패했습니다.");
    }
  }
  return (
    <div className={`mt-16 flex ${isUser ? "justify-end" : "justify-start"}`}>
      {isAi ? (
        // AI 메시지일 경우
        //isHtmlContent(message.content) ? (
        value.isMemo ? (
          <div className="bg-white border border-gray-300 p-4 mb-3">
            <div></div>
            <div className="space-y-3">
              <div>
                <label className="text-sm text-gray-600">할 일 내용</label>
                <p className="text-gray-900">{value.content}</p>
              </div>
              <div>
                <label class="text-sm text-gray-600">마감 날짜</label>
                <p className="text-gray-900">{value.dueDate}</p>
              </div>
            </div>
            <div className="flex gap-2 mt-4">
              <button
                onClick={() => {
                  handleClick();
                }}
                className="px-4 py-2 text-sm text-white bg-indigo-600 cursor-pointer"
              >
                생성하기
              </button>
              <button
                onClick={() => {
                  alert("b");
                }}
                className="px-4 py-2 text-sm text-gray-600 bg-gray-200 cursor-pointer"
              >
                취소
              </button>
            </div>
          </div>
        ) : (
          // 내용이 마크다운일 경우 ReactMarkdown 사용
          <div className="markdown-content max-w-[90%]">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {/* {message.content} */}
              {value.content}
            </ReactMarkdown>
          </div>
        )
      ) : (
        // 사용자 메시지일 경우
        <div className="p-3 border rounded-xl border-gray-300">
          {message.content}
        </div>
      )}
    </div>
  );
}
