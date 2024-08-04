import React from 'react';

const ForgetPasswordAdmin = () => {
  return (
    <>
      <div>
        <h2 className="title-page">Forget Password Admin</h2>
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
          <div className="mb-5">
            <label for="password" className="label">
              Your new password
            </label>
            <input
              type="password"
              id="password"
              className="form"
              required
            />
          </div>
          <div className="mb-5">
            <label for="repeat-password" className="label">
              Repeat new password
            </label>
            <input
              type="password"
              id="repeat-password"
              className="form"
              required
            />
          </div>
          <button type="submit" className="submitter">
            change password
          </button>
        </form>
      </div>
    </>
  );
};

export default ForgetPasswordAdmin;
