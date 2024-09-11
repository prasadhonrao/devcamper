import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaGraduationCap, FaSignInAlt, FaUserPlus, FaLaptopCode, FaUser } from 'react-icons/fa';
import "../styles/bootstrap.css";
import { useEffect, useState } from 'react';

function Header() {

  const [getHeader, SetHeader] = useState(false);

  useEffect(() => {
    if (window.location.href.includes('browse')) {
      SetHeader(true);
    } else {
      SetHeader(false);
    }
  }, []);


  return (
    <>
      {/* <!-- Navbar --> */}
      {getHeader == true ?
        <nav class="navbar navbar-expand-md navbar-dark bg-primary">
          <div class="container">
            <a class="navbar-brand" href="index.html"
            ><FaLaptopCode /> DevCamper</a
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
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                  >
                    <FaUser /> Account
                  </a>
                  <div class="dropdown-menu">
                    <a class="dropdown-item" href="manage-bootcamp.html"
                    >Manage Bootcamp</a
                    >
                    <a class="dropdown-item" href="manage-reviews.html"
                    >Manage Reviews</a
                    >
                    <a class="dropdown-item" href="manage-account.html"
                    >Manage Account</a
                    >
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="login.html"
                    ><i class="fas fa-sign-out-alt"></i> Logout</a
                    >
                  </div>
                </li>
                <li class="nav-item d-none d-sm-block">
                  <a class="nav-link" href="#">|</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/browse">Browse Bootcamps</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        :

        <nav className="navbar navbar-expand-md navbar-dark bg-primary">
          <div className="container">
            <a className="navbar-brand" href="/"
            ><FaLaptopCode /> DevCamper</a
            >
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a className="nav-link" href="/login"
                  ><FaSignInAlt /> Login</a
                  >
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/register"
                  ><FaUserPlus /> Register</a
                  >
                </li>
                <li className="nav-item d-none d-sm-block">
                  <a className="nav-link" href="#">|</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/browse">Browse Bootcamps</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>}




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
