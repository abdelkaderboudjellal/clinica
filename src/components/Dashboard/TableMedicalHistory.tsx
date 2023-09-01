import Delete from "../../images/Delete.svg";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { MdOutlineDelete } from "react-icons/md";
import image64 from "../../images/64.png";
import image65 from "../../images/65.png";
import image66 from "../../images/66.png";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchMedicalHistorySlice } from "../ReduxTK/slices/MedicalhistorySlice";
import { AppDispatch, RootState } from "../ReduxTK/store";
import { Medicalhistory } from "../../types/types";

import ButtonMedicalHistory from "../../element/MedicalUsersHistory/ButtonMedicalHistory";

type UserData = {
  id: string;
  Patient: string;
  Appointment: string;
  image: string;
  Date: string;
  Time: string;
  Status: string;
};
type Props = {
  data: Medicalhistory;
};
const TableData = ({ data }: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  const Show = useSelector((state: RootState) => state.showNavbarMedical.value);
  return (
    <tr>
      <td>
        <ButtonMedicalHistory
          image={data.image}
          fullname={data.fullname}
          id={data.id.toString()}
        />
      </td>
      <td>{data.appointment}</td>
      <td>{`${data.date}`.split("T")[0]}</td>
      <td>{`${data.time}`.split("T")[1].split(".")[0]}</td>
      <td>
        {data.status ? (
          <p
            style={{
              backgroundColor: "#CFFCD4",
              color: "#479B36",
              padding: 5,
              borderRadius: 5,
              width: "80px",
              textAlign: "center",
            }}
          >
            Success
          </p>
        ) : (
          <p
            style={{
              backgroundColor: "#FFE4DB",
              color: "#981C19",
              padding: 5,
              borderRadius: 5,
              width: "80px",
              textAlign: "center",
            }}
          >
            Canceled
          </p>
        )}
      </td>
      <td>
        <div className="Action">
          <button>
            <MdOutlineDelete style={{ fontSize: "25px", color: "#192252" }} />
          </button>
          <button>
            <AiOutlineEyeInvisible
              style={{ fontSize: "25px", color: "#192252" }}
            />
          </button>
        </div>
      </td>
    </tr>
  );
};
const TableMedicalHistory = () => {
  const MedicalHistory: Medicalhistory[] = useSelector(
    (state: RootState) => state.medicalhistory
  );
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchMedicalHistorySlice());
  }, []);
  return (
    <main>
      <table id="rwd-table">
        <thead>
          <tr>
            <th>Patient</th>
            <th>Appointment </th>
            <th>Date</th>
            <th>Time </th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {MedicalHistory.map((item) => {
            return <TableData key={item.fullname} data={item} />;
          })}
        </tbody>
      </table>
    </main>
  );
};

export default TableMedicalHistory;
