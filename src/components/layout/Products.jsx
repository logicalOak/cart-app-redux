import {Link} from "react-router-dom"
import {formatPrice} from "../../utils/helpers"
import {useSelector} from "react-redux";

/**
 * 👋🏻 Products
 * @returns {JSX.Element}
 * @constructor
 */
const Products = () => {
    const {items} = useSelector(({products}) => products)
    return <div className="grid gap-[10px] sm:grid-cols-2 md:grid-cols-3 md:gap-[20px]">
        {items.length !== 0 && items.map(item => <ProductItem key={item.id} product={item}/>)}
    </div>
}


export default Products

/**
 * 👋🏻 Product Item
 * @param product
 * @returns {JSX.Element}
 * @constructor
 */
const ProductItem = ({product: {id, name, price, image, description}}) => {
    return <div className="bg-white shadow rounded-lg py-2 px-3 flex flex-col gap-[10px] md:pb-[30px]">
        <Link to={`/products/${id}`} className="shadow rounded-lg">
            <img className="w-full" src={image} alt={name}/>
        </Link>
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-sm md:text-base">{description}</p>
        <p className="mt-auto flex items-center justify-between">
            <Link className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                  to={`/products/${id}`}>See More</Link>
            <span>{formatPrice(price)}</span>
        </p>
    </div>
}