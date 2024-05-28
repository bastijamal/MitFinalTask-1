import 'bootstrap/dist/css/bootstrap.min.css'
import '/public/css/Section.css';
import React from 'react'

//

const Section = () => {
  return (

    <div className="rhode-intro container">
      <div className="rhode-left">
        <h3 className='text-muted '>A NOTE FROM OUR FOUNDER </h3>
        <p>My journey towards healthier skin inspired me to develop products that really work,
          in a way that’s accessible to everyone. Rhode is dedicated to making products based
          in science and great formulation, simplifying many of the mysteries and complex narratives behind
          efficacious skincare. I hope these will become your go-to essentials that can live in your bathroom,
          be your favorite travel companion, improve your skin over time, and keep your skin happy and hydrated.
        </p>
        <img src="./public/images/imza.png" alt="" />
      </div>

      <div className="rhode-right">
        <img src="./public/images/hailey.webp" alt="" />
      </div>

    </div>


  );
}

export default Section