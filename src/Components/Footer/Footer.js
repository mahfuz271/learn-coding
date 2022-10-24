import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    let activeClassName = "nav-link px-2 text-muted active-link";
    let inActiveClass = "nav-link px-2 text-muted link-dark";
    return (
        <div className="container">
            <footer className="py-3 my-4">
                <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                    <li className="nav-item"><NavLink to="/" exact className={(({ isActive }) => isActive ? activeClassName : inActiveClass)} end>Courses</NavLink></li>
                    <li className="nav-item"><NavLink to="/faq" exact className={(({ isActive }) => isActive ? activeClassName : inActiveClass)} end>FAQ</NavLink></li>
                    <li className="nav-item"><NavLink to="/blog" exact className={(({ isActive }) => isActive ? activeClassName : inActiveClass)} end>Blog</NavLink></li>
                </ul>
                <p className="text-center text-muted">© 2022 LearnCoding</p>
            </footer>
        </div>
    );
};

export default Footer;