import Head from "next/head";
import Image from "next/image";
import images from "../public/images/imgIndex";
import { useState } from "react";

import ProjectCard from "../components/projectCard";
import Header from "../components/Header";
import EmailForm from "../components/EmailForm";

import projectsData from "../projectsData";

export default function Home() {
  const [isClicked, setClicked] = useState(false);

  const [
    saltLake,
    brush,
    cssIcon,
    htmlIcon,
    javaScriptIcon,
    mongoIcon,
    mongooseIcon,
    nextIcon,
    reactIcon,
    tailwindIcon,
    questionMark,
    reduxIcon,
    nodeIcon,
    expressIcon,
    reactQueryIcon,
  ] = images;

  const techIcons = [
    javaScriptIcon,
    reactIcon,
    cssIcon,
    tailwindIcon,
    reactQueryIcon,
    htmlIcon,
    nextIcon,
    mongoIcon,
    mongooseIcon,
    reduxIcon,
    expressIcon,
    nodeIcon,
  ];

  return (
    <div className="bg-new-grey w-full h-full">
      <Header isHomePage={true} />
      <div className="w-full flex h-full items-center justify-center">
        <div className="absolute block w-full ml-1/4 h-16 md:h-56 z-20">
          <div className="h-full absolute flex justify-center items-center flex-col w-full mt-6 md:mt-0">
            <h1 className="text-4xl md:text-7xl font-bold font-vampirio text-new-lightpink z-30">
              Isiah Moore
            </h1>
            <h2 className=" text-xl md:text-4xl font-vampirio font-bold z-30 text-new-lightpurple">
              Full Stack Developer
            </h2>
          </div>
          <Image src={brush} alt="" className="brush z-20 h-28 md:h-56" />
        </div>
        <Image
          src={saltLake}
          alt="image of Salt Lake City"
          className="z-0 h-48 md:h-auto"
        />
      </div>
      <div
        id="about"
        className="flex flex-col font-unbounded items-center px-4"
      >
        <h1 className="my-3 text-new-darkpurple text-3xl ">About Me</h1>
        <p className="text-new-darkpurple text-center">
          I&apos;m a mostly self thought Full Stack Developer. I have a need for
          knowledge that is supplemented by my ability to self teach and work
          through unknown issues. I also feel I am very tolerent of annoyances
          and failures, like debugging and errors, through experienceing the
          madness of being a youth baseball coach.
        </p>
      </div>
      <div id="tech" className="flex flex-col items-center">
        {isClicked && (
          <div className="absolute w-72 h-auto bg-new-darkpurple p-2 mt-16 rounded-lg">
            <p className="font-unbounded text-new-grey">
              Technologies I have worked with listed from most to least
              comfortable (left to right)
            </p>
          </div>
        )}
        <div className="flex">
          <h1 className="font-unbounded my-5 text-new-darkpurple text-3xl">
            Technologies
          </h1>
          <Image
            src={questionMark}
            alt=""
            className="w-5 ml-1 brush"
            onClick={() => setClicked(!isClicked)}
          />
        </div>
        <div className="flex flex-row flex-wrap justify-around w-full">
          {techIcons.map((item) => {
            return (
              // eslint-disable-next-line react/jsx-key
              <Image
                key={item.src}
                src={item}
                alt=""
                className="h-10 md:h-16 object-contain w-auto m-3"
              />
            );
          })}
        </div>
      </div>
      <div
        id="projects"
        className="flex justify-center mt-5 flex-col items-center w-full"
      >
        <h1 className="font-unbounded my-5 text-new-darkpurple text-3xl">
          Projects
        </h1>
        <div className="w-full flex justify-around flex-wrap ">
          <ProjectCard project={projectsData.walletTracker} />
          <ProjectCard project={projectsData.memeGen} />
        </div>
      </div>
      <EmailForm />
    </div>
  );
}
