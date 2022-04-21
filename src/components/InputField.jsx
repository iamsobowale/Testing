const InputField = ({ type = 'text', name, placeholder }) => {

    return (
        <div className="mb-4">
            {/* <label htmlFor={name}>{placeholder}</label> */}
            <input type={type} id={name} name={name} placeholder={placeholder} className="bg-white rounded-md px-6 py-2 border w-full outline-none text-sm md:text-base" />
        </div>
    )


}

export default InputField;