import Image from "next/image";
import React from "react";
import Link from "next/link";
import { BiCart, BiUser, BiSearch, BiMenu } from "react-icons/bi";
import Navlinks from "./Navlinks";

const Navbar = () => {
  return (
    // START: Navbar //
    <header className="flex flex-col w-full">
      <div className="flex justify-between lg:container lg:mx-auto py-[20px] px-4">
        <Link href="/" className="w-[200px] md:w-[300px]">
          <Image
            src="/images/logo/Boho-kids-brown.svg"
            alt="Boho Kids logo"
            width={175}
            height={200}
          />
        </Link>
        <div className="flex gap-x-2 md:gap-x-3 items-center text-lg xl:text-2xl">
          <BiUser className="nav-icon" />
          <BiCart className="nav-icon" />
          <BiSearch className="nav-icon" />
        </div>
      </div>
      <nav className="bg-lightGray flex justify-center py-2">
        <Navlinks />
      </nav>
    </header>
    // END: Navbar //
  );
};

export default Navbar;
