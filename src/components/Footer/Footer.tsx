import React from "react";
import { Link } from "react-router-dom";
import { IconsFacebook } from "../../icons/IconsFacebook";
import { IconsGoogle } from "../../icons/IconsGoogle";
import { IconsGoogle1 } from "../../icons/IconsGoogle1";
import { IconsTwitter } from "../../icons/IconsTwitter";

export const Footer = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full items-center justify-center gap-6 pt-10 pb-5 px-4 sm:px-20 relative">
      <div className="flex w-full max-w-[1280px] items-center justify-between px-0 py-5 relative flex-[0_0_auto]">
        <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-extrabold text-white text-[32px] tracking-[0] leading-[normal]">
          LOGO
        </div>

        <div className="inline-flex items-center gap-4 relative flex-[0_0_auto]">
          <IconsFacebook className="!relative !w-6 !h-6" />
          <IconsTwitter className="!relative !w-6 !h-6" />
          <IconsGoogle1 className="!relative !w-6 !h-6" />
          <IconsGoogle className="!relative !w-5 !h-5" />
        </div>

        <div className="hidden sm:flex items-center justify-center gap-10 absolute top-8 left-1/2 transform -translate-x-1/2">
          <Link to="/films" className="relative w-fit mt-[-1.00px] font-b-1 font-[number:var(--b-1-font-weight)] text-white text-[length:var(--b-1-font-size)] tracking-[var(--b-1-letter-spacing)] leading-[var(--b-1-line-height)] whitespace-nowrap [font-style:var(--b-1-font-style)] hover:text-[#00cde7]">
            Films
          </Link>

          <Link to="/about" className="relative w-fit mt-[-1.00px] font-b-1 font-[number:var(--b-1-font-weight)] text-white text-[length:var(--b-1-font-size)] tracking-[var(--b-1-letter-spacing)] leading-[var(--b-1-line-height)] whitespace-nowrap [font-style:var(--b-1-font-style)] hover:text-[#00cde7]">
            About us
          </Link>

          <Link to="/contact" className="relative w-fit mt-[-1.00px] font-b-1 font-[number:var(--b-1-font-weight)] text-white text-[length:var(--b-1-font-size)] tracking-[var(--b-1-letter-spacing)] leading-[var(--b-1-line-height)] whitespace-nowrap [font-style:var(--b-1-font-style)] hover:text-[#00cde7]">
            Contact us
          </Link>
        </div>
      </div>

      <img
        className="relative self-stretch w-full h-px object-cover"
        alt="Line"
        src="https://c.animaapp.com/m8r8qd37gzxDU0/img/line-2.svg"
      />

      <p className="relative w-fit font-b-3 font-[number:var(--b-3-font-weight)] text-white text-[length:var(--b-3-font-size)] tracking-[var(--b-3-letter-spacing)] leading-[var(--b-3-line-height)] whitespace-nowrap [font-style:var(--b-3-font-style)]">
        Copyright © 2023 BRIX Templates | All Rights Reserved |{" "}
        <Link to="/terms" className="text-white hover:text-[#00cde7]">Terms and Conditions</Link> |{" "}
        <Link to="/privacy" className="text-white hover:text-[#00cde7]">Privacy Policy</Link>
      </p>
    </div>
  );
};
