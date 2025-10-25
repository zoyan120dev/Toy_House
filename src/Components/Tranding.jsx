import React from 'react'
import ToysCard from './ToysCard';

function Tranding({ data }) {
    const trandingData = data.filter(
      (trandingData) => trandingData.status === "tranding"
    );

  return (
    <>
      <div className="my-10 container mx-auto">
        <p className="text-3xl font-bold">Tranding Toys</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-10 gap-5">
          {trandingData.map((toysCards) => (
            <ToysCard key={toysCards.toyId} toysCards={toysCards} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Tranding