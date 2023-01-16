import React, { useState } from "react";

import submitMail from "../utils/submitMail";

export default function EmailForm() {
  const [contact, setContact] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    subject: "subject",
  });

  return (
    <div
      id="contact"
      className="w-full flex flex-col items-center my-5 font-unbounded"
    >
      <h1 className="text-new-darkpurple text-3xl justify-self-center">
        Contact
      </h1>
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
            className="rounded-sm bg-new-darkpurple p-1 text-new-lightpurple md:w-10/12 lg:w-10/12 my-2 ml-2 sm:w-full"
            placeholder="johndoe@gmail.com"
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
            className="rounded-sm bg-new-darkpurple p-1 ml-2 text-new-lightpurple my-2"
            placeholder="doe"
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
          onClick={() => submitMail(contact)}
          className="bg-new-darkpurple p-1 text-new-lightpink rounded-lg"
        >
          Submit
        </button>
      </div>
    </div>
  );
}
