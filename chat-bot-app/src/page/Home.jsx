import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <div>Home</div>
      <Link to="/etc">etc</Link>
    </div>
  );
}
