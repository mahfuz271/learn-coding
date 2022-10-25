import React from 'react';
import CourseBlock from '../CourseBlock/CourseBlock';
import Sidebar from '../Sidebar/Sidebar';

const Courses = () => {
    return (
        <div className='container'>
            <div className='row'>

                <div className="col-md-8 mt-5">
                    <CourseBlock limit="100" title="Discover Our Courses"></CourseBlock>
                </div >

                <div className="flex-shrink-0 p-3 pt-5 col-md-4">
                    <Sidebar></Sidebar>
                </div>
            </div>
        </div>
    );
};

export default Courses;