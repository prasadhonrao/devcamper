import React from 'react';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';

const UpdatePasswordPage = () => {
    return (
        <Container className="mt-5">
            <Row className="justify-content-center">
                <Col md={8}>
                    <Card className="bg-white py-2 px-4">
                        <Card.Body>
                            <h1 className="mb-2">Update Password</h1>
                            <Form>
                                {/* Current Password */}
                                <Form.Group controlId="currentPassword" className="mb-3">
                                    <Form.Label>Current Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        name="password"
                                        placeholder="Current Password"
                                    />
                                </Form.Group>

                                {/* New Password */}
                                <Form.Group controlId="newPassword" className="mb-3">
                                    <Form.Label>New Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        name="newPassword"
                                        placeholder="New Password"
                                    />
                                </Form.Group>

                                {/* Confirm New Password */}
                                <Form.Group controlId="confirmNewPassword" className="mb-3">
                                    <Form.Label>Confirm New Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        name="newPassword2"
                                        placeholder="Confirm New Password"
                                    />
                                </Form.Group>

                                {/* Submit Button */}
                                <Form.Group>
                                    <Button variant="success" type="submit" className="w-100">
                                        Update Password
                                    </Button>
                                </Form.Group>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default UpdatePasswordPage;
