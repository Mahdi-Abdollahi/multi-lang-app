import React, { useState, useContext, useMemo, useEffect } from "react";
import Selector from "./Selector";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";
import { LanguageContext } from "../context/LanguageContext";
import { languageOptions } from "../languages";

const Navbar = () => {
  const { language, changeLangHandler, dictionary } =
    useContext(LanguageContext);
  const [openNav, setOpenNav] = useState(true);
  const navHandler = () => {
    setOpenNav((prevState) => !prevState);
  };
  const selectorOptions = useMemo(
    () => Object.keys(languageOptions).map((languageOption) => languageOption),
    []
  );

  return (
    <nav className="p-5 bg-[#4752db] shadow flex md:items-center md:justify-between uppercase">
      <ul
        className={`ltr:mr-auto rtl:ml-auto  text-white bg-[#4752db] w-full md:flex md:items-centermd:z-auto md:static absolute left-0 md:w-auto  md:pl-0  md:opacity-100 transition-all ease-in duration-80 ${
          openNav ? "z-1 top-[80px] opacity-100" : "z-[-1] top-[-400px]"
        } opacity-100`}
      >
        <li className="w-full px-5 py-4 cursor-pointer md:w-auto md:my-0 hover:bg-[#000]">
          <Link href="/">{dictionary("home")}</Link>
        </li>
        <li className="w-full px-5 py-4 cursor-pointer md:w-auto md:my-0 hover:bg-[#000]">
          <Link href="/events">{dictionary("events")}</Link>
        </li>
        <li className="w-full px-5 py-4 cursor-pointer md:w-auto md:my-0 hover:bg-[#000]">
          <Link href="/about">{dictionary("aboutUs")}</Link>
        </li>
        <li className="w-full px-5 py-4 cursor-pointer md:w-auto md:my-0 hover:bg-[#000]">
          <Link href="/contact">{dictionary("contactUs")}</Link>
        </li>
      </ul>
      <button
        onClick={navHandler}
        className="text-3xl cursor-pointer md:hidden"
      >
        <GiHamburgerMenu className="text-white" />
      </button>

      <Selector
        options={selectorOptions}
        onSelectOption={changeLangHandler}
        selectedOption={language}
        selectorText="lang"
      />
    </nav>
  );
};

export default Navbar;
