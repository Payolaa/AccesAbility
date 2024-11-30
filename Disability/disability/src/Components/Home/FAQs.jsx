import React from "react";
import './FAQs.css';

function FAQs() {
    return (
        <div className="FAQs-container">

                <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
                    <div className="content px-xl-5">
                        <h3 className="FAQs-title"><span>Frequently Asked </span><strong>Questions</strong></h3>
                    </div>
                </div>

                <div className="col-lg-8" data-aos="fade-up" data-aos-delay="200">

                    <div className="faq-container">
                        <div className="faq-item faq-active">
                            <h3><span className="num">1.</span> <span>What is a Disability?</span></h3>
                            <div className="faq-content">
                                <p>A disability is any condition that impairs a person´s ability to perform certain activities or interact with the world around them.</p>
                            </div>
                            <i className="faq-toggle bi bi-chevron-right"></i>
                        </div>

                        <div className="faq-item">
                            <h3><span className="num">2.</span> <span>How can I help someone with a disability?</span></h3>
                            <div className="faq-content">
                                <p>It´s important to listen to their needs, respect their preferences, and offer assistance in a way that maintains their dignity. Educate yourself about the specific disability and be supportive.</p>
                            </div>
                            <i className="faq-toggle bi bi-chevron-right"></i>
                        </div>

                        <div className="faq-item">
                            <h3><span className="num">3.</span> <span>What are the different types of disabilities?</span></h3>
                            <div className="faq-content">
                                <p>Disabilities can be categorized into four main types: physical disabilities, cognitive disabilities, sensory disabilities and mental health disabilities. Each type can affect an individual in unique ways and not all of them are visible.</p>
                            </div>
                            <i className="faq-toggle bi bi-chevron-right"></i>
                        </div>

                        <div className="faq-item">
                            <h3><span className="num">4.</span> <span>What is the difference between a visible and invisible disability?</span></h3>
                            <div className="faq-content">
                                <p>Visible disabilities are those that can be seen, like wheelchair use or a prosthetic limb. Invisible disabilities, like chronic pain or mental health conditions, are not immediately noticeable.</p>
                            </div>
                            <i className="faq-toggle bi bi-chevron-right"></i>
                        </div>

                    </div>

                </div>
        </div>
    );
}

export default FAQs;
