import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Medicalhistory } from "../../../types/types";

export const fetchMedicalHistorySliceById = createAsyncThunk(
  "MedicalHistorySliceById/fetchMedicalHistorySliceById",
  async (id: string) => {
    const response = await fetch(
      ` https://64eba5e3e51e1e82c5778cf9.mockapi.io/api/clinic/medicalhistory/${id}`
    );
    const data = await response.json();
    return data;
  }
);
const initialState: Medicalhistory = {
  fullname: "",
  id: "",
  image: "",
  appointment: "",
  date: "",
  time: "",
  status: false,
};
const MedicalHistorySliceById = createSlice({
  initialState,
  name: "MedicalhistorySliceById",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMedicalHistorySliceById.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const {} = MedicalHistorySliceById.actions;
export default MedicalHistorySliceById.reducer;
