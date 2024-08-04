'use client';
import { signupAdminSchema } from '@/validation';
import { Field, Form, Formik } from 'formik';
import React from 'react';
import FormInput from '../shared/FormInput';
import SubmitterButton from '../shared/SubmitterButton';
import ErrorMsg from '../shared/ErrorMsg';

const SignUpAdminPage = () => {
  return (
    <div className="form-container">
      <Formik
        initialValues={{
          email: '',
          phoneNumber: '',
          password: '',
          confirmPassword: '',
          terms: false,
        }}
        validationSchema={signupAdminSchema}
        onSubmit={(values) => console.log(values)}
      >
        {() => (
          <Form className="max-w-sm mx-auto">
            <FormInput
              type="email"
              id="email"
              name="email"
              placeholder="name@flowbite.com"
              label="Your email"
            />
            <FormInput
              id="phone-number"
              name="phoneNumber"
              placeholder="09*********"
              label="Your phone number"
            />
            <FormInput
              type="password"
              id="password"
              name="password"
              label="Your password"
            />
            <FormInput
              type="password"
              id="repeat-password"
              name="confirmPassword"
              label="Repeat password"
            />
            <div className="mb-5">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <Field
                    id="terms"
                    type="checkbox"
                    name="terms"
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                    required
                  />
                </div>
                <label
                  htmlFor="terms"
                  className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  I agree with the
                  <a
                    href="#"
                    className="text-blue-600 hover:underline dark:text-blue-500"
                  >
                    terms and conditions
                  </a>
                </label>
              </div>
              <ErrorMsg name="terms" />
            </div>
            <SubmitterButton text="Register new account" />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignUpAdminPage;
