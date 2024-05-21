import Image from "next/image";
import React from "react";
import Link from "next/link";
import { BiCart, BiUser, BiSearch } from "react-icons/bi";
import Navlinks from "./Navlinks";

const Navbar = () => {
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
          type="search"
          placeholder="Search"
          className="p-2 flex-grow border border-gray-300 outline-yellow rounded-l-md"
        />
        <button type="submit" className="p-2 bg-lightGray border-gray-300">
          <BiSearch className="nav-icon" />
        </button>
      </form>
      <BiUser className="nav-icon" />
      <BiCart className="nav-icon" />
    </div>
        {/* <div className="flex gap-x-2 md:gap-x-3 items-center">
          <form action="" className="bg-orange-300 flex flex-grow">
            <div className="flex flex-grow items-center max-w-[600px]">
              <input type="search" placeholder="search" className="p-2 rounded-md border border-gray-300 outline-yellow" />
              < BiSearch className="nav-icon" />
            </div>
          </form>
          <BiUser className="nav-icon" />
          <BiCart className="nav-icon" />
        </div> */}
      </div>
      <nav className="bg-lightGray flex justify-center py-2">
        <Navlinks />
      </nav>
    </header>
    // END: Navbar //
  );
};

export default Navbar;
