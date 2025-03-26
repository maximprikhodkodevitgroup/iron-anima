import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faUser, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { ButtonPrimary } from "../ButtonPrimary";
import { ButtonSecondary } from "../ButtonSecondary";

interface Props {
  property1: "default";
  className: any;
  visible: boolean;
  visible1: boolean;
  visible2: boolean;
}

export const Header = ({
  property1,
  className,
  visible = true,
  visible1 = true,
  visible2 = true,
}: Props): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className={`relative w-full ${className}`}>
      <div className={`flex w-full max-w-[1280px] items-center justify-between relative`}>
        <div className="inline-flex items-center gap-10 relative self-stretch flex-[0_0_auto]">
          <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-extrabold text-white text-[32px] tracking-[0] leading-[normal] cursor-pointer">
            LOGO
          </div>

          <img
            className="hidden md:block relative self-stretch w-px mt-[-0.50px] mb-[-0.50px] object-cover"
            alt="Line"
            src="https://c.animaapp.com/Fld8fLPh/img/line-1-1.svg"
          />

          <div className="hidden md:inline-flex items-center justify-center gap-10 relative flex-[0_0_auto]">
            <div className="relative w-fit mt-[-1.00px] font-b-1 font-[number:var(--b-1-font-weight)] text-white text-[length:var(--b-1-font-size)] tracking-[var(--b-1-letter-spacing)] leading-[var(--b-1-line-height)] whitespace-nowrap [font-style:var(--b-1-font-style)] hover:text-[#00cde7] cursor-pointer transition-colors duration-300">
              Films
            </div>

            <div className="relative w-fit mt-[-1.00px] font-b-1 font-[number:var(--b-1-font-weight)] text-white text-[length:var(--b-1-font-size)] tracking-[var(--b-1-letter-spacing)] leading-[var(--b-1-line-height)] whitespace-nowrap [font-style:var(--b-1-font-style)] hover:text-[#00cde7] cursor-pointer transition-colors duration-300">
              About us
            </div>

            <div className="relative w-fit mt-[-1.00px] font-b-1 font-[number:var(--b-1-font-weight)] text-white text-[length:var(--b-1-font-size)] tracking-[var(--b-1-letter-spacing)] leading-[var(--b-1-line-height)] whitespace-nowrap [font-style:var(--b-1-font-style)] hover:text-[#00cde7] cursor-pointer transition-colors duration-300">
              Contact us
            </div>
          </div>
        </div>

        <div className="md:hidden">
          <button
            className="text-white hover:text-[#00cde7] transition-colors duration-300 bg-transparent border-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} size="lg" />
          </button>
        </div>

        <div className="hidden md:flex items-center gap-6 relative self-stretch flex-[0_0_auto]">
          <FontAwesomeIcon 
            icon={faShoppingCart} 
            className="text-white hover:text-[#00cde7] cursor-pointer text-2xl transition-colors duration-300"
          />

          {visible && (
            <FontAwesomeIcon 
              icon={faUser} 
              className="text-white hover:text-[#00cde7] cursor-pointer text-2xl transition-colors duration-300"
            />
          )}

          {visible1 && (
            <ButtonSecondary
              className="!transition-all !duration-[0.2s] !ease-[ease] !border-[#00cce7] !p-0 !bg-transparent hover:!border-white group"
              property1="default"
              signUpClassName="!mr-[unset] !ml-[unset] text-[#00cce7] group-hover:text-white"
              text="SIGN UP"
            />
          )}

          {visible2 && (
            <ButtonPrimary
              className="!transition-all !duration-[0.2s] !ease-[ease] !text-main !border-0 !p-0 !bg-[#00cce7] hover:!bg-white"
              logInClassName="!mr-[unset] !ml-[unset]"
              property1="default"
              text="LOG IN"
            />
          )}
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black bg-opacity-90 p-6 z-50">
          <div className="flex flex-col items-center gap-6 w-full">
            <div className="relative w-fit font-b-1 font-[number:var(--b-1-font-weight)] text-white text-[length:var(--b-1-font-size)] tracking-[var(--b-1-letter-spacing)] leading-[var(--b-1-line-height)] whitespace-nowrap [font-style:var(--b-1-font-style)] hover:text-[#00cde7] cursor-pointer transition-colors duration-300">
              Films
            </div>

            <div className="relative w-fit font-b-1 font-[number:var(--b-1-font-weight)] text-white text-[length:var(--b-1-font-size)] tracking-[var(--b-1-letter-spacing)] leading-[var(--b-1-line-height)] whitespace-nowrap [font-style:var(--b-1-font-style)] hover:text-[#00cde7] cursor-pointer transition-colors duration-300">
              About us
            </div>

            <div className="relative w-fit font-b-1 font-[number:var(--b-1-font-weight)] text-white text-[length:var(--b-1-font-size)] tracking-[var(--b-1-letter-spacing)] leading-[var(--b-1-line-height)] whitespace-nowrap [font-style:var(--b-1-font-style)] hover:text-[#00cde7] cursor-pointer transition-colors duration-300">
              Contact us
            </div>

            <div className="flex items-center gap-6 w-full justify-center">
              <FontAwesomeIcon 
                icon={faShoppingCart} 
                className="text-white hover:text-[#00cde7] cursor-pointer text-2xl transition-colors duration-300"
              />

              {visible && (
                <FontAwesomeIcon 
                  icon={faUser} 
                  className="text-white hover:text-[#00cde7] cursor-pointer text-2xl transition-colors duration-300"
                />
              )}
            </div>

            {visible1 && (
              <ButtonSecondary
                className="!self-stretch !transition-all !duration-[0.2s] !ease-[ease] !border-[#00cce7] !p-0 !bg-transparent !w-full hover:!border-white group"
                property1="default"
                signUpClassName="!mr-[unset] !ml-[unset] text-[#00cce7] group-hover:text-white"
                text="SIGN UP"
              />
            )}

            {visible2 && (
              <ButtonPrimary
                className="!self-stretch !transition-all !duration-[0.2s] !ease-[ease] !text-main !border-0 !p-0 !bg-[#00cce7] !w-full hover:!bg-white"
                logInClassName="!mr-[unset] !ml-[unset]"
                property1="default"
                text="LOG IN"
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};
