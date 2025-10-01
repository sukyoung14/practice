import React from "react";
import { useState } from "react";

export default function Calculator() {
  const [result, setNumberState] = useState(0);
  const [x, setXState] = useState(0);
  const [y, setYState] = useState(0);

  function add() {
    console.log("x + y");
    // 상태 업데이트 로직
    let newNumber = Number(x) + Number(y);
    console.log(x);
    setNumberState(newNumber);
  }

  function subtract() {
    console.log("x - y");
    // 상태 업데이트 로직
    let newNumber = x - y;
    setNumberState(newNumber);
  }

  function multiply() {
    console.log("x * y");

    let newNumber = x * y;
    setNumberState(newNumber);
    // 상태 업데이트 로직
  }

  function divide() {
    console.log("x / y");
    let newNumber = x / y;
    setNumberState(newNumber);
    // 상태 업데이트 로직
  }

  function handleChange(event) {
    if (event["target"]["name"] === "x") {
      setXState(event["target"]["value"]);
      console.log(event["target"]["value"]);
    } else if (event["target"]["name"] === "y") {
      setYState(event["target"]["value"]);
    }
  }
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-4xl font-bold text-gray-800 mb-8">
        결과 값 : {result}
      </h2>
      <div>
        <input
          type="number"
          name="x"
          className="w-full p-2 mb-3 border"
          placeholder="x"
          onChange={(event) => {
            handleChange(event);
          }}
        />
        <input
          type="number"
          name="y"
          className="w-full p-2 mb-3 border"
          placeholder="y"
          onChange={(event) => {
            handleChange(event);
          }}
        />
      </div>
      <div className="flex gap-4">
        <button
          className="bg-blue-500 text-white px-6 py-2 cursor-pointer"
          onClick={() => {
            add();
          }}
        >
          더하기 +
        </button>
        <button
          className="bg-blue-500 text-white px-6 py-2 cursor-pointer"
          onClick={() => {
            subtract();
          }}
        >
          빼기 -
        </button>
        <button
          className="bg-blue-500 text-white px-6 py-2 cursor-pointer"
          onClick={() => {
            multiply();
          }}
        >
          곱하기 *
        </button>
        <button
          className="bg-blue-500 text-white px-6 py-2 cursor-pointer"
          onClick={() => {
            divide();
          }}
        >
          나누기 /
        </button>
      </div>
    </div>
  );
}
