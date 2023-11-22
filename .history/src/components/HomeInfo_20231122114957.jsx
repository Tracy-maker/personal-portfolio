import React from "react";

const renderContent = {
  1: <h1 className="sm:text-xl">1</h1>,
  2: <h1>2</h1>,
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
