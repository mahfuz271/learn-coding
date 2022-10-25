import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import CourseBlock from '../CourseBlock/CourseBlock';

const Courses = () => {
    const courses = useLoaderData();
    return (
        <div className='container'>
            <div className='row'>

                <div className="col-md-8 mt-5">
                    <CourseBlock limit="100" title="Discover Our Courses"></CourseBlock>
                </div >

                <div className="flex-shrink-0 p-3 pt-5 col-md-4">

                    <ul className="list-unstyled ps-0">
                        <li className="mb-1">
                            <button className="colormain ps-0 btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="true">
                                Popular Courses
                            </button>
                            <div className="collapse show" id="home-collapse">
                                <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                    {courses.map((c) => {
                                        return (<li>
                                            <Link to={`/course/${c.id}`} className="link-dark d-inline-flex text-decoration-none rounded">{c.title}
                                            </Link>
                                        </li>)
                                    })}
                                </ul>
                            </div>
                        </li>
                        <li className="border-top my-3"></li>
                        <li className="mb-1">
                            <button className="colormain btn ps-0 btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#account-collapse" aria-expanded="true">
                                Account
                            </button>
                            <div className="collapse show" id="account-collapse">
                                <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                    <li><Link to="/#" className="link-dark d-inline-flex text-decoration-none rounded">Profile</Link></li>
                                    <li><Link to="#" className="link-dark d-inline-flex text-decoration-none rounded">Settings</Link></li>
                                    <li><Link to="/logout" className="link-dark d-inline-flex text-decoration-none rounded">Logout</Link></li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Courses;