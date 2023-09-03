import React from "react";
import { Link, NavLink } from "react-router-dom";
import SidebarItems from "./sidebarItems.js";

export default function sidebar() {
  return (
    <div
      className="container w-auto py-3"
      style={{ position: "fixed", height: "100%" }}
    >
      <p
        className="my-2 fw-bold  d-none d-md-inline"
        // style={{ color: "#C836FC" }}
      >
        داشبورد
      </p>
      <ul className="list-group list-group-flush">
        {SidebarItems[0].map((i, index) => {
          return (
            <NavLink
              to={i.to}
              className="text-decoration-none my-2"
              style={({ isActive }) => {
                return {
                  color: isActive ? "#C836FC" : "rgb(230, 231, 228)",
                };
              }}
              key={index}
            >
              <i.icon className="ms-3 icon" />
              <span className="d-none d-md-inline">{i.text}</span>
            </NavLink>
          );
        })}
      </ul>
      <p
        className="my-2 fw-bold  d-none d-md-inline"
        style={{ color: "#9C27B0" }}
      >
        منوی سریع
      </p>
      <ul className="list-group list-group-flush">
        {SidebarItems[1].map((i, index) => {
          return (
            <Link
              to={i.to}
              className="text-decoration-none text-light my-2"
              key={index}
            >
              <i.icon className="ms-3 icon" />
              <span className="d-none d-md-inline">{i.text}</span>
            </Link>
          );
        })}
      </ul>
      <p
        className="my-2 fw-bold d-none d-md-inline"
        style={{ color: "#9C27B0" }}
      >
        اطلاعیه
      </p>
      <ul className="list-group list-group-flush">
        {SidebarItems[2].map((i, index) => {
          return (
            <Link
              to={i.to}
              className="text-decoration-none text-light my-2"
              key={index}
            >
              <i.icon className="ms-3 icon" />
              <span className="d-none d-md-inline">{i.text}</span>
            </Link>
          );
        })}
      </ul>
      <p
        className="my-2 fw-bold d-none d-md-inline"
        style={{ color: "#9C27B0" }}
      >
        کارکنان
      </p>
      <ul className="list-group list-group-flush">
        {SidebarItems[3].map((i, index) => {
          return (
            <Link
              to={i.to}
              className="text-decoration-none text-light my-2"
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
