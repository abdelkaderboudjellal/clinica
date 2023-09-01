import { createSlice } from "@reduxjs/toolkit";

export interface CounterState {
  value: boolean;
}

const initialState: CounterState = {
  value: false,
};

export const LoadingSlice = createSlice({
  name: "LoadingSlice",
  initialState,
  reducers: {
    loading: (state) => {
      state.value = !state.value;
    },
  },
});

export const { loading } = LoadingSlice.actions;

export default LoadingSlice.reducer;
