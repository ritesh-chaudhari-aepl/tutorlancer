/* eslint-disable react/prop-types */

import { useState, useEffect } from "react";
import { HiOutlineX } from "react-icons/hi";
import { AiOutlineMenu } from "react-icons/ai";
import MobileNav from "../navbar/MobileNav";
import Nav from "../navbar/Navbar";
import logo from "../../assets/D13_Logo.png";

function Header({ myRef }) {
  // mobile nav state
  const [mobileNav, setMobileNav] = useState(false);
  // header state
  const [isActive, setIsActive] = useState(false);
  // destructure header data
  // scroll event
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 70 ? setIsActive(true) : setIsActive(false);
    });
  });

  return (
    <header
      className={`${
        isActive
          ? "top-0 z-30 sm:top-0 sm:py-10 bg-white shadow-2xl overflow-hidden"
          : "top-0 sm:top-0"
      } py-6 sm:py-8 fixed w-full transition-all z-10`}
    >
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 flex justify-between items-center">
        {/* logo */}
        <a href="#">
          {/* <span  className="font-Inter font-bold tracking-[10px] text-2xl uppercase sm:text-[30px]">LOGO</span> */}
          <img src={logo} className="w-24" />
        </a>
        {/* nav - initially hidden - show on desktop mode */}
        <div className="hidden lg:flex lg:items-center lg:gap-3">
          <Nav ref={myRef} />
        </div>
        <div className="hidden lg:block">
          <a
            href="#"
            className="inline-block rounded-full bg-transparent px-3 py-4 text-sm font-medium text-black transition hover:bg-indigo-700 capitalize"
          >
            Sign Up
          </a>
          <a
            href="#"
            className="inline-block rounded-full bg-yellow-dark px-8 py-4 text-sm font-medium text-black transition hover:bg-indigo-700 capitalize"
          >
            Sign Up
          </a>
        </div>
        {/* cta button - initially hidden - show on desktop mode */}
        {/* mobile nav trigger btn - hidden on desktop */}
        <button className="lg:hidden" onClick={() => setMobileNav(!mobileNav)}>
          {mobileNav ? (
            <HiOutlineX className="text-3xl text-primary" />
          ) : (
            <AiOutlineMenu className="text-3xl text-secondary" />
          )}
        </button>
        {/* mobile nav - hidden on desktop */}
        <div
          className={`${
            mobileNav ? "left-0" : "-left-full"
          }  fixed top-0 bottom-0 w-[60vw] lg:hidden transition-all`}
        >
          <MobileNav />
        </div>
      </div>
    </header>
  );
}

export default Header;
