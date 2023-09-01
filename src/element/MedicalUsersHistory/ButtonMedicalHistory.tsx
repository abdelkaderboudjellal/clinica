import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../components/ReduxTK/store";
import { showNavbarMedical } from "../../components/ReduxTK/slices/showMedicalHistorySlice";
import { fetchMedicalHistorySliceById } from "../../components/ReduxTK/slices/MedicalhistorySliceById";

interface DataButton {}
type Props = {
  image: string;
  fullname: string;
  id: string;
};

const ButtonMedicalHistory = ({ image, fullname, id }: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  const Show = useSelector((state: RootState) => state.showNavbarMedical.value);

  return (
    <div
      className="Medical_History_users "
      onClick={() => {
        dispatch(showNavbarMedical());
        dispatch(fetchMedicalHistorySliceById(id));
      }}
    >
      <img src={image} alt={fullname} />
      <div>
        <p>{fullname}</p>
        <p className="id">{id}</p>
      </div>
    </div>
  );
};

export default ButtonMedicalHistory;
