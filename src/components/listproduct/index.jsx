import React, { useContext, useEffect } from "react";
import { productContext } from "../../store/productContext";
import { Trash2, Plus, Minus, ShoppingCart } from "lucide-react";
import Header from "../header";

function Cart() {
  const { cartData, total, setTotal, setCartData } = useContext(productContext);
  const handleCount = (action, item) => {
    const index = cartData.findIndex((obj) => obj.id == item.id)
    const update = [...cartData];
    if (action === "incriment") {
      update[index] = { ...update[index], quantity: update[index].quantity + 1 }
      setTotal((prevTotal) => prevTotal + item.price);
    } else if (action === "decriment") {
      update[index] = { ...update[index], quantity: update[index].quantity - 1 }
      setTotal((prevTotal) => prevTotal - item.price);
    }
    setCartData(update);
  }

  const deleteitem = (item) => {
    setCartData((prev) => prev.filter((del) => del.id != item.id));
    setTotal((prev) => prev - (item.quantity * item.price));
  }
 useEffect(()=>{
  if(cartData.length == 0)
    setTotal(0);
 },[cartData])

  return (
    <div className="min-h-screen bg-gray-50 pt-24 px-6">
      <Header />
      <h1 className="text-3xl font-bold mb-6 flex items-center gap-2">
        <ShoppingCart className="w-8 h-8 text-blue-600" />
        Your Cart
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-6">
          {cartData && cartData.length > 0 ? (
            cartData.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-6 p-4 bg-white rounded-xl shadow-md"
              >
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-24 h-24 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <h2 className="text-lg font-semibold">{item.title}</h2>
                  <p className="text-sm text-gray-500">{item.description}</p>
                  <p className="mt-2 font-bold text-blue-600">₹{Math.floor(item.price)}</p>
                </div>
                <div className="flex items-center gap-2">
                  <button disabled={item.quantity == 1} onClick={() => handleCount("decriment", item)} className="p-2 bg-gray-100 rounded-full hover:bg-gray-200">
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-3 font-semibold">{item.quantity}</span>
                  <button onClick={() => handleCount("incriment", item)} className="p-2 bg-gray-100 rounded-full hover:bg-gray-200">
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                <button className="p-2 text-red-500 hover:bg-red-100 rounded-full" onClick={() => deleteitem(item)}>
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-lg">Your cart is empty 😢</p>
          )}
        </div>

        {/* Checkout Section */}
        <div className="bg-white p-6 rounded-xl shadow-md h-fit sticky top-24">
          <h2 className="text-xl font-bold mb-4">Order Summary</h2>
          <div className="flex justify-between mb-2 text-gray-700">
            <span>Subtotal</span>
            <span>{Math.floor(total)}</span>
          </div>
          { cartData.length > 0 ?<div className="flex justify-between mb-2 text-gray-700">
            <span>Shipping</span>
            <span>₹20</span>
          </div> : null}
          <div className="flex justify-between font-bold text-lg mt-4">
            <span>All Total</span>
            {cartData.length > 0 ? <span>{Math.floor(total)} + 20 = {Math.floor(total + 20)}</span>: <span>0</span>}
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
