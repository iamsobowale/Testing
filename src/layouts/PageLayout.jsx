import { useState } from "react";
import { HeaderContainer, SideNav } from "../containers";

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
            </div>
        </div>
    )


}

export default PageLayout;