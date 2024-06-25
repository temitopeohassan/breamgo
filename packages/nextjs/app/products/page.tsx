"use client";
import productData from "./products.json";
import type { NextPage } from "next";


const ProductsPage: NextPage = () =>{
  const products = productData.products; // Access the products array

  return (
    <div className="bg-gray-100">
      
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 bg-base-300">
      <h1 className="text-center text-5xl">
              Products
          </h1>
        <div className="px-4 py-6 sm:px-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {Array.isArray(products) && products.map((product: any) => (
              <div className="card bg-base-100 w-96 shadow-xl" key={product.id}>
                <figure>
                <img
                      className="h-full w-full object-cover"
                      src={product.image}
                      alt={product.name}
                    />
                </figure>
                <div className="card-body">
                  <h4 className="card-title">{product.name}</h4>
                  <h2 className="card-title">{product.category}</h2>
                  <p>{product.description}</p>
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

export default ProductsPage;
