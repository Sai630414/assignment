import React from "react";

import {
  person1,
  person2,
  person3,
  person4,
  person5,
  person6,
  person7,
  person8,
} from "../assets/assets";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden min-h-screen">

      {/* Left Doodle */}
      <div className="absolute left-0 top-[280px] z-0">
        <svg width="120" height="320" viewBox="0 0 120 320" fill="none">
          <path
            d="M50 0C120 30 120 100 60 150C0 200 0 270 70 320"
            stroke="black"
            strokeWidth="4"
          />
          <path
            d="M0 0C70 30 70 100 10 150C-50 200 -50 270 20 320"
            stroke="#ff9a9a"
            strokeWidth="4"
          />
        </svg>
      </div>

      {/* Purple Shape */}
      <div className="absolute right-24 top-[260px] z-10">
        <div className="w-[120px] h-[120px] bg-gradient-to-br from-violet-400 to-violet-600 rounded-tl-full rounded-br-full rotate-12"></div>
      </div>

      {/* Content */}
      <div className="max-w-[1400px] mx-auto pt-20 px-4 md:px-8 lg:px-10 text-center relative z-20">

        {/* Heading */}
        <h1 className="text-[50px] sm:text-[60px] md:text-[75px] lg:text-[90px] leading-[0.95] text-black" style={{ fontFamily: "gerbil" }}>
          <div>The thinkers and</div>

          <div>
            doers were{" "}
            <span className="relative inline-block">
              <span className="absolute inset-0 bg-pink-300 rounded-full"></span>
              <span className="relative px-8">changing</span>
            </span>
          </div>

          <div>
            the{" "}
            <span className="relative inline-block">
              <span className="absolute inset-0 bg-green-100 rounded-full"></span>
              <span className="relative px-8">status</span>
            </span>{" "}
            Quo with
          </div>
        </h1>

        {/* Yellow Scribble */}
        <div className="flex justify-center -mt-2">
          <svg width="550" height="50">
            <path
              d="M20 25 Q280 0 530 25"
              stroke="#f4b53f"
              strokeWidth="5"
              fill="none"
            />
            <path
              d="M120 40 Q300 20 500 35"
              stroke="#f4b53f"
              strokeWidth="5"
              fill="none"
            />
          </svg>
        </div>

        {/* Description */}
        <p className="max-w-[850px] mx-auto mt-6 text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] leading-relaxed text-[#222]" style={{ fontFamily: "satoshi" }}>
          We are a team of strategists, designers, communicators,
          researchers. Together, we believe that progress only happens
          when you refuse to play things safe.
        </p>

        {/* Team Images */}
        <div className="relative h-auto md:h-[420px] mt-20 flex flex-wrap justify-center gap-4 md:gap-0">

          <img
            src={person1}
            alt=""
            className="absolute left-0 md:left-0 top-36 md:top-36 w-24 md:w-44 h-24 md:h-44 rounded-full object-cover"
          />

          <img
            src={person2}
            alt=""
            className="absolute left-20 md:left-44 top-20 md:top-20 w-24 md:w-44 h-24 md:h-44 rounded-full object-cover"
          />

          <img
            src={person3}
            alt=""
            className="absolute left-40 md:left-[420px] top-0 md:top-0 w-24 md:w-44 h-24 md:h-44 rounded-full object-cover"
          />

          <img
            src={person4}
            alt=""
            className="absolute left-56 md:left-[560px] top-28 md:top-28 w-24 md:w-44 h-24 md:h-44 rounded-full object-cover"
          />

          <img
            src={person5}
            alt=""
            className="hidden md:block absolute left-[760px] top-10 w-44 h-44 rounded-full object-cover"
          />

          <img
            src={person6}
            alt=""
            className="hidden md:block absolute left-[920px] top-30 w-44 h-44 rounded-full object-cover"
          />

          <img
            src={person7}
            alt=""
            className="hidden md:block absolute right-[120px] top-0 w-44 h-44 rounded-full object-cover"
          />

          <img
            src={person8}
            alt=""
            className="hidden md:block absolute right-0 top-20 w-44 h-44 rounded-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;