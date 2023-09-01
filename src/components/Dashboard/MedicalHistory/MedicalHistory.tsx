import { GrClose } from "react-icons/gr";
import TableMedicalHistory from "../TableMedicalHistory";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../ReduxTK/store";
import { showNavbarMedical } from "../../ReduxTK/slices/showMedicalHistorySlice";
import ButtonMedicalHistory from "../../../element/MedicalUsersHistory/ButtonMedicalHistory";
import { HiOutlineClipboardList } from "react-icons/hi";
import { LiaCloudDownloadAltSolid } from "react-icons/lia";
type Props = {};

const MedicalHistory = () => {
  const dispatch = useDispatch<AppDispatch>();
  const Show = useSelector((state: RootState) => state.showNavbarMedical.value);
  const dataUsers = useSelector((state: RootState) => state.medicalhistoryById);

  return (
    <div className="MedicalHistoryComponent">
      <div className="Medical_History">
        <h2>Medical History</h2>
        <TableMedicalHistory />
      </div>
      <div
        className={
          Show
            ? "DrawerMedicalHistory Show_MedicalHistory"
            : "DrawerMedicalHistory hidden_MedicalHistory "
        }
      >
        <div className="header">
          <h3>Medical History</h3>
          <button onClick={() => dispatch(showNavbarMedical())}>
            <GrClose />
          </button>
        </div>
        {dataUsers && (
          <div className="body">
            <h5>Patient information</h5>
            <ButtonMedicalHistory
              image={dataUsers.image}
              fullname={`Mr.${dataUsers.fullname}`}
              id={dataUsers.id}
            />
            <h5>Payment Detail</h5>
            <div className="PaymentDetail">
              <div>
                <p>From</p>
                <h5>Oran Bank</h5>
              </div>
              <div>
                <p>Pay with</p>
                <h5>Debit Card</h5>
              </div>
              <div>
                <p>Pay on</p>
                <h5>{`${dataUsers.date}`}</h5>
              </div>
              <div>
                <p>Statu payment</p>
                {dataUsers.status ? (
                  <h5
                    style={{
                      backgroundColor: "#CFFCD4",
                      color: "#479B36",
                      width: "max-content",
                      margin: "auto",
                      padding: "12px",
                      borderRadius: "4px",
                    }}
                  >
                    Success
                  </h5>
                ) : (
                  <h5
                    style={{
                      backgroundColor: "#FFE4DB",
                      color: "#981C19",
                      width: "max-content",
                      margin: "auto",
                      padding: "12px",
                      borderRadius: "4px",
                    }}
                  >
                    Cancled
                  </h5>
                )}
              </div>
            </div>
            <h5>intial payment</h5>
            <div className="intialpayment">
              <div>
                <p>Medical check-up</p>
                <h5>$500</h5>
              </div>
              <div>
                <p>Medicine</p>
                <h5>$20</h5>
              </div>
            </div>
            <div className="intialpayment">
              <div>
                <p>Medical check-up</p>
                <h5>$500</h5>
              </div>
              <div>
                <p>Medicine</p>
                <h5>$20</h5>
              </div>
            </div>
            <div className="grandtotal">
              <h3>grandtotal</h3>
              <h4>$520</h4>
            </div>
            <h5>Documentation</h5>
            <div>
              <button type="submit" className="buttonMedical">
                <div>
                  <HiOutlineClipboardList
                    style={{ fontSize: 35, color: "#192252" }}
                  />
                  <h3>Medical-invoice.pdf</h3>
                </div>
                <LiaCloudDownloadAltSolid
                  style={{ fontSize: 35, color: "#192252" }}
                />
              </button>
              <br />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MedicalHistory;
