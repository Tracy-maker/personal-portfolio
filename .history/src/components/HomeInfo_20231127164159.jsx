import React from "react";
import { arrow } from "../assets/icons";
import { Link } from "react-router-dom";

const InfoBox = ({ text, Link,  link, btnText,isNewTab }) => (
  <div className="info-box">
    <p className="font-medium sm:text-xl text-center">{text}</p>
    <a
      href={link}
      target={isNewTab ? "_blank" : "_self"}
      rel={isNewTab ? "noopener noreferrer" : ""}
      className="neo-brutalism-white neo-btn"
    >
      {btnText}
      <img src={arrow} className="w-5 h-3 object-contain" />
    </a>
  </div>
);

const renderContent = {
  1: (
    <InfoBox
      text=""
     
      btnText=""
      isNewTab={false} 
    />

    <div className='info-box'>
    <p className='font-medium sm:text-xl text-center'>
    Seeking a dynamic project collaborator in the realm of electrical engineering and renewable energy?
    </p>

    <Link to='/contact' className='neo-brutalism-white neo-btn'>
    Please send me a message
      <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
    </Link>
  </div>
  ),
  2: (
    <InfoBox
      text="To discover my key achievements during my time at RMIT."
      link="https://www.rmit.edu.au/about/schools-colleges/engineering/research/research-groups/rapid-discovery-and-fabrication/rdf-team/sun-yeang-chew"
      btnText="click on the link"
      isNewTab={true} 
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
      text="If you want to know more about me, please download my CV."
      link="https://docs.google.com/document/d/1KKzIxARj86WlHzWBrBCEpnjJ-5XH2eNF/edit#heading=h.30j0zll"
      btnText="clicking on the link"
      isNewTab={true} 
    />
  ),
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
