import { useState } from "react";
import { HeaderContainer, SideNav } from "../containers";
import { SiDiscord } from 'react-icons/si'

const PageLayout = ({ children }) => {

    const [isSideNavOpen, setIsSideNavOpen] = useState(false);

    return (
        <div className="flex flex-col relative">
            <HeaderContainer setNavBar={setIsSideNavOpen} />
            <SideNav isOpen={isSideNavOpen} setIsOpen={setIsSideNavOpen} />
            <div>
                {children}
            </div>
            <div className=" py-4 mt-8 border-t border-t-gray-200">
                <p className=" text-sm md:hidden text-center">Copyright 2022 <br />©Above All Else   <br />All rights reserved.</p>
                <p className=" text-sm hidden md:block  text-center">Copyright 2022 ©Above All Else  All rights reserved.</p>

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

export default PageLayout;