import { InputField, TextArea } from "../components";

const ContactForm = () => {

    return (
        <div>
            <form method="POST" name="contact_form" id="contact_form" className="text-center">
            <input type="hidden" name="form-name" value="contact_form" />
                <InputField name='fullname' placeholder='Full Name' />
                <InputField name='email' placeholder='Email' />
                <InputField name='country' placeholder='Country' />
                <InputField name='city' placeholder='City' />
                <TextArea name='message' placeholder="Your Message"/>
                <button type="submit" className="mt-4 bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-8 rounded-full"> Send Message </button>
            </form>
        </div>
    )

}

export default ContactForm;