import React from "react";
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import { PointsProvider } from "./PointsContext.jsx";
import './Games.css';


function Games() {
    return (
        <div className="container">
            <br />
            <br />
            <br />
            <br />
            <h1>GAMES</h1>
            <h2>Ready to test your knowledge?</h2>
            
            <section id="physical-games">
                <h2>Physical</h2>
                <div className="button-container">
                <Nav.Link as={Link} to="/Phycw">
                    Crossword
                </Nav.Link>
                <li>
                     <Link to="/wordle-physical">Physical Wordle</Link>
                </li>
                </div>
            </section>
            
            <section id="cognitive-games">
                <h2>Cognitive</h2>
                <div className="button-container">
                <Nav.Link as={Link} to="/Cogcw">
                    Crossword
                </Nav.Link>
                <li>
                     <Link to="/wordle-cognitive">Cognitive Wordle</Link>
                </li>
                </div>
            </section>
            
            <section id="visual-games">
                <h2>Visual</h2>
                <div className="button-container">
                <Nav.Link as={Link} to="/Viscw">
                    Crossword
                </Nav.Link>
                <li>
                     <Link to="/wordle-visual">Visual Wordle</Link>
                </li>
                </div>
            </section>

        </div>
    );
}

export default Games;
