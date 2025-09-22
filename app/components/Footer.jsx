import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer id="contact" className="bg-darkGray py-10 bg-lightGray w-full">
      <div className=" px-4 md:px-10 lg:px-20 py-5 md:py-10 flex flex-col lg:flex-row gap-y-10 md:gap-y-5 lg:gap-x-5">
        <div className="w-full lg:w-1/3 order-3 lg:order-1">
          <p className="h4">
            Shop <span className="text-brown">Boho Kids</span>
          </p>
          <p className="w-full md:w-2/3">
            Our unique selection combine functionality with fun, ensuring that
            every piece is beautiful, safe, and durable!
          </p>
        </div>
        <div className="w-full lg:w-1/3 order-2">
          <p className="h4">Get in touch</p>
          <div className="flex flex-col items-start justify-evenly">
            <p>Phone: 123-456-7890</p>
            <p>Mon - Fri: 8:00 AM - 10:00 PM</p>
            <p>Sat: 8:00 AM - 8:00 PM</p>
            <p>Closed Sundays</p>
            <p className="small italic mt-2">All times Central Standard Time</p>
          </div>
        </div>
        <div className="w-full lg:w-1/3 order-1 lg:order-3">
          <p className="h4">Subscribe</p>
          <p className="text-muted-custom">
            Get the latest updates, news, and special offers.
          </p>
          <div className="mt-3">
            <form
              name="subscribe"
              className="flex flex-col md:flex-row md:gap-2"
            >
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="p-2 flex-grow xl:flex-grow-0 xl:w-1/2 rounded-md border border-gray-300 outline-yellow"
                placeholder="Enter your email"
                autoComplete="true"
              />
              <button
                type="submit"
                className="mt-2 md:mt-0 btn-highlight__filled"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="px-4 md:px-10 lg:px-20 py-5 flex flex-col md:flex-row gap-2 justify-between">
        <p className="small opacity-80">
          &copy; {new Date().getFullYear()} Boho Kids. All rights reserved.{" "}
          <Link
            target="_blank"
            href="https://www.google.com"
            className="underline"
          >
            Terms & Conditions
          </Link>
          &nbsp;|&nbsp;
          <Link
            target="_blank"
            href="https://www.google.com"
            className="underline"
          >
            Privacy Policy
          </Link>
        </p>
        <p class="small opacity-80">
          Built by{" "}
          <a rel="noopener" href="https://chae.dev" class="font-bold">
            Chae
          </a>
          .
        </p>
      </div>
    </footer>
  );
};

export default Footer;
