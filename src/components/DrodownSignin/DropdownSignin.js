import React from "react";
import "./DropdownSignin.css";
const DropdownSignin = (props) => {
  return (
    <div class="dropdown">
      <button class="dropbtn">{props.name}</button>
      <div class="dropdown-content">
        <a href="/Signup">Police</a>
        <a href="/Signup">Forensic </a>
        <a href="/Signup">Judiciary</a>
      </div>
    </div>
  );
};

export default DropdownSignin;
