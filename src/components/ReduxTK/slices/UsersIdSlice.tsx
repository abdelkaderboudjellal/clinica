import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Users } from "../../../types/types";

export const fetchIdUsers = createAsyncThunk(
  "UsersIdSlice/fetchIdUsers",
  async (id: number) => {
    const response = await fetch(
      `https://64eba5e3e51e1e82c5778cf9.mockapi.io/api/clinic/users/${id}`
    );
    const data = await response.json();
    return data;
  }
);
const initialState: Users = { fullName: "", email: "", id: 0, password: "" };
const UsersIdSlice = createSlice({
  initialState,
  name: "UsersIdSlice",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchIdUsers.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const {} = UsersIdSlice.actions;
export default UsersIdSlice.reducer;
