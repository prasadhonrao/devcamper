import { Row, Col, Form, Button } from 'react-bootstrap';

const HomePage = () => {
  return (
    <>
      <section className="showcase">
        <div className="dark-overlay">
          <div className="showcase-inner container">
            <h1 className="display-4">Find a Coding Bootcamp</h1>
            <p className="lead">Find, rate and read reviews on coding bootcamps</p>
            <Form action="bootcamps.html">
              <Row className="py-3">
                <Col md={6}>
                  <Form.Group>
                    <Form.Control type="text" name="miles" placeholder="Miles From" />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group>
                    <Form.Control type="text" name="zipcode" placeholder="Enter Zipcode" />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col md={12}>
                  <div className="d-grid gap-2">
                    <Button variant="primary" size="lg">
                      Find Bootcamp
                    </Button>
                  </div>
                </Col>
              </Row>
            </Form>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
