import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { FaPencil } from 'react-icons/fa6';
import { AiOutlineLeft } from 'react-icons/ai';
import reviewService from '../../services/reviewService';

const BootcampReviewsPage = () => {
  const { bootcampId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [bootcamp, setBootcamp] = useState('');

  useEffect(() => {
    const fetchBootcampReviews = async () => {
      const res = await reviewService.getReviewsByBootcamp(bootcampId);
      setBootcamp(res.bootcamp);
      setReviews(res.data);
    };
    fetchBootcampReviews();
  }, [bootcampId]);

  return (
    <section className="bootcamp mt-5">
      <Container>
        <Row>
          <Col md={8}>
            <Link to={`/bootcamps/${bootcampId}`} className="btn btn-secondary my-3">
              <AiOutlineLeft className="mb-1" /> Bootcamp Info
            </Link>
            <h1 className="mb-4">{bootcamp} Reviews</h1>
            {reviews.map((data) => (
              <Card className="mb-3" key={data.key}>
                <Card.Header className="bg-dark text-white">{data.title}</Card.Header>
                <Card.Body>
                  <Card.Title>
                    Rating: <span className="text-success">{data.rating}</span>
                  </Card.Title>
                  <Card.Text>{data.text}</Card.Text>
                  <small className="text-muted">Written By {data.user}</small>
                </Card.Body>
              </Card>
            ))}
          </Col>
          <Col md={4} className="text-center">
            <h1 className="my-4">
              <Badge bg="success" className="rounded-circle py-3 px-3">8.8</Badge> Rating
            </h1>
            <Link to={`/bootcamps/${bootcampId}/reviews/add`}>
              <Button variant="primary" className="w-100 my-3">
                <FaPencil /> Review This Bootcamp
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BootcampReviewsPage;
