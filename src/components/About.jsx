import React from 'react'
import './about.css';
import about from './images/about.png'

export default function About() {
    return (
        <div class="col">
            <section id="About">
        <div class="about-left-col">
            <img src={about} alt="" />
        </div>
        <div class="about-right-col">
            <div class="about-text">
                <h1>About Us</h1>
                <p>this project was made for live the code hakathon
                    </p>
                    <h2>OBJECTIVE</h2>
                    <p>For maintaining a healthy ecological balance on this earth, animals, plants and marine species are as important as humans. Each organism on this earth has a unique place in food chain that helps contribute to the ecosystem in its own special way. But, sadly today, many of the animals and birds are getting endangered</p>
               {/* <h3>CONTRIBUTORS</h3> */}
               <p></p>
                <div class="line">
                    <span class="line-1"></span><br/>
                    <span class="line-2"></span><br/>
                    <span class="line-3"></span>
                </div>
            </div>
        </div>
    </section>





    {/* <div class="row">
            <div class="col-lg-4">
                <div class="text-center card-box">
                    <div class="member-card pt-2 pb-2">
                        <div class="thumb-lg member-thumb mx-auto"><img src="https://i.imgur.com/X0yDwwp.jpg" class="rounded-circle img-thumbnail" alt="profile-image" /></div>
                        <div class="">
                            <h4>Devesh Anand Srivatava</h4>
                            <p class="text-muted">@Founder <span>| </span><span><a href="#" class="text-pink">websitename.com</a></span></p>
                        </div>
                        <ul class="social-links list-inline">
                            <li class="list-inline-item"><a title="" data-placement="top" data-toggle="tooltip" class="tooltips" href="" data-original-title="Facebook"><i class="fa fa-facebook"></i></a></li>
                            <li class="list-inline-item"><a title="" data-placement="top" data-toggle="tooltip" class="tooltips" href="" data-original-title="Twitter"><i class="fa fa-twitter"></i></a></li>
                            <li class="list-inline-item"><a title="" data-placement="top" data-toggle="tooltip" class="tooltips" href="" data-original-title="Skype"><i class="fa fa-skype"></i></a></li>
                        </ul>
                        <button type="button" class="btn btn-primary mt-3 btn-rounded waves-effect w-md waves-light">Message Now</button>
                        
                    </div>
                </div>
            </div>

            <div class="col-lg-4">
                <div class="text-center card-box">
                    <div class="member-card pt-2 pb-2">
                        <div class="thumb-lg member-thumb mx-auto"><img src="https://i.imgur.com/EcM0qJ1.jpg" class="rounded-circle img-thumbnail" alt="profile-image" /></div>
                        <div class="">
                            <h4>Julie L. Arsenault</h4>
                            <p class="text-muted">@Programmer <span>| </span><span><a href="#" class="text-pink">websitename.com</a></span></p>
                        </div>
                        <ul class="social-links list-inline">
                            <li class="list-inline-item"><a title="" data-placement="top" data-toggle="tooltip" class="tooltips" href="" data-original-title="Facebook"><i class="fa fa-facebook"></i></a></li>
                            <li class="list-inline-item"><a title="" data-placement="top" data-toggle="tooltip" class="tooltips" href="" data-original-title="Twitter"><i class="fa fa-twitter"></i></a></li>
                            <li class="list-inline-item"><a title="" data-placement="top" data-toggle="tooltip" class="tooltips" href="" data-original-title="Skype"><i class="fa fa-skype"></i></a></li>
                        </ul>
                        <button type="button" class="btn btn-primary mt-3 btn-rounded waves-effect w-md waves-light">Message Now</button>
                        
                    </div>
                </div>
            </div>


            <div class="col-lg-4">
                <div class="text-center card-box">
                    <div class="member-card pt-2 pb-2">
                        <div class="thumb-lg member-thumb mx-auto"><img src="https://bootdey.com/img/Content/avatar/avatar3.png" class="rounded-circle img-thumbnail" alt="profile-image" /></div>
                        <div class="">
                            <h4>Julie L. Arsenault</h4>
                            <p class="text-muted">@Programmer <span>| </span><span><a href="#" class="text-pink">websitename.com</a></span></p>
                        </div>
                        <ul class="social-links list-inline">
                            <li class="list-inline-item"><a title="" data-placement="top" data-toggle="tooltip" class="tooltips" href="" data-original-title="Facebook"><i class="fa fa-facebook"></i></a></li>
                            <li class="list-inline-item"><a title="" data-placement="top" data-toggle="tooltip" class="tooltips" href="" data-original-title="Twitter"><i class="fa fa-twitter"></i></a></li>
                            <li class="list-inline-item"><a title="" data-placement="top" data-toggle="tooltip" class="tooltips" href="" data-original-title="Skype"><i class="fa fa-skype"></i></a></li>
                        </ul>
                        <button type="button" class="btn btn-primary mt-3 btn-rounded waves-effect w-md waves-light">Message Now</button>
                    </div>
                </div>
            </div>

            </div> */}

        </div>
    )
}
