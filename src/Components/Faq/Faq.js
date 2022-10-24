import React from 'react';

const Faq = () => {
    return (
        <div className='container mt-5'>
            <div class="row">
                <div class="col-md-8 mx-auto text-center">
                    <h2 class="h1">Frequently Asked Questions</h2>
                </div>
            </div>
            <div class="row mt-3">
                <div class="col-lg-8 mx-auto">
                    <div class="accordion" id="accordionExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingOne">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    How do I take a Our course?
                                </button>
                            </h2>
                            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
                                data-bs-parent="#accordionExample">
                                <div class="accordion-body">Our courses are entirely on-demand and they can be accessed from several different devices and platforms, including a desktop and laptop.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingTwo">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Do I have to start my course at a certain time? And how long do I have to complete it?
                                </button>
                            </h2>
                            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
                                data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    There are no deadlines to begin or complete a course.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingt">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#headingt" aria-expanded="false" aria-controls="headingt">
                                    Is LearnCoding an accredited institution? Do I receive anything after I complete a course?
                                </button>
                            </h2>
                            <div id="headingt" class="accordion-collapse collapse" aria-labelledby="headingt"
                                data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    While LearnCoding is not an accredited institution, we offer skills-based courses taught by real-world experts in their field. Every approved, paid course features a certificate of completion to document your accomplishment.</div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingf">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#headingf" aria-expanded="false" aria-controls="headingf">
                                    What if I don’t like a course I purchased?
                                </button>
                            </h2>
                            <div id="headingf" class="accordion-collapse collapse" aria-labelledby="headingf"
                                data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    We want you to be satisfied, so all eligible courses purchased on LearnCoding can be refunded within 30 days. If you are unhappy with a course, you can request a refund, provided the request meets the guidelines in our refund policy.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;