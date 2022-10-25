import React, { useContext, useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Contexts/UserContext';
import LocalStore from '../../Storage/Storage';

const Header = () => {
    const [isMobile, setIsMobile] = useState(false);

    //choose the screen size 
    const handleResize = () => {
        if (window.innerWidth < 768) {
            setIsMobile(true)
        } else {
            setIsMobile(false)
        }
    }

    // create an event listener
    useEffect(() => {
        window.addEventListener("resize", handleResize);
        handleResize();
        let dark = LocalStore('darkmode')==true;
        if(dark){
            document.querySelector("body").classList.add('dark');
        }else{
            document.querySelector("body").classList.remove('dark');
        }
    })
    const { user } = useContext(AuthContext);
    const location = useLocation();
    let activeClassName = "nav-link px-2 link-dark active-link";
    let inActiveClass = "nav-link px-2 link-dark";
    let homeClass = "py-3 border-bottom active top-0 start-0";
    let otherClass = "py-3 border-bottom";

    return (
        <header className={location.pathname != '/' ? otherClass : (isMobile ? otherClass : homeClass)}>
            <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between">
                    <Link to="/" className="d-flex align-items-center col-md-auto mb-2 mb-md-0 text-dark text-decoration-none">
                        <h3 className="mb-0 d-flex align-items-center justify-content-center text-uppercase logo"><i className="fas fa-book-reader me-2"></i> <span>LearnCoding</span></h3>
                    </Link>

                    <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0 main_menu">
                        <li><NavLink to="/" className={(({ isActive }) => isActive ? activeClassName : inActiveClass)} end>Home</NavLink></li>
                        <li><NavLink to="/courses" className={(({ isActive }) => isActive ? activeClassName : inActiveClass)} end>Courses</NavLink></li>
                        <li><NavLink to="/faq" className={(({ isActive }) => isActive ? activeClassName : inActiveClass)} end>FAQ</NavLink></li>
                        <li><NavLink to="/blog" className={(({ isActive }) => isActive ? activeClassName : inActiveClass)} end>Blog</NavLink></li>
                    </ul>

                    {ToggleDarkMode()}

                    {user ? <div className="text-end d-flex mt-2 align-items-center justify-content-center">
                        <Link to="#" className="d-block link-dark text-decoration-none"><img src={user.photoURL} alt={user.displayName} title={user.displayName} width="32" height="32" className="rounded-circle" /></Link>
                        <Link to="/logout" className="btn btn-outline-danger ms-3">Logout</Link>
                    </div> :
                        <div className="text-end mt-2">
                            <Link to="/login" className="btn btn-outline-primary me-2">Login</Link>
                            <Link to="/signup" className="btn btn-primary">Sign-up</Link>
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
        <div className='text-center col-12 col-md-auto mb-2 justify-content-center mb-md-0 mt-2'>
            <div className="form-check form-switch mx-auto d-inline-block">
                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" checked={darkmode} onChange={handleDarkmode} />
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Darkmode</label>
            </div>
        </div>
    );
}

export default Header;