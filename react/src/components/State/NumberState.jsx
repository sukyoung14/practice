import React from "react";
import { useState } from "react";

export default function NumberState() {
  // function increment() {
  //   //const [numberState, setNumberState] = useState(0);
  //   console.log("1 증가");
  //   // let newNumber = numberState + 1;
  //   // setNumberState(newNumber);
  //   // 상태 업데이트 로직
  // }
  const [numberState, setNumberState] = useState(0);
  const increment = () => {
    console.log("1 증가");
    let newNumber = numberState + 1;
    setNumberState(newNumber);
  };

  const decrement = () => {
    console.log("1 감소");
    let newNumber = numberState - 1;
    setNumberState(newNumber);
  };

  const multiply = () => {
    console.log("2배 곱하기");
    let newNumber = numberState * 2;
    setNumberState(newNumber);
  };

  const reset = () => {
    console.log("0으로 초기화");
    let newNumber = 0;
    setNumberState(newNumber);
  };

  return (
    <div className="flex flex-col items-center p-6 border rounded-lg">
      <h2 className="text-2xl font-bold mb-4">숫자 상태 관리</h2>
      <p className="text-3xl font-bold mb-4">현재 값: {numberState}</p>
      <div className="flex gap-2 flex-wrap justify-center">
        <button
          className="bg-green-500 text-white px-4 py-2 rounded"
          onClick={() => {
            increment();
          }}
        >
          +1
        </button>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded"
          onClick={() => {
            decrement();
          }}
        >
          -1
        </button>
        <button
          className="bg-purple-500 text-white px-4 py-2 rounded"
          onClick={() => {
            multiply();
          }}
        >
          ×2
        </button>
        <button
          className="bg-gray-500 text-white px-4 py-2 rounded"
          onClick={() => {
            reset();
          }}
        >
          초기화
        </button>
      </div>
    </div>
  );
}
