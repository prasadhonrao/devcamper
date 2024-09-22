import Form from 'react-bootstrap/Form';
import { TiUserAdd } from 'react-icons/ti';
import Button from 'react-bootstrap/Button';

const RegisterPage = () => {
  return (
    <>
      <section className="form mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6 m-auto">
              <div className="card bg-white p-4 mb-4">
                <div className="card-body">
                  <h1>
                    <TiUserAdd className="mb-2" /> Register
                  </h1>
                  <p>Register to list your bootcamp or rate, review and favorite bootcamps</p>
                  <Form>
                    <Form.Group className="mb-3 mt-2" controlId="exampleForm.ControlInput1">
                      <Form.Label>Name</Form.Label>
                      <Form.Control type="text" placeholder="Enter full name" />
                    </Form.Group>
                    <Form.Group className="mb-3 mt-2" controlId="exampleForm.ControlTextarea1">
                      <Form.Label>Email Address</Form.Label>
                      <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3 mt-2" controlId="exampleForm.ControlTextarea1">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" placeholder="Enter password" />
                    </Form.Group>
                    <Form.Group className="mb-3 mt-2" controlId="exampleForm.ControlTextarea1">
                      <Form.Label>Confirm Password</Form.Label>
                      <Form.Control type="password" placeholder="Enter password" />
                    </Form.Group>
                    <div className="card card-body mb-3">
                      <h5>User Role</h5>
                      <div className="form-check">
                        <Form.Check // prettier-ignore
                          type="radio"
                          id="role"
                          label="Regular User (Browse, Write reviews, etc)"
                        />
                      </div>
                      <div className="form-check">
                        <Form.Check // prettier-ignore
                          type="radio"
                          id="role"
                          label="Bootcamp Publisher"
                        />
                      </div>
                    </div>
                  </Form>
                  <p className="text-danger">
                    * You must be affiliated with the bootcamp in some way in order to add it to DevCamper.
                  </p>
                  <Button variant="danger">Register</Button>
                  {/* <form>
                    <div className="form-group">
                      <label for="name">Name</label>
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Enter full name"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label for="email">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Enter email"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label for="password">Password</label>
                      <input
                        type="password"
                        name="password"
                        className="form-control"
                        placeholder="Enter password"
                        required
                      />
                    </div>
                    <div className="form-group mb-4">
                      <label for="password2">Confirm Password</label>
                      <input
                        type="password"
                        name="password2"
                        className="form-control"
                        placeholder="Confirm password"
                        required
                      />
                    </div>

                    <div className="card card-body mb-3">
                      <h5>User Role</h5>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="role"
                          value="user"
                          checked
                        />
                        <label className="form-check-label">
                          Regular User (Browse, Write reviews, etc)
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="role"
                          value="publisher"
                        />
                        <label className="form-check-label">
                          Bootcamp Publisher
                        </label>
                      </div>
                    </div>
                    <p className="text-danger">
                      * You must be affiliated with the bootcamp in some way in
                      order to add it to DevCamper.
                    </p>
                    <div className="form-group">
                      <input
                        type="submit"
                        value="Register"
                        className="btn btn-primary btn-block"
                      />
                    </div>
                  </form> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RegisterPage;
