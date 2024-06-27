"use client";
import productData from "../../data.json";
import { useParams } from "next/navigation";
import type { NextPage } from "next";

const ProductPage: NextPage = () => {
  const { productID } = useParams(); // Get productID from the URL

  // Find the product by ID
  const product = productData.products.find((p: any) => p.id === productID);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="bg-gray-100">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 bg-base-300">
        <h1 className="text-center text-5xl">{product.name}</h1>
        <div className="px-4 py-6 sm:px-0">
          <div className="card bg-base-100 w-full shadow-xl">
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
                <button className="btn btn-primary">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
