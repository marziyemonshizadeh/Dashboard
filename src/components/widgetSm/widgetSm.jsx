import React from "react";
import { MdVisibility } from "react-icons/md";
import { newMembers } from "../../datas";
import RoundedImg from "../roundedImg/roundedImg";
export default function WidgetSm() {
  return (
    <div className="card p-3 my-2">
      <p>اعضای جدید</p>
      {newMembers.map((i) => (
        <div
          className="d-flex justify-content-between align-items-center"
          key={i.id}
        >
          <RoundedImg src={i.img} alt={i.alt} />
          <div className="d-flex flex-column gap-2">
            <p className="fs-5">{i.username}</p>
            <p className="text-muted">{i.title}</p>
          </div>
          <MdVisibility />
        </div>
      ))}
    </div>
  );
}
