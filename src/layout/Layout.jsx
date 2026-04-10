import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import FeedbackToast from "../components/FeedbackToast";

export default function Layout({ children }) {
  return (
    <div className="layout-container">
      <Sidebar />

      <div className="main-content">
        <Navbar />
        <div className="page-content">
          {children}
        </div>
      </div>

      <FeedbackToast />
    </div>
  );
}
