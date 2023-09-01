import { Link, useNavigate } from "react-router-dom";
import imageProfile from "../../images/imageProfile.png";
import Menu from "../../images/Menu.svg";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiSettings } from "react-icons/ci";
import { useDispatch } from "react-redux";

import { showNavbar } from "../ReduxTK/slices/showNavbrSlice";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { UserActive, UserInActive } from "../ReduxTK/slices/AuthLogin";
import { BiLogOutCircle } from "react-icons/bi";
import { IsLogin } from "../ReduxTK/slices/IsLoginSlice";
const Navbar = () => {
  const dispatch = useDispatch();
  const [nameUser, setNameUser] = useState("");
  const [loading, setLoading] = useState(false);
  const Navigate = useNavigate();
  const logOutUser = () => {
    setLoading(true);
    signOut(auth)
      .then(() => {
        toast.success("logout Successful..");

        setLoading(false);
        Navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        toast.error(error.message);
      });
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        dispatch(
          IsLogin({
            value: true,
          })
        );
        if (user.displayName != null) {
          dispatch(
            UserActive({
              email: user.email,
              userId: user.uid,
              fullName: user.displayName,
            })
          );
          setNameUser(user.displayName);
        } else if (user.email != null) {
          dispatch(
            UserActive({
              email: user.email,
              userId: user.uid,
              fullName: user.email.split("@")[0],
            })
          );
          setNameUser(user.email.split("@")[0]);
        }
      } else {
        dispatch(UserInActive);
        dispatch(
          IsLogin({
            value: false,
          })
        );

        setNameUser("");
      }
    });
  }, []);

  return (
    <>
      {loading ? (
        <div
          style={{
            width: "100%",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <span className="loader"></span>
        </div>
      ) : (
        <nav className="navbar">
          <div className="menu" onClick={() => dispatch(showNavbar())}>
            <img src={Menu} alt="Menu" />
          </div>
          <div className="logo" onClick={() => Navigate("/dashboard")}>
            <h1>Healthy 24.</h1>
          </div>

          <div className="settings">
            <div
              className="notification"
              onClick={() => Navigate("/dashboard/notification")}
            >
              <IoIosNotificationsOutline style={{ fontSize: "30px" }} />
            </div>
            <div
              className="settings"
              onClick={() => Navigate("/dashboard/settings")}
            >
              <CiSettings style={{ fontSize: "30px" }} />
            </div>
            <div
              className="profile"
              onClick={() => Navigate("/dashboard/profile")}
            >
              <button onClick={logOutUser}>
                <BiLogOutCircle
                  className="LogOut"
                  style={{ fontSize: "35px", color: "#949DB7" }}
                />{" "}
              </button>
              <img src={imageProfile} alt="imageProfile" />
            </div>
          </div>
        </nav>
      )}
    </>
  );
};

export default Navbar;
