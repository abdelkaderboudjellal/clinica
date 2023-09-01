import { useSelector } from "react-redux";
import { RootState } from "../ReduxTK/store";
import { Navigate, Outlet } from "react-router-dom";

type Props = {};

const PublicRoutes = (props: Props) => {
  const isLogin = useSelector((state: RootState) => state.IsLogin.value);

  return !isLogin ? <Outlet /> : <Navigate to="/dashboard" />;
};

export default PublicRoutes;
