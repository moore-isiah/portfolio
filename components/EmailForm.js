import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import linkedIcon from "../public/images/linkedin.png";
import gitIcon from "../public/images/github.png";

import submitMail from "../utils/submitMail";

export default function EmailForm() {
  const [goodToast, setToast] = useState(null);
  const [isActiveToast, setActiveToast] = useState(false);
  const [contact, setContact] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    subject: "",
  });

  const resetToast = () => {
    setActiveToast(false);
    setToast(null);
  };

  const handleSubmit = async () => {
    const emailRegex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    setActiveToast(true);

    if (!emailRegex.test(contact.email)) {
      setTimeout(() => setToast("badEmail"), 100);
      setTimeout(() => {
        resetToast();
      }, 5000);
      return null;
    }
    try {
      let click = await submitMail(contact);
      click ? setToast("sent") : setToast("err");
      setTimeout(() => {
        resetToast();
      }, 5000);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div
      id="contact"
      className="w-full flex flex-col items-center my-5 font-unbounded"
    >
      <h1 className="text-new-darkpurple text-3xl justify-self-center">
        Contact
      </h1>
      <div className="flex">
        <div className="w-8 h-8 bg-new-darkpurple ml-3 flex justify-center items-center rounded-lg">
          <Link href="https://www.linkedin.com/in/isiah-moore/" target="_blank">
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
      <div className="md:w-1/2 lg:w-1/2 sm:w-full flex justify-center items-center flex-wrap">
        <div className="flex flex-col w-full items-center md:w-1/2">
          <label htmlFor="first" className="text-new-darkpurple text-lg">
            First Name
          </label>
          <input
            id="first"
            type="text"
            className="rounded-sm bg-new-darkpurple p-1 ml-2 text-new-lightpurple my-2"
            placeholder="john"
            value={contact.firstName}
            autoComplete="off"
            onChange={(e) => {
              setContact({ ...contact, firstName: e.target.value });
            }}
          />
        </div>
        <div className="flex flex-col w-full items-center md:w-1/2">
          <label htmlFor="last" className="text-new-darkpurple ml-4 text-lg">
            Last Name
          </label>
          <input
            id="last"
            type="text"
            className="rounded-sm bg-new-darkpurple p-1 ml-2 text-new-lightpurple my-2"
            placeholder="doe"
            value={contact.lastName}
            autoComplete="off"
            onChange={(e) => {
              setContact({ ...contact, lastName: e.target.value });
            }}
          />
        </div>
        <div className="flex flex-col w-full items-center">
          <label htmlFor="email" className="text-new-darkpurple ml-4 text-lg">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="rounded-sm bg-new-darkpurple p-1 text-new-lightpurple w-3/4 md:w-10/12 lg:w-10/12 my-2 ml-2"
            value={contact.email}
            autoComplete="off"
            onChange={(e) => {
              setContact({ ...contact, email: e.target.value });
            }}
          />
        </div>
        <div className="flex flex-col w-full items-center">
          <label htmlFor="last" className="text-new-darkpurple ml-4 text-lg">
            Subject
          </label>
          <input
            id="subject"
            type="text"
            className="rounded-sm bg-new-darkpurple p-1 ml-2 w-3/4 text-new-lightpurple my-2"
            value={contact.subject}
            autoComplete="off"
            onChange={(e) => {
              setContact({ ...contact, subject: e.target.value });
            }}
          />
        </div>

        <div className="flex flex-col w-full items-center">
          <h1 className="text-new-darkpurple text-lg text-center w-full">
            Message
          </h1>
          <textarea
            type="textbox"
            id="message"
            value={contact.message}
            autoComplete="off"
            onChange={(e) => {
              setContact({ ...contact, message: e.target.value });
            }}
            className="rounded-sm bg-new-darkpurple p-1 text-new-lightpurple w-3/4 h-44 ml-2 my-2"
          />
        </div>
        <button
          onClick={handleSubmit}
          className="bg-new-darkpurple p-1 text-new-lightpink rounded-lg"
        >
          Submit
        </button>
      </div>
      {isActiveToast && (
        <div className="w-screen h-screen flex justify-center items-center z-50 fixed top-0 left-0 font-unbounded">
          <div className="bg-new-darkpurple text-new-lightpurple flex justify-between items-center flex-col h-32 w-60 rounded-xl overflow-hidden">
            <div
              className="w-full h-5 flex justify-end pr-2 cursor-pointer className='font-serif"
              onClick={resetToast}
            >
              X
            </div>
            {!goodToast ? (
              <h1>Sending...</h1>
            ) : goodToast == "sent" ? (
              <div className="text-center">
                <h1>Email Sent</h1>
                <h1>Successfully</h1>
              </div>
            ) : goodToast == "badEmail" ? (
              <div className="text-center">
                <h1>Invalid Email</h1>
                <h1>Please Resubmit</h1>
              </div>
            ) : (
              <div className="text-center">
                <h1>Error</h1>
                <h1>Failed To Send</h1>
              </div>
            )}
            <div
              className={`h-5 justify-self-end w-full bar ${
                !goodToast ? "" : "activeBar"
              }`}
            >
              <div className="w-full h-full block float-left bg-new-lightpink"></div>
              <div className="w-full h-full block float-left bg-new-darkpurple"></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
