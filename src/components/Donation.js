import React from 'react'

function Donation() {
    return (
        
            <div className="container-fluid ">
                <div class="card mb-3"  id="he"  >
                    <div class="row g-0">
                        <div class="col-md-3 my-6  ">
                            <img id="image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNMX1rg32Wgo5Tdgv2tgNfLAi49l5fcXozQg&usqp=CAU" class="img-fluid rounded-start" alt="..." />
                        </div>
                        <div class="col-md-8" id="hello">
                            <div class="card-body">
                                <h5 class="card-title">Donate Now</h5>
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

                                <button type="button" class=" btn my-2 mx-2  btn-success">$10</button>
                                <button type="button" class="btn my-2 mx-2 btn-success">$20</button>
                                <button type="button" class="btn my-2 mx-2  btn-success">$50</button>
                                <button type="button" class="btn my-2  mx-2  btn-success">$100</button>
                                {/* <label for="customRange3" class="form-label">Example range</label> */}
                                {/* <input type="range" class="form-range" min="0" max="5" step="0.5" id="customRange3" /> */}
                                <div class="my-4 input-group flex-nowrap">
                                    <span class="input-group-text" id="addon-wrapping">$</span>
                                    <input type="text" class="form-control" placeholder="Other Amount" aria-label="Username" aria-describedby="addon-wrapping" />
                                </div>
                                <p class="card-text">CHOOSE PAYMENT </p>
                                <button type="button" class="btn btn-primary">VISA</button>
                                <button type="button" class=" mx-4 btn btn-primary">PAYPAL</button>
                                {/* <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
        
    )
}

export default Donation
