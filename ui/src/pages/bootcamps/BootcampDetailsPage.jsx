import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Button } from 'react-bootstrap';
import { FaCheck, FaComments, FaGlobe, FaTimes } from 'react-icons/fa';
import { FaPencil } from 'react-icons/fa6';
import NumberFormat from '../../helpers/NumberFormat';

const BootcampDetailsPage = () => {
  const CoursesDetails = [
    {
      id: 1,
      courses_name: 'Front End Web Development',
      duration: 8,
      description:
        'This course will provide you with all of the essentials to become a successful frontend web developer. You will learn to master HTML, CSS and front end JavaScript, along with tools like Git, VSCode and front end frameworks like Vue',
      cost: 8000,
      skill: 'Beginner',
      Scholarship_Available: '',
    },
    {
      id: 2,
      courses_name: 'Full Stack Web Development',
      duration: 12,
      description:
        'In this course you will learn full stack web development, first learning all about the frontend with HTML/CSS/JS/Vue and then the backend with Node.js/Express/MongoDB',
      cost: 10000,
      skill: 'Intermediate',
      Scholarship_Available: '',
    },
    // Add more bootcamp data as needed
  ];

  function redirect_review(e) {
    window.location.href = `/bootcamps/:bootcampId/reviews`;
  }

  function redirect_addreview(e) {
    window.location.href = `/bootcamps/:bootcampId/reviews/add`;
  }

  return (
    <>
      <section className="bootcamp mt-5">
        <div className="container">
          <div className="row">
            {/* <!-- Main col --> */}
            <div className="col-md-8">
              <h1>DevWorks Bootcamp</h1>
              {/* <!-- Description --> */}
              <p>
                Devworks is a full stack JavaScript Bootcamp located in the heart of Boston that focuses on the
                technologies you need to get a high paying job as a web developer
              </p>
              {/* <!-- Avg cost --> */}
              <p className="lead my-4">
                Average Course Cost: <span className="text-primary">$10,000</span>
              </p>
              {/* <!-- Courses --> */}
              {CoursesDetails.map((data, key) => (
                <>
                  <Card className="card my-4">
                    <h5 className="card-header card-head-color text-white">{data.courses_name}</h5>
                    <div className="card-body">
                      <h5 className="card-title">Duration: {data.duration} Weeks</h5>
                      <p className="card-text">{data.description}</p>
                      <ul className="list-group my-3">
                        <li className="list-group-item">Cost: {NumberFormat(data.cost)} USD</li>
                        <li className="list-group-item">Skill Required: {data.skill}</li>
                        <li className="list-group-item">
                          Scholarship Available: <FaCheck color="green" />{' '}
                        </li>
                      </ul>
                    </div>
                  </Card>
                </>
              ))}
            </div>
            {/* <!-- Sidebar --> */}
            <div className="col-md-4">
              {/* <!-- Image --> */}
              <img src="/images/image_1.jpg" className="img-thumbnail" alt="" />
              {/* <!-- Rating --> */}
              <h1 className="text-center my-4">
                <span className="badge badge-secondary badge-success rounded-circle p-3">8.8</span> Rating
              </h1>
              {/* <!-- Buttons --> */}
              <Button onClick={(e) => redirect_review(e)} className="btn btn-dark btn-block my-3">
                <FaComments /> Read Reviews
              </Button>
              <Button onClick={(e) => redirect_addreview(e)} className="btn btn-light btn-block my-3">
                <FaPencil /> Write a Review
              </Button>
              <Button onClick={(e) => redirect_review(e)} className="btn btn-secondary btn-block my-3">
                <FaGlobe /> Visit Website
              </Button>
              {/* <!-- Map --> */}
              {/* <div id='map' style={{ width: "100%", height: "300px" }}></div> */}
              {/* <!-- Perks --> */}
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <FaCheck color="green" /> Housing
                </ListGroup.Item>
                <ListGroup.Item>
                  <FaCheck color="green" /> Job Assistance
                </ListGroup.Item>
                <ListGroup.Item>
                  <FaTimes color="red" /> Job Guarantee
                </ListGroup.Item>
                <ListGroup.Item>
                  <FaCheck color="green" /> Accepts GI Bill
                </ListGroup.Item>
              </ListGroup>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BootcampDetailsPage;
