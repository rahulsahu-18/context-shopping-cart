import React, { useContext } from "react";
import { productContext } from "../../store/productContext";
import Header from "../header"
function Allproduct() {
  const { wholeProduct, loading,viewDetails } = useContext(productContext);

  if (loading)
    return (
      <h1 className="flex items-center justify-center text-2xl font-semibold h-screen">
        Loading...
      </h1>
    );

  return (
    <div className="flex flex-col" >
      <Header />
      <div className="h-20"></div>
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {wholeProduct && wholeProduct.length > 0 ? (
        wholeProduct.map((singleelem) => (
          <div
            key={singleelem.id}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden flex flex-col items-center p-4"
          >
            {/* Product Image */}
            <img
              src={singleelem.thumbnail}
              alt={singleelem.title}
              className="w-48 h-48 object-cover rounded-lg mb-4"
            />

            {/* Product Price */}
            <p className="text-xl font-bold text-gray-800 mb-3">
              ₹{Math.floor(singleelem.price)}
            </p>

            {/* View Details Button */}
            <button onClick={()=>viewDetails(singleelem.id)} className="bg-blue-600 text-white px-5 py-2 rounded-xl hover:bg-blue-700 transition-colors duration-300">
              View Details
            </button>
          </div>
        ))
      ) : (
        <p className="text-center col-span-full">No products available</p>
      )}
    </div>
    </div>
  );
}

export default Allproduct;
