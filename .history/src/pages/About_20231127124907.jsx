import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { experiences, skills } from "../datas/data";

import "react-vertical-timeline-component/style.min.css";

const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello, I'm{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          {" "}
          Sun Yeang Chew
        </span>{" "}
        🤠
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <div>
          <img
            src="https://i.ibb.co/jrgRNJT/281701049676-pic.png"
            alt="281701049676-pic"
            border="0"
          />
          <p>
            Absolutely thrilled to introduce myself as a motivated electrical
            and electronic engineer fueled by a profound passion for renewable
            energy, IoT, and automation. My commitment lies in harnessing
            technical expertise and an innovative mindset to catalyze positive
            change globally. On the lookout for a challenging role where I can
            actively contribute to the development and implementation of
            sustainable energy solutions. Eager to learn, grow, and make a
            significant impact in a dynamic and collaborative environment. Join
            me on this journey to shape the future of clean and efficient
            technologies! 🌍🔧✨
          </p>
        </div>
      </div>

      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My Skills</h3>

        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill) => (
            <div className="block-container w-32 h-32" key={skill.name}>
              <div className="btn-back rounded-xl bg-blue-300" />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <div className="w-1/2 h-1/2 object-contain">{skill.name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="py-16">
        <h3 className="subhead-text">My Experience</h3>
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
            I've engaged in diverse educational and professional environments,
            honing my skills and collaborating with talented individuals. Here's
            an overview:
          </p>
        </div>

        <div className="mt-12 flex">
          <VerticalTimeline>
            {experiences.map((experience) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                iconStyle={{ background: experience.iconBg }}
                icon={
                  <div className="flex justify-center items-center w-full h-full">
                    <div className="w-[60%] h-[60%] object-contain" />
                  </div>
                }
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experience.iconBg,
                  boxShadow: "none",
                }}
              >
                <div>
                  <h3 className="text-black text-xl font-poppins font-semibold">
                    {experience.title}
                  </h3>
                  <p
                    className="text-black-500 font-medium text-base"
                    style={{ margin: 0 }}
                  >
                    {experience.company_name}
                  </p>
                </div>

                <ul className="my-5 list-disc ml-5 space-y-2">
                  {experience.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className="text-black-500/50 font-normal pl-1 text-sm"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <hr className="border-slate-200" />
    </section>
  );
};

export default About;
