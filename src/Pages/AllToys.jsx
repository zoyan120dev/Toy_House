import React, { useState } from 'react'
import { useLoaderData } from 'react-router'
import ToysCard from '../Components/ToysCard';
import appError from '../assets/sreach-eeor.jpg'

function AllToys() {
  const allData = useLoaderData();
  const [search , setSearch] = useState('')

  const termtoy = search.trim().toLowerCase()
  
  const Searching =  termtoy ? allData.filter(product => product.toyName.toLowerCase().includes(termtoy)) : allData;

  return (
    <>
      <div className="w-11/12 mx-auto py-12">
        <div className="flex justify-between items-center">
          <p className="text-center  font-bold text-3xl">All Toys</p>
          <label className="input">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input value={search} onChange={(e) => setSearch(e.target.value)}  type="search" required placeholder="Search" />
          </label>
        </div>
         {
          Searching.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-10 gap-5">
            {Searching.map(toysCards => <ToysCard key={toysCards.toyId} toysCards={toysCards}/>)}
           </div>
          ):(
            <div className='text-accent flex justify-center mt-50'>
                <img src={appError} alt="" />
            </div>
          )
         }
      </div>
    </>
  );
}

export default AllToys