const TextArea = ({placeholder, name}) => {

    return (
        <div>
            <textarea placeholder={placeholder} name={name} id={name} rows={5} className='className="bg-white rounded-md px-6 py-2 border w-full outline-none text-sm md:text-base'>

            </textarea>
        </div>
    )

}

export default TextArea;