"use client";
import merchantData from "./merchants.json";
import type { NextPage } from "next";

export const MerchantsPage: NextPage = () =>{
  const merchants = merchantData.merchants; // Access the merchants array

  return (
    <div className="bg-gray-100">
      
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 bg-base-300">
      <h1 className="text-center text-5xl">
              Merchants
          </h1>
        <div className="px-4 py-6 sm:px-0">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {Array.isArray(merchants) && merchants.map((merchant: any) => (
              <div className="card lg:card-side bg-base-100 shadow-xl" key={merchant.id}>
              <figure>
                  <img
                  src={merchant.image}
                  alt={merchant.name}
              />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{merchant.name}</h2>
                  <p>{merchant.description}</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Read More</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MerchantsPage;
