import Ratingofclinics from "./Ratingofclinics/Ratingofclinics";
import doctor1 from "../images/doctor1.png";
import doctor2 from "../images/doctor2.png";
import doctor3 from "../images/doctor3.png";

type Props = {};

const BackgroundLogin = (props: Props) => {
  return (
    <div>
      {" "}
      <div className="image">
        <header>
          <h1>We give the best experience 😉</h1>
          <p>
            Dedicated virtual consulting platform for docotrs and patients to
            help them consult across vatious channels
          </p>
          <div className="rating1">
            <Ratingofclinics />
          </div>
          <div className="rating2">
            <Ratingofclinics />
          </div>
        </header>
        <main>
          <img className="image1" src={doctor1} alt="doctor1" />
          <img className="image2" src={doctor2} alt="doctor2" />
          <img className="image3" src={doctor3} alt="doctor3" />
        </main>
      </div>
    </div>
  );
};

export default BackgroundLogin;
