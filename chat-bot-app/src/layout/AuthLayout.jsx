import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../store/authSlice";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

export default function AuthLayout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((state) => state.auth.token);
  const [decodeToken, setDecodeToken] = useState(null);
  const getLinkClass = ({ isActive }) =>
    isActive
      ? "text-blue-500 font-bold px-3 py-2"
      : "text-gray-700 hover:text-blue-500 px-3 py-2";

  useEffect(() => {
    if (token) setDecodeToken(jwtDecode(token));
  }, [token]);

  const handleLogout = () => {
    dispatch(logout());
    alert("로그아웃 되었습니다.");
    navigate("/"); // 로그아웃 후 홈으로 이동
  };

  return (
    <div>
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <NavLink to="/" end className={getLinkClass}>
                Memo AI
              </NavLink>
              <NavLink to="/chat" className={getLinkClass}>
                메모작성
              </NavLink>
              <NavLink to="/chatList" className={getLinkClass}>
                메모목록
              </NavLink>
            </div>
            <div className="flex items-center">
              {decodeToken ? (
                // 토큰이 있을 경우 로그아웃 버튼 표시
                <button
                  onClick={handleLogout}
                  className="text-gray-700 hover:text-blue-500 px-3 py-2"
                >
                  로그아웃
                </button>
              ) : (
                // 토큰이 없을 경우 로그인/회원가입 링크 표시
                <>
                  <NavLink to="/login" className={getLinkClass}>
                    로그인
                  </NavLink>
                  <NavLink to="/signup" className={getLinkClass}>
                    회원가입
                  </NavLink>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
      <main className="py-10">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
