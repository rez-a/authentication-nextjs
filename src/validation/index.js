import * as Yup from 'yup';

const phoneNumberRJX =
  /(0|\+98)?([ ]|-|[()]){0,2}9[1|2|3|4]([ ]|-|[()]){0,2}(?:[0-9]([ ]|-|[()]){0,2}){8}/;
const constantsValidation = {
  email: Yup.string()
    .email('please enter valid email address')
    .required('this field is required!'),
  phone_number: Yup.string()
    .matches(phoneNumberRJX, 'please enter valid phone number')
    .required('this field is required!'),
  password: Yup.string().min(
    4,
    'Password must be at least 4 characters'
  ),
};

const signupAdminSchema = Yup.object().shape({
  ...constantsValidation,
  confirmPassword: Yup.string().oneOf(
    [Yup.ref('password')],
    'Passwords must match'
  ),
  terms: Yup.boolean()
    .required('terms is required')
    .isTrue('terms is required'),
});

export { signupAdminSchema };
