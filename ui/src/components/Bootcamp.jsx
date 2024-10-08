import { Link } from 'react-router-dom';
import { Image } from 'react-bootstrap';

const Bootcamp = (props) => {
  const { image, name, rating, location, careers, id } = props.bootcamp;

  return (
    <div className="card mb-3">
      <div className="row no-gutters">
        <div className="col-md-4">
          <Image src={image} className="card-img" alt={name} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">
              <Link to={`/bootcamps/${id}`}>
                {name}
                <span className="float-right badge badge-success">{rating}</span>
              </Link>
            </h5>
            <span className="badge badge-dark mb-2">{location}</span>
            <p className="card-text">{careers.join(', ')}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bootcamp;
