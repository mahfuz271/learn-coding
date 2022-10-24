import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import LocalStore from '../../Storage/Storage';

const Header = () => {
    const { user } = { user: false };
    let activeClassName = "nav-link px-2 link-dark active-link";
    let inActiveClass = "nav-link px-2 link-dark";

    return (
        <header className="py-3 border-bottom">
            <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between">
                    <Link to="/" className="d-flex align-items-center col-md-auto mb-2 mb-md-0 text-dark text-decoration-none">
                        <h3 className="mb-0 d-flex align-items-center justify-content-center text-uppercase"><img alt='LearnCoding' src='/logo192.png' width="32" height="32" /><span className='logo'>LearnCoding</span></h3>
                    </Link>

                    <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0 main_menu">
                        <li><NavLink to="/" exact className={(({ isActive }) => isActive ? activeClassName : inActiveClass)} end>Courses</NavLink></li>
                        <li><NavLink to="/faq" exact className={(({ isActive }) => isActive ? activeClassName : inActiveClass)} end>FAQ</NavLink></li>
                        <li><NavLink to="/blog" exact className={(({ isActive }) => isActive ? activeClassName : inActiveClass)} end>Blog</NavLink></li>
                    </ul>

                    {ToggleDarkMode()}

                    {user ? <div className="text-end d-flex mt-2 align-items-center justify-content-center">
                        <Link to="/profile" className="d-block link-dark text-decoration-none"><img src="https://github.com/mdo.png" alt="" title="" width="32" height="32" className="rounded-circle" /></Link>
                        <Link to="/logout" class="btn btn-outline-danger ms-3">Logout</Link>
                    </div> :
                        <div className="text-end mt-2">
                            <Link to="/login" class="btn btn-outline-primary me-2">Login</Link>
                            <Link to="/signup" class="btn btn-primary">Sign-up</Link>
                        </div>}
                </div>
            </div>
        </header>
    );
};

const ToggleDarkMode = () => {

    const [darkmode, setDarkmode] = useState(LocalStore('darkmode'));
    const handleDarkmode = (e) => {
        setDarkmode(e.target.checked);
        LocalStore('darkmode', e.target.checked);
    }

    return (
        <div class="form-check form-switch col-12 col-md-auto mb-2 justify-content-center mb-md-0 mt-2">
            <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" checked={darkmode} onClick={handleDarkmode} />
            <label class="form-check-label" htmlFor="flexSwitchCheckDefault">Darkmode</label>
        </div>
    );
}

export default Header;