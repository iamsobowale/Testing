import { BsArrowRightShort } from 'react-icons/bs';

const ProductCard = ({ name, image }) => {
    return (
        <div className='border border-orange-500 border-t-0 rounded-lg w-72 flex flex-col items-center p-4'>
            <div className='flex-1 flex justify-center items-center'>
                <img src={image} alt={name} />
            </div>
            <div className='flex flex-col items-center gap-4'>
                <h3 className='font-bold text-lg'>{name}</h3>
                <a href='https://www.topflightthreads.com/above-all-else' target='_blank' rel="noreferrer" style={{
                    boxShadow: 'rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px'
                }} className='bg-orange-500 tracking-wider text-white flex items-center justify-center p-1 px-2 gap-2 rounded-md text-sm w-full'>
                    View Details
                    <BsArrowRightShort size={26} />
                </a>
            </div>
        </div>
    )

}

export default ProductCard;