import React from 'react';

const SignInUser = () => {
  return (
    <>
      <div>
        <h2 className="title-page">SignIn User</h2>
      </div>
      <div className="form-container">
        <form className="max-w-sm mx-auto">
          <div className="mb-5">
            <label for="text" className="label">
              Your phone number
            </label>
            <input
              type="text"
              id="phone-number"
              className="form"
              placeholder="09*********"
              required
            />
          </div>
          <button type="submit" className="submitter">
            send code
          </button>
        </form>
      </div>
      <div className="form-container">
        <form className="max-w-sm mx-auto">
          <div className="mb-5">
            <label for="text" className="label">
              Enter Your Code
            </label>
            <input
              type="text"
              id="phone-number"
              className="form"
              placeholder="-----"
              required
            />
          </div>
          <button type="submit" className="submitter">
            verify code
          </button>
        </form>
      </div>
    </>
  );
};

export default SignInUser;
