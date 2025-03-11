import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import bootcampService from '../../services/bootcampService';

const ManageBootcampPage = () => {
  const { bootcampId } = useParams();
  const [bootcamp, setBootcamp] = useState({});

  useEffect(() => {
    const fetchBootcamp = async () => {
      const res = await bootcampService.getBootcamp(bootcampId);
      setBootcamp(res.data);
    };
    fetchBootcamp();
  }, [bootcampId]);

  return (
    <section className="container mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <div className="card bg-white py-2 px-4">
              <div className="card-body">
                <h1 className="mb-4">Manage Bootcamp</h1>
                <div className="card mb-3">
                  <div className="row no-gutters">
                    <div className="col-md-4">
                      <img src="/images/image_1.jpg" className="img-thumbnail" alt="" />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">
                          <Link to="/bootcamps/:bootcampId">
                            {bootcamp.name}
                            <span className="float-right badge badge-success">{bootcamp.averageRating}</span>
                          </Link>
                        </h5>
                        <span className="badge badge-dark mb-2">
                          {/* {bootcamp.location.city}, {bootcamp.location.state} */}
                        </span>
                        {/* <p class="card-text">{bootcamp.careers.join(', ')}</p> */}
                      </div>
                    </div>
                  </div>
                </div>
                <form className="mb-4">
                  <div className="form-group">
                    <div className="custom-file">
                      <input type="file" name="photo" className="custom-file-input" id="photo" />
                      <label className="custom-file-label" htmlFor="photo">
                        Add Bootcamp Image
                      </label>
                    </div>
                  </div>
                  <input type="submit" className="btn btn-light btn-block" value="Upload Image" />
                </form>
                <Link to="/bootcamps/add" className="btn btn-success btn-block">
                  Edit Bootcamp Details
                </Link>
                <Link to={`/bootcamps/${bootcampId}}/courses/manage`} className="btn btn-primary btn-block">
                  Manage Courses
                </Link>
                <Link to="/bootcamps/:bootcampId/managebootcamp/add" className="btn btn-secondary btn-block">
                  Remove Bootcamp
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManageBootcampPage;
