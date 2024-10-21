import React from 'react';
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { LuLogIn } from 'react-icons/lu';
import { Form, Row, Col, Button, Card, Container } from 'react-bootstrap';
import userService from '../../services/userService';

const LoginPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { from } = location.state || { from: { pathname: '/' } };

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
      const res = await userService.login({ email, password });
      localStorage.setItem('token', res.token);
      navigate(from);
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <section className="form mt-5">
      <Container>
        <Row>
          <Col md={6} className="m-auto">
            <Card className="bg-white p-4 mb-4">
              <Card.Body>
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
                  <Row>
                    <Col md={6} className="mt-3 d-grid">
                      <Button type="submit" variant="primary" block>
                        Login
                      </Button>
                    </Col>
                    <Col md={6} className="mt-3 d-grid">
                      <Button type="button" variant="primary" block onClick={() => navigate(`/user/password/update`)}>
                        Forgot Password
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default LoginPage;
