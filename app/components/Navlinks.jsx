"use client";
import React from "react";
import Link from "next/link";
import { navLinks } from "@/lib/data";
import { useState } from "react";

const Navlinks = () => {
  // Getting clicked link and setting it to active
  const [activeLink, setActiveLink] = useState("");
  const handleClick = (href) => {
    setActiveLink(href);
  };

  return (
    <ul className="flex gap-x-2 h-full items-center">
      {navLinks.map((link) => {
        const isActive = activeLink === link.href;
        return (
          <li className="font-medium px-2 py-2 rounded-md" key={link.label}>
            <Link
              onClick={() => handleClick(link.href)}
              className={`${
                isActive ? "font-bold" : ""
              } flex items-center justify-center hover:text-yellow transition-all duration-300`}
              href={link.href}
            >
              {link.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Navlinks;
