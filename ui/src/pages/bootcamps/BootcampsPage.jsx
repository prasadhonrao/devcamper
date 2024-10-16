import { useState, useEffect } from 'react';
import Bootcamp from '../../components/Bootcamp';
import Pagination from '../../components/Pagination';
import bootcampService from '../../services/bootcampService';

const BootcampsPage = () => {
  const [bootcamps, setBootcamps] = useState([]);

  // Load bootcamps from API
  useEffect(() => {
    const fetchBootcamps = async () => {
      const res = await bootcampService.getBootcamps();
      setBootcamps(res.data);
    };
    fetchBootcamps();
  }, []);

  return (
    <section className="browse my-5">
      <div className="container">
        <div className="row">
          {/* <!-- Sidebar --> */}
          <div className="col-md-4">
            <div className="card card-body mb-4">
              <h4 className="mb-3">By Location</h4>
              <form>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input type="text" className="form-control" name="miles" placeholder="Miles From" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input type="text" className="form-control" name="zipcode" placeholder="Enter Zipcode" />
                    </div>
                  </div>
                </div>
                <input type="submit" value="Find Bootcamps" className="btn btn-primary btn-block" />
              </form>
            </div>

            {/* <h4>Filter</h4>
            <form>
              <div className="form-group">
                <label> Rating</label>
                <select className="custom-select mb-2">
                  <option value="any" selected>
                    Any
                  </option>
                  <option value="9">9+</option>
                  <option value="8">8+</option>
                  <option value="7">7+</option>
                  <option value="6">6+</option>
                  <option value="5">5+</option>
                  <option value="4">4+</option>
                  <option value="3">3+</option>
                  <option value="2">2+</option>
                </select>
              </div>

              <div className="form-group">
                <label> Budget</label>
                <select className="custom-select mb-2">
                  <option value="any" selected>
                    Any
                  </option>
                  <option value="20000">$20,000</option>
                  <option value="15000">$15,000</option>
                  <option value="10000">$10,000</option>
                  <option value="8000">$8,000</option>
                  <option value="6000">$6,000</option>
                  <option value="4000">$4,000</option>
                  <option value="2000">$2,000</option>
                </select>
              </div>
              <input type="submit" value="Find Bootcamps" className="btn btn-primary btn-block" />
            </form> */}
          </div>

          {/* <!-- Main col --> */}
          <div className="col-md-8">
            {bootcamps !== undefined && bootcamps.length > 0 ? (
              bootcamps.map((bootcamp) => <Bootcamp key={bootcamp.id} bootcamp={bootcamp} />)
            ) : (
              <h4>No bootcamps found</h4>
            )}
            {/* <!-- Pagination --> */}
            <Pagination />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BootcampsPage;
