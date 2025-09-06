import React, { useContext, useState } from 'react'
import { Trash2, Plus, Minus, ShoppingCart } from "lucide-react";
import { productContext } from '../../store/productContext';

function Cartcard({ item }) {
    const { removeFromCart,addToCart } = useContext(productContext);
    return (
        <div
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
                <button disabled={item.quantity == 1} onClick={() =>removeFromCart(item,false)} className="p-2 bg-gray-100 rounded-full hover:bg-gray-200">
                    <Minus className="w-4 h-4" />
                </button>
                <span className="px-3 font-semibold">{item.quantity}</span>
                <button onClick={()=>addToCart(item)} className="p-2 bg-gray-100 rounded-full hover:bg-gray-200">
                    <Plus className="w-4 h-4" />
                </button>
            </div>
            <button className="p-2 text-red-500 hover:bg-red-100 rounded-full" onClick={() =>removeFromCart(item,true)}>
                <Trash2 className="w-5 h-5" />
            </button>
        </div>
    )
}

export default Cartcard