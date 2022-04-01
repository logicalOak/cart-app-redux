import {Link, useParams} from "react-router-dom"
import {useEffect, useState} from "react"
import {formatPrice} from "../../utils/helpers"
import {useDispatch, useSelector} from "react-redux"
import {addItem, removeItem} from "../../features/cart/cartSlice";

const Product = () => {
    const {id} = useParams()
    const dispatch = useDispatch()
    const [product, setProduct] = useState({})
    const {items} = useSelector(({products}) => products)

    useEffect(() => {
        setProduct(items.length !== 0 ? items.find(item => item.id === id) : {})
    }, [id, items])

    return <div className="py-[30px] flex flex-col items-start gap-[20px]">
        <Link
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            to="/">Back to Products</Link>

        <div className="grid gap-[20px] p-[20px] bg-white shadow rounded-lg sm:grid-cols-3">
            <img src={product.image} alt={product.name}/>

            <div className="flex flex-col items-start gap-[10px] sm:col-span-2">
                <h2 className="font-semibold text-xl">{product.name}</h2>
                <p>{product.description_long}</p>
                <p><span className="font-semibold mr-[20px]">Category:</span> {product.category}</p>
                <p><span className="font-semibold mr-[20px]">Price:</span> {formatPrice(product.price)}</p>
                <div className="border-b-2 w-full"/>
                <div className="flex justify-end gap-2">
                    <button
                        onClick={() => dispatch(addItem(product))}
                        className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5  dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Add
                    </button>
                    <button
                        onClick={() => dispatch(removeItem(product.id))}
                        className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Remove
                    </button>
                </div>
            </div>
        </div>
    </div>
}

export default Product
