import { Row, Col, Form, Button } from 'react-bootstrap';

const HomePage = () => {
  return (
    <>
    {/* <!-- Showcase --> */}
		<section class="showcase">
			<div class="dark-overlay">
				<div class="showcase-inner container">
					<h1 class="display-4">Find a Code Bootcamp</h1>
					<p class="lead">
						Find, rate and read reviews on coding bootcamps
					</p>
					<form action="bootcamps.html">
						<div class="row">
							<div class="col-md-6">
								<div class="form-group">
									<input
										type="text"
										class="form-control"
										name="miles"
										placeholder="Miles From"
									/>
								</div>
							</div>
							<div class="col-md-6">
								<div class="form-group">
									<input
										type="text"
										class="form-control"
										name="zipcode"
										placeholder="Enter Zipcode"
									/>
								</div>
							</div>
						</div>
						<input
							type="submit"
							value="Find Bootcamps"
							class="btn btn-primary btn-block"
						/>
					</form>
				</div>
			</div>
		</section>
    {/* // <section className="showcase">
    //   <div className="dark-overlay">
    //     <div className="showcase-inner container">
    //       <h1 className="display-4">Find a Code Bootcamp</h1>
    //       <p className="lead">Find, rate and read reviews on coding bootcamps</p>
    //       <Form action="bootcamps.html">
    //         <Row>
    //           <Col md={6}>
    //             <Form.Group>
    //               <Form.Control type="text" name="miles" placeholder="Miles From" />
    //             </Form.Group>
    //           </Col>
    //           <Col md={6}>
    //             <Form.Group>
    //               <Form.Control type="text" name="zipcode" placeholder="Enter Zipcode" />
    //             </Form.Group>
    //           </Col>
    //         </Row>
    //         <Row>
    //           <Col md={12}>
    //             <div className="d-grid gap-2">
    //               <Button variant="primary" size="lg">
    //                 Block level button
    //               </Button>
    //             </div>
    //           </Col>
    //         </Row>
    //       </Form>
    //     </div>
    //   </div>
    // </section> */}
    </>
  );
};

export default HomePage;
