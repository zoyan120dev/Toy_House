import React, { useState } from 'react'
import { CiBookmark } from "react-icons/ci";
import { Link } from 'react-router';
import Popular from './Popular';

function ToysCard({ toysCards }) {

  return (
    <>
      <div className="card bg-base-100  shadow-sm ">
        <figure>
          <img
            className="h-[400px] w-full object-cover hover:scale-105 transition-all ease-in-out"
            src={toysCards.pictureURL}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            <div className="flex flex-col space-y-2">
              <div className="flex items-center gap-4">
                {toysCards.toyName}
                <div className="badge badge-secondary">{toysCards.status}</div>
              </div>
              <h1>Salar Name: {toysCards.sellerName}</h1>
            </div>
          </h2>
          <p className='text-accent'>
            {toysCards.description.length > 50 ? (
              <>
                {toysCards.description.slice(0, 50)}
                <Link className='text-blue-500'>Read More...</Link>
              </>
            ) : (
              <>{toysCards.description}</>
            )}
          </p>
        </div>
      </div>
    </>
  );
}

export default ToysCard