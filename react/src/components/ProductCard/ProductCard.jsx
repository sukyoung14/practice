import React from "react";

export default function ProductCard({ product }) {
  return (
    <div className="border rounded-lg p-4 shadow-md">
      <h2 className="text-2xl font-bold">{product.name}</h2>
      <p className="text-green-500">{product.price}</p>
      <p>재고 : {product.inStock ? "재고있음" : "품절"}</p>
      <p>평점 : {product.rating}</p>
      <div>
        {product.tags.map((value) => {
          return <span className=" bg-blue-200 mx-8">{value} </span>;
        })}
      </div>
    </div>
  );
}
