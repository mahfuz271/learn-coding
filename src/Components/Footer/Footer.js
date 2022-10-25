import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    let inActiveClass = "nav-link px-2 text-muted link-dark";
    return (
        <div className="container mt-5">
            <footer className="py-3 my-4">
                <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                    <li className="nav-item"><NavLink to="/" className={inActiveClass}>Courses</NavLink></li>
                    <li className="nav-item"><NavLink to="/faq" className={inActiveClass}>FAQ</NavLink></li>
                    <li className="nav-item"><NavLink to="/blog" className={inActiveClass}>Blog</NavLink></li>
                </ul>
                <p className="text-center text-muted">© 2022 LearnCoding</p>
            </footer>
        </div>
    );
};

export default Footer;