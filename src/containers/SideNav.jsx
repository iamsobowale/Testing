import { Link } from 'react-router-dom'
import { AiOutlineClose } from 'react-icons/ai'
import { SiDiscord } from 'react-icons/si'

const SideNav = ({ isOpen, setIsOpen }) => {

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
        <div className={`side-nav fixed z-50 w-full h-screen bg-white ${isOpen ? 'block' : 'hidden'}`}>
            <div className=' flex justify-end p-8'>
                <AiOutlineClose size={40} onClick={() => setIsOpen(false)} />
            </div>
            <div className=' flex flex-col items-center h-full justify-around pb-48'>

                {headLinks.map((headLink, index) => <Link to={headLink.link} key={index} className=' text-4xl font-semibold cursor-pointer'>{headLink.title}</Link>)}

                <div className=' text-md flex justify-center'>
                    <a href="https://discord.com/invite/5KzuKgayP5" className='flex items-center gap-2' target="_blank" rel="noopener noreferrer">
                        <h1 className=' border-b-2 border-black'>Join Our Discord</h1>
                        <SiDiscord />
                    </a>
                </div>

            </div>

        </div>
    )

}

export default SideNav;