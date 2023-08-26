import React from "react";
import { AiFillSetting } from "react-icons/ai";
import { GrLanguage } from "react-icons/gr";
import { IoNotifications } from "react-icons/io5";
import "./topbar.css";
export default function header() {
  return (
    // <>eee</>
    <div className="d-flex justify-content-end">
      <a href="#" class="nav-link nav-icon iconClass">
        <IoNotifications className="m-1 my-3 icon" />
        <span class="badge badge-dark bg-danger rounded-circle">2</span>
      </a>
      <a href="#" class="nav-link nav-icon iconClass">
        <GrLanguage className="m-1 my-3 icon" />
        <span class="badge badge-dark bg-danger rounded-circle">8</span>
      </a>
      <AiFillSetting className="m-1 my-3 icon" />
      <img
        src="https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/short/linkedin-profile-picture-maker/dummy_image/thumb/004.webp"
        alt="profile"
        className="rounded-circle my-2"
        style={{ width: "45px", height: "45px" }}
      />
    </div>
  );
}
