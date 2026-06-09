import React from "react";

const SubscribeSection = () => {
  return (
    <section className="relative bg-[#d8e5d7] py-16 md:py-28 overflow-hidden">

      {/* Decorative Arrows */}
      <svg
        className="absolute top-0 left-1/2 -translate-x-1/2"
        width="250"
        height="90"
        viewBox="0 0 250 90"
        fill="none"
      >
        <path
          d="M70 0C70 40 20 30 20 80"
          stroke="#ff6b6b"
          strokeWidth="3"
          fill="none"
        />
        <path
          d="M140 0C140 40 90 30 90 80"
          stroke="#ff6b6b"
          strokeWidth="3"
          fill="none"
        />

        <path
          d="M16 75L20 82L26 74"
          stroke="#ff6b6b"
          strokeWidth="3"
          fill="none"
        />

        <path
          d="M86 75L90 82L96 74"
          stroke="#ff6b6b"
          strokeWidth="3"
          fill="none"
        />
      </svg>

      {/* Purple Shape */}
      <div className="absolute right-6 md:right-12 top-1/2 -translate-y-1/2">
        <div className="w-[100px] md:w-[140px] h-[140px] md:h-[180px] bg-gradient-to-br from-violet-400 to-violet-600 rounded-tl-full rounded-br-full rotate-12"></div>
      </div>

      {/* Content */}
      <div className="max-w-[900px] mx-auto text-center px-4 md:px-6">

        <h2 className="text-[45px] sm:text-[60px] md:text-[90px] leading-[0.9] text-black" style={{ fontFamily: "gerbil" }}>
          Subscribe to <br/> our newsletter
        </h2>

        <p className="text-[14px] sm:text-[16px] md:text-[22px] text-[#222] mt-6 md:mt-8" style={{ fontFamily: "satoshi" }}>
          To make your stay special and even more memorable
        </p>

        <button
          className="
            mt-8
            md:mt-12
            bg-black
            text-white
            font-medium
            px-6
            md:px-10
            py-4
            md:py-5
            rounded-full
            text-sm
            md:text-lg
            transition-all
            duration-300
            hover:scale-105
          "
          style={{ fontFamily: "satoshi" }}
        >
          Subscribe Now
        </button>
      </div>
    </section>
  );
};

export default SubscribeSection;