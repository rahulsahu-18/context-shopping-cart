import React, { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { productContext } from "../../store/productContext";
import { useNavigate } from "react-router";

function Header() {
  const navigate = useNavigate();
 const handleCart = ()=>{
   navigate('/cart',{replace:true});
 }
  const{cartData} = useContext(productContext);
  return (
    <header className="fixed top-0 left-0 w-full h-20 bg-slate-300 text-gray-600 shadow-lg flex items-center justify-between px-10 z-50">
      <h1 className="text-2xl font-bold tracking-wide cursor-pointer" onClick={()=>navigate('/')}>MyStore</h1>

      <div className="relative cursor-pointer" onClick={handleCart}>
        <FaShoppingCart className="text-2xl hover:text-blue-400 transition-colors duration-300" />
        <span className="cursor-pointer absolute -top-2 -right-2 bg-red-500 text-white text-xs font-semibold w-5 h-5 flex items-center justify-center rounded-full">
          {cartData.length}
        </span>
      </div>
    </header>
  );
}

export default Header;
