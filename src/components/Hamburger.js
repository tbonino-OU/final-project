import React from "react";
import "../App.css";

export default function Hamburger({ isOpen }) {
  return (
    <div className="hamburger-icon">
      <div className={`burger burger1 ${isOpen ? "open" : ""}`} />
      <div className={`burger burger2 ${isOpen ? "open" : ""}`} />
      <div className={`burger burger3 ${isOpen ? "open" : ""}`} />
    </div>
  );
}
