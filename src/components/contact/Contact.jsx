import './contact.css'
import Phone from '../../../public/images/phone.png'
import Email from '../../../public/images/email.png'
import Address from '../../../public/images/address.png'
import { useContext, useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import { ThemeContext } from '../../ThemeContext'

function Contact() {
    const formRef = useRef()
    const [done, setDone] = useState(false)
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode
    const handleSubmit = (e) => {
        e.preventDefault()
        emailjs
            .sendForm('service_x3uuc7b', 'template_jnizkoy', formRef.current, {
                publicKey: 'Ayl-CCg4Pgh5plRji',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    setDone(true)
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );

    }
    return (
        <div className="c">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">Let's disscuss the project</h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img
                                src={Phone}
                                alt=""
                                className="c-icon"
                            />
                            +91-9597585393
                        </div>
                        <div className="c-info-item">
                            <img
                                src={Email}
                                alt=""
                                className="c-icon"
                            />
                            priyaarasu12@gmail.com
                        </div>
                        <div className="c-info-item">
                            <img
                                src={Address}
                                alt=""
                                className="c-icon"
                            />
                            Hosur, Tamilnadu
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b>What's your story?</b> Get in touch. I'm always available to join work if the right job option comes along. Me.
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit} >
                        <input style={{ backgroundColor: darkMode && "#333", color: "white" }} type="text" placeholder='Name' name='from_name' />
                        <input style={{ backgroundColor: darkMode && "#333", color: "white" }} type="text" placeholder='Subject' name='user_subject' />
                        <input style={{ backgroundColor: darkMode && "#333", color: "white" }} type="text" placeholder='Email' name='user_email' />
                        <textarea style={{ backgroundColor: darkMode && "#333", color: "white" }} rows="5" placeholder='Message' name='message' />
                        <button>Submit</button>
                        {done && "Thank You....."}
                    </form>
                </div>
            </div>
        </div >
    )
}

export default Contact