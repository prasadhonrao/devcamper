import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Nav, Navbar, Container, Dropdown } from 'react-bootstrap';
import { FaSignInAlt, FaUserPlus, FaSearch, FaUser, FaSignOutAlt, FaCogs, FaStar } from 'react-icons/fa';

function Header({ isAuthenticated, setIsAuthenticated }) {
  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
  };

  return (
    <header>
      <Navbar expand="lg" className="bg-primary">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img
              src={`${process.env.PUBLIC_URL}/logo.png`}
              alt="DevCamper"
              width="20"
              height="20"
              className="d-inline-block"
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
                    <Dropdown.Item as={Link} to="/bootcamps/manage">
                      <FaCogs /> Manage Bootcamps
                    </Dropdown.Item>
                    <Dropdown.Item as={Link} to="/manage-reviews">
                      <FaStar /> Manage Reviews
                    </Dropdown.Item>
                    <Dropdown.Item as={Link} to="/account/manage">
                      <FaUser /> Manage Account
                    </Dropdown.Item>
                    <Dropdown.Item onClick={handleLogout}>
                      <FaSignOutAlt /> Logout
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              ) : (
                <>
                  <Nav.Link as={Link} to="/user/login">
                    <FaSignInAlt /> Login
                  </Nav.Link>
                  <Nav.Link as={Link} to="/user/register">
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
    </header>
  );
}

Header.propTypes = {
  isAuthenticated: PropTypes.bool,
  setIsAuthenticated: PropTypes.func,
};

export default Header;
