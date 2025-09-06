import React, { useContext } from "react";
import { productContext } from "../../store/productContext";
import Header from "../header"
import Card from "../../common/cardProduct";
function Allproduct() {
  const { wholeProduct, loading} = useContext(productContext);

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
          wholeProduct.map((singleelem) => <Card key={singleelem.id} singleelem={singleelem} />)) : (
          <p className="text-center col-span-full">No products available</p>
        )}
      </div>
    </div>
  );
}

export default Allproduct;
