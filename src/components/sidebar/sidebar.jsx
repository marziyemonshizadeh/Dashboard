import React from "react";
import { Link } from "react-router-dom";
import SidebarItems from "./sidebarItems.js";

export default function sidebar() {
  return (
    <div
      className="container w-auto py-3"
      style={{ position: "fixed", height: "100%" }}
    >
      <p className="my-2 text-muted fw-bold d-none d-md-inline">داشبورد</p>
      <ul className="list-group list-group-flush">
        {SidebarItems[0].map((i, index) => {
          return (
            <Link
              to={i.to}
              className="text-decoration-none text-muted my-2"
              key={index}
            >
              <i.icon className="ms-3 icon" />
              <span className="d-none d-md-inline">{i.text}</span>
            </Link>
          );
        })}
      </ul>
      <p className="my-2 text-muted fw-bold d-none d-md-inline">منوی سریع</p>
      <ul className="list-group list-group-flush">
        {SidebarItems[1].map((i, index) => {
          return (
            <Link
              to={i.to}
              className="text-decoration-none text-muted my-2"
              key={index}
            >
              <i.icon className="ms-3 icon" />
              <span className="d-none d-md-inline">{i.text}</span>
            </Link>
          );
        })}
      </ul>
      <p className="my-2 text-muted fw-bold d-none d-md-inline">اطلاعیه</p>
      <ul className="list-group list-group-flush">
        {SidebarItems[2].map((i, index) => {
          return (
            <Link
              to={i.to}
              className="text-decoration-none text-muted my-2"
              key={index}
            >
              <i.icon className="ms-3 icon" />
              <span className="d-none d-md-inline">{i.text}</span>
            </Link>
          );
        })}
      </ul>
      <p className="my-2 text-muted fw-bold d-none d-md-inline">کارکنان</p>
      <ul className="list-group list-group-flush">
        {SidebarItems[3].map((i, index) => {
          return (
            <Link
              to={i.to}
              className="text-decoration-none text-muted my-2"
              key={index}
            >
              <i.icon className="ms-3 icon" />
              <span className="d-none d-md-inline">{i.text}</span>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}
