import { IoIosArrowBack } from 'react-icons/io';
import { FaTimes, FaPencilAlt } from 'react-icons/fa';
import { Button, Card, Table } from 'react-bootstrap';

const ManageCoursesPage = () => {
  //redirect to courses page (need to implement in future)
  function redirect_addCourses(e) {
    window.location.href = `/bootcamps/:bootcampId/courses/add`;
  }

  // temporary data
  const courses = [
    {
      id: 1,
      courses_name: 'Front End Web Development',
    },
    {
      id: 2,
      courses_name: 'Full Stack Web Development',
    },
  ];

  return (
    <section className="container mt-5">
      <div className="row">
        <div className="col-md-8 m-auto">
          <div className="card bg-white py-2 px-4">
            <div className="card-body">
              <a href="manage-bootcamp.html" className="btn btn-link text-secondary my-3">
                <IoIosArrowBack /> Manage Bootcamp
              </a>
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
                          Devworks Bootcamp
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
                  redirect_addCourses(e);
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
                        <a href="add-course.html" className="btn btn-secondary mx-2">
                          <FaPencilAlt />
                        </a>
                        <button className="btn btn-danger">
                          <FaTimes />
                        </button>
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
