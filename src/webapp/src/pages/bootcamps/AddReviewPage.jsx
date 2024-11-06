import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';
import { AiOutlineLeft } from 'react-icons/ai';

const AddReviewPage = () => {
  const { bootcampId } = useParams(); // Get bootcampId from URL parameters
  const [rating, setRating] = useState(8);

  const handleRatingChange = (event) => {
    setRating(event.target.value);
  };

  return (
    <section className="container mt-5">
      <Container>
        <Row className="justify-content-md-center">
          <Col md={8}>
            <Card className="bg-white py-2 px-4">
              <Card.Body>
                <Link to={`/bootcamps/${bootcampId}`} className="btn btn-link text-secondary my-3">
                  <AiOutlineLeft className="mb-1" style={{ fontSize: '28px' }} /> Bootcamp Info
                </Link>

                <h1 className="mb-2">DevWorks Bootcamp</h1>
                <h3 className="text-primary mb-4">Write a Review</h3>
                <p>You must have attended and graduated this bootcamp to review.</p>
                <br />
                <Form>
                  <Form.Group controlId="rating" className="form-group">
                    <Form.Label>
                      Rating: <span className="text-primary">{rating}</span>
                    </Form.Label>
                    <Form.Control
                      type="range"
                      min="1"
                      max="10"
                      step="1"
                      value={rating}
                      id="rating"
                      onChange={handleRatingChange}
                      className="custom-range border-0"
                    />
                  </Form.Group>

                  <Form.Group controlId="reviewTitle">
                    <Form.Control type="text" name="title" placeholder="Review title" className="mb-3" />
                  </Form.Group>

                  <Form.Group controlId="reviewText">
                    <Form.Control as="textarea" name="review" rows={10} placeholder="Your review" className="mb-3" />
                  </Form.Group>

                  <Button type="submit" variant="primary" className="w-100">
                    Submit Review
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AddReviewPage;
