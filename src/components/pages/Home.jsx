import {Products} from "../index";

const Home = () => <div className="py-[30px]">
    <div className="grid gap-[10px] justify-items-center py-[30px]">
        <h1 className="font-semibold text-lg lg:text-xl">UnShop Ecommerce</h1>
        <p>A site created use React, Redux</p>
    </div>

    <Products/>
</div>

export default Home
