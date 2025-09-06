import { useContext } from 'react'
import { useNavigate } from 'react-router'
import { productContext } from '../../store/productContext'
function Card({singleelem }) {
    const {handleviewProduct} = useContext(productContext);
    const navigate = useNavigate()
    const viewDetails = (id)=>{
      navigate(`/product/${id}`);
    }
    return (
        <div
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden flex flex-col items-center p-4"
        >
            <img
                src={singleelem.thumbnail}
                alt={singleelem.title}
                className="w-48 h-48 object-cover rounded-lg mb-4"
            />


            <p className="text-xl font-bold text-gray-800 mb-3">
                ₹{Math.floor(singleelem.price)}
            </p>


            <button onClick={() => viewDetails(singleelem.id)} className="bg-blue-600 text-white px-5 py-2 rounded-xl hover:bg-blue-700 transition-colors duration-300">
                View Details
            </button>
        </div>
    )
}

export default Card