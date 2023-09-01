import { useSelector } from "react-redux";
import { RootState } from "../ReduxTK/store";
import { Navigate, Outlet } from "react-router-dom";

const PrivetRoutes = () => {
  const isLogin = useSelector((state: RootState) => state.IsLogin.value);

  return isLogin ? <Outlet /> : <Navigate to="/" />;
};

export default PrivetRoutes;
