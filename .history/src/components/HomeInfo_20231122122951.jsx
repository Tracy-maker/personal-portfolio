import React from "react";

const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
  <p></p>
    <Link to={link}>{btnText}</Link>
  </div>
);

const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      Hi, I'm <span className="font-semibold">Kevin</span> 🤩
      <br />A Electrical Engineer from Malaysia
    </h1>
  ),
  2: <h1>2</h1>,
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
