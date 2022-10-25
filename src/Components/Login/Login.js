import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="m-auto col-md-6 mt-5">
            <h2>Hello ! Welcome back.</h2>
            <p>Log in with your data that you entered during Your registration.</p>
            <form className="mt-5">
                <div className="form-group">
                    <label className="form-label text-primary" htmlFor="exampleFormControlInput1">Email address</label>
                    <input className="form-control" id="exampleFormControlInput1" type="email" placeholder="Exampl@email.com" required="" />
                </div>
                <div className="form-group mt-4">
                    <div className="d-flex justify-content-between">
                        <label className="form-label text-primary d-flex" htmlFor="inputPassword5">Password</label>
                        <button className="btn">Forgot Password</button>
                    </div>
                    <div className="password-wrap position-relative">
                        <input className="form-control pe-5" id="inputPassword5" type="password" placeholder="Enter password" required="" />
                    </div>
                </div>
            </form>
            <button className="btn btn-primary w-100 mt-5 submit-btn" type="submit">Start now !</button>
            <div className="my-4 text-center"><span className="mx-3 span-or text-secondary">OR</span></div>
            <button className="btn btn-outline-secondary goolge-signin w-100 submit-btn" type="button"> <img className="me-3" src="/img/google-icon.svg" alt="google" />Start now !</button>
            <button className="btn btn-outline-secondary goolge-signin w-100 submit-btn mt-3" type="button"> <img className="me-3" src="/img/GitHub-Mark-32px.png" alt="github" />Start now !</button>
            <span className="card-text mt-5 d-block text-center">Don’t have an account? <Link className="text-focus" to="/signup"> Sign up</Link></span>
        </div>
    );
};

export default Login;