import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
export default function productDetail() {
  const { productId } = useParams();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    console.log(productId);
    async function getProducts() {
      const response = await axios.get(
        `https://dummyjson.com/product/${productId}`
      );
      console.log(response.data);

      setProducts(response.data);
    }
    getProducts();
  }, [productId]);
  return (
    <div>
      <div>
        제목 - {products.title}
        <br />
        내용 - {products.description}
      </div>
    </div>
  );
}
