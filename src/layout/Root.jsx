import React from 'react'
import Navbar from '../Components/Navbar'
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';


function Root() {
  return (
    <>
      <div className='flex flex-col'>
        <section className='w-11/12 mx-auto p-5'>
          <Navbar />
        </section>
        <section className='flex-1 min-h-screen'>
            <Outlet/>
        </section>
        <section>
            <Footer/>
        </section>
      </div>
    </>
  );
}

export default Root