import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
  step: 1,
};
// 전역 상태 count, step 초기값 설정
// ...
const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    // count 증가(액션명: increment)
    increment: (state) => {
      state.count = state.count + state.step;
    },
    // count 감소(액션명: decrement)
    decrement: (state, action) => {
      state.count = state.count - state.step;
    },
    // step 변경(액션명: setStep)
    setStep: (state, action) => {
      state.step = Number(action.payload);
    },
  },
});

export const { increment, decrement, setStep } = counterSlice.actions;
export default counterSlice.reducer;
