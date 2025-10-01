import React from "react";
import { useState } from "react";

export default function Counter() {
  const [numberState, setNumberState] = useState(0);
  function increment() {
    console.log("1 증가");
    let newNumber = numberState + 1;
    setNumberState(newNumber);
  }

  function decrement() {
    console.log("1 감소");
    let newNumber = numberState - 1;
    setNumberState(newNumber);
  }

  function reset() {
    console.log("0으로 초기화");
    // 상태 업데이트 로직
    let newNumber = 0;
    setNumberState(newNumber);
  }
  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-4xl font-bold text-gray-800 mb-8">
        카운터: {numberState}
      </h2>
      <div className="flex gap-4">
        <button
          className="bg-blue-500  text-white px-6 py-2 cursor-pointer"
          onClick={() => {
            increment();
          }}
        >
          +1
        </button>
        <button
          className="bg-red-500  text-white px-6 py-2 cursor-pointer"
          onClick={() => {
            decrement();
          }}
        >
          -1
        </button>
        <button
          className="bg-gray-500  text-white px-6 py-2 cursor-pointer"
          onClick={() => {
            reset();
          }}
        >
          0으로 초기화
        </button>
      </div>
    </div>
  );
}
