import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ResetPasswordPage = () => {
    return (
        <section className="container mt-5">
        <div className="container">

			<div className="row">
				<div className="col-md-8 m-auto">
					<div className="card bg-white py-2 px-4">
						<div className="card-body">
							
							<Link to="/login">Back to login</Link>
							<h1 className="mb-2">Reset Password</h1>
							<p className="mb-3">	Use this form to reset your password using the registered email address.</p>
							<Form>
							{/* Email Input */}
							<Form.Group controlId="formEmail" className="mb-3">
								<Form.Label>Enter Email</Form.Label>
								<Form.Control
								type="email"
								name="email"
								placeholder="Email address"
								/>
							</Form.Group>

							{/* Submit Button */}
							<Button variant="dark" type="submit" block className="w-100">
								Reset Password
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

export default ResetPasswordPage;