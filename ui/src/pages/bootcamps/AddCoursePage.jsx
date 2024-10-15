import { useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { AiOutlineLeft } from 'react-icons/ai';
import courseService from '../../services/courseService';
import { getToken } from '../../helpers/auth';

const AddCoursePage = () => {
  const { bootcampId } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    weeks: '',
    tuition: '',
    minimumSkill: 'beginner',
    scholarshipAvailable: false,
  });
  const [error, setError] = useState(null);
  const { title, description, weeks, tuition, minimumSkill, scholarshipAvailable } = formData;

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const token = getToken();
    if (!token) {
      setError('You must be logged in to add a course.');
      return;
    }

    try {
      await courseService.createCourse(bootcampId, formData, token);
      navigate(`/bootcamps/${bootcampId}/courses/manage`);
    } catch (error) {
      console.error(error);
      if (error.response && error.response.status === 401) {
        setError('You are not authorized to add a course.');
      } else {
        setError('Failed to add course. Please try again.');
      }
    }
  };

  return (
    <section className="container mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <div className="card bg-white py-2 px-4">
              <div className="card-body">
                <Link to={`/bootcamps/${bootcampId}/courses/manage`} className="btn btn-link text-secondary my-3">
                  <AiOutlineLeft className="mb-1" style={{ fontSize: '28px' }} /> Manage Courses
                </Link>
                <h1 className="mb-2">DevWorks Bootcamp</h1>
                <h3 className="text-primary mb-4">Add Course</h3>
                <form onSubmit={onSubmit}>
                  <div className="form-group">
                    <label htmlFor="title">Course Title</label>
                    <input
                      type="text"
                      className="form-control"
                      id="title"
                      name="title"
                      value={title}
                      onChange={onChange}
                      required
                      minLength="5"
                      maxLength="50"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="description">Course Description</label>
                    <textarea
                      className="form-control"
                      id="description"
                      name="description"
                      rows="5"
                      value={description}
                      onChange={onChange}
                      required
                      minLength="10"
                      maxLength="500"
                    ></textarea>
                  </div>
                  <div className="form-group">
                    <label htmlFor="weeks">Duration (weeks)</label>
                    <input
                      type="number"
                      className="form-control"
                      id="weeks"
                      name="weeks"
                      value={weeks}
                      onChange={onChange}
                      required
                      min="1"
                      max="52"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="tuition">Tuition Cost ($)</label>
                    <input
                      type="number"
                      className="form-control"
                      id="tuition"
                      name="tuition"
                      value={tuition}
                      onChange={onChange}
                      required
                      min="0"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="minimumSkill">Minimum Skill Required</label>
                    <select
                      className="form-control"
                      id="minimumSkill"
                      name="minimumSkill"
                      value={minimumSkill}
                      onChange={onChange}
                      required
                    >
                      <option value="beginner">Beginner</option>
                      <option value="intermediate">Intermediate</option>
                      <option value="advanced">Advanced</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="scholarshipAvailable">Scholarship Available</label>
                    <input
                      type="checkbox"
                      id="scholarshipAvailable"
                      name="scholarshipAvailable"
                      checked={scholarshipAvailable}
                      onChange={onChange}
                    />
                  </div>
                  <input type="submit" className="btn btn-primary btn-block" value="Add Course" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddCoursePage;
