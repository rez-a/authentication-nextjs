import React from 'react';

const SignInAdmin = () => {
  return (
    <>
      <div>
        <h2 className="title-page">SignIn Admin</h2>
      </div>
      <div className="form-container">
        <form className="max-w-sm mx-auto">
          <div className="mb-5">
            <label for="email" className="label">
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="form"
              placeholder="name@flowbite.com"
              required
            />
          </div>
          <div className="mb-5">
            <label for="password" className="label">
              Your password
            </label>
            <input
              type="password"
              id="password"
              className="form"
              required
            />
          </div>
          <button type="submit" className="submitter">
            Sign In
          </button>
        </form>
      </div>
    </>
  );
};

export default SignInAdmin;
