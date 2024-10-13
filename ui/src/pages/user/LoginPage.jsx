import { useState } from 'react';
import { LuLogIn } from 'react-icons/lu';
import { Row, Col, Form, Button } from 'react-bootstrap';
import authService from '../../services/authService';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await authService.login({ email, password });
      console.log('User logged in successfully:', res);
      // Save token to local storage
      localStorage.setItem('token', res.token);
      // Redirect to bootcamps page or another page
      window.location.href = '/bootcamps';
    } catch (error) {
      console.error('Error logging in:', error);
      // Handle login error (e.g., display error message)
    }
  };

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
                <Form onSubmit={onSubmit}>
                  <Row className="py-3">
                    <Col md={12} className="mt-3">
                      <Form.Group controlId="formEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" name="email" value={email} onChange={onChange} required />
                      </Form.Group>
                    </Col>
                    <Col md={12} className="mt-3">
                      <Form.Group controlId="formPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" value={password} onChange={onChange} required />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Button variant="primary" type="submit" className="mt-3">
                    Login
                  </Button>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
