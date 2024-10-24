import React, { useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { AiOutlineLeft } from 'react-icons/ai';
import courseService from '../../services/courseService';
import { getToken } from '../../helpers/auth';
import { toast } from 'react-toastify';
import { Form, Button, Container, Row, Col, Card} from 'react-bootstrap';

const AddCoursePage = () => {
  const { bootcampId } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    duration: '',
    tuition: '',
    minimumSkill: 'Beginner (Any)', // Initialize to default
    description: '',
    scholarshipAvailable: false,
  });
  const [error, setError] = useState(null);
  const { minimumSkill, scholarshipAvailable } = formData;

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const token = getToken();
    if (!token) {
      setError(error.message);
      toast.error('Failed to add course. Please try again later.');
      return;
    }

    try {
      await courseService.createCourse(bootcampId, formData, token);
      navigate(`/bootcamps/${bootcampId}/courses/manage`);
    } catch (error) {
      console.error(error);
      if (error.response && error.response.status === 401) {
        setError('You are not authorized to add a course.');
      } else {
        setError('Failed to add course. Please try again.');
      }
    }
  };

  return (
    <section className="container mt-5">
      <Container>
        <Row className="justify-content-md-center">
          <Col md={8}>
            <Card className="bg-white p-4">
              <Card.Body>
                <Link to={`/bootcamps/${bootcampId}/courses/manage`} className="btn btn-link text-secondary mb-3">
                  <AiOutlineLeft className="mb-1" style={{ fontSize: '28px' }} /> Manage Courses
                </Link>
                <h1 className="mb-2">DevWorks Bootcamp</h1>
                <h3 className="text-primary mb-4">Add Course</h3>
                <Form onSubmit={onSubmit}>
                  <Form.Group controlId="title" className="mb-3">
                    <Form.Label>Course Title</Form.Label>
                    <Form.Control
                      type="text"
                      name="title"
                      placeholder="Title"
                      onChange={onChange}
                      required
                    />
                  </Form.Group>

                  <Form.Group controlId="duration" className="mb-3">
                    <Form.Label>Duration</Form.Label>
                    <Form.Control
                      type="number"
                      name="duration"
                      placeholder="Duration"
                      onChange={onChange}
                      required
                    />
                    <Form.Text className="text-muted">
                      Enter number of weeks course lasts
                    </Form.Text>
                  </Form.Group>

                  <Form.Group controlId="tuition" className="mb-3">
                    <Form.Label>Course Tuition</Form.Label>
                    <Form.Control
                      type="number"
                      name="tuition"
                      placeholder="Tuition"
                      onChange={onChange}
                      required
                    />
                    <Form.Text className="text-muted">
                      USD Currency
                    </Form.Text>
                  </Form.Group>

                  <Form.Group controlId="minimumSkill" className="mb-3">
                    <Form.Label>Minimum Skill Required</Form.Label>
                    <Form.Select
                      name="minimumSkill"
                      value={minimumSkill}
                      onChange={onChange}
                    >
                      <option value="beginner">Beginner (Any)</option>
                      <option value="intermediate">Intermediate</option>
                      <option value="advanced">Advanced</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group controlId="description" className="mb-3">
                    <Form.Control
                      as="textarea"
                      name="description"
                      placeholder="Course description summary"
                      rows={5}
                      onChange={onChange}
                      maxLength="500"
                    />
                    <Form.Text className="text-muted">
                      No more than 500 characters
                    </Form.Text>
                  </Form.Group>

                  <Form.Group controlId="scholarshipAvailable" className="mb-3">
                    <Form.Check
                      type="checkbox"
                      label="Scholarship Available"
                      name="scholarshipAvailable"
                      checked={scholarshipAvailable}
                      onChange={onChange}
                    />
                  </Form.Group>

                  <Button type="submit" variant="primary" className="w-100">
                    Add Course
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

export default AddCoursePage;

