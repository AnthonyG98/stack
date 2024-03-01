import "./signup.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCubes } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
export default function SignUp() {
  return (
    <>
      <div className="input-container">
        <div className="input-col1-container">
          <h1 className="header">STACK</h1>
          <div className="logo">
            <FontAwesomeIcon id="logo-icon" icon={faCubes} />
          </div>
        </div>
        <div className="input-col2-container">
          <input placeholder="mobile number or email" className="input-field" />
          <input placeholder="full name" className="input-field" />
          <input placeholder="username" className="input-field" />
          <input
            placeholder="password"
            type="password"
            className="input-field"
          />
          <input
            placeholder="re-enter password"
            type="password"
            className="input-field"
          />
          <button className="field-btn">Create user</button>
        </div>
        <div className="input-col2-row2">
          <p className="input-text">Already have an account? </p>
          <Link href="/" id="signup">
            Login.
          </Link>
        </div>
      </div>
    </>
  );
}
