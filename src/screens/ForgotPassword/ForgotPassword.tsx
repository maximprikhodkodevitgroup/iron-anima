import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { ButtonPrimary } from "../../components/ButtonPrimary";
import { ButtonSecondary } from "../../components/ButtonSecondary";
import { TextInput } from "../../components/TextInput";
import { AuthLayout } from "../../layouts/AuthLayout";

const ForgotPasswordSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
});

export const ForgotPassword = (): JSX.Element => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <AuthLayout>
      <div className="flex flex-col w-full max-w-[520px] items-center gap-10 p-4 sm:p-10 relative flex-[0_0_auto]">
        {!isSubmitted ? (
          <Formik
            initialValues={{ email: '' }}
            validationSchema={ForgotPasswordSchema}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                console.log(JSON.stringify(values, null, 2));
                setSubmitting(false);
                setIsSubmitted(true);
              }, 400);
            }}
          >
            {({ isSubmitting }) => (
              <Form noValidate className="w-full">
                <div className="flex flex-col items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
                  <div className="relative self-stretch mt-[-1.00px] font-h3 font-[number:var(--h3-font-weight)] text-main text-[length:var(--h3-font-size)] text-center tracking-[var(--h3-letter-spacing)] leading-[var(--h3-line-height)] [font-style:var(--h3-font-style)]">
                    RESET YOUR PASSWORD
                  </div>
                  <p className="relative self-stretch font-b-2 font-[number:var(--b-2-font-weight)] text-white text-[length:var(--b-2-font-size)] text-center tracking-[var(--b-2-letter-spacing)] leading-[var(--b-2-line-height)] [font-style:var(--b-2-font-style)] mb-4">
                    Enter the email address associated with your account and we will
                    send you a link to reset your password.
                  </p>
                </div>
                <div className="w-full mb-6">
                  <Field name="email" as={TextInput} placeholder="E-mail address" />
                </div>
                <div className="mt-6">
                  <ButtonPrimary
                    className="!self-stretch !transition-all !duration-[0.2s] !ease-[ease] !text-main !border-0 !p-0 !bg-[#00cce7] !w-full hover:!bg-white"
                    logInClassName="!mr-[unset] !ml-[unset]"
                    property1="default"
                    text="CONTINUE"
                    type="submit"
                    disabled={isSubmitting}
                  />
                </div>
              </Form>
            )}
          </Formik>
        ) : (
          <>
            <div className="flex flex-col items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative self-stretch mt-[-1.00px] font-h3 font-[number:var(--h3-font-weight)] text-main text-[length:var(--h3-font-size)] text-center tracking-[var(--h3-letter-spacing)] leading-[var(--h3-line-height)] [font-style:var(--h3-font-style)]">
                CHECK YOUR EMAIL
              </div>
              <p className="relative self-stretch font-b-2 font-[number:var(--b-2-font-weight)] text-white text-[length:var(--b-2-font-size)] text-center tracking-[var(--b-2-letter-spacing)] leading-[var(--b-2-line-height)] [font-style:var(--b-2-font-style)]">
                We have sent instructions on how to reset your password to your email address.
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
                onClick={() => setIsSubmitted(false)}
              />
            </div>
          </>
        )}
        <Link to="/login" className="w-full">
          <ButtonSecondary
            className="!self-stretch !transition-all !duration-[0.2s] !ease-[ease] !border-[#00cce7] !p-0 !bg-transparent !w-full hover:!border-white group"
            property1="default"
            signUpClassName="!mr-[unset] !ml-[unset] text-[#00cce7] group-hover:text-white"
            text="BACK TO LOG IN"
          />
        </Link>
      </div>
    </AuthLayout>
  );
};
