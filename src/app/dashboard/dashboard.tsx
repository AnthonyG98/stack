import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCubes } from "@fortawesome/free-solid-svg-icons";
import "./dashstyles.css";
export default function Dashboard() {
  return (
    <>
      <div className="dashboard-container">
        <div className="dashboard-col1-container">
          <div className="logo" id="dash-logo">
            <FontAwesomeIcon id="logo-icon" icon={faCubes} />
          </div>
        </div>
      </div>
    </>
  );
}
