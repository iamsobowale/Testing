const Product = ({ image }) => {
    return (
        <div>
            <div className="product-image w-52 md:w-72 m-5">
                <div className="w-full h-8 border border-gray-500 rounded-t-md border-b-0"></div>
                <img src={image} alt="product" />
                
                <div style={{
                    background: 'linear-gradient(129deg, rgba(204,133,17,1) 0%, rgba(231,195,64,1) 100%)',
                }} className="w-full h-12 border border-gray-500 rounded-b-md  border-t-0">

                  
                    <div style={{
                        borderRadius: '0% 100% 100% 0% / 100% 0% 100% 0% '
                    }} className=" w-full h-[102%] -mt-1 bg-white ">

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Product;