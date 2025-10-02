import React from "react";

export default function Product({ Product }) {
  const cardStyle = {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "16px",
    margin: "16px 0",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  };

  const titleStyle = {
    fontSize: "1.25rem",
    fontWeight: "bold",
    marginBottom: "8px",
  };

  const descriptionStyle = {
    fontSize: "1rem",
    color: "#555",
  };

  return (
    <div style={cardStyle}>
      <p style={titleStyle}>{Product.title}</p>
      <div className="flex">
        <div className="w-150 flex-none">ID : {Product.title}</div>
        <div className="w-150 flex-1">가격 : {Product.price}</div>
      </div>
      <div className="flex">
        <span className="w-150 flex-none">평점 : {Product.rating}</span>
        <span className="w-150 flex-none">재고 : {Product.stock}</span>
      </div>
      <div className="flex">
        <span className="w-150 flex-none">카테고리 : {Product.category}</span>
        <span className="w-150 flex-none">브랜드 : {Product.brand}</span>
      </div>
      <p style={descriptionStyle}>{Product.description}</p>
    </div>
  );
}
