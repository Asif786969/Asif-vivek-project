import React, { useState } from "react";
const Login = () => {
	const [data, setData] = useState("");

	const handleChange = (e) => {
		setData((values) => ({ ...values, [e.target.name]: e.target.value }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(data);
	};

	return (
		<div>
			<section className="h-100 h-custom">
				<div className="container py-5 h-100">
					<div className="row d-flex justify-content-center align-items-center h-100">
						<div className="col-lg-8 col-xl-6">
							<div className="card rounded-3">
								<div className="card-body p-4 p-md-5">
									<h3 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">
										Login Info
									</h3>

									<form onSubmit={handleSubmit} className="px-md-2">
										<div className="form-outline mb-4">
											<label className="form-label" htmlFor="form3Example1q">
												Username
											</label>
											<input
												type="text"
												id="form3Example1q"
												name="name"
												className="form-control"
												onChange={handleChange}
											/>
										</div>
										
                    
										<div className="form-outline mb-4">
											<label className="form-label" htmlFor="form3Example1q">
												Password
											</label>
											<input
												type="text"
												id="form3Example1q"
												name="name"
												className="form-control"
												onChange={handleChange}
											/>
										</div>

										<button type="submit" data-testid="submitbtn" className="btn btn-success btn-lg mb-1">
											Submit
										</button>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Login;
