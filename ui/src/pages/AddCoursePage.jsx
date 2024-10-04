import { AiOutlineLeft } from "react-icons/ai";
import { Link } from 'react-router-dom';

const AddCoursePage = () => {
    return (
        <section class="container mt-5">
        <div className="container">
            <div class="row">
                <div class="col-md-8 m-auto">
                    <div class="card bg-white py-2 px-4">
                        <div class="card-body">
                        <Link to={`ManageCoursePage`} className="btn btn-link text-secondary my-3">
                                    <AiOutlineLeft className="mb-1" style={{ fontSize: '28px' }} /> Manage Courses
                        </Link>
                            <h1 class="mb-2">DevWorks Bootcamp</h1>
                            <h3 class="text-primary mb-4">Add Course</h3>
                            <form action="manage-bootcamp.html">
                                <div class="form-group">
                                    <label>Course Title</label>
                                    <input
                                        type="text"
                                        name="title"
                                        class="form-control"
                                        placeholder="Title"
                                    />
                                </div>
                                <div class="form-group">
                                    <label>Duration</label>
                                    <input
                                        type="number"
                                        name="duration"
                                        placeholder="Duration"
                                        class="form-control"
                                    />
                                    <small class="form-text text-muted"
                                        >Enter number of weeks course lasts</small
                                    >
                                </div>
                                <div class="form-group">
                                    <label>Course Tuition</label>
                                    <input
                                        type="number"
                                        name="tuition"
                                        placeholder="Tuition"
                                        class="form-control"
                                    />
                                    <small class="form-text text-muted">USD Currency</small>
                                </div>
                                <div class="form-group">
                                    <label>Minimum Skill Required</label>
                                    <select name="minimumSkill" class="form-control">
                                        <option value="beginner" selected>Beginner (Any)</option>
                                        <option value="intermediate">Intermediate</option>
                                        <option value="advanced">Advanced</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <textarea
                                        name="description"
                                        rows="5"
                                        class="form-control"
                                        placeholder="Course description summary"
                                        maxlength="500"
                                    ></textarea>
                                    <small class="form-text text-muted"
                                        >No more than 500 characters</small
                                    >
                                </div>
                                <div class="form-check">
                                    <input
                                        class="form-check-input"
                                        type="checkbox"
                                        name="scholarshipAvailable"
                                        id="scholarshipAvailable"
                                    />
                                    <label class="form-check-label" for="scholarshipAvailable">
                                        Scholarship Available
                                    </label>
                                </div>
                                <div class="form-group mt-4">
                                    <input
                                        type="submit"
                                        value="Add Course"
                                        class="btn btn-primary btn-block"
                                    />
                                </div>
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
