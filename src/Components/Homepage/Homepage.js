import React from 'react';
import { Link } from 'react-router-dom';
import CourseBlock from '../CourseBlock/CourseBlock';

const Homepage = () => {
    return (
        <div>
            <section className="index-banner position-relative pb-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-7">
                            <div className="banner-content text-center text-md-start">
                                <h1 className="banner-heading">Learn more and make success the result of perfection.</h1>
                                <p className="banner-brief text-secondary mt-3 my-md-4 pt-1 py-3 pe-md-5">We provide a wide range of courses for the different sectors you can choose from, which suits you perfectly</p>
                                <Link to="/courses" className="btn btn-primary text-uppercase py-3">Start learning now <i className="ms-1 fa fa-angle-right" aria-hidden="true"></i></Link>
                            </div>
                        </div>
                        <div className="col-md-5 text-center text-md-end mt-3 my-md-0">
                            <div className="index-banner-img pe-5 d-inline-block">
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