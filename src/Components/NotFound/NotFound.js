import React from 'react';
import page from '../../Images/page.jpg'
const NotFound = () => {
    return (
        <div>
             <div className="py-5">
                <div className="d-flex justify-content-center mb-5">
                <img className="w-25" src={page} alt="" />
                </div>
                <h3 className="text-center">Error 404</h3>
                <p className="text-center">Page Not Found</p>
            </div>
        </div>
    );
};

export default NotFound;