import React from "react";
import { Link, useLoaderData, useParams } from "react-router";
import { CiStar } from "react-icons/ci";


function ToysDeitls() {
  const { id } = useParams();
  const data = useLoaderData();
  const toy = data.find((item) => item.toyId == id);

  if (!toy) {
    return (
      <div className="text-center py-10 text-red-500 font-semibold text-xl">
        Toy not found !
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure className="lg:w-1/2">
          <img
            src={toy.pictureURL}
            alt={toy.toyName}
            className="w-full h-full object-cover rounded-xl"
          />
        </figure>

        <div className="card-body lg:w-1/2">
          <h2 className="card-title text-3xl font-bold text-primary">
            {toy.toyName}
          </h2>
          <p className="text-accent mt-2">{toy.description}</p>

          <div className="mt-4 space-y-1">
            <p>
              <span className="font-semibold text-lg">Category:</span> {toy.subCategory}
            </p>
            <p>
              <span className="font-semibold">Seller:</span> {toy.sellerName}
            </p>
            <p>
              <span className="font-semibold">Email:</span> {toy.sellerEmail}
            </p>
            <p>
              <span className="font-semibold">Available Quantity:</span>{" "}
              {toy.availableQuantity}
            </p>
            <p className="flex items-center space-x-2">
              <span className="font-semibold">Rating:</span> <CiStar className=" text-lg text-yellow-600" />
              {toy.rating}
            </p>
            <p>
              <span className="font-semibold text-lg">Price: $</span>{toy.price}
            </p>
          </div>

          <div className="card-actions justify-end mt-5">
            <Link to='/alltoys' className="btn btn-secondary">Back to All Toys Page</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToysDeitls;
