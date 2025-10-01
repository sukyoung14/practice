import React from "react";

export default function Quote({ quotes }) {
  return (
    <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-500">
      <h3 className="text-lg font-medium text-gray-800 mb-2">{quotes.quote}</h3>
      <p className="text-gray-600 text-right">— {quotes.author}</p>
    </div>
  );
}
