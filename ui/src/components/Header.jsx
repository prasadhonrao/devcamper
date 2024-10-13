import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, Container, Dropdown } from 'react-bootstrap';
import { FaSignInAlt, FaUserPlus, FaSearch, FaUser, FaSignOutAlt, FaCogs, FaStar } from 'react-icons/fa';

function Header() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if the user is logged in by checking the token in local storage
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogout = () => {
    // Remove token from local storage and update state
    localStorage.removeItem('token');
    setIsAuthenticated(false);
    // Redirect to home or login page
    window.location.href = '/';
  };

  return (
    <>
      <Navbar expand="lg" className="bg-primary">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img
              src={`${process.env.PUBLIC_URL}/logo.png`}
              alt="DevCamper"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              {isAuthenticated ? (
                <Dropdown>
                  <Dropdown.Toggle as={Nav.Link} id="dropdown-basic">
                    <FaUser /> Account
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item as={Link} to="/manage-bootcamps">
                      <FaCogs /> Manage Bootcamps
                    </Dropdown.Item>
                    <Dropdown.Item as={Link} to="/manage-reviews">
                      <FaStar /> Manage Reviews
                    </Dropdown.Item>
                    <Dropdown.Item as={Link} to="/account">
                      <FaUser /> Account
                    </Dropdown.Item>
                    <Dropdown.Item onClick={handleLogout}>
                      <FaSignOutAlt /> Logout
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              ) : (
                <>
                  <Nav.Link as={Link} to="/login">
                    <FaSignInAlt /> Login
                  </Nav.Link>
                  <Nav.Link as={Link} to="/register">
                    <FaUserPlus /> Register
                  </Nav.Link>
                </>
              )}
              <div className="nav-separator"></div>
              <Nav.Link as={Link} to="/bootcamps">
                <FaSearch /> Browse Bootcamps
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
