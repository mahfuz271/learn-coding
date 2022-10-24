import React from 'react';

const Blog = () => {
    return (
        <div className='container mt-5'>
            <h1 className='text-center my-3 mb-5'>Blog</h1>
            <h2>what is cors?</h2>
            <p>Cross-origin resource sharing is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served. A web page may freely embed cross-origin images, stylesheets, scripts, iframes, and videos.</p>
            <h2>Why are you using firebase? What other options do you have to implement authentication?</h2>
            <p>Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.</p>
            <h2>How does the private route work?</h2>
            <p>The react private route component renders child components ( children ) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.</p>
            <h2>What is Node? How does Node work?</h2>
            <p>Node. js is a JavaScript runtime environment that achieves low latency and high throughput by taking a “non-blocking” approach to serving requests. In other words, Node. js wastes no time or resources on waiting for I/O requests to return.</p>
        </div>
    );
};

export default Blog;