import React, { useEffect } from "react";
import { BiFilterAlt } from "react-icons/bi";
import { PiDownloadLight } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../ReduxTK/store";
import { fetchMedicalHistorySlice } from "../../ReduxTK/slices/MedicalhistorySlice";
import { Medicalhistory } from "../../../types/types";

const PatientsList = () => {
  const MedicalHistory: Medicalhistory[] = useSelector(
    (state: RootState) => state.medicalhistory
  );
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchMedicalHistorySlice());
  }, []);
  console.log(MedicalHistory);

  return (
    <div className="PatientsList">
      <h3>Patients List</h3>
      <div className="SearchBar">
        <input
          className="input-elevated"
          placeholder="Search for something"
          type="text"
        />
        <div className="Filter_Report">
          <button>
            <PiDownloadLight style={{ fontSize: "20px", marginRight: "5px" }} />
            <p>Download Report</p>
          </button>
          <button>
            <BiFilterAlt style={{ fontSize: "20px", marginRight: "5px" }} />
            <p>Filter</p>
          </button>
        </div>
      </div>
      <div className="main_PatientsList">
        {MedicalHistory.map((item) => {
          return (
            <div key={item.id} className="CardProfile">
              <img src={item.image} alt="" />
              <h5>{item.fullname}</h5>
              <p>{item.address}</p>
              <div className="dt" />
              <div>
                <p>Weight</p>
                <h5>165lb</h5>
              </div>
              <div>
                <p>Blood Pressure</p>
                <h5>120/80mmHg</h5>
              </div>
              <div>
                <p>Blood Glucose</p>
                <h5>92mg/dL</h5>
              </div>
              <button>View detail patient</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PatientsList;
