/** @format */

import SignUpForm from "./SignUpForm";

function Signup() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-secondary-subtle">
      <div
        className="card shadow-sm p-4"
        style={{ maxWidth: "400px", width: "100%" }}
      >
        <SignUpForm />
      </div>
    </div>
  );
}

export default Signup;
