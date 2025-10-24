import React from 'react'
import ToysCard from './ToysCard';
import { Link } from 'react-router';

function Popular({ data }) {
   const filterData = data.filter(
     (popularToys) => popularToys.status === "popular"
   );
   console.log(filterData)
  
   return (
     <div className="mt-10 container mx-auto py-7">
       <p className="text-center font-bold text-3xl">Popular Toys</p>
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-10 gap-5">
         {filterData.map((toysCards) => (
           <ToysCard key={toysCards.toyId} toysCards={toysCards} />
         ))}
       </div>
       <div className='flex justify-center pt-14 pb-6'>
         <Link to='/alltoys' className='btn btn-secondary px-10'>All Toys</Link>
       </div>
     </div>
   );
}

export default Popular