import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import bootcampService from '../../services/bootcampService';

const ManageBootcampPage = () => {
  const { bootcampId } = useParams();
  const [bootcamp, setBootcamp] = useState({});

  useEffect(() => {
    const fetchBootcamp = async () => {
      const res = await bootcampService.getBootcamp(bootcampId);
      //   console.log(res);
      setBootcamp(res.data);
    };
    fetchBootcamp();
  }, [bootcampId]);

  return (
    <section class="container mt-5">
      <div className="container">
        <div class="row">
          <div class="col-md-8 m-auto">
            <div class="card bg-white py-2 px-4">
              <div class="card-body">
                <h1 class="mb-4">Manage Bootcamp</h1>
                <div class="card mb-3">
                  <div class="row no-gutters">
                    <div class="col-md-4">
                      <img src="/images/image_1.jpg" className="img-thumbnail" alt="" />
                    </div>
                    <div class="col-md-8">
                      <div class="card-body">
                        <h5 class="card-title">
                          <Link to="/bootcamps/:bootcampId">
                            {bootcamp.name}
                            <span class="float-right badge badge-success">{bootcamp.averageRating}</span>
                          </Link>
                        </h5>
                        <span class="badge badge-dark mb-2">
                          {/* {bootcamp.location.city}, {bootcamp.location.state} */}
                        </span>
                        {/* <p class="card-text">{bootcamp.careers.join(', ')}</p> */}
                      </div>
                    </div>
                  </div>
                </div>
                <form class="mb-4">
                  <div class="form-group">
                    <div class="custom-file">
                      <input type="file" name="photo" class="custom-file-input" id="photo" />
                      <label class="custom-file-label" for="photo">
                        Add Bootcamp Image
                      </label>
                    </div>
                  </div>
                  <input type="submit" class="btn btn-light btn-block" value="Upload Image" />
                </form>
                <Link to="/bootcamps/add" className="btn btn-success btn-block">
                  Edit Bootcamp Details
                </Link>
                <Link to="/bootcamps/:bootcampId/courses/manage" className="btn btn-primary btn-block">
                  Manage Courses
                </Link>
                <Link to="/bootcamps/:bootcampId/managebootcamp/add" className="btn btn-secondary btn-block">
                  Remove Bootcamp
                </Link>

                <p class="text-muted mt-5">* You can only add one bootcamp per account.</p>
                <p class="text-muted">
                  * You must be affiliated with the bootcamp in some way in order to add it to DevCamper.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManageBootcampPage;
