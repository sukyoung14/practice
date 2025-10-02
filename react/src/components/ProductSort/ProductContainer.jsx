import React from "react";
import Product from "./Product";
import axios from "axios";
import { useEffect, useState } from "react";
export default function ProductContainer() {
  const [products, setproducts] = useState([]);
  const BASE_URL = `https://dummyjson.com`;
  useEffect(() => {
    async function getproduct() {
      const response = await axios.get(`${BASE_URL}/products`);
      const data = response["data"];
      setproducts(data["products"]);
    }
    getproduct();
  }, []);
  function handleClick(sortBy, order) {
    async function getproductSort(sortBy, order) {
      // const sortedProducts = [...products].sort((a, b) => {
      //   if (a[key] < b[key]) {
      //     return order === "asc" ? -1 : 1;
      //   }
      //   if (a[key] > b[key]) {
      //     return order === "asc" ? 1 : -1;
      //   }
      //   return 0;
      // });
      // setproducts(sortedProducts);
      const url = `${BASE_URL}/products?sortBy=${sortBy}&order=${order}`;
      const response = await axios.get(url);
      const data = response["data"];
      console.log(data);
      setproducts(data["products"]);
    }
    getproductSort(sortBy, order);
  }
  return (
    <div>
      <button
        onClick={(e) => {
          handleClick("ID", "asc");
        }}
        className="bg-cyan-500  m-2  p-2 cursor-pointer"
      >
        ID ↑
      </button>
      <button
        onClick={(e) => {
          handleClick("ID", "desc");
        }}
        className="bg-cyan-500  m-2 p-2 cursor-pointer"
      >
        ID ↓
      </button>
      <button
        onClick={(e) => {
          handleClick("price", "asc");
        }}
        className="bg-cyan-500  m-2 p-2 cursor-pointer"
      >
        가격 ↑
      </button>
      <button
        onClick={(e) => {
          handleClick("price", "desc");
        }}
        className="bg-cyan-500  m-2  p-2 cursor-pointer"
      >
        가격 ↓
      </button>
      <button
        onClick={(e) => {
          handleClick("rating", "asc");
        }}
        className="bg-cyan-500  m-2  p-2 cursor-pointer"
      >
        평점 ↑
      </button>
      <button
        onClick={(e) => {
          handleClick("rating", "desc");
        }}
        className="bg-cyan-500  m-2  p-2 cursor-pointer"
      >
        평점 ↓
      </button>
      {products.map((product) => {
        return <Product key={product.id} Product={product}></Product>;
      })}
    </div>
  );
}
