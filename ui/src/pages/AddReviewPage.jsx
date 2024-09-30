import { AiOutlineLeft } from "react-icons/ai";
import { Link } from 'react-router-dom';
import React, { useState } from 'react';

const AddReviewPage = () => {
    const [rating, setRating] = useState(8);
  const handleRatingChange = (event) => {
    setRating(event.target.value);
  };
    return (
        <section class="container mt-5">
        <div className="container">
        <div class="row">
            <div class="col-md-8 m-auto">
                <div class="card bg-white py-2 px-4">
                    <div class="card-body">
                    <Link to="/bootcamps" className="btn btn-link text-secondary my-3">
                    <i class="fas fa-chevron-left"></i> <AiOutlineLeft className="mb-1" style={{ fontSize: '28px' }}/>Bootcamp Info
                    </Link>
                        <h1 class="mb-2">DevWorks Bootcamp</h1>
                        <h3 class="text-primary mb-4">Write a Review</h3>
                        <p>
                            You must have attended and graduated this bootcamp to review
                        </p><br/>
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
                            <div class="form-group">
                                <input
                                    type="text"
                                    name="title"
                                    class="form-control"
                                    placeholder="Review title"
                                />
                            </div>
                            <div class="form-group">
                                <textarea
                                    name="review"
                                    rows="10"
                                    class="form-control"
                                    placeholder="Your review"
                                ></textarea>
                            </div>
                            <div class="form-group">
                                <input
                                    type="submit"
                                    value="Submit Review"
                                    class="btn btn-dark btn-block"
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