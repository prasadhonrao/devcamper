import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import { FaTimes, FaPencilAlt } from 'react-icons/fa';
import { Button, Card, Table } from 'react-bootstrap';
import bootcampService from '../../services/bootcampService';

const ManageCoursesPage = () => {
  const { bootcampId } = useParams();
  const [courses, setCourses] = useState([]);
  const [bootcamp, setBootcamp] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBootcampCourses = async () => {
      const res = await bootcampService.getCoursesByBootcampId(bootcampId);
      setBootcamp(res.bootcamp);
      setCourses(res.data);
    };
    fetchBootcampCourses();
  }, [bootcampId]);

  //redirect to courses page (need to implement in future)
  function navigateToAddCourse() {
    navigate(`/bootcamps/${bootcampId}/courses/add`);
  }

  return (
    <section className="container mt-5">
      <div className="row">
        <div className="col-md-8 m-auto">
          <div className="card bg-white py-2 px-4">
            <div className="card-body">
              <Link to={`/bootcamps/${bootcampId}/manage`} className="btn btn-link text-secondary my-3">
                <IoIosArrowBack /> Manage Bootcamp
              </Link>
              <h1 className="mb-4">Manage Courses</h1>
              <Card className="card mb-3">
                <div className="row no-gutters">
                  <div className="col-md-4">
                    <Card.Img src="/images/image_1.jpg" className="card-img" alt="..." />
                  </div>
                  <Card.Body className="col-md-8 p-0">
                    <div className="card-body">
                      <h5 className="card-title">
                        <a href="bootcamp.html">
                          {bootcamp.name}
                          <span className="float-right badge badge-success">4.9</span>
                        </a>
                      </h5>
                      <span className="badge badge-dark mb-2">Boston, MA</span>
                      <p className="card-text">Web Development, UI/UX, Mobile Development</p>
                    </div>
                  </Card.Body>
                </div>
              </Card>

              <Button
                className="btn btn-primary btn-block mb-4 col-12 my-4"
                onClick={(e) => {
                  navigateToAddCourse(e);
                }}
              >
                Add Bootcamp Course
              </Button>
              {/* <BootcampCourses /> */}
              <Table striped className="table table-striped">
                <thead>
                  <tr>
                    <th colSpan={2}>Title</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {courses.map((course) => (
                    <tr key={course.id}>
                      <td>{course.courses_name}</td>
                      <td>
                        <Link to="add-course.html" className="btn btn-secondary mx-2">
                          <FaPencilAlt />
                        </Link>
                        <Link to="#" className="btn btn-danger">
                          <FaTimes />
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManageCoursesPage;
