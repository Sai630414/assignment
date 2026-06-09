import React from "react";
import meeting1 from "../assets/images/meeting1.jpg";
import meeting2 from "../assets/images/meeting2.jpg";

const NextSection = () => {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      
      {/* Decorative Line */}
      <svg
        className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 1400 900"
        preserveAspectRatio="none"
      >
        <path
          d="M1050 250
             C1200 280 1320 350 1360 450
             C1380 550 1200 650 980 580
             C820 520 700 520 620 600"
          fill="none"
          stroke="#ff6f6f"
          strokeWidth="3"
        />
      </svg>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">

        {/* ---------- TOP ROW ---------- */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Text */}
          <div>
            <h2
              className="leading-[0.9] text-black"
              style={{
                fontFamily: "gerbil",
                fontSize: "clamp(3rem,7vw,5rem)",
              }}
            >
              <span className="relative inline-block">
                Tomorrow should

                <svg
                  className="absolute -bottom-3 left-0 w-full"
                  viewBox="0 0 250 20"
                  fill="none"
                >
                  <path
                    d="M5 10 Q120 -5 250 10"
                    stroke="#f4b53f"
                    strokeWidth="4"
                  />
                </svg>
              </span>

              <br />

              be better than{" "}

              <span className="relative inline-block">
                <span className="absolute inset-0 bg-[#d9e4d4] rounded-full"></span>
                <span className="relative px-4">today</span>
              </span>
            </h2>

            <p
              className="mt-8 max-w-[520px] text-[#222] leading-relaxed"
              style={{
                fontFamily: "satoshi",
                fontSize: "clamp(1rem,2vw,1.4rem)",
              }}
            >
              We are a team of strategists, designers communicators,
              researchers. Together, we believe that progress only
              happens when you refuse to play things safe.
            </p>

            <button
              className="mt-10 flex items-center gap-5"
              style={{ fontFamily: "satoshi" }}
            >
              <span>Read more</span>
              <span className="w-28 h-[1px] bg-black"></span>
              <span>→</span>
            </button>
          </div>

          {/* Image */}
          <div className="relative flex justify-center">
            <div className="absolute top-6 right-8 w-24 h-24 lg:w-40 lg:h-40 bg-[#ff6f6f] rotate-12"></div>

            <img
              src={meeting1}
              alt=""
              className="relative z-10 w-[320px] h-[320px] md:w-[420px] md:h-[420px] lg:w-[520px] lg:h-[520px] rounded-full object-cover"
            />
          </div>
        </div>

        {/* ---------- BOTTOM ROW ---------- */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mt-24 lg:mt-36">

          {/* Image */}
          <div className="relative flex justify-center order-2 lg:order-1">

            <div className="absolute left-6 top-10 w-24 h-24 lg:w-36 lg:h-36 bg-[#ff6f6f] rotate-12"></div>

            <div className="absolute right-4 bottom-0 w-24 h-24 lg:w-44 lg:h-44 bg-[#ff6f6f] [clip-path:polygon(50%_0%,0%_100%,100%_100%)]"></div>

            <img
              src={meeting2}
              alt=""
              className="relative z-10 w-[320px] h-[320px] md:w-[420px] md:h-[420px] lg:w-[520px] lg:h-[520px] rounded-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="order-1 lg:order-2">
            <h2
              className="leading-[0.9]"
              style={{
                fontFamily: "gerbil",
                fontSize: "clamp(3rem,7vw,5rem)",
              }}
            >
              <span className="relative inline-block">
                <span className="absolute inset-0 bg-[#d9e4d4] rounded-full"></span>
                <span className="relative px-4">See</span>
              </span>{" "}
              how we can
              <br />
              help you progress
            </h2>

            <svg
              className="mt-2 w-[250px] lg:w-[320px]"
              viewBox="0 0 320 25"
              fill="none"
            >
              <path
                d="M5 12 Q150 -2 310 12"
                stroke="#f4b53f"
                strokeWidth="4"
              />
            </svg>

            <p
              className="mt-8 max-w-[560px] text-[#222] leading-relaxed"
              style={{
                fontFamily: "satoshi",
                fontSize: "clamp(1rem,2vw,1.4rem)",
              }}
            >
              We add a layer of fearless insights and action that
              allows changemakers to accelerate their progress in
              areas such as brand, design, digital, comms and social
              research.
            </p>

            <button
              className="mt-10 flex items-center gap-5"
              style={{ fontFamily: "satoshi" }}
            >
              <span>Read more</span>
              <span className="w-28 h-[1px] bg-black"></span>
              <span>→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NextSection;