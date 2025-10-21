import React from "react";
import axios from "axios";
import { useState } from "react";

export default function MemoList({ memo, onDelete, onMemoUpdated }) {
  const BASE_URL = import.meta.env.VITE_SUPABASE_MEMO_URL;
  const ANON_KEY = import.meta.env.VITE_SUPABASE_MEMO_ANON_KEY;
  const [flag, setflag] = useState(memo.flag);
  function handelClick() {
    if (confirm(`${memo.flag ? "미완료" : "완료"}로 변경하시겠습니까?`)) {
      postMemo(memo.flag ? false : true);
    }
  }
  async function postMemo(memoFlag) {
    try {
      const url = `${BASE_URL}/rest/v1/tb_memo?id=eq.${memo.id}`;
      const config = {
        method: "PATCH",
        url: url,
        headers: {
          apikey: ANON_KEY,
          "Content-Type": "application/json",
        },
        data: {
          id: memo.id,
          flag: memoFlag,
        },
      };
      const response = await axios(config);
      const data = response.data;
      setflag(memo.flag ? false : true);
      console.log(data);
      console.log("Memo  successfully.");
      if (onMemoUpdated) {
        onMemoUpdated();
      }
    } catch (err) {
      console.error("Memo error:", err);
      alert("변경에 실패했습니다.");
    }
  }
  function handelDelClick() {
    if (confirm("삭제하시겠습니까?")) {
      DelMemo();
    }
  }
  async function DelMemo() {
    try {
      const url = `${BASE_URL}/rest/v1/tb_memo?id=eq.${memo.id}`;
      const config = {
        method: "DELETE",
        url: url,
        headers: {
          apikey: ANON_KEY,
          "Content-Type": "application/json",
        },
        data: {
          id: memo.id,
        },
      };
      const response = await axios(config);
      const data = response.data;
      console.log("Memo Delete successfully.");
      if (onDelete) {
        onDelete(memo.id); // 부모 컴포넌트에 삭제된 메모의 ID 전달
      }
    } catch (err) {
      console.error("DeleteMemo error:", err);
      alert("메모 삭제가 실패했습니다.");
    }
  }
  return (
    <div>
      <div className="bg-white border border-gray-300 p-6">
        <div className="flex justify-between items-start mb-4">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {memo.content}
            </h3>
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="inline-block px-2 py-1 text-sm font-medium border text-gray-600 bg-gray-50 border-gray-200">
                {flag ? "완료" : "미완료"}
              </span>
            </div>
          </div>
          <button
            onClick={() => {
              handelDelClick();
            }}
            className="text-red-500 cursor-pointer"
          >
            삭제
          </button>
        </div>
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm text-gray-600">
            <span className="font-medium mr-2">마감일:</span>
            <span>{memo.dueDate}</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <span className="font-medium mr-2">생성일:</span>
            <span>{memo.created_at}</span>
          </div>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => {
              handelClick();
            }}
            className="px-3 py-1 text-sm font-medium border cursor-pointer text-green-600 bg-green-50 border-green-200"
          >
            {flag ? "미완료" : "완료"}로 변경
          </button>
        </div>
      </div>
    </div>
  );
}
