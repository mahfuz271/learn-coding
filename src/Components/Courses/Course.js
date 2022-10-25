import React from 'react';
import { useParams, Link, useLoaderData } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import Pdf from "react-to-pdf";
const ref = React.createRef();

const Course = () => {
    const courses = useLoaderData();
    let { id } = useParams();
    let course = courses.find((el) => el.id == id);
    return (
        <div className='container'>
            <div className='row'>
                <div className="col-md-8 mt-5">
                    <div className="row rounded courses me-lg-1" ref={ref}>
                        <div className="col-12 col-sm-4 px-0">
                            <img src={`${process.env.REACT_APP_SERVER_URL}/${course.img}`} className="rounded w-100 h-100" alt="" />
                        </div>
                        <div className="col-12 col-sm-8 py-3 ps-4">
                            <h3>{course.title}</h3>
                            <p>{course.desc} </p>
                            <ul className="my-5 ps-0">
                                <li className="d-flex align-items-center mb-3"><img className="me-3" src="/img/check-point.svg" alt="" />
                                    <h6 className="card-text text-medium-bold">Easy to understand language</h6>
                                </li>
                                <li className="d-flex align-items-center"><img className="me-3" src="/img/check-point.svg" alt="" />
                                    <h6 className="card-text text-medium-bold">Simple and easy to learn courses.</h6>
                                </li>
                            </ul>
                            <p className="fw-bolder prices fs-4 mb-0">Price : {course.price}$</p>
                            <Link to={`/buy-course/${course.id}`} className="mt-3 btn btn-primary text-uppercase me-2">Get premium access <i className="ms-1 fa fa-angle-right" aria-hidden="true"></i></Link>

                            <Pdf targetRef={ref} filename={`${course.title}.pdf`}>
                                {({ toPdf }) => <button onClick={toPdf} className="mt-3 btn btn-outline-primary text-uppercase">Download <i className="ms-1 fa fa-download" aria-hidden="true"></i></button>}
                            </Pdf>
                        </div>
                    </div>
                </div>
                <div className="flex-shrink-0 p-3 pt-5 col-md-4">
                    <Sidebar></Sidebar>
                </div>
            </div>
        </div>
    );
};

export default Course;