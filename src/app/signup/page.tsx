import "./signup.css";
import SignUp from "./SignUp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCubes } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Stack | Sign Up",
  description:
    "Stack, a social media platform for all your favorite pieces of entertainment",
};

export default function UserSignUp() {
  return (
    <>
      <SignUp />
    </>
  );
}
