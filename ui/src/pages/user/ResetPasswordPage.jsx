import React from 'react';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ResetPasswordPage = () => {
    return (
        <Container className="mt-5">
            <Row className="justify-content-center">
                <Col md={8}>
                    <Card className="bg-white py-2 px-4">
                        <Card.Body>
                           
                            <Link to="/login">Back to login</Link>

                           
                            <h1 className="mb-2">Reset Password</h1>
                            <p className="mb-3">
                                Use this form to reset your password using the registered email address.
                            </p>

                            
                            <Form>
                                {/* Email Input Section*/}
                                <Form.Group controlId="formEmail" className="mb-3">
                                    <Form.Label>Enter Email</Form.Label>
                                    <Form.Control
                                        type="email"
                                        name="email"
                                        placeholder="Email address"
                                    />
                                </Form.Group>

                                {/* Submit Button */}
                                <Button variant="success" type="submit" className="w-100">
                                    Reset Password
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default ResetPasswordPage;
