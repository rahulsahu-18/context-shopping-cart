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

    const viewDetails = async (id) => {
        if(typeof id === 'string')
            navigate('/id')
        else if(id > 100)
             navigate('/id');
            
        navigate(`/product/${id}`);
        setLoading(true);
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await response.json();
        console.log(data);
        setCustomProduct(data);
        setLoading(false);
    }
    const addToCart = (product) => {
        navigate('/cart')
        const { id, price, thumbnail, title, description } = product;
        const cartObj = {
            id,
            price,
            thumbnail,
            title,
            description,
            quantity: 1,
        }
        const index = cartData.findIndex((obj) => obj.id == product.id)
        if (index === -1) {
            setCartData([...cartData, cartObj]);
            setTotal((prev)=>prev + cartObj.price)
        } else {
            const updatedCart = [...cartData];
            updatedCart[index] = { ...updatedCart[index], quantity: updatedCart[index].quantity + 1 };
            setCartData(updatedCart);
            setTotal((prev)=>prev + cartObj.price)
        }

    }
    useEffect(() => {
        fetchProduct();
    }, [])

    return (
        <productContext.Provider value={{ total, setTotal, setCartData, addToCart, cartData, wholeProduct, loading, viewDetails, customProduct }}>
            {children}
        </productContext.Provider>
    )
}

export { ProductProvider, productContext }
