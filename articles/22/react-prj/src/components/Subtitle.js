import React from "react";
import "./Subtitle.css";

export default function subtitle(props) {
  return (
    <div className="subtitle">
      { props.text }
    </div>
  )
}