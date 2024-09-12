/** @format */
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import * as formik from "formik";
import * as yup from "yup";

function LoginForm() {
  const { Formik } = formik;

  const schema = yup.object().shape({
    email: yup.string().required("Please enter your email"),
    password: yup.string().required("Please enter your password"),
  });
  const onSignIn = (data) => {
    console.log(data);
  };
  return (
    <>
      <h4 className="card-title text-center mb-4">Sign In</h4>
      <Formik
        validationSchema={schema}
        onSubmit={onSignIn}
        initialValues={{
          email: "",
          password: "",
        }}
      >
        {({ handleSubmit, handleChange, values, errors }) => (
          <Form noValidate onSubmit={handleSubmit} className="">
            <Row className="mb-3">
              <Form.Group
                as={Col}
                controlId="validationFormikEmail"
                className="form-group text-start"
              >
                <Form.Label className="form-label fw-bold">
                  Username or Email Address
                </Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Your Full Name"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  isInvalid={!!errors.email}
                  className="form-control mb-0"
                />
                <Form.Control.Feedback type="invalid">
                  {errors.email}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group
                as={Col}
                controlId="validationFormikPassword"
                className="form-group text-start"
              >
                <Form.Label className="form-label fw-bold">
                  Your Password
                </Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  isInvalid={!!errors.password}
                  className="form-control mb-0"
                />
                <Form.Control.Feedback type="invalid">
                  {errors.password}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Button
              variant="success"
              type="submit"
              className="btn btn-success mt-2 fw-semibold text-uppercase w-100"
            >
              Sign in
            </Button>
            <h6 className="mt-3">
              Don't Have An Account? <Link to="/sign-up">Sign Up</Link>
            </h6>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default LoginForm;
