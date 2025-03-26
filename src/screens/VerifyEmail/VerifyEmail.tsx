import React from "react";
import { useLocation } from "react-router-dom";
import { ButtonPrimary } from "../../components/ButtonPrimary";
import { Header } from "../../components/Header";
import { AuthLayout } from "../../layouts/AuthLayout";

export const VerifyEmail = (): JSX.Element => {
  const location = useLocation();
  const email = location.state?.email || "your email address";

  return (
    <AuthLayout>
      <div className="flex flex-col w-[520px] items-center gap-10 p-10">
        <div className="flex flex-col items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
          <div className="relative self-stretch mt-[-1.00px] font-h3 font-[number:var(--h3-font-weight)] text-main text-[length:var(--h3-font-size)] text-center tracking-[var(--h3-letter-spacing)] leading-[var(--h3-line-height)] [font-style:var(--h3-font-style)]">
            VERIFY YOUR EMAIL
          </div>

          <p className="relative self-stretch font-b-2 font-[number:var(--b-2-font-weight)] text-white text-[length:var(--b-2-font-size)] text-center tracking-[var(--b-2-letter-spacing)] leading-[var(--b-2-line-height)] [font-style:var(--b-2-font-style)]">
            We have sent email to{" "}
            <span className="font-[number:var(--b-2-font-weight)] text-white leading-[var(--b-2-line-height)] font-b-2 [font-style:var(--b-2-font-style)] tracking-[var(--b-2-letter-spacing)] text-[length:var(--b-2-font-size)]">
              {email}
            </span>
            {" "}to verify your email address. After receiving the email follow
            the link provided to complete your registration.
          </p>
        </div>

        <div className="flex flex-col items-center gap-6 relative self-stretch w-full flex-[0_0_auto]">
          <div className="relative w-fit mt-[-1.00px] font-b-2 font-[number:var(--b-2-font-weight)] text-white text-[length:var(--b-2-font-size)] tracking-[var(--b-2-letter-spacing)] leading-[var(--b-2-line-height)] whitespace-nowrap [font-style:var(--b-2-font-style)]">
            Don't receive an email?
          </div>

          <ButtonPrimary
            className="!self-stretch !w-full"
            logInClassName="!mr-[unset] !ml-[unset]"
            property1="default"
            text="RESEND"
          />
        </div>
      </div>
    </AuthLayout>
  );
};
