import React from "react";
import './Visual.css';

function Visual() {
    return (
        <div className="visual-container">
            <h2 className="visual-title">Visual Disabilities</h2>
            <h3 className="visual-subtitle">What are they?</h3>
            <p className="visual-text">
                Visual impairment ranges from partial vision loss to complete blindness, 
                affecting visual acuity, field of vision, and reading ability.
            </p>
            <h3 className="visual-subtitle">Causes</h3>
            <p className="visual-text">Diabetes and other chronic conditions can lead to vision loss or blindness.</p>
            <h3 className="visual-subtitle">Difficulties</h3>
            <p className="visual-text">
                Those who are blind or have low vision may experience challenges in 
                everyday tasks and navigating spaces.
            </p>
        </div>
    );
}

export default Visual;

