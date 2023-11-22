import React from "react";
import { Link } from "react-router-dom";

const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
    <p className="font-medium sm:text-xl text-center">{text}</p>
    <Link to={link}>{btnText}</Link>
  </div>
);

const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      Hi, I'm <span className="font-semibold">Kevin</span> 🤩
      <br />
      An electrical engineer with a passion for renewable energy. Let's innovate
      together! 💡⚡
    </h1>
  ),
  2: <h1>2</h1>,
  3: <h1>3</h1>,
  4: <h1></h1>,
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
