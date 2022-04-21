const Button = ({text, classes='', size='base', bgcolor='white', color='black'}) => {

    return(
        <button style={{boxShadow : '0px 100px 80px rgba(49, 49, 49, 0.1), 0px 64.8148px 46.8519px rgba(49, 49, 49, 0.0759259), 0px 38.5185px 25.4815px rgba(49, 49, 49, 0.0607407), 0px 20px 13px rgba(49, 49, 49, 0.05), 0px 8.14815px 6.51852px rgba(49, 49, 49, 0.0392593), 0px 1.85185px 3.14815px rgba(49, 49, 49, 0.0240741)'}} className={`bg-${bgcolor} rounded-md px-6 py-2  text-${size} whitespace-nowrap font-medium text-${color} ${classes}`}>
            {text}
        </button>
    )

}

export default Button;