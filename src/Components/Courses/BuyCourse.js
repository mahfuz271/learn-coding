import React, { useContext } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/UserContext';

const BuyCourse = () => {
    const { user } = useContext(AuthContext);
    const course = useLoaderData();
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate('/order-placed/'+course.id);
    }
    return (
        <div className='container mb-5'>

            <div className="py-3 text-center">
                <h2>Checkout</h2>
            </div>

            <form className="row g-5" onSubmit={handleSubmit}>
                <div className="col-md-5 col-lg-4 order-md-last">
                    <h4 className="d-flex justify-content-between align-items-center mb-3">
                        <span className="text-primary">Your cart</span>
                        <span className="badge bg-primary rounded-pill">1</span>
                    </h4>
                    <ul className="list-group mb-3">
                        <li className="list-group-item d-flex justify-content-between lh-sm">
                            <div>
                                <h6 className="my-0">{course.title}</h6>
                                <small className="text-muted">{course.desc.slice(0, 35)}...</small>
                            </div>
                            <span className="text-muted">${course.price}</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between">
                            <span>Total</span>
                            <strong>${course.price}</strong>
                        </li>
                    </ul>
                    <hr className="my-4" />

                    <h4 className="mb-3">Payment</h4>

                    <div className="my-3">
                        <div className="form-check">
                            <input id="credit" name="paymentMethod" type="radio" className="form-check-input" checked required />
                            <label className="form-check-label" for="credit">Credit card</label>
                        </div>
                        <div className="form-check">
                            <input id="debit" name="paymentMethod" type="radio" className="form-check-input" required />
                            <label className="form-check-label" for="debit">Debit card</label>
                        </div>
                        <div className="form-check">
                            <input id="paypal" name="paymentMethod" type="radio" className="form-check-input" required />
                            <label className="form-check-label" for="paypal">PayPal</label>
                        </div>
                    </div>
                    <button className="w-100 btn btn-primary btn-lg" type="submit">Get access</button>
                </div>
                <div className="col-md-7 col-lg-8">
                    <h4 className="mb-3">Billing address</h4>
                    <div className="needs-validation">
                        <div className="row g-3">
                            <div className="col-12">
                                <label for="firstName" className="form-label">Name</label>
                                <input type="text" className="form-control" id="firstName" placeholder="" value={user.displayName} required />

                            </div>

                            <div className="col-12">
                                <label for="email" className="form-label">Email <span className="text-muted">(Optional)</span></label>
                                <input type="email" className="form-control" value={user.email} id="email" placeholder="you@example.com" />

                            </div>

                            <div className="col-12">
                                <label for="address" className="form-label">Address</label>
                                <input type="text" className="form-control" id="address" placeholder="1234 Main St" required />

                            </div>

                            <div className="col-12">
                                <label for="address2" className="form-label">Address 2 <span className="text-muted">(Optional)</span></label>
                                <input type="text" className="form-control" id="address2" placeholder="Apartment or suite" />
                            </div>

                            <div className="col-md-5">
                                <label for="country" className="form-label">Country</label>
                                <select className="form-select" id="country" required>
                                    <option value="">Choose...</option>
                                    <option>Bangladesh</option>
                                </select>
                            </div>

                            <div className="col-md-3">
                                <label for="zip" className="form-label">Zip</label>
                                <input type="number" className="form-control" id="zip" placeholder="" required />
                            </div>
                        </div>

                    </div>
                </div>
            </form>
        </div>
    );
};

export default BuyCourse;