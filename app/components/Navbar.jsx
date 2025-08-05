"use client";
import NavLink from "./NavLink";
import React, { useState } from "react";
import ThemeToggle from "./ui/themeToggle";
import MenuOverlay from "./MenuOverlay";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "./ui/Logo";

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-30 backthemeColor bg-opacity-100">
      <div className="flex container lg:py-2 flex-wrap items-center justify-between mx-auto px-4 py-1">
        <Logo/>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-5 w-5 " />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto relative" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {
              navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink href={link.path} title={link.title} />
                </li>
              ))
            }
            <li>
              <ThemeToggle />
            </li>
          </ul>
        </div>
      </div>
      {
        navbarOpen ?
          <div className="grid grid-cols-5">
            <div className="pl-0 col-span-4">
              <MenuOverlay links={navLinks} />
            </div>
            <div className="place-content-center pr-1">
              <ThemeToggle />
            </div>
          </div>
          :
          null
      }
    </nav>
  );
};

export default Navbar;
