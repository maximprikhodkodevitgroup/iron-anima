import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ButtonPrimary } from "../../components/ButtonPrimary";
import { PasswordInput } from "../../components/PasswordInput";
import { AuthLayout } from "../../layouts/AuthLayout";

export const ResetPassword = (): JSX.Element => {
  const { token } = useParams<{ token: string }>();
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isResetSuccessful, setIsResetSuccessful] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send a request to your API to reset the password
    console.log("Password reset submitted", { token, password, confirmPassword });
    // Simulate successful password reset
    setIsResetSuccessful(true);
  };

  if (isResetSuccessful) {
    return (
      <AuthLayout>
        <div className="flex flex-col w-full max-w-[520px] items-center gap-10 p-4 sm:p-10 relative flex-[0_0_auto]">
          <div className="flex flex-col items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
            <div className="relative self-stretch mt-[-1.00px] font-h3 font-[number:var(--h3-font-weight)] text-main text-[length:var(--h3-font-size)] text-center tracking-[var(--h3-letter-spacing)] leading-[var(--h3-line-height)] [font-style:var(--h3-font-style)]">
              SUCCESSFUL PASSWORD RESET
            </div>
            <p className="relative self-stretch font-b-2 font-[number:var(--b-2-font-weight)] text-white text-[length:var(--b-2-font-size)] text-center tracking-[var(--b-2-letter-spacing)] leading-[var(--b-2-line-height)] [font-style:var(--b-2-font-style)]">
              You can now use your new password to login to <br />
              your account
            </p>
          </div>
          <ButtonPrimary
            className="!self-stretch !transition-all !duration-[0.2s] !ease-[ease] !text-main !border-0 !p-0 !bg-[#00cce7] !w-full hover:!bg-white"
            logInClassName="!mr-[unset] !ml-[unset]"
            property1="default"
            text="LOG IN"
            onClick={() => navigate('/login')}
          />
        </div>
      </AuthLayout>
    );
  }

  return (
    <AuthLayout>
      <div className="flex flex-col w-full max-w-[520px] items-center gap-10 p-4 sm:p-10 relative flex-[0_0_auto]">
        <div className="flex flex-col items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
          <div className="relative self-stretch mt-[-1.00px] font-h3 font-[number:var(--h3-font-weight)] text-main text-[length:var(--h3-font-size)] text-center tracking-[var(--h3-letter-spacing)] leading-[var(--h3-line-height)] [font-style:var(--h3-font-style)]">
            RESET YOUR PASSWORD
          </div>
          <p className="relative self-stretch font-b-2 font-[number:var(--b-2-font-weight)] text-white text-[length:var(--b-2-font-size)] text-center tracking-[var(--b-2-letter-spacing)] leading-[var(--b-2-line-height)] [font-style:var(--b-2-font-style)]">
            Must be at least 8 characters.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="w-full">
          <div className="mb-6">
            <PasswordInput
              label="New Password"
              placeholder="Enter your new password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <PasswordInput
              label="Confirm Password"
              placeholder="Confirm your new password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <ButtonPrimary
            className="!self-stretch !transition-all !duration-[0.2s] !ease-[ease] !text-main !border-0 !p-0 !bg-[#00cce7] !w-full hover:!bg-white"
            logInClassName="!mr-[unset] !ml-[unset]"
            property1="default"
            text="RESET PASSWORD"
          />
        </form>
      </div>
    </AuthLayout>
  );
};
