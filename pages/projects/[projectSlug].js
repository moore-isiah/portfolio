import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

import Header from "../../components/Header";

import arrow from "../../public/images/rightArrow.png";
import circle from "../../public/images/circle.png";
import gitIcon from "../../public/images/github.png";

import data from "../../projectsData";

export default function Project() {
  const router = useRouter();
  const { projectSlug: slug } = router.query;
  const [project, setProject] = useState(null);
  const [currentImg, setImg] = useState(0);
  const [isHovered, setHover] = useState(false);

  let projectKeys = Object.keys(data);

  useEffect(() => {
    if (!router.isReady) return;
    projectKeys.map((item) => {
      if (data[item].slug == slug) {
        setProject(data[item]);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug, router.isReady, projectKeys]);

  if (!project) {
    return <p>404 Error... Item not found</p>;
  }

  const handleLeftClick = () => {
    currentImg === 0
      ? setImg(project.images.length - 1)
      : setImg(currentImg - 1);
  };

  const handleRightClick = () => {
    currentImg >= project.images.length - 1
      ? setImg(0)
      : setImg(currentImg + 1);
  };

  return (
    <div className="w-full h-full bg-new-grey flex flex-col md:grid grid-cols-2 font-unbounded pt-14 overflow-x-hidden text-center">
      <Header isHomePage={false} />
      <div
        className="w-full col-start-1 flex flex-col items-center mb-7 mt-0 "
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div className="w-full mb-6 flex justify-center">
          {project.images.length > 1 && isHovered && (
            <div className="flex justify-around items-center w-1/12">
              <Image
                src={arrow.src}
                alt="Left Arrow"
                onClick={handleLeftClick}
                className="z-30 rotate-180 cursor-pointer filter-lightpink"
                width="20"
                height="20"
              ></Image>
            </div>
          )}

          {project.images.length === 0 && <p>No Images To Display</p>}
          <div className="w-3/4 justify-center flex ">
            {project.images.map((img, index) => {
              return (
                // eslint-disable-next-line react/jsx-key
                <div
                  className={currentImg === index ? "slide active" : "slide"}
                >
                  {currentImg === index && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={img.src}
                      key={img.src}
                      alt="some img"
                      className="z-10 w-fill m-0 rounded-lg self-center h-40 md:h-44 xl:h-56 2xl:h-72"
                      onMouseDown={() => {
                        handleRightClick();
                      }}
                    ></img>
                  )}
                </div>
              );
            })}
          </div>

          {project.images.length > 1 && isHovered && (
            <div className="flex justify-around items-center w-1/12">
              <Image
                src={arrow.src}
                alt="Right Arrow"
                onClick={handleRightClick}
                className="z-30 cursor-pointer filter-lightpink self-center"
                width="20"
                height="20"
              ></Image>
            </div>
          )}
        </div>
        <div className="flex cursor-pointer">
          {project.images.map((item, index) =>
            currentImg === index ? (
              <Image
                src={circle.src}
                key={index}
                alt="current"
                width={20}
                height={20}
                className="ml-1 filter-lightpink"
              ></Image>
            ) : (
              <Image
                src={circle.src}
                key={index}
                alt="others"
                width={20}
                height={20}
                className="ml-1 brush"
                onClick={() => {
                  setImg(index);
                }}
              ></Image>
            )
          )}
        </div>

        <div className="w-full mb-2 flex flex-col items-center ">
          <h1 className="text-new-darkpurple text-4xl m-3">Technologies</h1>
          <div className="flex flex-wrap flex-row justify-center">
            {project.tech.map((name) => {
              return (
                <div
                  key={name}
                  className="p-1 bg-new-darkpurple rounded-lg m-2"
                >
                  <p className="mx-2 text-new-lightpink text-2xl">{name}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="w-full mb-2 flex flex-col items-center ">
          <h1 className="text-new-darkpurple text-4xl m-3">Links</h1>
          <div className=" bg-orange-500 rounded-lg m-2 p-1">
            <Link
              href={project.gitHub}
              id={project.gitHub}
              className="flex items-center mx-2"
              target="_blank"
            >
              <Image
                src={gitIcon}
                alt="gitHub"
                className="brush w-6 h-6 mb-1"
              ></Image>
              <p className="text-new-darkpurple ml-2 text-2xl">Git Hub</p>
            </Link>
          </div>
          <div className="bg-new-darkpurple rounded-lg m-2 p-1">
            {project.liveLink ? (
              <div>
                <Link
                  href={liveLink}
                  id={title}
                  className="text-2xl text-new-lightpink mx-2"
                  target="_blank"
                >
                  Go To Site
                </Link>
              </div>
            ) : (
              <div>
                <p className="ml-1 text-new-lightpink text-2xl mx-2">
                  Not Hosted
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="w-full h-screen  px-4 overflow-y-scroll rounded-lg font-unbounded text-new-darkpurple col-start-2 shadow-inner flex flex-col">
        {project.longDescription.map((item) => {
          return (
            <>
              {item[0] && (
                <Image
                  src={item[0]}
                  alt="description image"
                  className="w-10/12 self-center my-2 rounded-lg"
                ></Image>
              )}
              {item[1] && <h1 className="text-xl">{item[1]}</h1>}
              {item[2] && <p className="my-2">{item[2]}</p>}
            </>
          );
        })}
      </div>
    </div>
  );
}
