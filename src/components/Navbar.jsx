import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CgMenuRight, CgClose } from "react-icons/cg";

import { navLinks } from "../constants/index";
import { styles } from "../styles";
import { Logo } from "../assets/index";
import { LogoBall } from "./canvas";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState("");
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <div className=" w-12 h-12">
            <LogoBall icon={Logo} />
          </div>
          <p className=" text-white text-[18px] font-bold cursor-pointer flex ">
            Elision
            <span className=" hidden sm:flex">'s &nbsp;| &nbsp;Portfolio</span>
          </p>
        </Link>
        <ul className=" list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-sans cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        <div className=" sm:hidden flex">
          {toggle ? (
            <CgClose
              className=" text-[40px] font-bold cursor-pointer text-white"
              onClick={() => setToggle(!toggle)}
            />
          ) : (
            <CgMenuRight
              className=" text-[40px] font-bold cursor-pointer text-white"
              onClick={() => setToggle(!toggle)}
            />
          )}

          <div
            className={`${
              !toggle ? " hidden" : " flex"
            } py-6 px-6 bg-primary absolute top-24 right-3 w-[50%] z-10 
            rounded-xl border border-solid border-cyan-100 flex items-center justify-center`}
          >
            <ul className=" list-none flex justify-center items-center text-center flex-col gap-6 w-full px-2 py-1">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-white" : "text-secondary"
                  } font-popins font-medium cursor-pointer text-[16px] w-full px-2 py-1`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
