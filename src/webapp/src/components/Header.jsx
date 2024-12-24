import React from 'react';
import { Link, useNavigate, useLocation} from 'react-router-dom';
import PropTypes from 'prop-types';
import { Nav, Navbar, Container, Dropdown } from 'react-bootstrap';
import { FaSignInAlt, FaUserPlus, FaSearch, FaUser, FaSignOutAlt, FaCogs, FaStar } from 'react-icons/fa';
import { useAuth } from '../contexts/AuthContext';

function Header() {
  const location = useLocation();
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
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
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              {user ? (
                <Dropdown>
                <Dropdown.Toggle as={Nav.Link} id="dropdown-basic">
                  <FaUser /> Account
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item as={Link} to="/bootcamps/:bootcampId/manage" className={location.pathname === '/bootcamps/:bootcampId/manage' ? 'nav-link active' : 'nav-link'}>
                    <FaCogs /> Manage Bootcamps
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/bootcamps/:bootcampId/reviews/manage" className={location.pathname === '/bootcamps/:bootcampId/reviews/manage' ? 'nav-link active' : 'nav-link'}>
                    <FaStar /> Manage Reviews
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/user/manage" className={location.pathname === '/user/manage' ? 'nav-link active' : 'nav-link'}>
                    <FaUser /> Manage Account
                  </Dropdown.Item>
                  <Dropdown.Item onClick={handleLogout}>
                    <FaSignOutAlt /> Logout
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            ) : (
              <>
                <Nav.Link as={Link} to="/user/login" className={location.pathname === '/user/login' ? 'nav-link active' : 'nav-link'}>
                  <FaSignInAlt /> Login
                </Nav.Link>
                <Nav.Link as={Link} to="/user/register" className={location.pathname === '/user/register' ? 'nav-link active' : 'nav-link'}>
                  <FaUserPlus /> Register
                </Nav.Link>
              </>
            )}
            <div className="nav-separator"></div>
            <Nav.Link as={Link} to="/bootcamps" className={location.pathname === '/bootcamps' ? 'nav-link active' : 'nav-link'}>
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
