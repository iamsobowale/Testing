import { IconButton, Product } from "../components";
import product1 from '../assets/images/product1.png'

const StoreSection = () => {

    return (
        <div className="flex flex-col md:flex-row items-center mb-10 md:mt-20 md:mb-20 md:justify-center lg:gap-24">
            <div className="md:order-2">
                <Product image={product1} />
            </div>
            <div className="md:order-1 flex flex-col items-center md:gap-2 ">
                <p className=" md:text-3xl text-orange-400 ">Have a look at</p>
                <h3 className=" md:text-3xl text-orange-400 font-bold mb-4 md:mb-12">Our Store</h3>
                <a href={'https://www.topflightthreads.com/above-all-else' } target='_blank' rel="noreferrer">
                    <IconButton />
                </a>
            </div>
        </div>
    )

}

export default StoreSection;