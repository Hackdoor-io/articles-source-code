import React from "react";
import "./Title.css";

export default function title(props) {
  return (
    <h1 className="title"> { props.text } </h1>
  )
}