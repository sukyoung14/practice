import React from "react";
import axios from "axios";
import { useState } from "react";
import Quote from "./Quote";

export default function QuoteContainer() {
  const BASE_URL = `https://dummyjson.com`;
  const [quotes, setQuotes] = useState([
    { id: 0, quote: "견본 인용문", author: "견본 인용자" },
  ]);
  async function handleFetchQuotes() {
    // 랜덤 인용문 가져오기 로직
    // API : <https://dummyjson.com/docs/quotes#quotes-random>
    //const res = await axios.get(`${BASE_URL}/docs/quotes#quotes-random`);
    const res = await axios.get(`${BASE_URL}/quotes/random`);
    const data = res["data"];
    const newQuotes = [...quotes, data];
    setQuotes(newQuotes);
  }
  return (
    <div className="max-w-2xl mx-auto p-6">
      <button
        className="bg-blue-500 text-white px-4 py-2 cursor-pointer mb-6"
        onClick={() => {
          handleFetchQuotes();
        }}
      >
        인용문 가져오기
      </button>
      <div className="space-y-4">
        {/* Quote 컴포넌트 반복 */}
        {quotes.map((quote) => (
          <Quote key={quote.id} quotes={quote} />
        ))}

        {/* {array.map((item) => (
          <Quote></Quote>
        ))} */}
      </div>
    </div>
  );
}
