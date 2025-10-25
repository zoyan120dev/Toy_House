import React from "react";
import { CiBookmark } from "react-icons/ci";
import { Link } from "react-router";
import Popular from "./Popular";

function ToysCard({ toysCards }) {
  return (
    <>
      <div className="card bg-base-100 shadow-sm overflow-hidden">
        <figure className="relative group">
          <img
            className="h-[400px] w-[400px] object-cover rounded-t-lg transform transition-transform duration-500 ease-in-out group-hover:scale-110 group-hover:brightness-110"
            src={toysCards.pictureURL}
            alt={toysCards.toyName}
          />
          <div className="absolute inset-0 rounded-t-lg bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"></div>
          <div className="absolute top-3 right-3 bg-white/70 backdrop-blur-md rounded-full p-2 text-gray-700 hover:text-blue-500 transition-colors duration-300">
            <CiBookmark size={22} />
          </div>
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            <div className="flex flex-col space-y-2">
              <div className="flex items-center gap-4">
                {toysCards.toyName}
                <div className="badge badge-secondary">{toysCards.status}</div>
              </div>
              <h1>Seller Name: {toysCards.sellerName}</h1>
            </div>
          </h2>
          <p className="text-accent">
            {toysCards.description.length > 50 ? (
              <>
                {toysCards.description.slice(0, 50)}
                <Link
                  to={`/toysdeitals/${toysCards.toyId}`}
                  className="text-blue-500 ml-1"
                >
                  Read More...
                </Link>
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

export default ToysCard;
