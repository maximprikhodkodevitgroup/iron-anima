import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ButtonPrimary } from "../../components/ButtonPrimary";
import { ButtonSecondary } from "../../components/ButtonSecondary";
import { EmailInput } from "../../components/EmailInput";
import { AuthLayout } from "../../layouts/AuthLayout";

export const ForgotPassword = (): JSX.Element => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleResend = () => {
    setIsSubmitted(false);
  };

  return (
    <AuthLayout>
      <div className="flex flex-col w-full max-w-[520px] items-center gap-10 p-4 sm:p-10 relative flex-[0_0_auto]">
        {!isSubmitted ? (
          <>
            <div className="flex flex-col items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative self-stretch mt-[-1.00px] font-h3 font-[number:var(--h3-font-weight)] text-main text-[length:var(--h3-font-size)] text-center tracking-[var(--h3-letter-spacing)] leading-[var(--h3-line-height)] [font-style:var(--h3-font-style)]">
                RESET YOUR PASSWORD
              </div>
              <p className="relative self-stretch font-b-2 font-[number:var(--b-2-font-weight)] text-white text-[length:var(--b-2-font-size)] text-center tracking-[var(--b-2-letter-spacing)] leading-[var(--b-2-line-height)] [font-style:var(--b-2-font-style)]">
                Enter the email address associated with your account and we will
                send you a link to reset your password.
              </p>
            </div>
            <form onSubmit={handleSubmit} className="w-full">
              <EmailInput value={email} onChange={(e) => setEmail(e.target.value)} />
              <div className="mt-6">
                <ButtonPrimary
                  className="!self-stretch !transition-all !duration-[0.2s] !ease-[ease] !text-main !border-0 !p-0 !bg-[#00cce7] !w-full hover:!bg-white"
                  logInClassName="!mr-[unset] !ml-[unset]"
                  property1="default"
                  text="CONTINUE"
                />
              </div>
            </form>
            <Link to="/login" className="w-full">
              <ButtonSecondary
                className="!self-stretch !transition-all !duration-[0.2s] !ease-[ease] !border-[#00cce7] !p-0 !bg-transparent !w-full hover:!border-white group"
                property1="default"
                signUpClassName="!mr-[unset] !ml-[unset] text-[#00cce7] group-hover:text-white"
                text="BACK TO LOG IN"
              />
            </Link>
          </>
        ) : (
          <>
            <div className="flex flex-col items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative self-stretch mt-[-1.00px] font-h3 font-[number:var(--h3-font-weight)] text-main text-[length:var(--h3-font-size)] text-center tracking-[var(--h3-letter-spacing)] leading-[var(--h3-line-height)] [font-style:var(--h3-font-style)]">
                CHECK YOUR EMAIL
              </div>
              <p className="relative self-stretch font-b-2 font-[number:var(--b-2-font-weight)] text-white text-[length:var(--b-2-font-size)] text-center tracking-[var(--b-2-letter-spacing)] leading-[var(--b-2-line-height)] [font-style:var(--b-2-font-style)]">
                We have sent instructions on how to reset your password to{" "}
                <span className="font-[number:var(--b-2-font-weight)] leading-[var(--b-2-line-height)] font-b-2 [font-style:var(--b-2-font-style)] tracking-[var(--b-2-letter-spacing)] text-[length:var(--b-2-font-size)]">
                  {email}
                </span>
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
                onClick={handleResend}
              />
            </div>
          </>
        )}
      </div>
    </AuthLayout>
  );
};
