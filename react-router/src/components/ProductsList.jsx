import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import PATHS from "../constants/paths.js";

export default function ProductsList() {
  const [products, setProducts] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [total, setTotal] = useState(0);

  let order = searchParams.get("order") ?? "asc"; // Nullish 연산자를 통해 기본값을 지정
  let sortBy = searchParams.get("sortBy") ?? "id";
  let skip = searchParams.get("skip") ?? 0;

  useEffect(() => {
    order = searchParams.get("order") ?? "asc"; // Nullish 연산자를 통해 기본값을 지정
    sortBy = searchParams.get("sortBy") ?? "id";
    skip = searchParams.get("skip") ?? 0;

    async function getProducts() {
      const response = await axios.get(
        `https://dummyjson.com/products?sortBy=${sortBy}&order=${order}&limit=5&skip=${skip}`
      );
      const data = response.data.products;
      console.log(data);
      setProducts(data);
      setTotal(response.data.total);
    }
    getProducts();
  }, [searchParams]);
  return (
    <div>
      <div>
        {products.map((product) => {
          return (
            <div key={product.id}>
              <Link to={PATHS.DUMMY.getproductDetail(product.id)}>
                No.{product.id} - {product.title} - {product.price}
              </Link>
            </div>
          );
        })}
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => {
            setSearchParams({});
          }}
          className="border-2 p-2 cursor-pointer"
        >
          초기화
        </button>
        <button
          onClick={() => {
            if (Number(skip) - 5 >= 0) {
              setSearchParams({
                skip: Number(skip) - 5,
                order,
                sortBy,
              });
            }
          }}
          className="border-2 p-2 cursor-pointer"
        >
          이전페이지
        </button>
        <button
          onClick={() => {
            if (Number(skip) + 5 <= total) {
              setSearchParams((searchParams) => {
                searchParams.set("skip", Number(skip) + 5);
                return searchParams;
              });
            }
          }}
          className="border-2 p-2 cursor-pointer"
        >
          다음페이지
        </button>
      </div>
      <div className="flex gap-4">
        <div>정렬 기준: {sortBy}</div>
        <div>정렬 순서: {order}</div>
        <div>페이지 번호: {skip / 5 + 1}</div>
      </div>
    </div>
  );
}
