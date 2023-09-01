import Navbar from "./Navbar";
import Drawer from "./Drawer/Drawer";

import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../ReduxTK/store";

const HomePage = () => {
  const showNavbar = useSelector((state: RootState) => state.showNavbar.value);
  const showNavbarMedical = useSelector(
    (state: RootState) => state.showNavbarMedical.value
  );
  return (
    <header className={showNavbar || showNavbarMedical ? "hiddenScroll" : ""}>
      <Navbar />
      <main className="container_dashboard">
        <Drawer />
        <div className="Divider">
          <Outlet />
        </div>
      </main>
    </header>
  );
};

export default HomePage;
