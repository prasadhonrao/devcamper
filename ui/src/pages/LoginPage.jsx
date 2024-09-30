import { LuLogIn } from 'react-icons/lu';
import { Row, Col, Form, Button } from 'react-bootstrap';

const LoginPage = () => {
  return (
    <section className="form mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6 m-auto">
            <div className="card bg-white p-4 mb-4">
              <div className="card-body">
                <h1>
                  <LuLogIn /> Login
                </h1>
                <p>Log in to list your bootcamp or rate, review and favorite bootcamps</p>
                <Form action="bootcamps.html">
                  <Row className="py-3">
                    <Col md={12} className="mt-3">
                      <Form.Group>
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type="email" name="email" placeholder="Enter email" autoComplete="off" required />
                      </Form.Group>
                    </Col>
                    <Col md={12} className="my-3">
                      <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          type="password"
                          name="password"
                          placeholder="Enter password"
                          autoComplete="off"
                          required
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={12}>
                      <div className="d-grid gap-2">
                        <Button variant="primary" size="lg" type="submit">
                          Login
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </Form>
                <p className="mt-2">
                  Forgot Password? <a href="/reset_password">Reset Password</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
