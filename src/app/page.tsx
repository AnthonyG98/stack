import Image from "next/image";
import styles from "./page.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCubes } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <div className="input-container" style={styles}>
        <div className="input-col1-container">
          <h1 className="header">STACK</h1>
          <div className="logo">
            <FontAwesomeIcon id="logo-icon" icon={faCubes} />
          </div>
        </div>
        <div className="input-col2-container">
          <input placeholder="username or email" className="input-field" />
          <input placeholder="password" className="input-field" />
          <button className="field-btn">Log in</button>
        </div>
        <div className="input-col2-row2">
          <p className="input-text">Don't have an account? </p>
          <Link href="/signup" id="signup">
            Sign up.
          </Link>
        </div>
      </div>
    </>
  );
}
