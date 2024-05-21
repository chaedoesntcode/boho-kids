import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-darkGray py-10 bg-lightGray w-full">
      <div class="px-20 py-5 md:py-10 flex flex-col lg:flex-row gap-y-10 md:gap-y-5 lg:gap-x-5">
        <div class="w-full lg:w-1/3 order-3 lg:order-1">
          <p class="h4">Shop <span className="text-brown">Boho Kids</span></p>
          <p class="small w-full md:w-1/2">
            Our unique selection combine functionality with fun, ensuring that
            every piece is beautiful, safe, and durable!
          </p>
        </div>
        <div class="w-full lg:w-1/3 order-2">
          <p class="h4">Get in touch</p>
          <div class="flex flex-col items-start justify-evenly">
            <p>Mon - Fri: 8:00 AM - 11:59 PM</p>
            <p>Sat: 8:00 AM - 8:00 PM</p>
            <p>Sun: 9:00 AM - 6:00 PM</p>
            <p className="small mt-2">All times Central Standard Time</p>
          </div>
        </div>
        <div class="w-full lg:w-1/3 order-1 lg:order-3">
          <p class="h4">Subscribe</p>
          <p class="text-muted-custom">
            Get the latest updates, news, and special offers directly in your
            inbox.
          </p>
          <div class="mt-3">
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
      <div class="px-20 lg:px-0 py-5 lg:text-center">
        <p class="small">&copy; {new Date().getFullYear()} Boho Kids. All rights reserved. <Link target="_blank" href='https://www.google.com' className="underline">Terms & Conditions</Link>&nbsp;|&nbsp;
        <Link target="_blank" href='https://www.google.com' className="underline">Privacy Policy</Link></p>
      </div>
    </footer>
  );
};

export default Footer;
