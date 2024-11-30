import React from "react";
import {Nav} from 'react-bootstrap';
import { Link } from "react-router-dom";
import Games from '../Games/Games';
import './Cta.css';

function Cta() {
    return (
        <div className="container1">
            <img src="./assets/img/play.jpg" alt="Play" />
            <div className="content row justify-content-center" data-aos="zoom-in" data-aos-delay="100">
                <div className="col-xl-10">
                    <div className="text-center">
                        <h3>Play</h3>
                        <p>Test your knowledge here</p>
                        {
                        <Nav.Link as={Link} to="/Games">
                            Play!
                        </Nav.Link>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cta;

