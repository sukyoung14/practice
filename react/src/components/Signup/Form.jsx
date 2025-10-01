import React from "react";
import { useState } from "react";

export default function Form() {
  const [selectedLevel, setSelectedLevel] = useState("");
  const [form, setForm] = useState({
    email: "",
    password1: "",
    password2: "",
  });
  const [passwordMsg, setpasswordMsg] = useState("");

  const levels = [
    { id: 1, value: "신입" },
    { id: 2, value: "주니어" },
    { id: 3, value: "시니어" },
  ];
  function handleRadioChange(e) {
    setSelectedLevel(e.target.value);
  }
  function handleChange(e) {
    const { name, value } = e.target;
    if (name === "password1" && value.length < 8)
      setpasswordMsg("비밀번호는 8글자 이상이어야 합니다.");
    else setpasswordMsg("");

    setForm({ ...form, [name]: value });
  }
  function handleClick(e) {
    e.preventDefault();
    if (form.password2.length < 8) {
      alert("비밀번호는 8글자 이상이어야 합니다.");
      return false;
    }
    if (form.password1 !== form.password2) {
      alert("비밀번호가 일치하지 않습니다.");
      return false;
    }
    alert(
      `회원가입정보
      이메일 : ${form.email}
      비밀번호: ${form.password2}
      레벨: ${selectedLevel}`
    );
  }
  return (
    <div className="w-80 mx-auto">
      <form action="">
        <p>이메일</p>
        <div>
          <input
            type="email"
            name="email"
            className="border-2"
            required
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        <p></p>
        <p>비밀번호</p>
        <div>
          <input
            type="password"
            name="password1"
            className="border-2"
            required
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        <p>비밀번호 확인</p>
        <div>
          <input
            type="password"
            name="password2"
            className="border-2"
            required
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        <p className="text-red-500">{passwordMsg}</p>
        <p>레벨</p>
        <div>
          {levels.map((level) => (
            <label key={level.id}>
              <input
                type="radio"
                required
                name="level" // 모든 라디오 버튼을 같은 그룹으로 묶는다
                value={level.value} // 라디오 버튼의 값
                // 상태 데이터와 현재 라디오 버튼의 value가 같으면 체크 되어 있다
                checked={selectedLevel === level.value}
                // 라디오 버튼의 값이 변경되면 handleRadioChange 함수를 호출한다
                onChange={(e) => {
                  handleRadioChange(e);
                }}
              />
              {level.value}
            </label>
          ))}
        </div>
        <button
          className="bg-blue-300 w-45"
          onClick={(e) => {
            handleClick(e);
          }}
        >
          회원가입
        </button>
      </form>
    </div>
  );
}
