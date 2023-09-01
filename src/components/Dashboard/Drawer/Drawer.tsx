import { Link, useNavigate } from "react-router-dom";

import dashboard from "../../../images/dashboardLogo.svg";
import Patientslist from "../../../images/3User.svg";
import Messages from "../../../images/Chat.svg";
import Appointment from "../../../images/Path.svg";
import MedicalHistory from "../../../images/Activity.svg";
import imageProfile from "../../../images/imageProfile.png";
import Notification from "../../../images/Notification.svg";
import Setting from "../../../images/Setting.svg";
import Menu from "../../../images/Vector.svg";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../ReduxTK/store";
import { showNavbar } from "../../ReduxTK/slices/showNavbrSlice";

type ButtonNavigationType = {
  logo: string;
  name: string;
  path: string;
};
const listMenu = [
  { logo: dashboard, name: "Dashboard", path: "" },
  { logo: Patientslist, name: "Patients list", path: "patientslist" },
  { logo: Messages, name: "Messages", path: "messages" },
  { logo: Appointment, name: "Appointment", path: "appointment" },
  { logo: MedicalHistory, name: "Medical History", path: "medicalHistory" },
];

const Drawer = () => {
  const dispatch = useDispatch();
  const showNavbarValue = useSelector(
    (state: RootState) => state.showNavbar.value
  );

  const Navigate = useNavigate();
  const ButtonNavigation = ({ logo, name, path }: ButtonNavigationType) => {
    return (
      <Link className="ButtonNavigation" to={path}>
        <img className="icon" src={logo} alt={name} />
        <h4>{name}</h4>
      </Link>
    );
  };
  return (
    <div>
      <div
        className={
          showNavbarValue
            ? "navbar_dashboard Show_Navbar "
            : "navbar_dashboard hidden_Navbar "
        }
      >
        <nav className="sidebar">
          <div className="menu " onClick={() => dispatch(showNavbar())}>
            <img src={Menu} alt="Menu" />
          </div>
          <div className="logo" onClick={() => Navigate("/")}>
            <h1>Healthy 24.</h1>
          </div>
        </nav>
        <div className="mobileProfile">
          <div
            className="has-arrow"
            onClick={() => Navigate("/dashboard/profile")}
          >
            <img src={imageProfile} alt="imageProfile" />
            <p>Edit My Profile</p>
          </div>

          <div
            className=" has-arrow"
            onClick={() => Navigate("/dashboard/settings")}
          >
            <img src={Setting} alt="Setting" />
            <p>Setting</p>
          </div>
          <div
            className="has-arrow"
            onClick={() => Navigate("/dashboard/notification")}
          >
            <img src={Notification} alt="Notification" />
            <p>Notification</p>
          </div>
        </div>
        {listMenu.map((item) => {
          return (
            <ButtonNavigation
              key={item.name}
              logo={item.logo}
              name={item.name}
              path={`${item.path}`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Drawer;
