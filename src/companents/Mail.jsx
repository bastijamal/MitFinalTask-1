import 'bootstrap/dist/css/bootstrap.min.css';
import '/public/css/Mail.css';
import React from 'react';
import {useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';



const Mail = () => {
// // third Party API integration
    const myform =useRef();

    const sendEmail = (e) => {
        // burada e-tesdiqleme hadisesidir-(event)
        e.preventDefault();
    
        emailjs
          .sendForm('service_bh4ujyo', 'template_00e3if8', myform.current, {
            publicKey: 'ZvZQ-5P-UK4HhSrWZ',
          })
          .then(
            () => {
                myform.current.reset()
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };



    return (
        <div className="mail d-flex justify-content-center align-items-center" id='mail'>

            <form ref={myform} onSubmit={sendEmail} className='form '>
                <div className="form-group ">
                    <label className=' label-text text-center p-4' >Subscribe to our new channel to keep up with the latest news.</label>
                    <input  className="form-control input m-4 mx-auto text-center p-3" name='name' placeholder="Your Fullname"/>
                    <input  className="form-control input m-4 mx-auto text-center p-3" name='message' placeholder="Your Message"/>
                    <input  className="form-control input m-4 mx-auto text-center p-3" name='email' placeholder="Enter email"/>
                    
                </div>
                <button type="submit" className="btn btn-secondary mt-4 p-2">Send</button>
            </form>
        </div>
    );
}

export default Mail;
