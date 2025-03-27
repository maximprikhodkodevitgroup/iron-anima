import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { ButtonPrimary } from "../ButtonPrimary";
import { ButtonSecondary } from "../ButtonSecondary";
import { Link } from "react-router-dom";

interface Props {
  property1: "default";
  className: any;
  showAuthButtons?: boolean;
}

export const Header = ({
  property1,
  className,
  showAuthButtons = false,
}: Props): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className={`relative w-full ${className}`}>
      <div className={`flex w-full max-w-[1280px] items-center justify-between relative mx-auto px-4`}>
        <div className="inline-flex items-center gap-10 relative self-stretch flex-[0_0_auto]">
          <Link to="/" className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-extrabold text-white text-[32px] tracking-[0] leading-[normal] cursor-pointer">
            LOGO
          </Link>

          <img
            className="hidden md:block relative self-stretch w-px mt-[-0.50px] mb-[-0.50px] object-cover"
            alt="Line"
            src="https://c.animaapp.com/Fld8fLPh/img/line-1-1.svg"
          />

          <nav className="hidden lg:inline-flex items-center justify-center gap-10 relative flex-[0_0_auto]">
            <Link to="/films" className="relative w-fit mt-[-1.00px] font-b-1 font-[number:var(--b-1-font-weight)] text-white text-[length:var(--b-1-font-size)] tracking-[var(--b-1-letter-spacing)] leading-[var(--b-1-line-height)] whitespace-nowrap [font-style:var(--b-1-font-style)] hover:text-[#00cde7] cursor-pointer transition-colors duration-300">
              Films
            </Link>
            <Link to="/about" className="relative w-fit mt-[-1.00px] font-b-1 font-[number:var(--b-1-font-weight)] text-white text-[length:var(--b-1-font-size)] tracking-[var(--b-1-letter-spacing)] leading-[var(--b-1-line-height)] whitespace-nowrap [font-style:var(--b-1-font-style)] hover:text-[#00cde7] cursor-pointer transition-colors duration-300">
              About us
            </Link>
            <Link to="/contact" className="relative w-fit mt-[-1.00px] font-b-1 font-[number:var(--b-1-font-weight)] text-white text-[length:var(--b-1-font-size)] tracking-[var(--b-1-letter-spacing)] leading-[var(--b-1-line-height)] whitespace-nowrap [font-style:var(--b-1-font-style)] hover:text-[#00cde7] cursor-pointer transition-colors duration-300">
              Contact us
            </Link>
          </nav>
        </div>

        <div className="lg:hidden">
          <button
            className="text-white hover:text-[#00cde7] transition-colors duration-300 bg-transparent border-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} size="lg" />
          </button>
        </div>

        <div className="hidden lg:flex items-center gap-6 relative self-stretch flex-[0_0_auto]">
          <FontAwesomeIcon 
            icon={faShoppingCart} 
            className="text-white hover:text-[#00cde7] cursor-pointer text-2xl transition-colors duration-300"
          />

          {showAuthButtons && (
            <>
              <Link to="/signup">
                <ButtonSecondary
                  className="!transition-all !duration-[0.2s] !ease-[ease] !border-[#00cce7] !p-0 !bg-transparent hover:!border-white group !max-w-[120px]"
                  property1="default"
                  signUpClassName="!mr-[unset] !ml-[unset] text-[#00cce7] group-hover:text-white"
                  text="SIGN UP"
                />
              </Link>
              <Link to="/login">
                <ButtonPrimary
                  className="!transition-all !duration-[0.2s] !ease-[ease] !text-main !border-0 !p-0 !bg-[#00cce7] hover:!bg-white !max-w-[120px]"
                  logInClassName="!mr-[unset] !ml-[unset]"
                  property1="default"
                  text="LOG IN"
                />
              </Link>
            </>
          )}
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-black bg-opacity-90 p-6 z-50">
          <nav className="flex flex-col items-center gap-6 w-full">
            <Link to="/films" className="relative w-fit font-b-1 font-[number:var(--b-1-font-weight)] text-white text-[length:var(--b-1-font-size)] tracking-[var(--b-1-letter-spacing)] leading-[var(--b-1-line-height)] whitespace-nowrap [font-style:var(--b-1-font-style)] hover:text-[#00cde7] cursor-pointer transition-colors duration-300">
              Films
            </Link>
            <Link to="/about" className="relative w-fit font-b-1 font-[number:var(--b-1-font-weight)] text-white text-[length:var(--b-1-font-size)] tracking-[var(--b-1-letter-spacing)] leading-[var(--b-1-line-height)] whitespace-nowrap [font-style:var(--b-1-font-style)] hover:text-[#00cde7] cursor-pointer transition-colors duration-300">
              About us
            </Link>
            <Link to="/contact" className="relative w-fit font-b-1 font-[number:var(--b-1-font-weight)] text-white text-[length:var(--b-1-font-size)] tracking-[var(--b-1-letter-spacing)] leading-[var(--b-1-line-height)] whitespace-nowrap [font-style:var(--b-1-font-style)] hover:text-[#00cde7] cursor-pointer transition-colors duration-300">
              Contact us
            </Link>

            <div className="flex items-center gap-6 w-full justify-center">
              <FontAwesomeIcon 
                icon={faShoppingCart} 
                className="text-white hover:text-[#00cde7] cursor-pointer text-2xl transition-colors duration-300"
              />
            </div>

            {showAuthButtons && (
              <>
                <Link to="/signup" className="w-full max-w-[120px]">
                  <ButtonSecondary
                    className="!self-stretch !transition-all !duration-[0.2s] !ease-[ease] !border-[#00cce7] !p-0 !bg-transparent !w-full hover:!border-white group"
                    property1="default"
                    signUpClassName="!mr-[unset] !ml-[unset] text-[#00cce7] group-hover:text-white"
                    text="SIGN UP"
                  />
                </Link>
                <Link to="/login" className="w-full max-w-[120px]">
                  <ButtonPrimary
                    className="!self-stretch !transition-all !duration-[0.2s] !ease-[ease] !text-main !border-0 !p-0 !bg-[#00cce7] !w-full hover:!bg-white"
                    logInClassName="!mr-[unset] !ml-[unset]"
                    property1="default"
                    text="LOG IN"
                  />
                </Link>
              </>
            )}
          </nav>
        </div>
      )}
    </header>
  );
};
