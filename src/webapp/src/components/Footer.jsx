import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { FaTwitter } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai"

const Footer = () => {
  return (
    <div className="footer pt-5 pb-2 mt-5">
      <div className="container">

        <Container className="contact-us">
          <div className="row mt-2 footerCon-body">
            {/* <Row className='contact-us'>
              <Col lg={2}>
                <h2>Contact Us</h2>
              </Col>
              <Col lg={3} >
                <div className='d-flex'>

                  <ul className="social-icons d-flex pl-0">
                    <a href="#"><FaTwitter size={20} /></a>
                    <a href="#"><FaYoutube size={20} /></a>
                    <a href="#"><FaFacebookSquare size={20} /></a>
                    <a href="#"><AiFillInstagram size={20} /></a>
                  </ul>
                </div>
              </Col>
              <Col lg={4}>
                <h2>Download Our Application</h2>
              </Col>
              <Col lg={3} className='mb-3  pl-0'>
                <div className='d-flex'>

                  <a href="#" className='mx-2'><img src="/images/google-play.png" height={35} alt="Google Play" /></a>
                  <a href="#"><img src="/images/app-store.png" height={35} alt="App Store" /></a>
                </div>
              </Col>
            </Row> */}
            <Row className='contact-us mt-3'>
              <Col lg={3}>
                <div className="single_footer">
                  <h4>About DevCamper</h4>
                  <ul>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Our Team</a></li>
                  </ul>
                </div>
              </Col>
              <Col lg={3}>
                <div className="single_footer single_footer_address">
                  <h4>Bootcamps</h4>
                  <ul>
                    <li><a href="#">Bootcamp Locations</a></li>
                    <li><a href="#">Courses</a></li>
                  </ul>
                </div>
              </Col>
              <Col lg={3}>
                <div className="single_footer single_footer_address">
                  <h4>Support</h4>
                  <ul>
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="#">FAQs</a></li>
                  </ul>
                </div>
              </Col>
              <Col lg={3}>
                <div className="single_footer single_footer_address">
                  <h4>Community</h4>
                  <ul>
                    <li><a href="#">Reviews</a></li>
                  </ul>
                </div>
              </Col>
            </Row>
          </div>
          <Row className='contact-us'>
            <Col lg={12}>
              <p className="copyright text-center">All Rights are Reserved by DevCamper Ltd.2024.</p>
            </Col>
          </Row>
        </Container>
      </div>
      {/* <!--- END CONTAINER --> */}
    </div>
  );
};

export default Footer;
