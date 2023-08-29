import LanguageIcon from "@mui/icons-material/Language";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import Badge from "@mui/material/Badge";
import React from "react";
import RoundedImg from "../roundedImg/roundedImg";
import "./topbar.css";

export default function header() {
  return (
    <div className="d-flex justify-content-end">
      <div className="mt-3 d-flex gap-1">
        <Badge color="secondary" badgeContent={7} showZero>
          <NotificationsIcon color="action" />
        </Badge>
        <Badge color="secondary" badgeContent={3} showZero>
          <LanguageIcon color="action" />
        </Badge>
        <SettingsIcon color="action" />
      </div>
      <RoundedImg
        src="https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/short/linkedin-profile-picture-maker/dummy_image/thumb/004.webp"
        alt="topbar"
        className="m-1"
      />
    </div>
  );
}
