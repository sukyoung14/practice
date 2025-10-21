import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import MemoList from "../components/MemoList";
import { jwtDecode } from "jwt-decode";

export default function ChatList() {
  const BASE_URL = import.meta.env.VITE_SUPABASE_MEMO_URL;
  const ANON_KEY = import.meta.env.VITE_SUPABASE_MEMO_ANON_KEY;
  const token = useSelector((state) => state.auth.token);
  const [memos, setMemos] = useState([]);
  const [flagMemos, setflagMemos] = useState([]);
  const [currentUserId, setCurrentUserId] = useState(null); // 현재 로그인된 사용자 ID 상태
  const [activeFilter, setActiveFilter] = useState(null); // 현재 활성화된 필터 (null: 전체, true: 완료, false: 미완료)
  useEffect(() => {
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        const userId = decodedToken.email; // 'sub' 클레임이 사용자 ID
        setCurrentUserId(userId); // 사용자 ID 상태 업데이트
        getMemo(userId, activeFilter); // 초기 로드 시 현재 필터 적용
      } catch (error) {}
    } else {
      setMemos([]); // 토큰이 없으면 메모 목록 초기화
      setflagMemos([]);
    }
  }, [token]);

  const getMemo = useCallback(
    async (userId, filterFlag = null) => {
      if (!userId) {
        console.log("User ID is not available, skipping memo fetch.");
        setMemos([]);
        setflagMemos([]);
        return;
      }
      try {
        console.log(userId);
        const url = `${BASE_URL}/rest/v1/tb_memo`;
        const params = {
          select: "*",
          //user_id: `eq.${userId}`,
          order: "created_at.desc",
        };

        if (filterFlag !== null) {
          params.flag = `eq.${filterFlag}`;
        }

        const config = {
          method: "GET",
          url: url,
          headers: {
            apikey: ANON_KEY,
            // Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          params: params,
        };

        const response = await axios(config);
        const data = response.data;
        console.log(data);

        setMemos(data);
        setflagMemos(data);
      } catch (err) {
        alert("메모 목록을 불러오는데 실패했습니다.");
      }
    },
    [BASE_URL, ANON_KEY, token]
  );

  const handleDeleteMemo = useCallback((deletedMemoId) => {
    setMemos((prevMemos) =>
      prevMemos.filter((memo) => memo.id !== deletedMemoId)
    );
  }, []);

  const handleMemoUpdated = useCallback(() => {
    if (currentUserId) {
      setActiveFilter(null);
      getMemo(currentUserId, null);
    }
  }, [currentUserId, getMemo, activeFilter]);
  return (
    <div>
      <div className="mb-6 flex gap-2">
        <button
          onClick={() => {
            setActiveFilter(null);
            currentUserId && getMemo(currentUserId, null);
          }}
          className={`px-4 py-2 text-sm font-medium border cursor-pointer ${
            activeFilter === null
              ? "text-white bg-gray-900 border-gray-900"
              : "text-gray-600 bg-white border-gray-300"
          }`}
        >
          전체 ({memos.length})
        </button>
        <button
          onClick={() => {
            setActiveFilter(false); // 미완료 필터 활성화
            setflagMemos(
              memos.filter((memo) => {
                if (!memo.flag) return memo;
              })
            );
            //currentUserId && getMemo(currentUserId, false);
          }}
          className={`px-4 py-2 text-sm font-medium border cursor-pointer ${
            activeFilter === false
              ? "text-white bg-gray-900 border-gray-900"
              : "text-gray-600 bg-white border-gray-300"
          }`}
        >
          미완료 (
          {
            memos.filter((memo) => {
              if (!memo.flag) return memo;
            }).length
          }
          )
        </button>
        <button
          onClick={() => {
            setActiveFilter(true); // 완료 필터 활성화
            setflagMemos(
              memos.filter((memo) => {
                if (memo.flag) return memo;
              })
            );
            //currentUserId && getMemo(currentUserId, true);
          }}
          className={`px-4 py-2 text-sm font-medium border cursor-pointer ${
            activeFilter === true
              ? "text-white bg-gray-900 border-gray-900"
              : "text-gray-600 bg-white border-gray-300"
          }`}
        >
          완료 (
          {
            memos.filter((memo) => {
              if (memo.flag) return memo;
            }).length
          }
          )
        </button>
      </div>
      {flagMemos.length === 0 ? (
        <p>메모가 없습니다.</p>
      ) : (
        flagMemos.map((memo) => {
          return (
            <MemoList
              key={memo.id}
              memo={memo}
              onDelete={handleDeleteMemo}
              onMemoUpdated={handleMemoUpdated}
            />
          );
        })
      )}
    </div>
  );
}
