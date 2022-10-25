import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const CourseBlock = ({ limit, title }) => {
    let courses = useLoaderData();
    limit = parseInt(limit);
    courses = courses.filter((el, k) => k < limit);
    return (
        <div>
            <h2 className="h1 text-center colormain">{ title }</h2>
            <p className="text-center">Explore our comprehensive course library to deliver the best training material to
                your team!
            </p>
            <div className="row row-cols-1 row-cols-lg-3 row-cols-md-2 mt-3 mb-5 mx-0 gy-5">
                {courses.map((c) => {
                    return (<div className="col align-self-stretch">
                        <Link to={`/course/${c.id}`} className="link-dark row rounded courses me-md-1 text-decoration-none">
                            <div className="col-12 px-0">
                                <img src={`${process.env.REACT_APP_SERVER_URL}/${c.img}`} className="rounded w-100 h-100" alt="" />
                            </div>
                            <div className="col-12 align-self-center py-3 ps-4">
                                <h4>{c.title}</h4>
                                <p>{c.desc}</p>
                                <p className="fw-bolder prices fs-4">Price : {c.price}$</p>
                            </div>
                        </Link>
                    </div>)
                })}
            </div>
        </div>
    );
};

export default CourseBlock;