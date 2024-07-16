import React from 'react';
// import { IoIosSend } from "react-icons/io";
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import Swal from 'sweetalert2';

function Store() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm("service_6zexxq8", "template_tbzbxcv", form.current, {
                publicKey: "-Izbfca9W5Y6u37xP",
            })
            .then(() => {
                    Swal.fire({
                        title: "Thank You For Contacting ",
                        text: "Your Message Received Successfully",
                        icon: "success",
                    });
                    e.target.reset();
                }
            )
            .catch((error) => {
                Swal.fire({
                    title: "Error",
                    text: "Something went wrong. Please try again later.",
                    icon: "error",
                });
            })
    };

    return (
        <>
            <section className='luminae-store'>
                <div className="container">
                    <div className="content text-center p-4 rounded-3 text-white">
                        <h3 className='fw-bolder'>Luminae <span className='text-light'> Store </span></h3>
                        <p className='fs-5'>Register your email not to miss the last minutes off+ Free delivery</p>
                        <form ref={form} onSubmit={sendEmail}>
                            <div className="input-group p-2 bg-white rounded-2 align-items-center px-5">
                                <input type="email" name="from_email" id="" placeholder=' Enter Your email' className='border-0 form-control' />
                                <button type='submit' className=' bg-transparent border-0' >
                                    Send
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Store;