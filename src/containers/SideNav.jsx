import { Link } from 'react-router-dom'
import {AiOutlineClose} from 'react-icons/ai'

const SideNav = ({isOpen, setIsOpen}) => {

    const headLinks = [
        {
            title: 'Home',
            link: '/'
        },
        {
            title: 'Team',
            link: '/team'
        },
        {
            title: 'Store',
            link: '/store'
        },
        {
            title: 'About Us',
            link: '/about'
        },

    ]

    return (
        <div className={`side-nav fixed z-50 w-full h-screen bg-white ${isOpen? 'block': 'hidden'}`}>
            <div className=' flex justify-end p-8'>
               <AiOutlineClose size={40} onClick={() => setIsOpen(false)}/>
            </div>
            <div className=' flex flex-col items-center h-full justify-around pb-48'>

                {headLinks.map((headLink, index) => <Link to={headLink.link} key={index} className=' text-4xl font-semibold cursor-pointer'>{headLink.title}</Link>)}

            </div>
        </div>
    )

}

export default SideNav;