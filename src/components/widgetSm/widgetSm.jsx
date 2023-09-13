import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";
import React from "react";
import { newMembers } from "../../datas";
import RoundedImg from "../roundedImg/roundedImg";
export default function WidgetSm() {
  return (
    <div className="card p-3 my-2" style={{ minHeight: "330px" }}>
      <p>اعضای جدید</p>
      {newMembers.map((i) => (
        <div
          className="d-flex justify-content-between align-items-center my-1"
          key={i.id}
        >
          <RoundedImg src={i.img} alt={i.alt} />
          <div className="d-flex flex-column gap-2">
            <p className="fs-5">{i.username}</p>
            <p style={{ color: "#5550bd" }}>{i.title}</p>
          </div>
          <VisibilityRoundedIcon />
        </div>
      ))}
    </div>
  );
}
