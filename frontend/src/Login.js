/** @format */

import React from "react";

function Login() {
  return (
    <div clasName="d-flex justify-content-center align-items-center bg-primary vh-100">
      <div className="bg-white p-3 rounded w-25">
        <form action="">
          <div className="mb-3">
            <label htmlFor="email">Email</label>
            <input type="email" placeholder="Enter Email" />
          </div>
          <div className="mb-3">
            <label htmlFor="password">Password</label>
            <input type="password" placeholder="Enter Password" />
          </div>
          <button className="btn btn-success">Log In</button>
          <p></p>
          <button className="btn btn-sdefault border">
            Register if don't have account yet
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
