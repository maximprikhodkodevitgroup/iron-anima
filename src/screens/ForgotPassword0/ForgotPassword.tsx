import React from "react";
import { ButtonPrimary } from "../../components/ButtonPrimary";
import { Header } from "../../components/Header";

export const ForgotPassword = (): JSX.Element => {
  return (
    <div className="bg-[#000000cc] flex flex-row justify-center w-full">
      <div className="bg-[#000000cc] [background:linear-gradient(0deg,rgba(0,0,0,0.8)_0%,rgba(0,0,0,0.8)_100%),url(https://c.animaapp.com/m8q71m7fyDw9Cb/img/forgot-password.png)_50%_50%_/_cover] w-[1440px] h-[1024px] relative">
        <div className="flex flex-col w-[520px] items-center gap-10 p-10 absolute top-[351px] left-[460px]">
          <div className="flex flex-col items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
            <div className="relative self-stretch mt-[-1.00px] font-h3 font-[number:var(--h3-font-weight)] text-main text-[length:var(--h3-font-size)] text-center tracking-[var(--h3-letter-spacing)] leading-[var(--h3-line-height)] [font-style:var(--h3-font-style)]">
              CHECK YOUR EMAIL
            </div>

            <p className="relative self-stretch font-b-2 font-[number:var(--b-2-font-weight)] text-white text-[length:var(--b-2-font-size)] text-center tracking-[var(--b-2-letter-spacing)] leading-[var(--b-2-line-height)] [font-style:var(--b-2-font-style)]">
              <span className="leading-[var(--b-2-line-height)] font-b-2 [font-style:var(--b-2-font-style)] font-[number:var(--b-2-font-weight)] tracking-[var(--b-2-letter-spacing)] text-[length:var(--b-2-font-size)]">
                We have sent instructions on how to reset your password to{" "}
              </span>

              <span className="font-[number:var(--b-2-font-weight)] leading-[var(--b-2-line-height)] font-b-2 [font-style:var(--b-2-font-style)] tracking-[var(--b-2-letter-spacing)] text-[length:var(--b-2-font-size)]">
                niteshchandora47@gmail.com
              </span>
            </p>
          </div>

          <div className="flex flex-col items-center gap-6 relative self-stretch w-full flex-[0_0_auto]">
            <div className="relative w-fit mt-[-1.00px] font-b-2 font-[number:var(--b-2-font-weight)] text-white text-[length:var(--b-2-font-size)] tracking-[var(--b-2-letter-spacing)] leading-[var(--b-2-line-height)] whitespace-nowrap [font-style:var(--b-2-font-style)]">
              Don’t receive an email?
            </div>

            <ButtonPrimary
              className="!self-stretch !w-full"
              logInClassName="!mr-[unset] !ml-[unset]"
              property1="default"
              text="RESEND"
            />
          </div>
        </div>

        <Header
          className="!absolute !left-20 !bg-transparent !top-9"
          property1="default"
          visible={false}
          visible1={false}
          visible2={false}
        />
      </div>
    </div>
  );
};
