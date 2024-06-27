"use client";
import merchantData from "../../data.json";
import productData from "../../data.json";
import { useParams } from "next/navigation";
import type { NextPage } from "next";

const MerchantPage: NextPage = () => {
  const { merchantID } = useParams(); // Get merchantID from the URL

  // Find the merchant by ID
  const merchant = merchantData.merchants.find((m: any) => m.id === merchantID);

  // Filter products by merchantID
  const products = productData.products.filter((p: any) => p.merchant_id === merchantID);

  if (!merchant) {
    return <div>Merchant not found</div>;
  }

  return (
    <div className="bg-gray-100">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 bg-base-300">
        <h1 className="text-center text-5xl">{merchant.name}</h1>
        <div className="px-4 py-6 sm:px-0">
          <div className="card lg:card-side bg-base-100 shadow-xl">
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
        </div>
      </div>
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 bg-base-300">
        <h2 className="text-3xl">Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product: any) => (
            <div key={product.id} className="card bg-base-100 shadow-xl">
              <figure>
                <img
                  src={product.image}
                  alt={product.name}
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{product.name}</h2>
                <p>{product.description}</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">View Product</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MerchantPage;
