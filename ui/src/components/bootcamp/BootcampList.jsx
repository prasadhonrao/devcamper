import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Pagination from 'react-bootstrap/Pagination';

function BootcampList() {
    return (
        <>
            {/* <!-- Main col --> */}
            <div className="col-md-8">
                {/* <!-- Bootcamps --> */}
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
                                        <Badge bg="success" className="float-right badge badge-success">8.8</Badge>
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

                <Card className="card mb-3">
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <Card.Img variant="top" src="img/image_2.jpg" />
                        </div>
                        <div className="col-md-8">
                            <Card.Body className="card-body">
                                <Card.Title className="card-title">
                                    <a href="/">
                                        ModernTech Bootcamp
                                        <Badge bg="success" className="float-right badge badge-success">7.5</Badge>
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

                <Card className="card mb-3">
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <Card.Img variant="top" src="img/image_2.jpg" />
                        </div>
                        <div className="col-md-8">
                            <Card.Body className="card-body">
                                <Card.Title className="card-title">
                                    <a href="/">
                                        Codemasters
                                        <Badge bg="success" className="float-right badge badge-success">9.2</Badge>
                                    </a>
                                </Card.Title>
                                <Card.Text>
                                    <Badge bg="dark" className="badge badge-dark mb-2">Burlington, VT</Badge>
                                    <p className="card-text">Web Development, Data Science, Marketing</p>
                                </Card.Text>
                            </Card.Body>
                        </div>
                    </div>
                </Card>

                <Card className="card mb-3">
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <Card.Img variant="top" src="img/image_2.jpg" />
                        </div>
                        <div className="col-md-8">
                            <Card.Body className="card-body">
                                <Card.Title className="card-title">
                                    <a href="/">
                                        DevCentral Bootcamp
                                        <Badge bg="success" className="float-right badge badge-success">6.4</Badge>
                                    </a>
                                </Card.Title>
                                <Card.Text>
                                    <Badge bg="dark" className="badge badge-dark mb-2">Kingston, RI</Badge>
                                    <p className="card-text">Web Development, UI/UX, Mobile Development, Marketing</p>
                                </Card.Text>
                            </Card.Body>
                        </div>
                    </div>
                </Card>

                {/* <!-- Pagination --> */}
                <Pagination>
                    <Pagination.First />
                    <Pagination.Prev />
                    <Pagination.Item>{1}</Pagination.Item>
                    <Pagination.Item>{2}</Pagination.Item>
                    <Pagination.Item>{3}</Pagination.Item>
                    <Pagination.Next />
                    <Pagination.Last />
                </Pagination>
            </div>
        </>
    );
};

export default BootcampList;