import React from "react";
import "./donation.css";
import svg1 from "./images/appreciation.svg";

function Donation() {
	return (
		<div className="donation-main">
			<div class="card mb-3" id="he" style={{ width: "50%" }}>
				<div class="row g-0 ">
					<div class="col-md-3 my-6" id="svg1-wrapper">
						<div>
							<img id="svg1" src={svg1} class="img-fluid rounded-start" alt="..." />
						</div>
					</div>
					<div class="col-md-2" id="hello">
						<div class="card-body">
							<h5 class="card-title" style={{ fontWeight: "800", fontSize: "2rem" }}>
								Donate Now
							</h5>
							<div class="form-check">
								<input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
								<label class="form-check-label" for="flexRadioDefault1">
									One Time
								</label>
							</div>
							<div class="form-check">
								<input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
								<label class="form-check-label" for="flexRadioDefault2">
									Monthly
								</label>
							</div>

							<button type="button" class=" btn my-2 mx-2  btn-donation">
								$10
							</button>
							<button type="button" class="btn my-2 mx-2 btn-donation">
								$20
							</button>
							<button type="button" class="btn my-2 mx-2  btn-donation">
								$50
							</button>
							<button type="button" class="btn my-2  mx-2  btn-donation">
								$100
							</button>
							<div class="my-4 input-group flex-nowrap">
								<span class="input-group-text" id="addon-wrapping">
									$
								</span>
								<input type="text" class="form-control" id="amount" placeholder="Other Amount" aria-label="Username" aria-describedby="addon-wrapping" />
							</div>
							<p class="card-text">CHOOSE PAYMENT </p>
							<button type="button" class="btn mx-4">
								VISA
							</button>
							<button type="button" class=" mx-4 btn my-2">
								PAYPAL
							</button>
						</div>
					</div>
						
				</div>
                
			</div>
		</div>
	);
}

export default Donation;
