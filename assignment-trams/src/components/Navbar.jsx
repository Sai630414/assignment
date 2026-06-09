import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="relative [80px] mx-[10px] mt-[10px] px-6 md:px-20 flex items-center justify-between">

      {/* Logo */}
      <div
        className="text-[2rem] md:text-[2.2rem] text-black"
        style={{ fontFamily: "gerbil" }}
      >
        Elementum
      </div>

      {/* Desktop Navigation */}
      <ul className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center gap-16">
        {["Home", "Studio", "Services", "Contact", "FAQ's"].map((item) => (
          <li key={item}>
            <a
              href="#"
              className="hover:opacity-70 transition"
              style={{ fontFamily: "satoshi" }}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>

      {/* Hamburger */}
      <button
        onClick={() => setOpen(!open)}
        className="flex flex-col gap-[8px] cursor-pointer z-50"
      >
        <span
          className={`w-9 h-[1.5px] bg-black transition-all duration-300 ${
            open ? "rotate-45 translate-y-[5px]" : ""
          }`}
        />

        <span
          className={`w-9 h-[1.5px] bg-black transition-all duration-300 ${
            open ? "-rotate-45 -translate-y-[5px]" : ""
          }`}
        />
      </button>

      {/* Mobile Menu */}
      <div
        className={`absolute top-[80px] left-0 w-full bg-[#ffffff] shadow-md transition-all duration-300 overflow-hidden md:hidden ${
          open ? "max-h-[400px]" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col py-6">
          {["Home", "Studio", "Services", "Contact", "FAQ's"].map((item) => (
            <li key={item}>
              <a
                href="#"
                className="block px-8 py-4 text-lg hover:bg-black/5"
                style={{ fontFamily: "satoshi" }}
                onClick={() => setOpen(false)}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;