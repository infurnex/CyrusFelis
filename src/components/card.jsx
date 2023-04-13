import React from "react";
import "./card.css";
export default function Card(props) {
    
  return (
    <div className="card">
      <div className="img-container">
        <img src={props.image} alt="" />
      </div>
      <div className="desc">
        <div>{props.desc}</div>
        <div className="title">{props.title}</div>
      </div>
    </div>
  );
}
