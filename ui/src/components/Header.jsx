import { Link, useLocation } from 'react-router-dom';
import { Nav, Navbar, Container, Dropdown } from 'react-bootstrap';
import { FaSignInAlt, FaUserPlus, FaSearch, FaUser, FaSignOutAlt, FaCogs, FaStar } from 'react-icons/fa';

function Header({ isAuthenticated, setIsAuthenticated }) {
  const location = useLocation(); // Get the current URL

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
  };

  return (
    <>
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
                    <Dropdown.Item as={Link} to="/bootcamps/manage" className={location.pathname === '/bootcamps/manage' ? 'active' : ''}>
                      <FaCogs /> Manage Bootcamps
                    </Dropdown.Item>
                    <Dropdown.Item as={Link} to="/manage-reviews" className={location.pathname === '/manage-reviews' ? 'active' : ''}>
                      <FaStar /> Manage Reviews
                    </Dropdown.Item>
                    <Dropdown.Item as={Link} to="/account/manage" className={location.pathname === '/account/manage' ? 'active' : ''}>
                      <FaUser /> Manage Account
                    </Dropdown.Item>
                    <Dropdown.Item onClick={handleLogout}>
                      <FaSignOutAlt /> Logout
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              ) : (
                <>
                  <Nav.Link as={Link} to="/login" className={location.pathname === '/login' ? 'active' : ''}>
                    <FaSignInAlt /> Login
                  </Nav.Link>
                  <Nav.Link as={Link} to="/register" className={location.pathname === '/register' ? 'active' : ''}>
                    <FaUserPlus /> Register
                  </Nav.Link>
                </>
              )}
              <div className="nav-separator"></div>
              <Nav.Link as={Link} to="/bootcamps" className={location.pathname === '/bootcamps' ? 'active' : ''}>
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
