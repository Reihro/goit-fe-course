import React from "react";

export default function NotFound({ message = "Sorry nothing found" }) {
  return <p style={{ textAlign: "center" }}>{message}</p>;
}