import React, { useContext } from "react";
import { productContext } from "../../store/productContext";
import Header from "../header";

function CostomProduct() {
  const { customProduct,addToCart, loading} = useContext(productContext);

  if (loading) {
    return (
      <h1 className="flex items-center justify-center h-screen text-2xl font-semibold">
        Loading Product...
      </h1>
    );
  }

  return (
    <div>
    <Header/>
   <div className="max-w-5xl mx-auto mt-24 p-6 grid grid-cols-1 md:grid-cols-2 gap-10 bg-white shadow-xl rounded-2xl">
      {/* Product Image + Gallery */}
      <div className="flex flex-col items-center">
        {/* Main Image */}
        <img
          src={customProduct.thumbnail}
          alt={customProduct.title}
          className="rounded-xl shadow-md w-full max-w-sm object-cover mb-6"
        />

        {/* Thumbnails */}
        <div className="flex gap-3 flex-wrap justify-center">
          {customProduct.images?.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Product view ${index + 1}`}
              className="w-20 h-20 object-cover rounded-lg border border-gray-300 hover:border-blue-500 cursor-pointer transition-all duration-200"
            />
          ))}
        </div>
      </div>

      {/* Product Info */}
      <div className="flex flex-col justify-center space-y-6">
        <h2 className="text-3xl font-bold text-gray-800">
          {customProduct.title}
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          {customProduct.description}
        </p>
        <p className="text-2xl font-semibold text-green-600">
          ₹{Math.floor(customProduct.price)}
        </p>

        {/* Add to Cart Button */}
        <button onClick={() => addToCart(customProduct)} className="w-full md:w-1/2 bg-blue-600 text-white py-3 rounded-xl text-lg font-medium hover:bg-blue-700 transition-colors duration-300">
          Add to Cart
        </button>
      </div>
    </div>
    </div>
  );
}

export default CostomProduct;
