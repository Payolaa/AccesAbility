import React from "react";
import './Physical.css';

function Physical() {
    return (
        <div className="physical-container">
            <h2 className="physical-title">Physical Disabilities</h2>
            <h3 className="physical-subtitle">What are they?</h3>
            <p className="physical-text">According to the World Health Organization (WHO), motor disability refers to "sequelae or malformations in the neuromuscular system, resulting in control issues over movement and posture."</p>
            
            <h3 className="physical-subtitle">Causes</h3>
            <p>Motor disabilities arise from various causes and are classified as physical disabilities.</p>
            
            <h3 className="physical-subtitle">Types</h3>
            <ul className="physical-list">
                <li>Spinal cord injury</li>
                <li>Chondrodystrophy</li>
                <li>Multiple sclerosis</li>
                <li>Cerebral palsy</li>
                <li>Spina bifida</li>
                <li>Muscular dystrophy</li>
                <li>Ataxia</li>
                <li>Trauma from head injuries</li>
            </ul>
            
            <h3>Resources</h3>
            <p>Accessible environments are crucial for supporting autonomy in people with physical disabilities.</p>
            <a href="https://empleo.fundacionadecco.org/">Employment resources for people with disabilities</a> <br />
        </div>
    );
}

export default Physical;
