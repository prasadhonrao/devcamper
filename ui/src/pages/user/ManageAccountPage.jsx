import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Row, Col, Card, Container } from 'react-bootstrap';
import userService from '../../services/userService';

const ManageAccountPage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({});

  useEffect(() => {
    const getUser = async () => {
      const response = await userService.getMe();
      setUser(response.data);
    };
    getUser();
  }, []);

  const onChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await userService.updateDetails({ name: user.name, email: user.email });
    } catch (error) {
      console.error(error);
      alert('Failed to update user. Please try again.');
    }
  };

  const redirectToUpdatePassword = () => {
    navigate('/user/password/update');
  };

  return (
    <section className="container mt-5">
      <Container>
      <Row>
        <Col md={8} className="m-auto">
          <Card className="bg-white py-2 px-4">
            <Card.Body>
              <h1 className="mb-2">Manage Account</h1>
              <Form onSubmit={onSubmit}>
                <Form.Group controlId="formName" className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={user.name}
                    onChange={onChange}
                  />
                </Form.Group>
                <Form.Group controlId="formEmail" className="mb-4">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={user.email}
                    onChange={onChange}
                  />
                </Form.Group>
                <Form.Group>
                  <Row>
                    <Col md={6}>
                      <Button type="submit" variant="primary" className="w-100">
                        Save
                      </Button>
                    </Col>
                    <Col md={6}>
                      <Button
                        type="button"
                        variant="success"
                        className="w-100"
                        onClick={redirectToUpdatePassword}
                      >
                        Update Password
                      </Button>
                    </Col>
                  </Row>
                </Form.Group>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      </Container>
    </section>
  );
};
export default ManageAccountPage;
