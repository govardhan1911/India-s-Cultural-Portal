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
import "./Login.css";

const Login = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
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
    setLoading(true);

    try {

      const response = await fetch(
        "http://localhost:8080/api/users/login",
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
          data.message || "Invalid email or password"
        );
      }

      // Save logged-in user
      localStorage.setItem(
        "user",
        JSON.stringify(data.user)
      );

      // Admin redirect
      if (data.user.role === "ADMIN") {
        navigate("/admin");
      } else {
        navigate("/profile");
      }

    } catch (error) {

      setError(error.message);

    } finally {

      setLoading(false);

    }
  };

  return (

    <div className="login-page">

      <div className="login-glow glow-one"></div>
      <div className="login-glow glow-two"></div>

      <Container>

        <Row className="justify-content-center align-items-center">

          <Col xs={12} sm={10} md={7} lg={5}>

            <Card className="login-card">

              <Card.Body>

                <div className="login-logo">
                  🪷
                </div>

                <h1>
                  Welcome Back
                </h1>

                <p className="login-subtitle">
                  Explore India's incredible culture
                </p>

                {error && (
                  <Alert variant="danger">
                    {error}
                  </Alert>
                )}

                <Form onSubmit={handleSubmit}>

                  <Form.Group className="mb-4">

                    <Form.Label>
                      Email Address
                    </Form.Label>

                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />

                  </Form.Group>

                  <Form.Group className="mb-4">

                    <Form.Label>
                      Password
                    </Form.Label>

                    <Form.Control
                      type="password"
                      name="password"
                      placeholder="Enter your password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />

                  </Form.Group>

                  <Button
                    type="submit"
                    className="login-button"
                    disabled={loading}
                  >
                    {loading
                      ? "Logging in..."
                      : "Login"}
                  </Button>

                </Form>

                <div className="login-divider">
                  <span>OR</span>
                </div>

                <div className="login-register">

                  Don't have an account?

                  <Link to="/register">
                    Create Account
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

export default Login;