import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button, Card, ListGroup } from 'react-bootstrap';
import { FaCheck, FaComments, FaTimes } from 'react-icons/fa';
import { FaPencil } from 'react-icons/fa6';
import NumberFormat from '../../helpers/NumberFormat';
import bootcampService from '../../services/bootcampService';

const BootcampDetailsPage = () => {
  const { bootcampId } = useParams();
  const navigate = useNavigate();
  const [bootcamp, setBootcamp] = useState({});
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchBootcamp = async () => {
      const res = await bootcampService.getBootcamp(bootcampId);
      setBootcamp(res.data);
      setCourses(res.data.courses);
    };
    fetchBootcamp();
  }, [bootcampId]);

  function redirectToReviewPage(e) {
    e.preventDefault();
    navigate(`/bootcamps/${bootcampId}/reviews`);
  }

  function redirectToAddReviewPage(e) {
    e.preventDefault();
    navigate(`/bootcamps/${bootcampId}/reviews/add`);
  }

  return (
    <section className="bootcamp mt-5">
      <div className="container">
        <div className="row">
          {/* <!-- Main col --> */}
          <div className="col-md-8">
            <h1>{bootcamp.name}</h1>
            {/* <!-- Description --> */}
            <p>{bootcamp.description}</p>
            {/* <!-- Avg cost --> */}
            <p className="lead my-4">
              Average Course Cost: <span className="text-primary">{NumberFormat(bootcamp.averageCost)}</span>
            </p>
            {courses.map((course, key) => (
              <Card key={key} className="card my-4">
                <h5 className="card-header card-head-color text-white">{course.title}</h5>
                <div className="card-body">
                  <h5 className="card-title">Duration: {course.weeks} Weeks</h5>
                  <p className="card-text">{course.description}</p>
                  <ul className="list-group my-3">
                    <li className="list-group-item">Cost: {NumberFormat(course.tuition)} USD</li>
                    <li className="list-group-item">Skill Required: {course.minimumSkill}</li>
                    <li className="list-group-item">
                      Scholarship Available: <FaCheck color="green" />{' '}
                    </li>
                  </ul>
                </div>
              </Card>
            ))}
          </div>
          {/* <!-- Sidebar --> */}
          <div className="col-md-4">
            {/* <!-- Image --> */}
            <img src="/images/image_1.jpg" className="img-thumbnail" alt="" />
            {/* <!-- Rating --> */}
            <h1 className="text-center my-4">
              <span className="badge badge-secondary badge-success rounded-circle p-3">{bootcamp.averageRating}</span>{' '}
              Rating
            </h1>
            {/* <!-- Buttons --> */}
            <Button onClick={redirectToReviewPage} className="btn btn-secondary btn-block my-3">
              <FaComments /> Read Reviews
            </Button>
            <Button onClick={redirectToAddReviewPage} className="btn btn-secondary btn-block my-3">
              <FaPencil /> Write a Review
            </Button>

            <ListGroup variant="flush">
              <ListGroup.Item>
                {bootcamp.housing ? <FaCheck color="green" /> : <FaTimes color="red" />} Housing
              </ListGroup.Item>
              <ListGroup.Item>
                {bootcamp.jobAssistance ? <FaCheck color="green" /> : <FaTimes color="red" />} Job Assistance
              </ListGroup.Item>
              <ListGroup.Item>
                {bootcamp.jobGuarantee ? <FaCheck color="green" /> : <FaTimes color="red" />} Job Guarantee
              </ListGroup.Item>
              <ListGroup.Item>
                {bootcamp.acceptGi ? <FaCheck color="green" /> : <FaTimes color="red" />} Accepts GI Bill
              </ListGroup.Item>
            </ListGroup>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BootcampDetailsPage;
