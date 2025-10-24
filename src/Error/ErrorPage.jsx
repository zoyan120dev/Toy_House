import React from 'react'
import image404 from '../assets/404-error.jpg'
import { Link } from 'react-router';

function ErrorPage() {
  return (
    <>
      <div className="flex flex-col justify-center items-center min-h-screen">
        <img
          className="w-[500px] h-[500px] object-cover-"
          src={image404}
          alt=""
        />
        <p className='text-lg'>Oops! The page you’re looking for has wandered off</p>
        <Link to='/' className='text-blue-500'>Back Home</Link>
      </div>
    </>
  );
}

export default ErrorPage