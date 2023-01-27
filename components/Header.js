import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import useMediaQuery from "../utils/useMediaQuery";

import hamburgerIcon from "../public/images/hamburger.png";
import linkedIcon from "../public/images/linkedin.png";
import gitIcon from "../public/images/github.png";

export default function Header(props) {
  const [isActive, setActive] = useState(false);
  const { isHomePage } = props;

  const isSmall = useMediaQuery(768);

  const links = (
    <div className="z-40">
      <Link
        href={isHomePage ? "#about" : "/#about"}
        className="ml-5 font-unbounded bg-new-darkpurple p-1 rounded-sm text-new-lightpink"
      >
        About Me
      </Link>
      <Link
        href={isHomePage ? "#projects" : "/#projects"}
        className="font-unbounded bg-new-darkpurple p-1 rounded-sm text-new-lightpink ml-5"
        scrollSmooth
      >
        Projects
      </Link>
      <Link
        href={isHomePage ? "#contact" : "/#contact"}
        className="ml-5 font-unbounded bg-new-darkpurple p-1 rounded-sm text-new-lightpink"
      >
        Contact
      </Link>
      <Link
        href="/resume"
        className="ml-5 font-unbounded bg-new-darkpurple p-1 rounded-sm text-new-lightpink"
        target="_blank"
      >
        Resume
      </Link>
    </div>
  );

  const hamburger = (
    <div>
      <Image
        src={hamburgerIcon.src}
        alt="hamburger itcon"
        width="40"
        height="40"
        className="brush"
        onClick={() => {
          console.log("clicked", isActive);
          setActive(!isActive);
        }}
      />
    </div>
  );

  return (
    <>
      <header
        className={`flex flex-row justify-between h-14 w-full items-center pb-6 p-5 bg-transparent fixed z-30 top-0 ${
          isActive ? "bg-new-grey z-40" : ""
        }`}
      >
        <div className="flex">
          <Link
            href="/"
            className="font-unbounded bg-new-darkpurple p-1 rounded-sm text-new-lightpink"
          >
            I.Moore
          </Link>
          <div className="w-8 h-8 bg-new-darkpurple ml-3 flex justify-center items-center rounded-lg">
            <Link
              href="https://www.linkedin.com/in/isiah-moore/"
              target="_blank"
            >
              <Image
                src={linkedIcon.src}
                alt="linkedIn"
                width={30}
                height={30}
                className="filter-lightpink rounded w-6 h-6"
              />
            </Link>
          </div>

          <div className="w-8 h-8 bg-new-darkpurple ml-3 flex justify-center items-center rounded-lg">
            <Link href="https://github.com/moore-isiah" target="_blank">
              <Image
                src={gitIcon.src}
                alt="github"
                width={23}
                height={23}
                className="filter-lightpink rounded w-6 h-6"
              />
            </Link>
          </div>
        </div>

        {isSmall ? hamburger : links}
      </header>

      <div
        className={`flex fixed flex-col h-0 w-screen bg-new-grey ${
          isActive ? "h-slide h-active h-full z-50" : "h-slide -z-40"
        } ${isHomePage ? "mt-12" : ""}`}
      >
        <div
          className="border-b-new-darkpurple border-t-new-darkpurple bg-new-grey py-2 text-center text-new-lightpink w-full text-4xl"
          onClick={() => setActive(false)}
        >
          <Link href="/" className="font-unbounded">
            Home
          </Link>
        </div>
        <div
          className="border-b-new-darkpurple py-2 text-center text-new-lightpink bg-new-grey w-full text-4xl"
          onClick={() => setActive(false)}
        >
          <Link
            href={isHomePage ? "#about" : "/#about"}
            className="font-unbounded"
          >
            About Me
          </Link>
        </div>
        <div
          className="border-b-new-darkpurple py-2 text-center text-new-lightpink bg-new-grey w-full text-4xl"
          onClick={() => setActive(false)}
        >
          <Link
            href={isHomePage ? "#projects" : "/#projects"}
            className="font-unbounded"
            scrollSmooth
          >
            Projects
          </Link>
        </div>
        <div
          className="border-b-new-darkpurple py-2 text-center text-new-lightpink bg-new-grey w-full text-4xl"
          onClick={() => setActive(false)}
        >
          {" "}
          <Link
            href={isHomePage ? "#contact" : "/#contact"}
            className="font-unbounded"
          >
            Contact
          </Link>
        </div>
        <div
          className="border-b-new-darkpurple py-2 text-center text-new-lightpink bg-new-grey w-full text-4xl"
          onClick={() => setActive(false)}
        >
          <Link href="/resume" className="font-unbounded" target="_blank">
            Resume
          </Link>
        </div>
      </div>
    </>
  );
}
