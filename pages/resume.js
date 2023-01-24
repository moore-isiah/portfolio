import React from "react";
import Image from "next/image";
import resume from "../public/images/resume.png";
import resume2 from "../public/images/resume2.png";
import Header from "../components/Header";

export default function Resume() {
  console.log(resume.src);
  return (
    <div className="w-full flex justify-center">
      <Header />
      <div className="flex flex-col items-center justify-center lg:w-1/2 bg-white">
        <Image
          src={resume.src}
          alt=""
          height="2200"
          width={1700}
          className="lg:w-full"
        />
        <Image
          src={resume2.src}
          alt=""
          height="2200"
          width={1700}
          className="lg:w-full"
        />
      </div>
    </div>
  );
}
