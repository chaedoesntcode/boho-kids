import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-darkGray py-10 bg-lightGray w-full">
      <div className="px-20 py-5 md:py-10 flex flex-col lg:flex-row gap-y-10 md:gap-y-5 lg:gap-x-5">
        <div className="w-full lg:w-1/3 order-3 lg:order-1">
          <p className="h4">Shop <span className="text-brown">Boho Kids</span></p>
          <p className="small w-full md:w-1/2">
            Our unique selection combine functionality with fun, ensuring that
            every piece is beautiful, safe, and durable!
          </p>
        </div>
        <div className="w-full lg:w-1/3 order-2">
          <p className="h4">Get in touch</p>
          <div className="flex flex-col items-start justify-evenly">
            <p>Mon - Fri: 8:00 AM - 11:59 PM</p>
            <p>Sat: 8:00 AM - 8:00 PM</p>
            <p>Sun: 9:00 AM - 6:00 PM</p>
            <p className="small mt-2">All times Central Standard Time</p>
          </div>
        </div>
        <div className="w-full lg:w-1/3 order-1 lg:order-3">
          <p className="h4">Subscribe</p>
          <p className="text-muted-custom">
            Get the latest updates, news, and special offers directly in your
            inbox.
          </p>
          <div className="mt-3">
            <form className="flex flex-col md:flex-row md:gap-2">
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                type="email"
                className="p-2 flex-grow xl:flex-grow-0 xl:w-1/2 rounded-md border border-gray-300 outline-yellow"
                placeholder="Enter your email"
              />
              <button type="submit" className="mt-2 md:mt-0 btn-highlight__filled">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="px-20 lg:px-0 py-5 lg:text-center">
        <p className="small">&copy; {new Date().getFullYear()} Boho Kids. All rights reserved. <Link target="_blank" href='https://www.google.com' className="underline">Terms & Conditions</Link>&nbsp;|&nbsp;
        <Link target="_blank" href='https://www.google.com' className="underline">Privacy Policy</Link></p>
      </div>
    </footer>
  );
};

export default Footer;
