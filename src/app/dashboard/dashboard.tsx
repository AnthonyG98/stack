import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCubes,
  faMagnifyingGlass,
  faHome,
  faGlobeAmericas,
  faUserFriends,
  faBell,
} from "@fortawesome/free-solid-svg-icons";
import "./dashstyles.css";
export default function Dashboard() {
  return (
    <>
      <div className="dashboard-container">
        <div className="dashboard-col1-container">
          <div className="logo" id="dash-logo">
            <FontAwesomeIcon className="head-icon" icon={faCubes} />
          </div>
          <div className="dash-col1-row" id="header-icons">
            <div className="col1-row-icon-container">
              <FontAwesomeIcon className="head-icon" icon={faHome} />
              <div className="notif">3</div>
            </div>
            <div className="col1-row-icon-container">
              <FontAwesomeIcon className="head-icon" icon={faGlobeAmericas} />
              <div className="notif">1</div>
            </div>
            <div className="col1-row-icon-container">
              <FontAwesomeIcon className="head-icon" icon={faUserFriends} />
              <div className="notif">1</div>
            </div>
            <div className="col1-row-icon-container">
              <FontAwesomeIcon className="head-icon" icon={faBell} />
              <div className="notif">2</div>
            </div>
          </div>
          <div className="dash-col1-row" id="search-container">
            <FontAwesomeIcon
              className="head-icon"
              id="magnifying-glass"
              icon={faMagnifyingGlass}
            />

            <input
              className="input-field"
              id="search-input"
              placeholder="Search user, list, or entertainment"
            />
          </div>
        </div>
      </div>
    </>
  );
}
