import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { IoIosArrowBack } from "react-icons/io";
import { FaPencil } from "react-icons/fa6";
import { ImCross } from "react-icons/im";

function ManageCourse() {
    return (
        <>
            <section class="container mt-5">
                <div class="row">
                    <div class="col-md-8 m-auto">
                        <div class="card bg-white py-2 px-4">
                            <div class="card-body">
                                <a
                                    href="manage-bootcamp.html"
                                    class="btn btn-link text-secondary my-3"
                                ><IoIosArrowBack /> Manage Bootcamp</a
                                >
                                <h1 class="mb-4">Manage Courses</h1>
                                <Card className="card mb-3">
                                    <div className="row no-gutters">
                                        <div className="col-md-4">
                                            <Card.Img variant="top" src="/img/image_1.jpg" />
                                        </div>
                                        <div className="col-md-8">
                                            <Card.Body className="card-body">
                                                <Card.Title className="card-title">
                                                    <a href="/">
                                                        Devworks Bootcamp
                                                        <Badge bg="success" className="float-right badge badge-success">4.9</Badge>
                                                    </a>
                                                </Card.Title>
                                                <Card.Text>
                                                    <Badge bg="dark" className="badge badge-dark mb-2">Boston, MA</Badge>
                                                    <p className="card-text">Web Development, UI/UX, Mobile Development</p>
                                                </Card.Text>
                                            </Card.Body>
                                        </div>
                                    </div>
                                </Card>

                                <Button type="submit" className="btn btn-primary btn-block">Add Bootcamp Course</Button>

                                <Table striped className='mt-4'>
                                    <thead>
                                        <tr>
                                            <th >Title</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Front End Web Development</td>
                                            <td><a href="add-course.html" class="btn btn-secondary mx-1"
                                            ><FaPencil /></a>
                                                <button class="btn btn-danger">
                                                    <ImCross />
                                                </button></td>
                                        </tr>
                                        <tr>
                                            <td>Full Stack Web Development</td>
                                            <td><a href="add-course.html" class="btn btn-secondary mx-1"
                                            ><FaPencil /></a>
                                                <button class="btn btn-danger">
                                                    <ImCross />
                                                </button></td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ManageCourse;