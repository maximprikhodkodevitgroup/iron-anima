import React from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { ButtonPrimary } from "../../components/ButtonPrimary";
import { ButtonSecondary } from "../../components/ButtonSecondary";
import { TextInput } from "../../components/TextInput";
import { AuthLayout } from "../../layouts/AuthLayout";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Required'),
});

export const LogIn = (): JSX.Element => {
  return (
    <AuthLayout>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={LoginSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form noValidate className="flex flex-col w-full max-w-[520px] items-center gap-[30px] p-4 sm:p-10 relative flex-[0_0_auto]">
            <div className="flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
              <h1 className="relative self-stretch mt-[-1.00px] font-h3 text-main text-[length:var(--h3-font-size)] text-center">
                LOG IN
              </h1>

              <Field name="email" as={TextInput} placeholder="E-mail address" />
              <Field name="password" as={TextInput} type="password" placeholder="Password" />

              <Link to="/forgot-password" className="self-end">
                <p className="relative transition-all duration-[0.2s] ease-[ease] font-b-3 text-white text-right hover:text-[#00cde7] cursor-pointer">
                  Forgot your password?
                </p>
              </Link>

              <ButtonPrimary
                className="!self-stretch !transition-all !duration-[0.2s] !ease-[ease] !text-main !border-0 !p-0 !bg-[#00cce7] !w-full hover:!bg-white"
                logInClassName="!mr-[unset] !ml-[unset]"
                property1="default"
                text="LOG IN"
                type="submit"
                disabled={isSubmitting}
              />
            </div>

            <div className="flex flex-col items-center gap-6 relative self-stretch w-full flex-[0_0_auto]">
              <p className="relative w-fit mt-[-1.00px] font-b-2 text-white text-center">
                Don't have an account?
              </p>

              <Link to="/signup" className="w-full">
                <ButtonSecondary
                  className="!self-stretch !transition-all !duration-[0.2s] !ease-[ease] !border-[#00cce7] !p-0 !bg-transparent !w-full hover:!border-white group"
                  property1="default"
                  signUpClassName="!mr-[unset] !ml-[unset] text-[#00cce7] group-hover:text-white"
                  text="SIGN UP"
                />
              </Link>
            </div>
          </Form>
        )}
      </Formik>
    </AuthLayout>
  );
};
