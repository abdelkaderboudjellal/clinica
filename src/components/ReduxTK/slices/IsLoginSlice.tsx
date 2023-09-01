import { createSlice } from "@reduxjs/toolkit";

export interface CounterState {
  value: boolean;
}

const initialState: CounterState = {
  value: true,
};

const IsLoginSlice = createSlice({
  name: "IsLogin",
  initialState,
  reducers: {
    IsLogin: (state, action) => {
      state.value = action.payload.value;
    },
  },
});

export const { IsLogin } = IsLoginSlice.actions;

export default IsLoginSlice.reducer;
