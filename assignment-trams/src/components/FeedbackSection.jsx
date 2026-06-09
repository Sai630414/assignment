import React from "react";

import {
  fperson1,
  fperson2,
  fperson3,
  fperson4,
  fperson5,
  fperson6,
  fperson7,
  fperson8
} from "../assets/assets";

const FeedbackSection = () => {
  return (
    <section className="relative py-12 md:py-24 overflow-hidden">

      <div className="max-w-[1400px] mx-auto px-4 md:px-8 relative">

        {/* Heading */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-[45px] sm:text-[55px] md:text-[72px] leading-[0.9] text-black" style={{ fontFamily: "gerbil" }}>

            <span className="relative inline-block">
              <span className="absolute inset-0 bg-[#d8e5d7] rounded-full"></span>
              <span className="relative px-5">What</span>
            </span>

            {" "}our customer

            <br />

            says About Us
          </h2>

          {/* Yellow underline */}
          <svg
            className="mx-auto -mt-2"
            width="280"
            height="40"
          >
            <path
              d="M10 20 Q140 0 270 20"
              stroke="#f2b134"
              strokeWidth="4"
              fill="none"
            />

            <path
              d="M140 30 Q210 15 280 25"
              stroke="#f2b134"
              strokeWidth="4"
              fill="none"
            />
          </svg>
        </div>

        {/* Floating Images Left - Hidden on small */}

        <img
          src={fperson1}
          alt=""
          className="hidden md:block absolute left-20 top-0 w-24 h-24 rounded-full object-cover"
        />

        <img
          src={fperson2}
          alt=""
          className="hidden md:block absolute left-0 top-36 w-16 h-16 rounded-full object-cover"
        />

        <img
          src={fperson3}
          alt=""
          className="hidden md:block absolute left-24 top-44 w-44 h-44 rounded-full object-cover"
        />

        <img
          src={fperson4}
          alt=""
          className="hidden md:block absolute left-0 top-[340px] w-20 h-20 rounded-full object-cover"
        />

        {/* Floating Images Right - Hidden on small */}

        <img
          src={fperson5}
          alt=""
          className="hidden md:block absolute right-20 top-0 w-24 h-24 rounded-full object-cover"
        />

        <img
          src={fperson6}
          alt=""
          className="hidden md:block absolute right-52 top-14 w-16 h-16 rounded-full object-cover"
        />

        <img
          src={fperson7}
          alt=""
          className="hidden md:block absolute right-48 top-48 w-20 h-20 rounded-full object-cover"
        />

        <img
          src={fperson8}
          alt=""
          className="hidden md:block absolute right-0 top-64 w-52 h-52 rounded-full object-cover"
        />

        {/* Testimonial Card */}

        <div className="max-w-[650px] mx-auto bg-[#e7ece7] rounded-[20px] md:rounded-[40px] px-6 md:px-16 py-8 md:py-12 relative">

          {/* Opening Quote */}
          <span className="absolute left-4 md:left-8 top-2 md:top-6 text-[80px] md:text-[120px] leading-none text-[#bcc2bc]">
            ❝
          </span>

          {/* Closing Quote */}
          <span className="absolute right-4 md:right-10 bottom-1 md:bottom-0 text-[80px] md:text-[120px] leading-none text-[#bcc2bc]">
            ❞
          </span>

          <p className="text-center text-[14px] sm:text-[18px] md:text-[22px] leading-relaxed text-[#333]" style={{ fontFamily: "satoshi" }}>
            Elementum delivered the site within the timeline
            as they requested. In the end, the client found a
            50% increase in traffic within days since its launch.
            They also had an impressive ability to use technologies
            that the company hasn't used, which have also proved to
            be easy to use and reliable.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeedbackSection;