import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchMedicalHistorySlice = createAsyncThunk(
  "MedicalHistorySlice/fetchMedicalHistorySlice",
  async () => {
    const response = await fetch(
      "https://64eba5e3e51e1e82c5778cf9.mockapi.io/api/clinic/medicalhistory"
    );
    const data = await response.json();
    return data;
  }
);

const MedicalHistorySlice = createSlice({
  initialState: [],
  name: "MedicalhistorySlice",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMedicalHistorySlice.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const {} = MedicalHistorySlice.actions;
export default MedicalHistorySlice.reducer;
