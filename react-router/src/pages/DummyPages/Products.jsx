import React from "react";
import { useState, useEffect } from "react";
import ProductsList from "../../components/ProductsList";
import { useSearchParams } from "react-router-dom";
export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    const order = searchParams.get("order") ?? "asc"; // Nullish 연산자를 통해 기본값을 지정
    const sortBy = searchParams.get("sortBy") ?? "id";
  }, [searchParams]);
  return (
    <div>
      <div className="flex gap-2">
        <button
          onClick={() => {
            setSearchParams({ sortBy: "price", order: "asc", skip: 0 });
          }}
          className="border-2 p-2 cursor-pointer"
        >
          상품 가격(price) 오름차순{" "}
        </button>
        <button
          onClick={() => {
            setSearchParams({ sortBy: "price", order: "desc", skip: 0 });
          }}
          className="border-2 p-2 cursor-pointer"
        >
          상품 가격(price) 내림차순{" "}
        </button>
        <button
          onClick={() => {
            setSearchParams({ sortBy: "id", order: "asc", skip: 0 });
          }}
          className="border-2 p-2 cursor-pointer"
        >
          상품 ID(id) 오름차순{" "}
        </button>
        <button
          onClick={() => {
            setSearchParams({ sortBy: "id", order: "desc", skip: 0 });
          }}
          className="border-2 p-2 cursor-pointer"
        >
          상품 ID(id) 내림차순{" "}
        </button>
      </div>
      <ProductsList></ProductsList>
    </div>
  );
}
