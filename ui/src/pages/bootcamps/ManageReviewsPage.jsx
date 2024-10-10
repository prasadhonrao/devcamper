import { GrEdit } from "react-icons/gr";
import { GrClose } from "react-icons/gr";
import { Link } from 'react-router-dom';
const ManageReviewsPage = () => {
  return (

<section class="container mt-5">
<div className="container">
			<div class="row">
				<div class="col-md-8 m-auto">
					<div class="card bg-white py-2 px-4">
						<div class="card-body">
							<h1 class="mb-4">Manage Reviews</h1>
							<table class="table table-striped">
								<thead>
									<tr>
										<th scope="col">Bootcamp</th>
										<th scope="col">Rating</th>
										<th scope="col"></th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>DevWorks Bootcamp</td>
										<td>10</td>
										<td>
                    <Link to={`/bootcamps/:bootcampId/reviews/add`} className="btn btn-secondary me-2 mb-1">
                    <GrEdit /> 
											</Link> 
                   
											<button class="btn btn-danger mb-1">
                      <GrClose />
											</button>
										</td>
									</tr>
									<tr>
										<td>Codemasters</td>
										<td>7</td>
										<td>
                    <Link to={`/bootcamps/:bootcampId/reviews/add`} className="btn btn-secondary me-2 mb-1">
                    <GrEdit /> 
                    </Link> 
												
											
											<button class="btn btn-danger mb-1">
                      <GrClose />						
                      				</button>
										</td>
									</tr>
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
