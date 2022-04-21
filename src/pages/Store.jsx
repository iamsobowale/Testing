import { ProductContainer } from "../containers";
import { PageLayout } from "../layouts";
const Store = () => {
    return (
        <PageLayout>
            <div className=" mt-4 p-4">
                <h1 className="text-center  text-orange-600 mb-4 font-extrabold text-xl md:text-4xl">STORE</h1>
                <p className=" text-lg text-center leading-7 "> Check out some of our apparel on our shops below: </p>
            </div>
          <ProductContainer/>
        </PageLayout>
    )
}

export default Store;