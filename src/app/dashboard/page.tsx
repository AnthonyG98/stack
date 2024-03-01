import Dashboard from "./dashboard";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Stack | Dashboard",
  description:
    "Stack, a social media platform for all your favorite pieces of entertainment",
};

export default function UserDashboard() {
  return (
    <>
      <Dashboard />
    </>
  );
}
