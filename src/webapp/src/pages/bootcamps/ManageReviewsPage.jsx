import React from 'react';
import { Link } from 'react-router-dom';
import { Table, Container, Row, Col, Card, Button } from 'react-bootstrap';
import { GrEdit, GrClose } from 'react-icons/gr';

const bootcamps = [
  {
    id: 1,
    name: 'DevWorks Bootcamp',
    rating: 10,
  },
  {
    id: 2,
    name: 'AI Bootcamp',
    rating: 8,
  },
];

const ManageReviewsPage = () => {
  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="bg-white py-2 px-4">
            <Card.Body>
              <h1 className="mb-4">Manage Reviews</h1>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Bootcamp</th>
                    <th>Rating</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {bootcamps.map((b) => (
                    <tr key={b.id}>
                      <td>{b.name}</td>
                      <td>{b.rating}</td>
                      <td>
                        <Link to={`/bootcamps/${b.id}/reviews/add`}>
                          <Button variant="secondary" className="me-2 mb-1">
                            <GrEdit />
                          </Button>
                        </Link>
                        <Button variant="danger" className="mb-1">
                          <GrClose />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ManageReviewsPage;
