import React from "react";
import { useState } from "react";

export default function ArrayState() {
  const [array, setArray] = useState([
    { id: 1, name: "마트가기" },
    { id: 2, name: "청소하기" },
    { id: 3, name: "영화보기" },
  ]);

  function addTodo() {
    console.log("할 일 추가");
    let newId = array.length + 1;
    let newName = `${newId}`;

    const newArray = [...array, { id: newId, name: newName }];

    setArray(newArray);
  }

  function removeTodo() {
    console.log("마지막 할 일 제거");
    if (array.length === 0) {
      alert("할일이 없습니다.");
      return;
    }

    let lastId = array.length;

    const newArray = array.filter((item) => {
      if (item.id !== lastId) {
        return true;
      }
    });

    setArray(newArray);
  }

  function clearTodos() {
    console.log("모든 할 일 제거");
    // 상태 업데이트 로직
    if (array.length === 0) {
      alert("할일이 없습니다.");
      return;
    }

    let lastId = array.length;

    const newArray = array.filter((item) => {
      return false;
    });

    setArray(newArray);
  }

  return (
    <div className="flex flex-col items-center p-6 border rounded-lg">
      <h2 className="text-2xl font-bold mb-4">배열 상태 관리</h2>
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">할 일 목록:</h3>
        <ul className="list-disc list-inside">
          {array.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
      <div className="flex gap-2 flex-wrap justify-center">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => {
            addTodo();
          }}
        >
          할 일 추가
        </button>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded"
          onClick={() => {
            removeTodo();
          }}
        >
          마지막 할 일 제거
        </button>
        <button
          className="bg-gray-500 text-white px-4 py-2 rounded"
          onClick={() => {
            clearTodos();
          }}
        >
          모든 할 일 제거
        </button>
      </div>
    </div>
  );
}
