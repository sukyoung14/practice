import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signup, resetIsSignup, clearError } from "../store/authSlice";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const isSignup = useSelector((state) => state.auth.isSignup);
  const error = useSelector((state) => state.auth.error);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((state) => {
    return state.auth.token;
  });
  function handleSubmit(e) {
    e.preventDefault(); // form의 기본 기벤트(동작) 막기
    if (email === "") {
      alert("이메일을 입력해 주세요");
    } else if (password === "") {
      alert("비밀번호를 입력해 주세요");
    } else if (password2 === "") {
      alert("비밀번호확인을 입력해 주세요");
    } else if (password !== password2) {
      alert("비밀번호가 다릅니다.");
    }
    dispatch(signup({ email: email, password: password }));
  }
  useEffect(() => {
    if (isSignup) {
      alert("회원가입을 성공했습니다. 메일함을 확인해주세요");
      dispatch(resetIsSignup());
      navigate("/login");
    }
  }, [isSignup, dispatch, navigate]);

  useEffect(() => {
    if (token) {
      alert("로그인 상태입니다.");
      navigate("/");
      console.log(token);
    }
    if (error) {
      alert(error.msg);
      dispatch(clearError());
    }
  }, [error, dispatch]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center text-gray-900">
          회원가입
        </h1>
        <form
          className="space-y-4"
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <div>
            <input
              className="w-full px-4 py-2 text-gray-900 bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              type="email"
              placeholder="이메일주소"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              className="w-full px-4 py-2 text-gray-900 bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              type="password"
              placeholder="비밀번호"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              className="w-full px-4 py-2 text-gray-900 bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              type="password"
              placeholder="비밀번호 확인"
              onChange={(e) => {
                setPassword2(e.target.value);
              }}
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 font-bold text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            회원가입
          </button>
        </form>
        <div className="w-full px-4 py-2 font-bold text-white bg-green-600 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 flex items-center justify-center">
          <Link to="/login">로그인</Link>
        </div>
        <div className="w-full px-4 py-2 font-bold text-white bg-gray-600 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 flex items-center justify-center">
          <Link to="/">Home</Link>
        </div>
      </div>
    </div>
  );
}
