import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import images from "../public/images/imgIndex";
import { useState } from "react";

import ProjectCard from "../components/projectCard";
import Header from "../components/Header";

import projectsData from "../projectsData";

export default function Home() {
  const [isClicked, setClicked] = useState(false);
  const [contact, setContact] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

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
      <div id="about" className="flex flex-col font-unbounded items-center">
        <h1 className="my-3 text-new-darkpurple text-3xl">About Me</h1>
        <p className="text-new-darkpurple">words about me</p>
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
            console.log(item.src);
            return (
              // eslint-disable-next-line react/jsx-key
              <Image
                key={item}
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
      <div
        id="contact"
        className="w-full flex flex-col items-center my-5 font-unbounded"
      >
        <h1 className="text-new-darkpurple text-3xl justify-self-center">
          Contact
        </h1>
        <div className="md:w-1/2 lg:w-1/2 sm:w-full flex justify-center items-center flex-wrap">
          <label htmlFor="first" className="text-new-darkpurple text-lg">
            First Name:
          </label>
          <input
            id="first"
            type="text"
            className="rounded-sm bg-new-darkpurple p-1 ml-2 text-new-lightpurple my-2"
            placeholder="john"
            value={contact.firstName}
            onChange={(e) => {
              setContact({ ...contact, firstName: e.target.value });
            }}
          />
          <label htmlFor="last" className="text-new-darkpurple ml-4 text-lg">
            Last Name:
          </label>
          <input
            id="last"
            type="text"
            className="rounded-sm bg-new-darkpurple p-1 ml-2 text-new-lightpurple my-2"
            placeholder="doe"
            value={contact.lastName}
            onChange={(e) => {
              setContact({ ...contact, lastName: e.target.value });
            }}
          />
          <label htmlFor="email" className="text-new-darkpurple ml-4 text-lg">
            Email:
          </label>
          <input
            id="email"
            type="email"
            className="rounded-sm bg-new-darkpurple p-1 text-new-lightpurple md:w-10/12 lg:w-10/12 my-2 ml-2 sm:w-full"
            placeholder="johndoe@gmail.com"
            value={contact.email}
            onChange={(e) => {
              setContact({ ...contact, email: e.target.value });
            }}
          />
          <div className="flex flex-col w-full items-center">
            <h1 className="text-new-darkpurple text-lg text-center w-full">
              Message:
            </h1>
            <textarea
              type="textbox"
              id="message"
              value={contact.message}
              onChange={(e) => {
                setContact({ ...contact, message: e.target.value });
              }}
              className="rounded-sm bg-new-darkpurple p-1 text-new-lightpurple w-3/4 h-44 ml-2 my-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
