import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Table,
  Button,
  Badge,
  Alert,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./AdminDashboard.css";

const AdminDashboard = () => {

  const navigate = useNavigate();

  const [users, setUsers] = useState([]);

  const [stats, setStats] = useState({
    states: 0,
    festivals: 0,
    foods: 0,
    heritage: 0,
    tourism: 0,
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {

    const user =
      JSON.parse(localStorage.getItem("user"));

    if (!user || user.role !== "ADMIN") {
      navigate("/login");
      return;
    }

    loadDashboard();

  }, [navigate]);


  const loadDashboard = async () => {

    setLoading(true);

    try {

      const [
        usersResponse,
        statesResponse,
        festivalsResponse,
        foodsResponse,
        heritageResponse,
        tourismResponse,
      ] = await Promise.all([

        fetch("http://localhost:8080/api/users"),

        fetch("http://localhost:8080/api/states"),

        fetch("http://localhost:8080/api/festivals"),

        fetch("http://localhost:8080/api/foods"),

        fetch("http://localhost:8080/api/heritage"),

        fetch("http://localhost:8080/api/tourism"),
      ]);

      const usersData =
        await usersResponse.json();

      const statesData =
        await statesResponse.json();

      const festivalsData =
        await festivalsResponse.json();

      const foodsData =
        await foodsResponse.json();

      const heritageData =
        await heritageResponse.json();

      const tourismData =
        await tourismResponse.json();


      setUsers(usersData);

      setStats({
        states: statesData.length || 0,
        festivals: festivalsData.length || 0,
        foods: foodsData.length || 0,
        heritage: heritageData.length || 0,
        tourism: tourismData.length || 0,
      });

    } catch (error) {

      console.error(error);

      setError(
        "Unable to load dashboard data."
      );

    } finally {

      setLoading(false);

    }
  };


  const deleteUser = async (id) => {

    const confirmDelete =
      window.confirm(
        "Are you sure you want to delete this user?"
      );

    if (!confirmDelete) return;

    try {

      const response = await fetch(
        `http://localhost:8080/api/users/${id}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Delete failed");
      }

      setUsers(
        users.filter(
          (user) => user.id !== id
        )
      );

    } catch (error) {

      alert(
        "Unable to delete user."
      );

    }
  };


  const logout = () => {

    localStorage.removeItem("user");

    navigate("/login");

  };


  return (

    <div className="admin-page">

      <div className="admin-background-circle circle-a"></div>
      <div className="admin-background-circle circle-b"></div>

      <Container fluid className="px-lg-5">

        {/* HEADER */}

        <div className="admin-header">

          <div>

            <span className="admin-small-title">
              SANSKRITI BHARAT
            </span>

            <h1>
              Admin Dashboard
            </h1>

            <p>
              Manage India's cultural knowledge platform
            </p>

          </div>

          <Button
            className="admin-logout"
            onClick={logout}
          >
            Logout
          </Button>

        </div>


        {error && (
          <Alert variant="danger">
            {error}
          </Alert>
        )}


        {/* STATISTICS */}

        <Row className="g-4 mb-4">

          <Col sm={6} lg={3}>
            <StatCard
              icon="🇮🇳"
              number={stats.states}
              title="States & UTs"
            />
          </Col>

          <Col sm={6} lg={3}>
            <StatCard
              icon="🎉"
              number={stats.festivals}
              title="Festivals"
            />
          </Col>

          <Col sm={6} lg={3}>
            <StatCard
              icon="🍛"
              number={stats.foods}
              title="Foods"
            />
          </Col>

          <Col sm={6} lg={3}>
            <StatCard
              icon="🏛️"
              number={stats.heritage}
              title="Heritage"
            />
          </Col>

        </Row>


        <Row className="g-4 mb-5">

          <Col md={6} lg={3}>
            <StatCard
              icon="✈️"
              number={stats.tourism}
              title="Tourism Places"
            />
          </Col>

          <Col md={6} lg={3}>
            <StatCard
              icon="👥"
              number={users.length}
              title="Registered Users"
            />
          </Col>

        </Row>


        {/* QUICK ACTIONS */}

        <Card className="admin-section-card mb-4">

          <Card.Body>

            <h3>
              Quick Management
            </h3>

            <p className="text-muted">
              Manage cultural information from one place.
            </p>

            <div className="quick-actions">

              <Button
                onClick={() => navigate("/admin/states")}
              >
                🇮🇳 Manage States
              </Button>

              <Button
                onClick={() => navigate("/admin/festivals")}
              >
                🎉 Festivals
              </Button>

              <Button
                onClick={() => navigate("/admin/food")}
              >
                🍛 Food
              </Button>

              <Button
                onClick={() => navigate("/admin/heritage")}
              >
                🏛️ Heritage
              </Button>

              <Button
                onClick={() => navigate("/admin/tourism")}
              >
                ✈️ Tourism
              </Button>

            </div>

          </Card.Body>

        </Card>


        {/* USERS */}

        <Card className="admin-section-card">

          <Card.Body>

            <div className="users-heading">

              <div>

                <h3>
                  Registered Users
                </h3>

                <p>
                  Manage users registered on Sanskriti Bharat.
                </p>

              </div>

              <Badge bg="primary">
                {users.length} Users
              </Badge>

            </div>


            {loading ? (

              <div className="dashboard-loader">
                <div className="spinner"></div>
                Loading dashboard...
              </div>

            ) : (

              <div className="table-responsive">

                <Table
                  hover
                  className="admin-table"
                >

                  <thead>

                    <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Location</th>
                      <th>Role</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>

                  </thead>

                  <tbody>

                    {users.length === 0 ? (

                      <tr>
                        <td
                          colSpan="7"
                          className="text-center"
                        >
                          No users found.
                        </td>
                      </tr>

                    ) : (

                      users.map((user) => (

                        <tr key={user.id}>

                          <td>
                            #{user.id}
                          </td>

                          <td>
                            <strong>
                              {user.name}
                            </strong>
                          </td>

                          <td>
                            {user.email}
                          </td>

                          <td>
                            {user.city || "-"},
                            {" "}
                            {user.state || "-"}
                          </td>

                          <td>
                            <Badge
                              bg={
                                user.role === "ADMIN"
                                  ? "dark"
                                  : "secondary"
                              }
                            >
                              {user.role}
                            </Badge>
                          </td>

                          <td>

                            <Badge
                              bg={
                                user.active
                                  ? "success"
                                  : "danger"
                              }
                            >
                              {user.active
                                ? "Active"
                                : "Inactive"}
                            </Badge>

                          </td>

                          <td>

                            <Button
                              size="sm"
                              variant="outline-danger"
                              onClick={() =>
                                deleteUser(user.id)
                              }
                            >
                              Delete
                            </Button>

                          </td>

                        </tr>

                      ))

                    )}

                  </tbody>

                </Table>

              </div>

            )}

          </Card.Body>

        </Card>

      </Container>

    </div>
  );
};


// STAT CARD

const StatCard = ({
  icon,
  number,
  title,
}) => {

  return (

    <Card className="stat-card">

      <Card.Body>

        <div className="stat-icon">
          {icon}
        </div>

        <div className="stat-number">
          {number}
        </div>

        <div className="stat-title">
          {title}
        </div>

      </Card.Body>

    </Card>
  );
};


export default AdminDashboard;