import { AiOutlineLeft } from "react-icons/ai";
import { Link, useParams } from 'react-router-dom'; // Import useParams to get bootcampId from URL
import React, { useState } from 'react';

const AddReviewPage = () => {
    const { bootcampId } = useParams(); // Get bootcampId from URL parameters
    const [rating, setRating] = useState(8);

    const handleRatingChange = (event) => {
        setRating(event.target.value);
    };

    return (
        <section className="container mt-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <div className="card bg-white py-2 px-4">
                            <div className="card-body">
                                {/* Update Link to go back to the specific bootcamp details */}
                                <Link to={`/bootcamp/${bootcampId}`} className="btn btn-link text-secondary my-3">
                                    <AiOutlineLeft className="mb-1" style={{ fontSize: '28px' }} /> Bootcamp Info
                                </Link>
                                
                                <h1 className="mb-2">DevWorks Bootcamp</h1>
                                <h3 className="text-primary mb-4">Write a Review</h3>
                                <p>
                                    You must have attended and graduated this bootcamp to review.
                                </p>
                                <br/>
                                <form action="reviews.html">
                                    <div className="form-group">
                                        <label htmlFor="rating">
                                            Rating: <span className="text-primary">{rating}</span>
                                        </label>
                                        <input
                                            type="range"
                                            className="custom-range"
                                            min="1"
                                            max="10"
                                            step="1"
                                            value={rating}
                                            id="rating"
                                            onChange={handleRatingChange}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <input
                                            type="text"
                                            name="title"
                                            className="form-control"
                                            placeholder="Review title"
                                        />
                                    </div>

                                    <div className="form-group">
                                        <textarea
                                            name="review"
                                            rows="10"
                                            className="form-control"
                                            placeholder="Your review"
                                        ></textarea>
                                    </div>

                                    <div className="form-group">
                                        <input
                                            type="submit"
                                            value="Submit Review"
                                            className="btn btn-primary btn-block"
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

export default AddReviewPage;
