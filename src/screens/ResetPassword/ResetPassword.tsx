import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { ButtonPrimary } from "../../components/ButtonPrimary";
import { TextInput } from "../../components/TextInput";
import { AuthLayout } from "../../layouts/AuthLayout";

const ResetPasswordSchema = Yup.object().shape({
  password: Yup.string().min(8, 'Too Short!').required('Required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Required'),
});

export const ResetPassword = (): JSX.Element => {
  const { token } = useParams<{ token: string }>();
  const navigate = useNavigate();
  const [isResetSuccessful, setIsResetSuccessful] = useState(false);

  if (isResetSuccessful) {
    return (
      <AuthLayout>
        <div className="flex flex-col w-full max-w-[520px] items-center gap-10 p-4 sm:p-10 relative flex-[0_0_auto]">
          <div className="flex flex-col items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
            <h1 className="relative self-stretch mt-[-1.00px] font-h3 text-main text-[length:var(--h3-font-size)] text-center">
              SUCCESSFUL PASSWORD RESET
            </h1>
            <p className="relative self-stretch font-b-2 text-white text-center">
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
      <Formik
        initialValues={{ password: '', confirmPassword: '' }}
        validationSchema={ResetPasswordSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            console.log(JSON.stringify(values, null, 2));
            setSubmitting(false);
            setIsResetSuccessful(true);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form noValidate className="flex flex-col w-full max-w-[520px] items-center gap-8 p-4 sm:p-10 relative flex-[0_0_auto]">
            <div className="flex flex-col items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
              <h1 className="relative self-stretch mt-[-1.00px] font-h3 text-main text-[length:var(--h3-font-size)] text-center">
                RESET YOUR PASSWORD
              </h1>
              <p className="relative self-stretch font-b-2 text-white text-center">
                Must be at least 8 characters.
              </p>
            </div>
            <div className="w-full">
              <Field name="password" as={TextInput} type="password" placeholder="New Password" />
            </div>
            <div className="w-full">
              <Field name="confirmPassword" as={TextInput} type="password" placeholder="Confirm new password" />
            </div>
            <ButtonPrimary
              className="!self-stretch !transition-all !duration-[0.2s] !ease-[ease] !text-main !border-0 !p-0 !bg-[#00cce7] !w-full hover:!bg-white"
              logInClassName="!mr-[unset] !ml-[unset]"
              property1="default"
              text="RESET PASSWORD"
              type="submit"
              disabled={isSubmitting}
            />
          </Form>
        )}
      </Formik>
    </AuthLayout>
  );
};
