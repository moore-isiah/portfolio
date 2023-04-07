/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Image from "next/image";
import arrow from "../public/images/rightArrow.png";
import Link from "next/link";
import circle from "../public/images/circle.png";
import useMediaQuery from "../utils/useMediaQuery";
import gitIcon from "../public/images/github.png";

export default function ProjectCard(props) {
  const [currentImg, setImg] = useState(0);
  const [isHovered, setHover] = useState(false);

  const {
    images: imgs,
    description,
    tech,
    gitHub,
    liveLink,
    isBoring,
    title,
    slug,
  } = props.project;
  const numImgs = imgs.length;
  const isSmall = useMediaQuery(900);

  const handleLeftClick = () => {
    currentImg === 0 ? setImg(numImgs - 1) : setImg(currentImg - 1);
  };

  const handleRightClick = () => {
    currentImg >= numImgs - 1 ? setImg(0) : setImg(currentImg + 1);
  };

  console.log();
  return (
    <div
      className="max-w-sm flex flex-col items-center justify-start py-2 bg-new-darkpurple rounded-lg mb-5"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <h1 className="text-new-lightpink text-lg font-unbounded">
        {props.project.title}
      </h1>
      <div className="w-full h-40 flex justify-around items-center">
        {imgs.length > 1 && (isSmall || isHovered) && (
          <div className="flex justify-around items-center w-1/12">
            <Image
              src={arrow.src}
              alt="Left Arrow"
              onClick={handleLeftClick}
              className="absolute z-30 rotate-180 cursor-pointer filter-lightpink"
              width="20"
              height="20"
            ></Image>
          </div>
        )}

        {numImgs === 0 && <p>No Images To Display</p>}
        <div className="w-3/4">
          {imgs.map((img, index) => {
            return (
              // eslint-disable-next-line react/jsx-key
              <div className={currentImg === index ? "slide active" : "slide"}>
                {currentImg === index && (
                  <img
                    src={img.src}
                    key={`${img.src}${index}`}
                    alt="some img"
                    className="z-10 w-full h-36 m-0 rounded-lg self-center object-contain"
                    onMouseDown={() => {
                      handleRightClick();
                    }}
                  ></img>
                )}
              </div>
            );
          })}
        </div>

        {imgs.length > 1 && (isSmall || isHovered) && (
          <div className="flex justify-around items-center w-1/12">
            <Image
              src={arrow.src}
              alt="Right Arrow"
              onClick={handleRightClick}
              className="absolute z-30 cursor-pointer filter-lightpink self-center"
              width="20"
              height="20"
            ></Image>
          </div>
        )}
      </div>
      <div className="flex cursor-pointer">
        {imgs.map((item, index) =>
          currentImg === index ? (
            <Image
              src={circle.src}
              key={`circle${index}`}
              alt="current"
              width={10}
              height={10}
              className="ml-1 filter-lightpink"
            ></Image>
          ) : (
            <Image
              src={circle.src}
              key={`circle${index}`}
              alt="others"
              width={10}
              height={10}
              className="ml-1 filter-lightpurple"
              onClick={() => {
                setImg(index);
              }}
            ></Image>
          )
        )}
      </div>
      <div className="w-full px-3 font-unbounded text-new-lightpurple">
        <div className="w-full mb-2">
          <h1 className="text-new-lightpink">About:</h1>
          <p className="ml-2">{description}</p>
        </div>
        <div className="w-full mb-2">
          <h1 className="text-new-lightpink">Technologies:</h1>
          <div className="flex flex-wrap flex-row justify-center">
            {tech.map((name) => {
              return (
                <div
                  key={`69${name}`}
                  className="p-1 bg-new-lightpurple rounded-lg m-1"
                >
                  <p className="mx-2 text-new-darkpurple">{name}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="w-full flex flex-col">
          <h1 className="text-new-lightpink">Links:</h1>
          <div className="flex flex-wrap flex-col flex-start">
            <div className=" bg-orange-500 rounded-lg m-1 p-1">
              <Link href={gitHub} id={gitHub} className="flex" target="_blank">
                <Image
                  src={gitIcon}
                  alt="gitHub"
                  width={20}
                  height={20}
                  className="brush w-6 h-fit"
                ></Image>
                <p className="text-new-darkpurple ml-1">
                  {gitHub ? "Git Hub" : "Please Request Access Below"}
                </p>
              </Link>
            </div>
            <div className="bg-new-lightpurple rounded-lg m-1">
              {liveLink ? (
                <div className="bg-new-lightpurple rounded-lg m-1">
                  <Link href={liveLink} id={title} target="_blank">
                    <p className="text-new-darkpurple ml-1">{title}</p>
                  </Link>
                </div>
              ) : (
                <div className="bg-new-lightpurple rounded-lg m-1 ">
                  <p className="ml-1 text-new-darkpurple">Not Hosted</p>
                </div>
              )}
            </div>
            {!isBoring ? (
              <div className="bg-new-lightpurple rounded-lg m-1 p-1">
                <Link
                  href={`/projects/${slug}`}
                  className="ml-1 text-new-darkpurple"
                >
                  Additional Info...
                </Link>
              </div>
            ) : (
              <div className="bg-new-lightpurple rounded-lg m-1 p-1">
                <p className="text-new-darkpurple ml-1">No Additional Info</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
