import React from "react";
import "./DropdownLogin.css";
const DropdownLogin = (props) => {
  return (
    <div class="dropdown">
      <button class="dropbtn">{props.name}</button>
      <div class="dropdown-content">
        <a href="/login">Police</a>
        <a href="/login">Forensic </a>
        <a href="/login">Judiciary</a>
      </div>
    </div>
  );
};

export default DropdownLogin;
