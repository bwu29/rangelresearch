import React from "react";
import LangSwitchBtn from "./buttonLanguage";
import Link from "next/link";

const NavigationBar = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-white p-6 drop-shadow-md">
      <div className="flex items-center flex-shrink-0 text-gray-purple mr-6 bg-transparent">
        <span className="font-bold text-2xl tracking-tight bg-transparent">
          Rangel Research Team
        </span>
      </div>

      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto bg-transparent ">
        <div className="text-md font-semibold flex space-x-10 justify-end lg:flex-grow pr-5 bg-transparent">
          <Link
            href="/home"
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-purple hover:text-brown5 bg-transparent"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-purple hover:text-brown5 bg-transparent"
          >
            About Project
          </Link>
          <Link
            href="/teamBios"
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-purple hover:text-brown5 bg-transparent"
          >
            Research Team
          </Link>
        </div>
        <div className="flex space-x-3 items-center justify-between bg-transparent">
          <LangSwitchBtn initialLanguage="English"/>
          <Link
            href= "/about#survey-block"
            className="inline-block text-sm font-semibold px-4 py-2.5 leading-none bg-transparent border border-gray-purple rounded text-gray-purple hover:text-brown1 hover:bg-brown5 hover:border-transparent mt-4 lg:mt-0 ease-out duration-100"
          >
            Qualtrics Survey
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
