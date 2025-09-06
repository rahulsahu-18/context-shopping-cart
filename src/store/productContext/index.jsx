import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";

const productContext = createContext(null);

const ProductProvider = ({ children }) => {
    const navigate = useNavigate();
    const [wholeProduct, setWholeProduct] = useState([])
    const [loading, setLoading] = useState(true);
    const [customProduct, setCustomProduct] = useState({})
    const [cartData, setCartData] = useState([]);
    const [total, setTotal] = useState(0)
    const fetchProduct = async () => {
        setLoading(true)
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        setLoading(false)
        setWholeProduct(data.products)
    }

    const addToCart = (product) => {
        const copyCartData = [...cartData];
        const findProductIndex = copyCartData.findIndex((item) => item.id === product.id);

        if (findProductIndex === -1) {
            copyCartData.push({ ...product, quantity: 1, totalPrice: product.price });
        } else {
            copyCartData[findProductIndex] = {...copyCartData[findProductIndex], quantity: copyCartData[findProductIndex].quantity + 1, totalPrice: (copyCartData[findProductIndex].quantity+1) * copyCartData[findProductIndex].price}
        }
        setCartData(copyCartData);
        localStorage.setItem("cartData",JSON.stringify(copyCartData));
        navigate('/cart',{replace:true});

    }
    
    const removeFromCart = (product,totallyDelete) => {
        const copyCart = [...cartData];
        const findIndex = copyCart.findIndex((item)=>item.id === product.id);

        if(totallyDelete)
        copyCart.splice(findIndex,1);
       else
        copyCart[findIndex] = {...copyCart[findIndex],quantity:copyCart[findIndex].quantity - 1,totalPrice:(copyCart[findIndex].quantity - 1)*(copyCart[findIndex].price) }
       localStorage.setItem("cartData",JSON.stringify(copyCart));
       setCartData(copyCart)
    }

    useEffect(() => {
        fetchProduct();
      const cartItem =  localStorage.getItem("cartData");
      setCartData(cartItem ? JSON.parse(cartItem):[]);
    }, [])

    return (
        <productContext.Provider value={{ setLoading, total, setCustomProduct, setTotal, setCartData, addToCart, cartData, wholeProduct, loading, customProduct,removeFromCart }}>
            {children}
        </productContext.Provider>
    )
}

export { ProductProvider, productContext }
