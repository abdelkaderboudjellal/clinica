import PhotoProfile from "../../../images/PhotoProfile.png";
import imageBackground from "../../../images/Paragon-green-environment-header.jpg";
type Props = {};

const SettingsPage = (props: Props) => {
  return (
    <main className="editProfilePage">
      <h1>Edit profile</h1>
      <p>
        Your profile will be displayed publicly so be careful what you share
      </p>
      <h5>Cover</h5>
      <div className="image_bg">
        <img src={imageBackground} alt="" />
      </div>
      <h5>Profile picture</h5>
      <div className="change_Image">
        <img src={PhotoProfile} alt="" />
        <button className="change">Change Photo</button>
        <button className="remove">Remove</button>
      </div>
      <form className="editInformation">
        <label>Full Name</label>
        <input placeholder="Inpute your Fullname here" />
        <label>Speciality</label>
        <input placeholder="Inpute your speciality here" />
        <label>Profile Description</label>
        <input
          className="Description"
          placeholder="Inpute your Profile Description here"
        />
        <div className="validation">
          <button className="remove">Cancel</button>
          <button className="change">Save change </button>
        </div>
      </form>
    </main>
  );
};

export default SettingsPage;
