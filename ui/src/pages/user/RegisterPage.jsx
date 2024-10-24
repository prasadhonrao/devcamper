import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { TiUserAdd } from 'react-icons/ti';
import userService from '../../services/userService';
import { useAuth } from '../../contexts/AuthContext';

const RegisterPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'user', // Default role
  });
  const { name, email, password, role } = formData;

  const { login } = useAuth();

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await userService.register({ name, email, password, role });

      // Automatically log in the user after registration
      if (res.success) {
        login(res.token);
        navigate('/');
      }
    } catch (error) {
      console.error('Error registering user:', error);
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
                  <TiUserAdd className="mb-2" /> Register
                </h1>
                <p>Register to list your bootcamp or rate, review and favorite bootcamps</p>
                <Form onSubmit={onSubmit}>
                  <Form.Group className="mb-3 mt-2" controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name="name" value={name} onChange={onChange} required />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name="email" value={email} onChange={onChange} required />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" value={password} onChange={onChange} required />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formRole">
                    <Form.Label>Role</Form.Label>
                    <Form.Control as="select" name="role" value={role} onChange={onChange} required>
                      <option value="user">User</option>
                      <option value="publisher">Publisher</option>
                      <option value="admin">Admin</option>
                    </Form.Control>
                  </Form.Group>
                  <Row>
                    <Col md={6} className="d-grid">
                      <Button variant="primary" type="submit">
                        Register
                      </Button>
                    </Col>
                    <Col md={6} className="d-grid">
                      <Button variant="primary" type="button" onClick={() => navigate(`/`)}>
                        Cancel
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterPage;
