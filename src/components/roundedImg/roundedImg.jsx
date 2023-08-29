import React from "react";

export default function RoundedImg({ src, alt, className }) {
  return (
    <img
      src={src}
      alt={alt}
      className={`rounded-circle ${className}`}
      style={{ width: "45px", height: "45px" }}
    />
  );
}
