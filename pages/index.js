import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import images from "../public/images/imgIndex";
import { useState } from "react";
import ProjectCard from "../components/projectCard";
import projectsData from "../projectsData";

export default function Home() {
  const [isHovered, setHover] = useState(false);
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
    <div className="bg-new-lightpurple h-full">
      <header className="flex flex-row justify-between h-14 w-full items-center pb-6 p-5 bg-transparent fixed z-10">
        <h1 className=" font-unbounded">I.Moore</h1>
        <div>
          <Link href="/projects" className="font-unbounded">
            projects
          </Link>
          <Link href="/resume" className="ml-5 font-unbounded">
            resume
          </Link>
          <Link href="/contact" className="ml-5 font-unbounded">
            contact
          </Link>
        </div>
      </header>
      <div className="w-full flex items-center justify-center">
        <div className="absolute block ml-1/4 h-56 z-20">
          <div className="h-full absolute flex flex-wrap justify-center items-center flex-col w-full">
            <h1 className=" text-7xl font-bold font-vampirio text-new-lightpink z-30">
              Isiah Moore
            </h1>
            <h2 className=" text-4xl font-vampirio font-bold z-30 text-new-lightpurple">
              Front End Developer
            </h2>
          </div>
          <Image src={brush} alt="" className="brush z-20 h-56" />
        </div>
        <Image src={saltLake} alt="image of Salt Lake City" className="z-0" />
      </div>
      <div className="flex flex-col items-center">
        {isHovered && (
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
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          />
        </div>
        <div className="flex flex-row flex-wrap justify-around w-full">
          {techIcons.map((item) => {
            console.log(item.src);
            return (
              // eslint-disable-next-line react/jsx-key
              <Image
                key={item}
                src={item}
                alt=""
                className="h-16 object-contain w-auto m-3"
              />
            );
          })}
        </div>
      </div>
      <div className="flex justify-center mt-5 flex-col items-center w-full">
        <h1 className="font-unbounded my-5 text-new-darkpurple text-3xl">
          Projects
        </h1>
        <div className="w-full flex justify-around flex-wrap ">
          <ProjectCard project={projectsData.walletTracker} />
          <ProjectCard project={projectsData.memeGen} />
        </div>
      </div>
    </div>
  );
}
