import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#d8e5d7] pt-4 pb-10">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">

        {/* Top Border */}
        <div className="border-t border-black/30 mb-12 md:mb-16"></div>

        {/* Footer Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-16">

          {/* Company */}
          <div>
            <h3 className="text-[22px] sm:text-[26px] md:text-[32px] mb-6 md:mb-8" style={{ fontFamily: "gerbil" }}>
              Company
            </h3>

            <ul className="space-y-4 md:space-y-6 text-[14px] md:text-[18px] text-black/80" style={{ fontFamily: "satoshi" }}>
              <li>
                <a href="#">Home</a>
              </li>

              <li>
                <a href="#">Studio</a>
              </li>

              <li>
                <a href="#">Service</a>
              </li>

              <li>
                <a href="#">Blog</a>
              </li>
            </ul>
          </div>

          {/* Terms */}
          <div>
            <h3 className="text-[22px] sm:text-[26px] md:text-[32px] mb-6 md:mb-8" style={{ fontFamily: "gerbil" }}>
              Terms & Policies
            </h3>

            <ul className="space-y-4 md:space-y-6 text-[14px] md:text-[18px] text-black/80" style={{ fontFamily: "satoshi" }}>
              <li>
                <a href="#">Privacy Policy</a>
              </li>

              <li>
                <a href="#">Terms & Conditions</a>
              </li>

              <li>
                <a href="#">Explore</a>
              </li>

              <li>
                <a href="#">Accessibility</a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-[22px] sm:text-[26px] md:text-[32px] mb-6 md:mb-8" style={{ fontFamily: "gerbil" }}>
              Follow Us
            </h3>

            <ul className="space-y-4 md:space-y-6 text-[14px] md:text-[18px] text-black/80" style={{ fontFamily: "satoshi" }}>
              <li>
                <a href="#">Instagram</a>
              </li>

              <li>
                <a href="#">LinkedIn</a>
              </li>

              <li>
                <a href="#">Youtube</a>
              </li>

              <li>
                <a href="#">Twitter</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[22px] sm:text-[26px] md:text-[32px] mb-6 md:mb-8" style={{ fontFamily: "gerbil" }}>
              Terms & Policies
            </h3>

            <div className="text-[14px] md:text-[18px] text-black/80 space-y-4 md:space-y-6" style={{ fontFamily: "satoshi" }}>
              <p>
                1498w Fulton ste, STE
                <br />
                2D Chico, IL 63867.
              </p>

              <p>(123) 456789000</p>

              <p>info@elementum.com</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-12 md:mt-28">
          <p className="text-[12px] md:text-[16px] text-black/60" style={{ fontFamily: "satoshi" }}>
            ©2023 Elementum. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;