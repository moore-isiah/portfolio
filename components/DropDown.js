import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const DropdownMenu = (props) => {
  const { isHomePage } = props;
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="relative">
      <button
        className="inline-flex items-center justify-center p-2 rounded-md text-gray-400"
        aria-expanded="false"
        onClick={toggleMenu}
      >
        <span className="sr-only">Open main menu</span>
        <svg
          className="block text-black h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          />
        </svg>
      </button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{
            opacity: isOpen ? 1 : 0,
            y: isOpen ? 0 : -10,
          }}
          className="absolute z-50 top-12 right-0 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 -mr-44"
        >
          <div className="bg-white flex flex-col p-3 bg-new-darkpurple rounded-lg -ml-14">
            <Link
              href={isHomePage ? "#about" : "/#about"}
              className="font-unbounded bg-new-darkpurple text-new-lightpink"
            >
              About Me
            </Link>
            <Link
              href={isHomePage ? "#projects" : "/#projects"}
              scrollSmooth
              className="font-unbounded bg-new-darkpurple text-new-lightpink"
            >
              Projects
            </Link>
            <Link
              href={isHomePage ? "#contact" : "/#contact"}
              className="font-unbounded bg-new-darkpurple text-new-lightpink"
            >
              Contact
            </Link>
            <Link
              href="/resume"
              target="_blank"
              className="font-unbounded bg-new-darkpurple text-new-lightpink"
            >
              Resume
            </Link>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default DropdownMenu;
