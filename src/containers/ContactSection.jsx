import ContactForm from "./ContactForm"

const ContactSection = () => {

    return (
        <div className="p-4 px-8 md:max-w-lg md:mx-auto md:py-12">
            <h1 className=" text-2xl md:text-4xl mb-2 md:mb-2">Let's Talk!</h1>
            <p className="text-gray-400 text-sm md:text-lg mb-4">Please leave a message</p>
            <ContactForm />
        </div>
    )

}

export default ContactSection