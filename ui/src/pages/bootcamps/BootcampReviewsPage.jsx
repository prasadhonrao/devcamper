import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { FaPencil } from 'react-icons/fa6';
import { AiOutlineLeft } from 'react-icons/ai';
import reviewService from '../../services/reviewService';

const BootcampReviewsPage = () => {
  const { bootcampId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [bootcamp, setBootcamp] = useState('');

  useEffect(() => {
    const fetchBootcampReviews = async () => {
      const res = await reviewService.getReviewsByBootcamp(bootcampId);
      setBootcamp(res.bootcamp);
      setReviews(res.data);
    };
    fetchBootcampReviews();
  }, [bootcampId]);

  return (
    <section className="bootcamp mt-5">
      <div className="container">
        <div className="row">
          {/* <!-- Main col --> */}
          <div className="col-md-8">
            <Link to={`/bootcamps/${bootcampId}`} className="btn btn-secondary my-3">
              <AiOutlineLeft className="mb-1" /> Bootcamp Info
            </Link>
            <h1 className="mb-4">{bootcamp} Reviews</h1>
            {/* <!-- Reviews --> */}
            {reviews.map((data, key) => (
              <Card className="card mb-3">
                <h5 className="card-header bg-dark text-white">{data.title}</h5>
                <div className="card-body">
                  <h5 className="card-title">
                    Rating: <span className="text-success">{data.rating}</span>
                  </h5>
                  <p className="card-text">{data.text}</p>
                  <p className="text-muted my-3">Written By {data.user}</p>
                </div>
              </Card>
            ))}
          </div>
          {/* <!-- Sidebar --> */}
          <div className="col-md-4">
            {/* <!-- Rating --> */}
            <h1 className="text-center my-4">
              <span className="badge badge-secondary badge-success rounded-circle py-3 mx-2">8.8</span>
              Rating
            </h1>
            {/* <!-- Buttons --> */}
            <a href="/bootcamps/:bootcampId/reviews/add" className="btn btn-primary btn-block my-3">
              <FaPencil /> Review This Bootcamp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BootcampReviewsPage;
