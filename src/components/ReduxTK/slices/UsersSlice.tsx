import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk(
  "usersSlice/fetchUsers",
  async () => {
    const response = await fetch(
      "https://64eba5e3e51e1e82c5778cf9.mockapi.io/api/clinic/users"
    );
    const data = await response.json();
    return data;
  }
);

const usersSlice = createSlice({
  initialState: [],
  name: "usersSlice",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const {} = usersSlice.actions;
export default usersSlice.reducer;
