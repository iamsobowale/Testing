import bg1 from '../assets/images/bg1.png'
import { Button } from "../components";

const CtaContainer = () => {

    return (
        <div className="h-[75vh] flex flex-col">
            <div style={{ backgroundImage: `url(${bg1})` }} className='flex justify-center md:justify-start flex-1 bg-cover relative'>

                <div style={{ background: 'linear-gradient(253.58deg, rgb(255 192 0 / 29%) 1.55%, rgb(255, 138, 0) 95.8%)' }} className=" w-full h-full overlay absolute"></div>

                <div className="absolute flex flex-col items-center md:items-start h-full justify-center gap-8 text-white md:pl-32" >
                    <div className=" text-center md:text-left">
                        <h1 className="text-4xl md:text-5xl font-bold leading-10 md:mb-4">WELCOME TO</h1>
                        <h1 className="text-4xl md:text-5xl font-bold leading-10">ABOVE ALL ELSE</h1>
                    </div>
                    <div className=" text-center">
                        <p>Explore the Game World With a Free Mind</p>
                    </div>
                    <Button text="VIEW STORE" size="sm" classes='text-gray-900' />
                </div>

            </div>
        </div >
    )

}


export default CtaContainer;