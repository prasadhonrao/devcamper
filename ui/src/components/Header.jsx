import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaGraduationCap, FaSignInAlt, FaUserPlus, FaSearch } from 'react-icons/fa';
import "../styles/bootstrap.css";

function Header() {
  return (
    <>
      {/* <!-- Navbar --> */}
      <nav class="navbar navbar-expand-md navbar-dark bg-primary fixed-top">
        <div class="container">
          <a class="navbar-brand" href="index.html"
          ><i class="fas fa-laptop-code"></i> DevCamper</a
          >
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <a class="nav-link" href="login.html"
                ><FaSignInAlt /> Login</a
                >
              </li>
              <li class="nav-item">
                <a class="nav-link" href="register.html"
                ><FaUserPlus /> Register</a
                >
              </li>
              <li class="nav-item d-none d-sm-block">
                <a class="nav-link" href="#">|</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="bootcamps.html">Browse Bootcamps</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* // <Navbar expand="lg" className="bg-info" fixed="top">
    //   <Container>
    //     <Navbar.Brand as={Link} to="/">
    //       <FaGraduationCap className="brand-logo" />
    //       Bootcamp
    //     </Navbar.Brand>
    //     <Navbar.Toggle aria-controls="primary-navbar-nav" />
    //     <Navbar.Collapse id="primary-navbar-nav">
    //       <Nav className="ms-auto">
    //         <Nav.Link as={Link} to="/login">
    //           <FaSignInAlt /> Login
    //         </Nav.Link>
    //         <Nav.Link as={Link} to="/register">
    //           <FaUserPlus /> Register
    //         </Nav.Link>
    //         <div className="nav-separator"></div>
    //         <Nav.Link as={Link} to="/browse">
    //           <FaSearch /> Browse Bootcamps
    //         </Nav.Link>
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar> */}
    </>
  );
}

export default Header;
