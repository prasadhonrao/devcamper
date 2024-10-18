import React from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';

const UpdatePasswordPage = () => {
    return (
        <section className="container mt-5">
        <div className="container">

			<div className="row">
				<div className="col-md-8 m-auto">
					<div className="card bg-white py-2 px-4">
						<div className="card-body">
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
						</div>
					</div>
				</div>
			</div>
		



        </div>
    </section>
  );
};

export default UpdatePasswordPage;