'use client';
import { signupAdminSchema } from '@/validation';
import { Field, Form, Formik } from 'formik';
import React, { useContext } from 'react';
import FormInput from '../shared/FormInput';
import SubmitterButton from '../shared/SubmitterButton';
import ErrorMsg from '../shared/ErrorMsg';
import { handleRegister } from '@/actions/auth/admin';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { UserContext } from '@/context/UserProvider';

const SignUpAdminPage = () => {
  const router = useRouter();
  const { setUser } = useContext(UserContext);

  const register = async (values) => {
    const res = await handleRegister(values);
    if (res.status) {
      setUser(res.email);
      toast.success(res.message);
      router.push('/admin');
      return;
    }

    toast.error(res.message);
  };

  return (
    <div className="form-container">
      <Formik
        initialValues={{
          email: '',
          phone_number: '',
          password: '',
          confirmPassword: '',
          terms: false,
        }}
        validationSchema={signupAdminSchema}
        onSubmit={async (values) => register(values)}
      >
        {({ isSubmitting }) => (
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
              name="phone_number"
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
                    className="text-blue-600 hover:underline dark:text-blue-500 ms-1"
                  >
                    terms and conditions
                  </a>
                </label>
              </div>
              <ErrorMsg name="terms" />
            </div>
            <SubmitterButton
              text="Register new account"
              isSubmitting={isSubmitting}
            />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignUpAdminPage;
