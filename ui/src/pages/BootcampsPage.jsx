import BootcampList from '../components/bootcamp/BootcampList';
import Filter from '../components/bootcamp/Filter';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const BrowseBootcampsPage = () => {
  return (
    <section className="browse my-5">
      <div className="container">
        <div className="row">
          {/* <!-- Sidebar --> */}
          <div className="col-md-4">
            <div className="card card-body mb-4">
              <h4 className="mb-3">By Location</h4>
              <Form>
                <div className='d-flex'>
                  <Col md={6} className="mt-1 pl-0">
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                      <Form.Control type="text" name="miles" placeholder="Miles From" />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mt-1 pr-0">
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                      <Form.Control type="zipcode" placeholder="Enter Zipcode" />
                    </Form.Group>
                  </Col>
                </div>
              </Form>
              <Button type="submit" className="btn btn-primary btn-block">Find Bootcamps</Button>
            </div>

            <Filter />
          </div>
          <BootcampList />
        </div>
      </div>
    </section>
  );
};

export default BrowseBootcampsPage;
