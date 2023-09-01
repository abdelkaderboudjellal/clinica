import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  value: boolean;
}

const initialState: CounterState = {
  value: false,
};

export const showNavbarSlice = createSlice({
  name: "showNavbar",
  initialState,
  reducers: {
    showNavbar: (state) => {
      state.value = !state.value;
    },
  },
});

export const { showNavbar } = showNavbarSlice.actions;

export default showNavbarSlice.reducer;
