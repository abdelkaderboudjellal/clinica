import { configureStore } from "@reduxjs/toolkit";
import showNavbarReducer from "./slices/showNavbrSlice";
import UsersSlice from "./slices/UsersSlice";

import MedicalHistorySlice from "./slices/MedicalhistorySlice";
import UsersIdSlice from "./slices/UsersIdSlice";
import showMedicalHistorySlice from "./slices/showMedicalHistorySlice";
import MedicalhistorySliceById from "./slices/MedicalhistorySliceById";
import LoadingSlice from "./slices/LoadingSlice";
import AuthLogin from "./slices/AuthLogin";
import IsLoginSlice from "./slices/IsLoginSlice";

export const store = configureStore({
  reducer: {
    showNavbar: showNavbarReducer,
    loading: LoadingSlice,
    showNavbarMedical: showMedicalHistorySlice,
    users: UsersSlice,
    usersId: UsersIdSlice,
    medicalhistory: MedicalHistorySlice,
    medicalhistoryById: MedicalhistorySliceById,
    authLogin: AuthLogin,
    IsLogin: IsLoginSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
