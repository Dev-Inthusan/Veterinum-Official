import React from "react";

const About = () => {
    return (
        <div className='container container-fluid'>
            <section id="about">
                <div className="container my-5 py-5">
                    <div className="row">
                        <div className="col-md-6">
                            <img src="../../../images/about.jpg" alt="About"
                                className="w-75 mt-5" />
                        </div>
                        <div className="col-md-6">
                            <h3 className="fs-5 mb-1 mt-5">About Us</h3>
                            <h1 className="display-6 mb-5">
                                <span className="purple-text">Who</span>
                                {' '}
                                <b className="pink-text">We 
                                <span className="pink-text"> Are</span></b>
                            </h1>

                            {/* <hr className="w-50" /> */}
                            <p className="lead mb-2">Veterinum it's the community of All
                                it will help to find All around veterinarians and get an appointment them,
                                tit's the one of the best Service in here, 
                                 Veterinary services encompass a wide array of healthcare provisions for animals,
                                  including preventive care, diagnostics, surgeries, and specialized treatments.

                            </p>
                            {/* <button className="btn btn-primary rounded-pill px-4
                                py-2">Get Started</button> */}
                            {/* <button className="btn btn-outline-primary 
                                rounded-pill px-4 py-2">Contact Us</button> */}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}


export default About