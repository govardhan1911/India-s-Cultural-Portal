import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Form,
  Alert,
} from "react-bootstrap";
import "./UserProfile.css";

const UserProfile = () => {

  const navigate = useNavigate();

  const storedUser =
    JSON.parse(localStorage.getItem("user"));

  const [user, setUser] = useState(storedUser);

  const [editing, setEditing] = useState(false);

  const [formData, setFormData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    phone: user?.phone || "",
    city: user?.city || "",
    state: user?.state || "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  if (!user) {
    return (
      <div className="profile-login-message">

        <h2>
          Please login first
        </h2>

        <Button
          onClick={() => navigate("/login")}
        >
          Go to Login
        </Button>

      </div>
    );
  }

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  const handleUpdate = async (e) => {

    e.preventDefault();

    setMessage("");
    setError("");

    try {

      const response = await fetch(
        `http://localhost:8080/api/users/${user.id}`,
        {
          method: "PUT",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(formData),
        }
      );

      const updatedUser = await response.json();

      if (!response.ok) {
        throw new Error(
          updatedUser.message ||
          "Update failed"
        );
      }

      setUser(updatedUser);

      localStorage.setItem(
        "user",
        JSON.stringify(updatedUser)
      );

      setMessage(
        "Profile updated successfully!"
      );

      setEditing(false);

    } catch (error) {

      setError(error.message);

    }
  };

  const handleLogout = () => {

    localStorage.removeItem("user");

    navigate("/login");

  };

  return (

    <div className="profile-page">

      <Container>

        <Row className="justify-content-center">

          <Col lg={9}>

            <Card className="profile-card">

              <div className="profile-cover">

                <div className="profile-avatar">
                  {user.name?.charAt(0).toUpperCase()}
                </div>

              </div>

              <Card.Body>

                <div className="profile-heading">

                  <div>
                    <h1>{user.name}</h1>

                    <p>
                      {user.email}
                    </p>

                    <span className="role-badge">
                      {user.role}
                    </span>
                  </div>

                  <div className="profile-actions">

                    {!editing && (
                      <Button
                        className="edit-profile-btn"
                        onClick={() => setEditing(true)}
                      >
                        Edit Profile
                      </Button>
                    )}

                    <Button
                      variant="outline-danger"
                      onClick={handleLogout}
                    >
                      Logout
                    </Button>

                  </div>

                </div>

                {message && (
                  <Alert variant="success">
                    {message}
                  </Alert>
                )}

                {error && (
                  <Alert variant="danger">
                    {error}
                  </Alert>
                )}

                {editing ? (

                  <Form onSubmit={handleUpdate}>

                    <Row>

                      <Col md={6}>
                        <Form.Group className="mb-3">

                          <Form.Label>
                            Full Name
                          </Form.Label>

                          <Form.Control
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                          />

                        </Form.Group>
                      </Col>

                      <Col md={6}>
                        <Form.Group className="mb-3">

                          <Form.Label>
                            Email
                          </Form.Label>

                          <Form.Control
                            type="email"
                            value={formData.email}
                            disabled
                          />

                        </Form.Group>
                      </Col>

                    </Row>

                    <Row>

                      <Col md={6}>
                        <Form.Group className="mb-3">

                          <Form.Label>
                            Phone
                          </Form.Label>

                          <Form.Control
                            type="text"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                          />

                        </Form.Group>
                      </Col>

                      <Col md={6}>
                        <Form.Group className="mb-3">

                          <Form.Label>
                            New Password
                          </Form.Label>

                          <Form.Control
                            type="password"
                            name="password"
                            placeholder="Leave blank to keep current"
                            value={formData.password}
                            onChange={handleChange}
                          />

                        </Form.Group>
                      </Col>

                    </Row>

                    <Row>

                      <Col md={6}>
                        <Form.Group className="mb-3">

                          <Form.Label>
                            City
                          </Form.Label>

                          <Form.Control
                            type="text"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                          />

                        </Form.Group>
                      </Col>

                      <Col md={6}>
                        <Form.Group className="mb-3">

                          <Form.Label>
                            State
                          </Form.Label>

                          <Form.Control
                            type="text"
                            name="state"
                            value={formData.state}
                            onChange={handleChange}
                          />

                        </Form.Group>
                      </Col>

                    </Row>

                    <Button
                      type="submit"
                      className="save-profile-btn"
                    >
                      Save Changes
                    </Button>

                    <Button
                      variant="secondary"
                      className="ms-2"
                      onClick={() => setEditing(false)}
                    >
                      Cancel
                    </Button>

                  </Form>

                ) : (

                  <Row className="profile-info">

                    <Col md={6}>
                      <div className="info-box">
                        <small>Phone</small>
                        <strong>
                          {user.phone || "Not provided"}
                        </strong>
                      </div>
                    </Col>

                    <Col md={6}>
                      <div className="info-box">
                        <small>City</small>
                        <strong>
                          {user.city || "Not provided"}
                        </strong>
                      </div>
                    </Col>

                    <Col md={6}>
                      <div className="info-box">
                        <small>State</small>
                        <strong>
                          {user.state || "Not provided"}
                        </strong>
                      </div>
                    </Col>

                    <Col md={6}>
                      <div className="info-box">
                        <small>Account Status</small>
                        <strong className="active-text">
                          {user.active
                            ? "Active"
                            : "Inactive"}
                        </strong>
                      </div>
                    </Col>

                  </Row>

                )}

              </Card.Body>

            </Card>

          </Col>

        </Row>

      </Container>

    </div>
  );
};

export default UserProfile;