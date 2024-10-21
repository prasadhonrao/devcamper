import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import bootcampService from '../../services/bootcampService';

const AddBootcampPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phone: '',
    email: '',
    website: '',
    description: '',
    careers: [],
    housing: false,
    jobAssistance: false,
    jobGuarantee: false,
    acceptGi: false,
  });

  const [error, setError] = useState(null);
  const { name, address, phone, email, website, description, careers, housing, jobAssistance, jobGuarantee, acceptGi } =
    formData;

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      let response = await bootcampService.createBootcamp(formData);
      const bootcampId = response.data.id;
      navigate(`/bootcamps/${bootcampId}/courses/add`);
    } catch (error) {
      setError(error.message);
      toast.error(`Error occurred: ${error.message}`);
    }
  };

  return (
    <section className="container mt-5">
      <div className="container">
        <h1 className="mb-2">Add Bootcamp</h1>
        <form onSubmit={onSubmit}>
          <div className="row">
            <div className="col-md-6">
              <div className="card bg-white py-2 px-4">
                <div className="card-body">
                  <h3>Location & Contact</h3>
                  <p className="text-muted">If multiple locations, use the main or largest</p>
                  <div className="form-group">
                    <label>Name</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Bootcamp Name"
                      required
                      value={name}
                      onChange={onChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Address</label>
                    <input
                      type="text"
                      name="address"
                      className="form-control"
                      placeholder="Full Address"
                      required
                      onChange={onChange}
                      value={address}
                    />
                    <small className="form-text text-muted">Street, city, state, etc</small>
                  </div>
                  <div className="form-group">
                    <label>Phone Number</label>
                    <input
                      type="text"
                      name="phone"
                      className="form-control"
                      placeholder="Phone"
                      onChange={onChange}
                      value={phone}
                    />
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input
                      type="text"
                      name="email"
                      className="form-control"
                      placeholder="Contact Email"
                      onChange={onChange}
                      value={email}
                    />
                  </div>
                  <div className="form-group">
                    <label>Website</label>
                    <input
                      type="text"
                      name="website"
                      className="form-control"
                      placeholder="Website URL"
                      onChange={onChange}
                      value={website}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card bg-white py-2 px-4">
                <div className="card-body">
                  <h3>Other Info</h3>
                  <div className="form-group">
                    <label>Description</label>
                    <textarea
                      name="description"
                      rows="5"
                      className="form-control"
                      placeholder="Description (What you offer, etc)"
                      maxLength="500"
                      onChange={onChange}
                      value={description}
                    ></textarea>
                    <small className="form-text text-muted">No more than 500 characters</small>
                  </div>
                  <div className="form-group">
                    <label>Careers</label>
                    <select name="careers" className="custom-select" multiple defaultValue={['select']}>
                      <option value="select">Select all that apply</option>
                      <option value="Web Development">Web Development</option>
                      <option value="Mobile Development">Mobile Development</option>
                      <option value="UI/UX">UI/UX</option>
                      <option value="Data Science">Data Science</option>
                      <option value="Business">Business</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" name="housing" id="housing" />
                    <label className="form-check-label" htmlFor="housing">
                      Housing
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" name="jobAssistance" id="jobAssistance" />
                    <label className="form-check-label" htmlFor="jobAssistance">
                      Job Assistance
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" name="jobGuarantee" id="jobGuarantee" />
                    <label className="form-check-label" htmlFor="jobGuarantee">
                      Job Guarantee
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" name="acceptGi" id="acceptGi" />
                    <label className="form-check-label" htmlFor="acceptGi">
                      Accepts GI Bill
                    </label>
                  </div>
                  <p className="text-muted my-4">
                    *After you add the bootcamp, you can add the specific courses offered
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="form-group my-2">
            <input type="submit" value="Submit Bootcamp" className="btn btn-primary btn-block" />
            {/*<a href="manage-bootcamp.html" className="btn btn-danger btn-block mb-4"
                    >Cancel</a
                > */}
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddBootcampPage;
