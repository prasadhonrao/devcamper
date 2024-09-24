import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaGraduationCap, FaSignInAlt, FaUserPlus, FaLaptopCode, FaUser, FaSearch,FaSignOutAlt } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Image } from 'react-bootstrap';
import "../styles/bootstrap.css";

function Header() {

  const [getHeader, SetHeader] = useState(false);

  useEffect(() => {
    if (window.location.href.includes('addboot')) {
      SetHeader(true);
    } else {
      SetHeader(false);
    }
  }, []);


  return (
    <>
      {/* <!-- Navbar --> */}
      {/*{getHeader == true ?
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
        </nav>}*/}




      <Navbar expand="lg" className="bg-primary">
        <Container>
          <Navbar.Brand as={Link} to="/">
            {/* <FaGraduationCap className="brand-logo" /> */}
            <img src='data:image/png;base64,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' className='logoImage' alt='DevCamp' height={25} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="primary-navbar-nav" />
          <Navbar.Collapse id="primary-navbar-nav">
            <Nav className="ms-auto">
            <NavDropdown
                                    title={
                                        <>
                                            <FaUser /> Account
                                        </>
                                    }
                                    id="account-dropdown"
                                >
                                    <NavDropdown.Item as={Link} to="/manage-bootcamp">
                                        Manage Bootcamp
                                    </NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/manage-reviews">
                                        Manage Reviews
                                    </NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/manage-account">
                                        Manage Account
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item as={Link} to="/login">
                                        <FaSignOutAlt /> Logout
                                    </NavDropdown.Item>
                                </NavDropdown>
              <div className="nav-separator"></div>
              <Nav.Link as={Link} to="/browse">
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
