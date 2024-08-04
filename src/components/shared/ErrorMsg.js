import { ErrorMessage } from 'formik';
import React from 'react';

const ErrorMsg = ({ name }) => {
  return (
    <ErrorMessage name={name}>
      {(msg) => (
        <small className="text-rose-500 border-b border-b-rose-500">
          {msg}
        </small>
      )}
    </ErrorMessage>
  );
};

export default ErrorMsg;
