import { Suspense } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./components/LoginPage/login";
import SingUp from "./components/SingUpPage/SingUp";
import ForgetPassword from "./components/LoginPage/ForgetPassword";
import HomePage from "./components/Dashboard/HomePage";
import HomeDashboard from "./components/Dashboard/HomeDashboard/HomeDashboard";
import PatientsList from "./components/Dashboard/PatientsList/PatientsList";
import Messages from "./components/Dashboard/Messages/Messages";
import Appointment from "./components/Dashboard/Appointment/Appointment";
import MedicalHistory from "./components/Dashboard/MedicalHistory/MedicalHistory";
import Profile from "./components/Profiles/Profile";
import SettingsPage from "./components/Profiles/SettingsPage/SettingsPage";
import NotificationPage from "./components/Profiles/NotificationPage/NotificationPage";
import { ToastContainer } from "react-toastify";
import PrivetRoutes from "./components/Dashboard/PrivetRoutes";
import PublicRoutes from "./components/Dashboard/PublicRoutes";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Suspense fallback={"Loading....."}>
        <Routes>
          <Route element={<PrivetRoutes />}>
            <Route path="dashboard" element={<HomePage />}>
              <Route path="" element={<HomeDashboard />} />
              <Route path="patientslist" element={<PatientsList />} />
              <Route path="messages" element={<Messages />} />
              <Route path="appointment" element={<Appointment />} />
              <Route path="medicalHistory" element={<MedicalHistory />} />
              <Route path="profile" element={<Profile />} />
              <Route path="settings" element={<SettingsPage />} />
              <Route path="notification" element={<NotificationPage />} />
            </Route>
          </Route>
          <Route element={<PublicRoutes />}>
            <Route path="/" element={<Login />} />
            <Route path="/forgetpassword" element={<ForgetPassword />} />
            <Route path="/singup" element={<SingUp />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
