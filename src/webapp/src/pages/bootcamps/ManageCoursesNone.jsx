import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ManageCoursesNone = () => {
   
  return (
    <Container className="mt-5">
      <Row>
        <Col md={8} className="mx-auto">
          <Card className="bg-white py-2 px-4">
            <Card.Body>
              <h1 className="mb-2">Manage Bootcamp</h1>
              <p className="lead mb-3">You have not yet added a bootcamp</p>
              <Link to="/bootcamps/add" className="btn btn-primary btn-block">
              Add Bootcamp
              </Link>
              <p className="text-muted mt-5 mb-3">* You can only add one bootcamp per account.</p>
              <p className="text-muted">* You must be affiliated with the bootcamp in some way in order to add it to DevCamper.</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ManageCoursesNone;