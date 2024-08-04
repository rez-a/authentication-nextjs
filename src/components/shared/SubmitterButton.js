import React from 'react';

const SubmitterButton = ({ text = 'please enter text' }) => {
  return (
    <button type="submit" className="submitter">
      {text}
    </button>
  );
};

export default SubmitterButton;
