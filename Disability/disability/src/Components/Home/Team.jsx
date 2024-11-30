import React from "react";
import './Team.css';

function Team() {
    return (
        <>
            <div className="team-container">
                <h2 className="team-title">Our Team</h2>
                <p className="team-text">Meet the people behind this website</p>
            </div>

            <div className="team">
                    <div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="100">
                        <div className="team-container">
                            <img src="./img/paola.jpg" className="img-fluid" alt="Paola Ortega" />
                            <h4 className="team-text">Paola Ortega</h4>
                        </div>
                    </div>
                    <div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="200">
                        <div className="team-container">
                            <img src="./assets/img/karla.jpg" className="img-fluid" alt="Karla Avila" />
                            <h4 className="team-text">Karla Avila</h4>
                        </div>
                    </div>
            </div>
        </>
    );
}

export default Team;
