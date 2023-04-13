import React from "react";
import "./coreteam.css";
import Card from "../components/card";
import sam_img from "../../public/6.png";
import ez_img from "../../public/Sample6.png";
import p_img from "../../public/Sample8.png";
import d_img from "../../public/Sample9.png";
export default function CoreTeam() {
  const cards = [
    {
      image: sam_img,
      desc: "Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah BlahBlah Blah Blah Blah",
      title: "ding dong ding",
    },
    {
      image: ez_img,
      desc: "Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah BlahBlah Blah Blah Blah",
      title: "ding dong ding",
    },
    {
      image: p_img,
      desc: "Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah BlahBlah Blah Blah Blah",
      title: "ding dong ding",
    },
    {
      image: d_img,
      desc: "Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah BlahBlah Blah Blah Blah",
      title: "ding dong ding",
    },
    {
      image: sam_img,
      desc: "Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah BlahBlah Blah Blah Blah",
      title: "ding dong ding",
    },
    {
      image: d_img,
      desc: "Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah BlahBlah Blah Blah Blah",
      title: "ding dong ding",
    },
  ];
  return (
    <div className="coreteam">
      <div className='collection-heading'>
        Core Team
      </div>
      <div className="container">
        {cards.map((card, index) => (
          <Card image = {card.image} desc = {card.desc} title={card.title}></Card>
        ))}
      </div>
    </div>
  );
}