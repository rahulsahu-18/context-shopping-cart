import React, { useContext, useEffect, useState } from "react";
import { productContext } from "../../store/productContext";
import Header from "../header";
import Cartcard from "../../common/cartCard";
import { ShoppingCart } from "lucide-react";

function Cart() {
const {cartData} = useContext(productContext);
const[total,setTotal] = useState();
useEffect(() => {
  if (cartData && cartData.length > 0) {
    setTotal(Math.floor(cartData.reduce((acc, curr) => acc + curr.totalPrice, 0)));
  } else {
    setTotal(0);
  }
}, [cartData]);
  return (
    <div className="min-h-screen bg-gray-50 pt-24 px-6">
      <Header />
      <h1 className="text-3xl font-bold mb-6 flex items-center gap-2">
        <ShoppingCart className="w-8 h-8 text-blue-600" />
        Your Cart
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          {cartData && cartData.length > 0 ? (
            cartData.map((item) => (
              <Cartcard key={item.id} item={item} />
            ))
          ) : (
            <p className="text-gray-500 text-lg">Your cart is empty 😢</p>
          )}
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md h-fit sticky top-24">
          <h2 className="text-xl font-bold mb-4">Order Summary</h2>
          <div className="flex justify-between mb-2 text-gray-700">
            <span>Subtotal</span>
            <span>₹{Math.floor(total)}</span>
          </div>
          {cartData.length > 0 ? <div className="flex justify-between mb-2 text-gray-700">
            <span>Shipping</span>
            <span>₹20</span>
          </div> : null}
          <div className="flex justify-between font-bold text-lg mt-4">
            <span>All Total</span>
            {cartData.length > 0 ? <span>{Math.floor(total)} + 20 = {Math.floor(total + 20)}</span> : <span>0</span>}
          </div>
          <button className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
