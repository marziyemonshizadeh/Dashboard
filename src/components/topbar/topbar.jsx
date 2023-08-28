import React from "react";
import { AiFillSetting } from "react-icons/ai";
import { IoNotifications } from "react-icons/io5";
import { MdOutlineLanguage } from "react-icons/md";
import { Link } from "react-router-dom";
import "./topbar.css";
export default function header() {
  return (
    <div className="d-flex justify-content-end">
      <Link to="#" className="nav-link nav-icon iconClass">
        <IoNotifications className="m-1 my-3 iconTopbarStyle icon" />
        <span className="badge badge-dark bg-danger rounded-circle">2</span>
      </Link>
      <Link to="#" className="nav-link nav-icon iconClass">
        <MdOutlineLanguage className="m-1 my-3 iconTopbarStyle icon" />
        <span className="badge badge-dark bg-danger rounded-circle">8</span>
      </Link>
      <Link to="/">
        <AiFillSetting className="m-1 my-3 iconTopbarStyle icon" />
      </Link>
      <img
        src="https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/short/linkedin-profile-picture-maker/dummy_image/thumb/004.webp"
        alt="profile"
        className="rounded-circle my-2"
        style={{ width: "45px", height: "45px" }}
      />
    </div>
  );
}
