import { Field } from 'formik';
import React from 'react';
import ErrorMsg from './ErrorMsg';

const FormInput = ({
  type = 'text',
  id,
  name,
  placeholder = '',
  label,
}) => {
  return (
    <div className="mb-5">
      <label htmlFor={id} className="label">
        {label}
      </label>
      <Field
        type={type}
        id={id}
        className="form"
        name={name}
        placeholder={placeholder}
        required
      />
      <ErrorMsg name={name} />
    </div>
  );
};

export default FormInput;
