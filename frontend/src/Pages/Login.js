/** @format */

import React from "react";
import { Link } from "react-router-dom";
import LoginForm from "./LoginForm";

function Login() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-secondary-subtle">
      <div
        className="card shadow-sm p-4"
        style={{ maxWidth: "400px", width: "100%" }}
      >
        <LoginForm />
      </div>
    </div>
  );
}

export default Login;
