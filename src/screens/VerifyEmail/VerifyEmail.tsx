import React from "react";
import { useLocation } from "react-router-dom";
import { ButtonPrimary } from "../../components/ButtonPrimary";
import { AuthLayout } from "../../layouts/AuthLayout";

export const VerifyEmail = (): JSX.Element => {
  const location = useLocation();
  const email = location.state?.email || "your email address";

  return (
    <AuthLayout>
      <div className="flex flex-col w-full max-w-[520px] items-center gap-10 p-4 sm:p-10">
        <div className="flex flex-col items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
          <h1 className="relative self-stretch mt-[-1.00px] font-h3 text-main text-[length:var(--h3-font-size)] text-center">
            VERIFY YOUR EMAIL
          </h1>

          <p className="relative self-stretch font-b-2 text-white text-center">
            We have sent email to{" "}
            <span className="font-b-2 text-white">
              {email}
            </span>
            {" "}to verify your email address. After receiving the email follow
            the link provided to complete your registration.
          </p>
        </div>

        <div className="flex flex-col items-center gap-6 relative self-stretch w-full flex-[0_0_auto]">
          <p className="relative w-fit mt-[-1.00px] font-b-2 text-white text-center">
            Don't receive an email?
          </p>

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
