import {Link} from "react-router-dom";
import {IoCart} from "react-icons/io5";
import {useSelector} from "react-redux";
import {formatPrice} from "../../utils/helpers";

const Header = () => {
    const {cartItemsCount, cartItemsAmount} = useSelector(({cart}) => cart)

    return <header className="py-[30px] px-[15px] shadow bg-white">
        <nav className="max-w-6xl m-auto flex items-center justify-between">
            <Link className="font-semibold" to="/">
                UnShop
            </Link>

            <Link className="flex items-center gap-2" to="/cart">
                <IoCart size={25}/>
                ({cartItemsCount})
                {formatPrice(cartItemsAmount)}
            </Link>
        </nav>
    </header>
}

export default Header
