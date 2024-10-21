import React from 'react';
import BootcampReviewRating from '../../components/BootcampReviewRating';

const bootcamps = [
  {
    id: 1,
    name: 'DevWorks Bootcamp',
    rating: 10,
  },
  {
    id: 2,
    name: 'AI Bootcamp',
    rating: 8,
  },
];

const ManageReviewsPage = () => {
  return (
    <section className="container mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <div className="card bg-white py-2 px-4">
              <div className="card-body">
                <h1 className="mb-4">Manage Reviews</h1>
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col">Bootcamp</th>
                      <th scope="col">Rating</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {bootcamps.map((b) => (
                      <BootcampReviewRating
                        key={b.id}
                        bootcampId={b.id}
                        bootCampName={b.name}
                        bootCampRating={b.rating}
                      />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManageReviewsPage;
