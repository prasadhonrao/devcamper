import Card from 'react-bootstrap/Card';
import { FaChevronLeft } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";

const BootcampReviewsPage = () => {

  const ReviewData = [
    {
      id: 1,
      review: 'Fantastic Bootcamp',
      rating: 10,
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi similique mollitia, praesentium, animi harum officia dolores corporis ex tempore consequuntur dolorem ullam dolorum magnam corrupti quaerat tempora repudiandae! Similique, molestiae. Iste, blanditiis recusandae unde tenetur eius exercitationem rerum a fuga.',
      written: "Kevin Smith"
    },
    {
      id: 1,
      review: 'Learned a Lot',
      rating: 9,
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi similique mollitia, praesentium, animi harum officia dolores corporis ex tempore consequuntur dolorem ullam dolorum magnam corrupti quaerat tempora repudiandae! Similique, molestiae. Iste, blanditiis recusandae unde tenetur eius exercitationem rerum a fuga.',
      written: "Jill Samson"
    },
    // Add more bootcamp data as needed
  ];

  return (
    <section class="bootcamp mt-5">
      <div class="container">
        <div class="row">
          {/* <!-- Main col --> */}
          <div class="col-md-8">
            <a
              href="bootcamp.html"
              target="_blank"
              class="btn btn-secondary my-3"
            ><FaChevronLeft /> <span> Bootcamp Info</span></a
            >
            <h1 class="mb-4">DevWorks Bootcamp Reviews</h1>
            {/* <!-- Reviews --> */}
            {ReviewData.map((data, key) =>
              <Card class="card my-3">
                <h5 class="card-header bg-dark text-white">{data.review}</h5>
                <div class="card-body">
                  <h5 class="card-title">
                    Rating: <span class="text-success">{data.rating}</span>
                  </h5>
                  <p class="card-text">
                    {data.description}
                  </p>
                  <p class="text-muted my-3">Writtern By {data.written}</p>
                </div>
              </Card>
            )}
          </div>
          {/* <!-- Sidebar --> */}
          <div class="col-md-4">
            {/* <!-- Rating --> */}
            <h1 class="text-center my-4">
              <span
                class="badge badge-secondary badge-success rounded-circle py-3 mx-2"
              >8.8</span
              >
              Rating
            </h1>
            {/* <!-- Buttons --> */}
            <a href="/bootcamps/:bootcampId/reviews/add" class="btn btn-primary btn-block my-3"
            ><FaPencil /> Review This Bootcamp</a
            >
          </div>
        </div>
      </div>
    </section>
  );
};

export default BootcampReviewsPage;
