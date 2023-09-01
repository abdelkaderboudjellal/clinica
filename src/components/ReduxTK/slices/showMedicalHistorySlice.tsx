import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  value: boolean;
}

const initialState: CounterState = {
  value: false,
};

export const showMedicalHistorySlice = createSlice({
  name: "showNavbarMedical",
  initialState,
  reducers: {
    showNavbarMedical: (state) => {
      state.value = !state.value;
    },
  },
});

export const { showNavbarMedical } = showMedicalHistorySlice.actions;

export default showMedicalHistorySlice.reducer;
