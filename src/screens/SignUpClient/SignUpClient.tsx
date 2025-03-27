import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { ButtonPrimary } from "../../components/ButtonPrimary";
import { ButtonSecondary } from "../../components/ButtonSecondary";
import { TextInput } from "../../components/TextInput";
import { AuthLayout } from "../../layouts/AuthLayout";

const SignUpSchema = Yup.object().shape({
  firstName: Yup.string().required('Required'),
  lastName: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(8, 'Too Short!').required('Required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Required'),
  agreeTerms: Yup.boolean()
    .oneOf([true], 'You must accept the terms and conditions')
    .required('You must accept the terms and conditions')
});

const CustomCheckbox = ({ field, form: { touched, errors }, ...props }) => {
  return (
    <div className="flex flex-col mb-4">
      <div className="flex items-center">
        <input
          type="checkbox"
          {...field}
          {...props}
          className="w-4 h-4 mr-2 cursor-pointer"
        />
        <label className="font-b-3 text-white cursor-pointer">
          Agree to our Terms of use and Privacy Policy
        </label>
      </div>
      <div className="h-4 mt-1">
        <ErrorMessage name={field.name}>
          {msg => <div className="text-[#FF3B30] text-xs">{msg}</div>}
        </ErrorMessage>
      </div>
    </div>
  );
};

export const SignUpClient = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <AuthLayout>
      <Formik
        initialValues={{ firstName: '', lastName: '', email: '', password: '', confirmPassword: '', agreeTerms: false }}
        validationSchema={SignUpSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            console.log(JSON.stringify(values, null, 2));
            setSubmitting(false);
            navigate('/verify-email', { state: { email: values.email } });
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form noValidate className="flex flex-col w-full max-w-[520px] items-center gap-[30px] p-4 sm:p-10 relative flex-[0_0_auto]">
            <div className="flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
              <h1 className="relative self-stretch mt-[-1.00px] font-h3 text-main text-[length:var(--h3-font-size)] text-center">
                SIGN UP
              </h1>

              <div className="flex flex-col sm:flex-row items-start gap-5 relative self-stretch w-full flex-[0_0_auto]">
                <div className="w-full sm:w-1/2">
                  <Field name="firstName" as={TextInput} placeholder="First name" />
                </div>
                <div className="w-full sm:w-1/2">
                  <Field name="lastName" as={TextInput} placeholder="Last name" />
                </div>
              </div>

              <Field name="email" as={TextInput} placeholder="E-mail address" />
              <Field name="password" as={TextInput} type="password" placeholder="Password" />
              <Field name="confirmPassword" as={TextInput} type="password" placeholder="Confirm password" />

              <Field name="agreeTerms" component={CustomCheckbox} />

              <ButtonPrimary
                className="!self-stretch !transition-all !duration-[0.2s] !ease-[ease] !text-main !border-0 !p-0 !bg-[#00cce7] !w-full hover:!bg-white"
                logInClassName="!mr-[unset] !ml-[unset]"
                property1="default"
                text="SIGN UP"
                type="submit"
                disabled={isSubmitting}
              />
            </div>

            <div className="flex flex-col items-center gap-6 relative self-stretch w-full flex-[0_0_auto]">
              <p className="relative w-fit mt-[-1.00px] font-b-2 text-white text-center">
                Already have an account?
              </p>

              <Link to="/login" className="w-full">
                <ButtonSecondary
                  className="!self-stretch !transition-all !duration-[0.2s] !ease-[ease] !border-[#00cce7] !p-0 !bg-transparent !w-full hover:!border-white group"
                  property1="default"
                  signUpClassName="!mr-[unset] !ml-[unset] text-[#00cce7] group-hover:text-white"
                  text="LOG IN"
                />
              </Link>
            </div>
          </Form>
        )}
      </Formik>
    </AuthLayout>
  );
};
