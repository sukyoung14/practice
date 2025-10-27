import { useDispatch } from "react-redux";

export default function Component() {
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(액션_생성자_함수())}>상태 변경</button>
    </div>
  );
}
