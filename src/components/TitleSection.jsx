const TitleSection = ({title, caption}) =>{

    

    return (
        <div className="w-full py-20 md:py-24 px-8 md:px-32 bg-orange-400 text-white">
            <h1 className=" text-2xl md:text-4xl uppercase font-extrabold mb-8">{title}</h1>
            <p className=" font-bold">{caption}</p>

        </div>
    )

}

export default TitleSection