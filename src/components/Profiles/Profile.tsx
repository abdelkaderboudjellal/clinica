import imageBackground from "../../images/Paragon-green-environment-header.jpg";
import PhotoProfile from "../../images/PhotoProfile.png";
import { CiLocationOn } from "react-icons/ci";
import { BiEditAlt } from "react-icons/bi";
import { AppDispatch, RootState } from "../ReduxTK/store";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchIdUsers } from "../ReduxTK/slices/UsersIdSlice";
import { Users } from "../../types/types";
type Props = {};

export default function Profile({}: Props) {
  const dispatch = useDispatch<AppDispatch>();

  const User = useSelector((state: RootState) => state.usersId);
  useEffect(() => {
    dispatch(fetchIdUsers(2));
  }, []);
  const UserDetails = useSelector((state: RootState) => state.authLogin);
  return (
    <>
      <main className="ProfileComponent">
        <div className="ProfileDetails">
          <div className="imageBackground">
            <img src={imageBackground} alt="imageBackground" />
          </div>
          <div className="Details">
            <div className="PhotoProfile">
              {<img src={User.image} alt="PhotoProfile" />}
            </div>
            <div className="HeaderProfile">
              <div className="DetailsUser">
                <h2>dr. {UserDetails.fullName}</h2>
                <p>{User.speciality}</p>
                <div className="Location">
                  <CiLocationOn
                    style={{ fontSize: "20px", color: "#192252" }}
                  />
                  <h3>{User.location}</h3>
                </div>
              </div>
              <div className="editProfile">
                <BiEditAlt style={{ color: "#56ccf2", fontSize: "20px" }} />
                <h5>Edit profile</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="ProfileDescription">
          <h3>Profile Description</h3>
          <p>{User.description}</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed to :
          </p>
          <ul>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do e
            </li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do e
            </li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do e
            </li>
          </ul>
        </div>
      </main>
    </>
  );
}
