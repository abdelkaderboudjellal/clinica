import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
  isLogin: boolean;
  email: string;
  fullName: string;
  password?: string;
  userId: string;
};
const initialState: InitialState = {
  isLogin: false,
  email: "",
  fullName: "",

  userId: "",
};

const AuthLogin = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    UserActive: (state, action) => {
      const { email, fullName, userId } = action.payload;

      state.isLogin = true;
      state.email = email;
      state.fullName = fullName;
      state.userId = userId;
    },
    UserInActive(state, action) {
      state.isLogin = false;
      state.email = "";
      state.fullName = "";
      state.userId = "";
    },
  },
});

export const { UserActive, UserInActive } = AuthLogin.actions;

/* export const SelectIsLogin = (state: any) => {
  return state.Auth.isLogin;
};
export const SelectEmail = (state: any) => {
  state.Auth.email;
};

export const SelectFullName = (state: any) => {
  state.Auth.fullName;
};
export const SelectUserId = (state: any) => {
  state.Auth.userId;
}; */

export default AuthLogin.reducer;
