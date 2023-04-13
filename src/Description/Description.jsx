import React from "react";
import "./Description.css";
import sam_img from "../../public/6.png";
import ez_img from "../../public/Sample6.png";
import p_img from "../../public/Sample8.png";
import d_img from "../../public/Sample9.png";

export default function ProjectDescription() {
  return (
    <div className="description">
      <div className="image-container">
        <img src={sam_img} alt="" className="img1"></img>
        <img src={ez_img} alt="" className="img2"></img>
      </div>
      <div className="description-contianer">
        <div> Blockchain-Based Credit Fintech Solution! </div>
        <div>
          Join us in revolutionizing the lending industry and securing your
          financial future.
        </div>
        <div className="joinus">
          Join with me 
        </div>
      </div>
      <div className="image-container">
        <img src={p_img} alt="" className="img3"></img>
        <img src={d_img} alt="" className="img4"></img>
      </div>
    </div>
  );
}
