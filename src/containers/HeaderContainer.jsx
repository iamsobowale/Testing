import { Link } from 'react-router-dom'
import { HiMenuAlt2 } from 'react-icons/hi'
import { SiDiscord } from 'react-icons/si'
import logo from '../assets/images/logo.png';

const HeaderContainer = ({ setNavBar }) => {

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

        <div style={{
            boxShadow: 'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px'
        }} className='flex max-h-20 w-full justify-between lg:px-12'>
            <div className=' w-20 ' >
                <img src={logo} alt="Logo" className='h-full' />
            </div>

            <div className='flex md:hidden items-center' onClick={() => setNavBar(true)}>
                <HiMenuAlt2 size={36} />
            </div>

            <div className='hidden md:flex items-center  w-1/2 justify-end pr-6 '>
                <div className='flex flex-1 gap-6'>
                    {headLinks.map((headLink, index) => <Link to={headLink.link} key={index} className=' text-lg font-semibold text-orange-400 hover:text-orange-500 cursor-pointer'>{headLink.title}</Link>)}
                </div>
                {/* <Button text='GET IN TOUCH' size='xs' bgcolor='orange-500' color='white' /> */}
                <div className=' text-sm flex justify-center'>
                    <a href="https://discord.com/invite/5KzuKgayP5" className='flex items-center gap-2' target="_blank" rel="noopener noreferrer">
                        <h1 className=' border-b-2 border-black'>Join Our Discord</h1>
                        <SiDiscord />
                    </a>
                </div>
            </div>
        </div>



    )

}

export default HeaderContainer;