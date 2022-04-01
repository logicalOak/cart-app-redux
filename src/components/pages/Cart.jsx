import React from "react"
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {formatPrice} from "../../utils/helpers";
import {AiOutlineDelete} from "react-icons/ai";
import {decrementItem, deleteItem, incrementItem} from "../../features/cart/cartSlice";

const Cart = () => {
    const dispatch = useDispatch()
    const {cartItems, cartItemsCount, cartItemsAmount} = useSelector(({cart}) => cart)
    return <div className="py-[50px] flex flex-col items-start">
        <Link to="/"
              className="focus:outline-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5">Back
            to home
        </Link>

        {cartItems.length === 0 &&
            <h1 className="text-center py-[20px] w-full font-semibold text-xl">Sorry, cart is empty</h1>}

        {cartItems.length !== 0 && <div className="w-full">
            <ul className="py-[30px]">
                {cartItems.map(p =>
                    <li key={p.id} className="bg-white p-4 flex items-center gap-2 justify-between">
                        <div>
                            <img className="max-w-[100px] w-full" src={p.image} alt={p.name}/>
                            <div>
                                <h3>{p.name}</h3>
                                <p>{formatPrice(p.amount)}</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-2">
                            <button
                                onClick={() => dispatch(decrementItem(p.id))}
                                className="flex items-center justify-center p-[10px] bg-slate-500 text-white">-
                            </button>
                            <p>{p.quantity}</p>
                            <button
                                onClick={() => dispatch(incrementItem(p.id))}
                                className="flex items-center justify-center p-[10px] bg-slate-500 text-white">+
                            </button>
                            <button
                                onClick={() => dispatch(deleteItem(p.id))}
                            >
                                <AiOutlineDelete size={30}/>
                            </button>
                        </div>

                    </li>
                )}
            </ul>

            <div>
                <p>Total Price: {formatPrice(cartItemsAmount)}</p>
                <p>Total Items: {cartItemsCount}</p>
            </div>
        </div>}
    </div>
}

export default Cart
