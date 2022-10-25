import React, { useContext } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/UserContext';

const OrderPlaced = () => {
    const { user } = useContext(AuthContext);
    const course = useLoaderData();
    return (
        <div class="container-fluid my-5">
            <div class="container text-center">
                <h1>{user.displayName}</h1>
                <p class="lead w-lg-50 mx-auto">Thanks for your order.</p>
                <p class="w-lg-50 mx-auto">Your order number is <span className='colormain'>#{Math.floor(Math.random() * (50000 - 10000 + 1) ) + 10000}</span></p>
            </div>
        </div>
    );
};

export default OrderPlaced;