'use client'
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { BiCart, BiUser, BiSearch } from "react-icons/bi";
import Navlinks from "./Navlinks";

const Navbar = () => {
  // Setting bottom navbar to sticky on scroll
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    const mobile = window.innerWidth < 768; 
    const scrollThreshold = mobile ? 135.156 : 93.16; 

    if(window.scrollY > scrollThreshold) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  } 

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [])

  return (
    // START: Navbar //
    <header className="flex flex-col w-full">
      <div className="flex flex-col md:flex-row md:justify-between lg:container lg:mx-auto py-[20px] px-4">
        <Link href="/" className="mx-auto md:mx-0 w-[200px] md:w-[300px]">
          <Image
            src="/images/logo/Boho-kids-brown.svg"
            alt="Boho Kids logo"
            width={175}
            height={200}
          />
        </Link>
      <div className="flex gap-x-2 md:gap-x-3 items-center">
      <form action="" className="flex flex-grow max-w-[600px] rounded-md overflow-hidden">
        <input
          id="search"
          name="search"
          type="search"
          placeholder="Search"
          className="p-2 flex-grow border bg-white border-gray-300 outline-yellow rounded-l-md"
        />
        <button type="submit" className="p-2 bg-lightGray border-gray-300">
          <BiSearch className="nav-icon" />
        </button>
      </form>
      <BiUser className="nav-icon" />
      <BiCart className="nav-icon" />
    </div>
      </div>
      <nav className={`w-full h-[50px] py-2 flex justify-center items-center bg-lightGray shadow-md transition-transform duration-200 ${
          isSticky ? "fixed top-0 z-50" : "flex "
        }`}>
        <Navlinks />
      </nav>
    </header>
    // END: Navbar //
  );
};

export default Navbar;
