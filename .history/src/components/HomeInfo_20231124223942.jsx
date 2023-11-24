import React from "react";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
    <p className="font-medium sm:text-xl text-center">{text}</p>
    <Link to={link} className="neo-brutalism-white neo-btn">
      {btnText}
      <img src={arrow} className="w-5 h-3 object-contain" />
    </Link>
  </div>
);

const renderContent = {
  1: (
    <InfoBox
      text="Seeking a dynamic project collaborator in the realm of electrical engineering and renewable energy?"
      link="/contact"
      btnText="Please send me a message"
    />
  ),

  2: (
    <InfoBox
      text="To explore my key achievements at RMIT."
       target="_blank"
      link = "https://www.rmit.edu.au/about/schools-colleges/engineering/research/research-groups/rapid-discovery-and-fabrication/rdf-team/sun-yeang-chew"
      btnText="click on the link"
    />
  ),
  3: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      Hi, I'm <span className="font-semibold">Kevin</span> 🤩
      <br />
      An electrical engineer with a passion for renewable energy. Let's innovate
      together! 💡⚡
    </h1>
  ),
  4: (
    <InfoBox
      text="Seeking a dynamic project collaborator in the realm of electrical engineering and renewable energy?"
      link="/contact"
      btnText="Please send me a message"
    />
  ),
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
