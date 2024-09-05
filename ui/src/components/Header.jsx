import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaGraduationCap, FaSignInAlt, FaUserPlus, FaSearch } from 'react-icons/fa';

function Header() {
  return (
    <Navbar expand="lg" className="bg-info" fixed="top">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <FaGraduationCap className="brand-logo" />
          Bootcamp
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="primary-navbar-nav" />
        <Navbar.Collapse id="primary-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/login">
              <FaSignInAlt /> Login
            </Nav.Link>
            <Nav.Link as={Link} to="/register">
              <FaUserPlus /> Register
            </Nav.Link>
            <div className="nav-separator"></div>
            <Nav.Link as={Link} to="/browse">
              <FaSearch /> Browse Bootcamps
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
