import { Row, Col, Container } from 'react-bootstrap';
import { FaTwitter } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai"

const Footer = () => {
  return (
    <div className="footer py-5">
      <div className="container">
        <div className="row mt-2 footerCon-body">
          <Container className="contact-us">
            <Row>
              <Col xs={12} md={5} lg={5}>
                <div className='d-flex'>
                  <h2>Contact Us</h2>
                  <ul className="social-icons d-flex">
                    <a href="#"><FaTwitter size={20} /></a>
                    <a href="#"><FaYoutube size={20} /></a>
                    <a href="#"><FaFacebookSquare size={20} /></a>
                    <a href="#"><AiFillInstagram size={20} /></a>
                  </ul>
                </div>
              </Col>
              <Col xs={12} md={7} lg={7}>
                <div className='d-flex'>
                  <h2>Download Our Application</h2>
                  <a href="#" className='mx-2'><img src="/images/google-play.png" height={35} alt="Google Play" /></a>
                  <a href="#"><img src="/images/app-store.png" height={35} alt="App Store" /></a>
                </div>
              </Col>
            </Row>
          </Container>
          <div className="contact-us d-flex mt-4">
            <div className="col-lg-3 col-sm-3 col-xs-12">
              <div className="single_footer">
                <h4>About DevCamper</h4>
                <ul>
                  <li><a href="#">About</a></li>
                  <li><a href="#">How it works</a></li>
                  <li><a href="#">work with us</a></li>
                  <li><a href="#">Our Partners</a></li>
                  <li><a href="#">teams of Service</a></li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 col-sm-3 col-xs-12">
              <div className="single_footer single_footer_address">
                <h4>Bootcamps</h4>
                <ul>
                  <li><a href="#">Bootcamp Locations</a></li>
                  <li><a href="#">Corporate Information</a></li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 col-sm-3 col-xs-12">
              <div className="single_footer single_footer_address">
                <h4>Support</h4>
                <ul>
                  <li><a href="#">Contact Us</a></li>
                  <li><a href="#">Help Center</a></li>
                  <li><a href="#">FAQs</a></li>
                  <li><a href="#">Customer Privacy</a></li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 col-sm-3 col-xs-12">
              <div className="single_footer single_footer_address">
                <h4>Community</h4>
                <ul>
                  <li><a href="#">Stories</a></li>
                  <li><a href="#">Community Reviews</a></li>
                  <li><a href="#">Published Articles</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 col-sm-12 col-xs-12">
            <p className="copyright text-right">All Rights are Reserved by DevCamper Ltd.2024.</p>
          </div>
        </div>
      </div>
      {/* <!--- END CONTAINER --> */}
    </div>
  );
};

export default Footer;
