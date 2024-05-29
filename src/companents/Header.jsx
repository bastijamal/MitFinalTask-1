import 'bootstrap/dist/css/bootstrap.min.css'
import '/public/css/Header.css';
import React from 'react'


const Header = () => {
    return (
        <div>
            <div className=" header container">

                <div className="header-left">
                    <img src="/public/images/charlot.png" alt="" width='600px'  />

                </div>

                <div className="header-right ">

                    <h4 className='text-muted'>One of everything really good</h4>
                    <p className='text-secondary'>Charlotte Tilbury is currently the world’s fastest growing beauty brand. With 130+ awards to date, record-breaking Charlotte Tilbury has revolutionised the face of a global industry through de-codifying makeup magic for every woman at every age with an easy-to-use, easy-to-choose, easy-to-gift range with Charlotte’s ten signature looks reworked for Asia.</p>
                </div>


            </div>
        </div>



    )
}

export default Header