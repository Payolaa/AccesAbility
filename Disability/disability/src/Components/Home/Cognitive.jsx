import React from "react";
import './Cognitive.css';

function Cognitive() {
    return (
        <div className="cognitive-container">
            <h2 className="cognitive-title">Cognitive Disabilities</h2>
            <h3 className="cognitive-subtitle">What are they?</h3>
            <p className="cognitive-text">
                Individuals with intellectual disabilities may struggle with social and 
                intellectual skills needed for daily living.
            </p>
            <h3 className="cognitive-subtitle">Misconceptions</h3>
            <ul className="cognitive-list">
                <li>Intellectual disability is not a mental illness.</li>
                <li>People with intellectual disabilities are equal citizens.</li>
                <li>
                    Each individual has unique abilities, interests, dreams, and needs.
                </li>
            </ul>
            <h3 className="cognitive-subtitle">Causes</h3>
            <p className="cognitive-text"> 
                Intellectual disabilities affect around 1% of the population and have diverse causes.
            </p>
            <h3 className="cognitive-subtitle">Treatment</h3>
            <p className="cognitive-text">
                Treatment aims to help individuals reach their full potential through 
                specialized training and education.
            </p>
        </div>
    );
}

export default Cognitive;

