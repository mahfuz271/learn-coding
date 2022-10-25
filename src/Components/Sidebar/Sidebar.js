import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Sidebar = () => {
    const courses = useLoaderData();
    return (
        <ul className="list-unstyled ps-0">
            <li className="mb-1">
                <button className="colormain ps-0 btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="true">
                    Popular Courses
                </button>
                <div className="collapse show" id="home-collapse">
                    <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                        {courses.map((c) => {
                            return (<li key={c.id}>
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
                        <li><Link to="#" className="link-dark d-inline-flex text-decoration-none rounded">Profile</Link></li>
                        <li><Link to="#" className="link-dark d-inline-flex text-decoration-none rounded">Settings</Link></li>
                        <li><Link to="/logout" className="link-dark d-inline-flex text-decoration-none rounded">Logout</Link></li>
                    </ul>
                </div>
            </li>
        </ul>
    );
};

export default Sidebar;