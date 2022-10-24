import React from 'react';
import { Link } from 'react-router-dom';

const Homepage = () => {
    return (
        <div className='row'>

            <div className="col-md-9 mt-5">
                <h2 className="h1 text-center">Discover Our Popular Courses</h2>
                <p className="text-center">Explore our comprehensive course library to deliver the best training material to
                    your team!
                </p>
                <div className="row row-cols-1 row-cols-lg-2 mt-3 mb-5 mx-0 gy-5">
                    <div className="col align-self-stretch">
                        <div className="row rounded courses me-lg-1">
                            <div className="col-12 col-sm-4 px-0">
                                <img src="images/course/course-1.png" className="rounded w-100 h-100" alt="" />
                            </div>
                            <div className="col-12 col-sm-8 align-self-center py-3 ps-4">
                                <h4>Fundamental Of UI/UX Design</h4>
                                <p>Basics of UX design and Adobe XD to create working solution by combining UI with your UX
                                    design. </p>
                                <p className="fw-bolder prices fs-4">Price : 11.99$</p>
                                <button className='btn btn-primary'>Add to Cart</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div >

            <div className="flex-shrink-0 p-3 pt-5 col-md-3">

                <ul className="list-unstyled ps-0">
                    <li className="mb-1">
                        <button className="ps-0 btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="true">
                            Courses
                        </button>
                        <div className="collapse show" id="home-collapse">
                            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                <li><a href="#" className="link-dark d-inline-flex text-decoration-none rounded">Overview</a></li>
                                <li><a href="#" className="link-dark d-inline-flex text-decoration-none rounded">Updates</a></li>
                                <li><a href="#" className="link-dark d-inline-flex text-decoration-none rounded">Reports</a></li>
                            </ul>
                        </div>
                    </li>
                    <li className="border-top my-3"></li>
                    <li className="mb-1">
                        <button className="btn ps-0 btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#account-collapse" aria-expanded="false">
                            Account
                        </button>
                        <div className="collapse" id="account-collapse">
                            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                <li><Link to="/profile" className="link-dark d-inline-flex text-decoration-none rounded">Profile</Link></li>
                                <li><Link to="#" className="link-dark d-inline-flex text-decoration-none rounded">Settings</Link></li>
                                <li><Link to="/logout" className="link-dark d-inline-flex text-decoration-none rounded">Logout</Link></li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </div >
    );
};

export default Homepage;