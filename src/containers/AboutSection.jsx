import {Link} from 'react-router-dom'
import { Button } from "../components"

const AboutSection = () =>{
    return (
        <div className="bg-orange-500 p-4 py-12 md:py-32 md:px-32 text-white flex flex-col md:flex-row items-center md:justify-between">
            <h1 className="text-xl md:text-3xl font-bold hidden md:block">Get to know more About Us</h1>
            <h1 className="font-bold text-xl md:hidden">Get to know more </h1>
            <h1 className="font-bold text-xl md:hidden">About us</h1>
            <Link to='/about' className="mt-6 md:mt-0">
                <Button text='ABOUT US' size="sm" classes='text-gray-900' />
            </Link>
        </div>
    )
}


export default AboutSection