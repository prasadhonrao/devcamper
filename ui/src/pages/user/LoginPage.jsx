import React from 'react';
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { LuLogIn } from 'react-icons/lu';
import { Row, Col, Form, Button } from 'react-bootstrap';
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
