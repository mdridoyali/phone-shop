import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='text-8xl font-bold flex justify-center items-center h-screen '>
            <h2>Oops...</h2> <br></br>
           <h2> <Link>Go Back</Link></h2>
        </div>
    );
};

export default ErrorPage;