import React from "react";

export default function Product({ key, Product }) {
  return (
    <div className="border rounded-lg p-4 shadow-md">
      <h2>{Product["title"]}</h2>
      <p>{Product["price"]}</p>
      <p>{Product["quantity"]}</p>
      <p>{Product["total"]}</p>
      <img src={Product["thumbnail"]} alt="상품 이미지(thumbnail)" />
    </div>
  );
}
