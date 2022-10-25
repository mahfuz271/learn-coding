import React from 'react';
import { Link } from 'react-router-dom';
import CourseBlock from '../CourseBlock/CourseBlock';
import Courses from '../Courses/Courses';

const Homepage = () => {
    return (
        <div>
            <section class="index-banner position-relative pb-5">
                <div className="container">
                    <div class="row align-items-center">
                        <div class="col-md-7">
                            <div class="banner-content text-center text-md-start">
                                <h1 class="banner-heading">Learn more and make success the result of perfection.</h1>
                                <p class="banner-brief text-secondary mt-3 my-md-4 pt-1 py-5 pe-md-5">Pick from over thousand+ online video courses with new additions published every month.</p>
                            </div>
                        </div>
                        <div class="col-md-5 text-center text-md-end">
                            <div class="index-banner-img pe-5 d-inline-block">
                                <picture><img src="/img/girl-img-study.webp" alt="" />
                                </picture>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className='container'>
                <div className='row'>

                    <div className="col-md-12 mt-5">
                        <CourseBlock limit="3" title="Discover Our Popular Courses"></CourseBlock>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Homepage;