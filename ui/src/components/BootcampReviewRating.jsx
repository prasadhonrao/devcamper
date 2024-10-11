import { Link } from 'react-router-dom';
import { GrEdit, GrClose } from 'react-icons/gr';

const BootcampReviewRating = ({ bootcampId, bootCampName, bootCampRating }) => {
  return (
    <tr>
      <td>{bootCampName}</td>
      <td>{bootCampRating}</td>
      <td>
        <Link to={`/bootcamps/${bootcampId}/reviews/add`} className="btn btn-secondary me-2 mb-1">
          <GrEdit />
        </Link>

        <button class="btn btn-danger mb-1">
          <GrClose />
        </button>
      </td>
    </tr>
  );
};

export default BootcampReviewRating;
