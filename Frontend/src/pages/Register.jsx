import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  Alert,
} from "react-bootstrap";
import "./Register.css";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    city: "",
    state: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");
    setLoading(true);

    try {
      const response = await fetch(
        "http://localhost:8080/api/users/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Registration failed"
        );
      }

      setSuccess("Registration successful! Redirecting to login...");

      setFormData({
        name: "",
        email: "",
        password: "",
        phone: "",
        city: "",
        state: "",
      });

      setTimeout(() => {
        navigate("/login");
      }, 1800);

    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-page">

      <div className="register-circle circle-one"></div>
      <div className="register-circle circle-two"></div>
      <div className="register-circle circle-three"></div>

      <Container>
        <Row className="justify-content-center align-items-center">

          <Col xs={12} md={9} lg={7} xl={6}>

            <Card className="register-card">

              <div className="register-header">

                <div className="register-logo">
                  🪷
                </div>

                <h1>Sanskriti Bharat</h1>

                <p>
                  Discover India • Celebrate Culture
                </p>

              </div>

              <Card.Body>

                <h2 className="register-title">
                  Create Your Account
                </h2>

                <p className="register-subtitle">
                  Join us in exploring the rich heritage of India
                </p>

                {error && (
                  <Alert variant="danger">
                    {error}
                  </Alert>
                )}

                {success && (
                  <Alert variant="success">
                    {success}
                  </Alert>
                )}

                <Form onSubmit={handleSubmit}>

                  <Row>

                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Full Name</Form.Label>

                        <Form.Control
                          type="text"
                          name="name"
                          placeholder="Enter your name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </Form.Group>
                    </Col>

                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Phone</Form.Label>

                        <Form.Control
                          type="tel"
                          name="phone"
                          placeholder="Enter phone number"
                          value={formData.phone}
                          onChange={handleChange}
                        />
                      </Form.Group>
                    </Col>

                  </Row>

                  <Form.Group className="mb-3">
                    <Form.Label>Email Address</Form.Label>

                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>

                    <Form.Control
                      type="password"
                      name="password"
                      placeholder="Create a password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                      minLength={6}
                    />
                  </Form.Group>

                  <Row>

                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>City</Form.Label>

                        <Form.Control
                          type="text"
                          name="city"
                          placeholder="Your city"
                          value={formData.city}
                          onChange={handleChange}
                        />
                      </Form.Group>
                    </Col>

                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>State</Form.Label>

                        <Form.Control
                          type="text"
                          name="state"
                          placeholder="Your state"
                          value={formData.state}
                          onChange={handleChange}
                        />
                      </Form.Group>
                    </Col>

                  </Row>

                  <Button
                    type="submit"
                    className="register-button"
                    disabled={loading}
                  >
                    {loading
                      ? "Creating Account..."
                      : "Create Account"}
                  </Button>

                </Form>

                <div className="register-login">
                  Already have an account?

                  <Link to="/login">
                    Login
                  </Link>
                </div>

              </Card.Body>

            </Card>

          </Col>

        </Row>
      </Container>

    </div>
  );
};

export default Register;