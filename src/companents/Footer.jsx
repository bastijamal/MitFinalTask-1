import 'bootstrap/dist/css/bootstrap.min.css'
import '/public/css/Footer.css';
import React from 'react'

// //font awasone from cdnjs
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';


const Footer = () => {
    return (
        <div id='footer'>
            <div className="footer  wrapper">

                <div className="footer-top">

                    <div className="footer-left">
                        <h5>Need Help</h5>
                        <a href="">Contact</a>
                        <a href="">Help Service</a>
                        <img src="./public/images/mushtxidmeti.png" alt="" width='40px' />
                        <a href="tel:+994553745729"><FontAwesomeIcon icon={faPhone} />012-265-45-65</a>

                    </div>

                    <div className="footer-middle">
                        <h5>Online Services</h5>
                        <a href="">Payment Methods</a>
                        <a href="">Shipping Options</a>
                        <a href="">My Account</a>
                        <a href="">Care&Services</a>
                        <a href="">FAQ</a>

                    </div>

                    <div className="footer-right">
                        <h5>Contact</h5>

                        <div className="footer-right-icons">
                            <img src="./public/images/tiktok.svg" alt="" />
                            <img src="./public/images/instagram.svg" alt="" />
                            <img src="./public/images/snapchat.svg" alt="" />
                            <img src="./public/images/twitter.svg" alt="" />
                        </div>

                        <div>
                            <a href="mailto:bastijamal@mail.ru"><FontAwesomeIcon icon={faEnvelopeOpen} />bastijamal@mail.ru </a>
                        </div>

                        <a href="tel:+994553745729"><FontAwesomeIcon icon={faPhone} />  055-374-57-29</a>

                    </div>
                </div>

                <div className="footer-bottom ">
                <p>&copy; 2024 Bütün hüquqlar qorunur</p>

                <div className="qaydalar-tehlukesizlik">
                <a href="">Qaydalar və Şərtlər</a>
                <a href="">Gizlilik və təhlükəsizlik</a>
                </div>
              
                </div>


            </div>

        </div>


    )
}

export default Footer