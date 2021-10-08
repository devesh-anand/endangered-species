import React from "react";
import "./donation.css";
import svg1 from "./images/appreciation.svg";

function Donation() {
	return (
		<>
			<div className="donation-main">
				<div id="donation-card">
					<div id="svg1-wrapper">
						<img id="svg1" src={svg1} alt="..." />
					</div>

					<div id="donation-form">
						<div>
							<h5 style={{ fontWeight: "800", fontSize: "2rem" }}>Donate Now</h5>
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
							<div className="pay">
								<button type="button" class="btn ">
									VISA
								</button>
								<button type="button" class="btn">
									PAYPAL
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Donation;
