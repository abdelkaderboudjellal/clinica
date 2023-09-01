import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Arrow from "../../../images/arrow.svg";
import { Link, Outlet } from "react-router-dom";
import TableMedicalHistory from "../TableMedicalHistory";
import { useSelector } from "react-redux";
import { RootState } from "../../ReduxTK/store";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Chart.js Bar Chart",
    },
  },
};

const labels = ["01", "02", "03", "04", "05", "06"];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: [30, 40, 50, 20, 35, 35],
      backgroundColor: "#DFE8F6",
      barThickness: 60,
      borderWidth: 2,
      borderRadius: 5,
    },
  ],
};

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

type Props = {};

function HomeDashboard({}: Props) {
  const [value, onChange] = useState<Value>(new Date());
  const UserDetails = useSelector((state: RootState) => state.authLogin);

  return (
    <div className="main_container">
      <div className="bar_chart ">
        <div className="chart ">
          <h1>Welcome back Dr. {UserDetails.fullName}!</h1>
          <div className="chart_js">
            <h4>Visits This month</h4>
            <Bar options={options} data={data} />
          </div>
        </div>
        <div className="Calendar">
          <div className="Calendar_title">
            <h2>Calendar</h2>
            <img src={Arrow} alt="arrow" />
          </div>

          <Calendar
            className={"Calendar_element"}
            next2Label={false}
            prev2Label={false}
            onChange={onChange}
            value={value}
          />
          <div className="Upcoming">
            <h3>Upcoming</h3>
            <Link to={"#"}> View All</Link>
          </div>
          <div className="Monthly_doctor">
            <div className="avatar">M</div>
            <div className="Monthly_doctor_details">
              <h4>Monthly doctor’s meet</h4>
              <p>{value?.toString().split("GMT")[0]}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="Medical_History">
        <h2>Medical History</h2>
        <TableMedicalHistory />
      </div>
      <Outlet />
    </div>
  );
}

export default HomeDashboard;
