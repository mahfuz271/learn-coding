import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
    return (
        <div className="m-auto col-md-6 mt-5">
            <h2>Create your account</h2>
            <p>See how the world’s best user experiences are created</p>
            <form className="mt-5">
                <div className="form-group">
                    <label className="form-label text-primary" htmlFor="fullName">Full name</label>
                    <input className="form-control" id="fullName" type="text" placeholder="Your name" required="" />
                </div>
                <div className="form-group mt-4">
                    <label className="form-label text-primary" htmlFor="exampleFormControlInput1">Email address</label>
                    <input className="form-control" id="exampleFormControlInput1" type="email" placeholder="Exampl@email.com" required="" />
                </div>
                <div className="form-group mt-4">
                    <label className="form-label text-primary d-flex" htmlFor="inputPassword5">Password</label>
                    <div className="password-wrap position-relative">
                        <input className="form-control pe-5" id="inputPassword5" type="password" placeholder="Enter password" required="" />
                    </div>
                </div>
                <button className="btn btn-primary w-100 mt-5 submit-btn" type="submit">Start now !</button>
                <div className="text-center my-4"><span className="mx-3 span-or text-secondary">OR</span></div>
                <button className="btn btn-outline-secondary w-100 submit-btn" type="button"> <img className="me-3" src="/img/google-icon.svg" alt="Google" />Start now !</button>
                <button className="btn btn-outline-secondary goolge-signin w-100 submit-btn mt-3" type="button"> <img className="me-3" src="/img/GitHub-Mark-32px.png" alt="github" />Start now !</button>
                <span class="card-text mt-5 d-block text-center">Already have an account?  <Link class="text-focus" to="/login"> Login</Link></span>
            </form>
        </div>
    );
};

export default Signup;