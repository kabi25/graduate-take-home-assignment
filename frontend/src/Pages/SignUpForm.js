/** @format */
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { Link, useNavigate } from "react-router-dom";
import * as formik from "formik";
import * as yup from "yup";

function SignUpForm() {
  const navigate = useNavigate();
  const { Formik } = formik;

  const schema = yup.object().shape({
    name: yup.string().required("Please enter your name"),
    email: yup.string().required("Please enter your email"),
    password: yup.string().required("Please enter your password"),
  });
  const onSignUp = (data) => {
    console.log(data);
  };
  return (
    <>
      <h4 className="card-title text-center mb-4">Sign Up</h4>
      <Formik
        validationSchema={schema}
        onSubmit={onSignUp}
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
                controlId="validationFormikName"
                className="form-group text-start"
              >
                <Form.Label className="form-label fw-bold">Name</Form.Label>
                <Form.Control
                  type="name"
                  placeholder="Your Full Name"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  isInvalid={!!errors.name}
                  className="form-control mb-0"
                />
                <Form.Control.Feedback type="invalid">
                  {errors.name}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group
                as={Col}
                controlId="validationFormikEmail"
                className="form-group text-start"
              >
                <Form.Label className="form-label fw-bold">Email</Form.Label>
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
                <Form.Label className="form-label fw-bold">Password</Form.Label>
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
            <Link
              variant="success"
              type="submit"
              className="btn btn-success mt-2 fw-semibold text-uppercase w-100"
              to="/"
            >
              Sign up
            </Link>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default SignUpForm;
