import React from 'react';
import { Container, Row, Col, Card, Table } from 'react-bootstrap';
import BootcampReviewRating from '../../components/BootcampReviewRating';

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
              <Table striped>
                <thead>
                  <tr>
                    <th>Bootcamp</th>
                    <th>Rating</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {bootcamps.map((b) => (
                    <BootcampReviewRating
                      key={b.id}
                      bootcampId={b.id}
                      bootCampName={b.name}
                      bootCampRating={b.rating}
                    />
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
