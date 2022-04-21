import { BsArrowRightShort } from 'react-icons/bs';

const IconButton = () => {

    return (
        <button style={{
            boxShadow: 'rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px'
        }} className='bg-green-500 tracking-wider text-white flex items-center  justify-around p-1 px-2 gap-2 rounded-md text-sm md:text-base'>
            View Store
            <BsArrowRightShort size={26} />
        </button>
    );

}


export default IconButton;