import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { TiUserAdd } from 'react-icons/ti';
import userService from '../../services/userService';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'user', // Default role
  });

  const { name, email, password, role } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await userService.register({ name, email, password, role });
      console.log('User registered successfully:', res);
      // Handle successful registration (e.g., redirect to login page)
    } catch (error) {
      console.error('Error registering user:', error);
      // Handle registration error (e.g., display error message)
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
                    </Form.Control>
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Register
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

export default RegisterPage;
