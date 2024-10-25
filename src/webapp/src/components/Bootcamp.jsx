import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Image } from 'react-bootstrap';

const Bootcamp = ({ id, photo, name, averageRating, location, careers }) => {
  return (
    <div className="card mb-3">
      <div className="row no-gutters">
        <div className="col-md-4">
          <Image src={`/images/${photo}`} className="card-img full-size-image" alt={name} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">
              <Link to={`/bootcamps/${id}`}>
                {name}
                <span className="float-right badge badge-success">{averageRating}</span>
              </Link>
            </h5>
            <span className="badge badge-dark mb-2">
              {location.city}, {location.state}
            </span>
            <p className="card-text">{careers.join(', ')}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

Bootcamp.propTypes = {
  id: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  averageRating: PropTypes.number,
  location: PropTypes.object.isRequired,
  careers: PropTypes.array.isRequired,
};

export default Bootcamp;
