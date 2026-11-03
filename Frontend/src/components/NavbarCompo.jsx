import { useState } from "react";
import { Button, Container, Form, InputGroup, Nav, Navbar } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./NavbarCompo.css";

import {
    FaCalendarAlt,
    FaHome,
    FaLandmark,
    FaMapMarkerAlt,
    FaSearch,
    FaShieldAlt,
    FaUser,
    FaUtensils,
} from "react-icons/fa";

import logo from "../assets/logo/min_logo.png";

const NavbarCompo = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const menuItems = [
    { name: "Home", path: "/", icon: <FaHome /> },
    { name: "Festivals", path: "/festivals", icon: <FaCalendarAlt /> },
    { name: "Heritage", path: "/heritage", icon: <FaLandmark /> },
    { name: "Food", path: "/food", icon: <FaUtensils /> },
    { name: "Tourism", path: "/tourism", icon: <FaMapMarkerAlt /> },
  ];

  const isActive = (path) => {
    return location.pathname === path;
  };

  const handleSearch = (e) => {
    e.preventDefault();

    if (searchTerm.trim()) {
      console.log("Searching for:", searchTerm);

      // You can create a search page later
      navigate(`/search?query=${encodeURIComponent(searchTerm)}`);
    }
  };

  return (
    <Navbar
      expand="lg"
      className="navbar-custom shadow-sm"
      sticky="top"
    >
      <Container>
        {/* Logo */}
        <Navbar.Brand
          as={Link}
          to="/"
          className="d-flex align-items-center brand-custom"
        >
          <img
            src={logo}
            alt="Sanskriti Bharat"
            className="me-2 logo-img"
          />

          <div>
            <div className="brand-text">Sanskriti Bharat</div>
          </div>
        </Navbar.Brand>

        {/* Mobile Toggle */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          {/* Navigation Links */}
          <Nav className="mx-auto mb-2 mb-lg-0">
            {menuItems.map((item) => (
              <Nav.Link
                key={item.path}
                as={Link}
                to={item.path}
                className={`nav-link-custom ${
                  isActive(item.path) ? "active-link" : ""
                }`}
              >
                <span className="me-2">{item.icon}</span>
                {item.name}
              </Nav.Link>
            ))}
          </Nav>

          {/* Search Bar */}
          <Form
            className="d-flex align-items-center me-lg-3"
            onSubmit={handleSearch}
          >
            <InputGroup className="search-group">
              <Form.Control
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search..."
                className="search-input"
              />

              <Button
                type="submit"
                className="search-btn"
              >
                <FaSearch />
              </Button>
            </InputGroup>
          </Form>

          {/* Admin and Login */}
          <div className="d-flex align-items-center gap-2">
            <Button
              as={Link}
              to="/admin"
              variant="outline-primary"
              className="admin-btn"
            >
              <FaShieldAlt className="me-2" />
              Admin Panel
            </Button>

            <Button
              as={Link}
              to="/login"
              variant="primary"
              className="login-btn"
            >
              <FaUser className="me-2" />
              Login
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarCompo;