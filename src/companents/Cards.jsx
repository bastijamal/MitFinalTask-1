import 'bootstrap/dist/css/bootstrap.min.css';
import '/public/css/Cards.css';
import React from 'react';

//elave
import { Link } from 'react-router-dom';


const Cards = () => {
  return (
    <div className="container main" id='paradise'>
      {/* Header */}
      <header className="py-5 text-center">
        <h1>Make Up Paradise</h1>
        <p className="lead">Show your beauty!</p>
      </header>

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light mb-5">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Make up World</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" >
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#mail" >Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Products */}
      <section className="row py-5">
        <div className="col-md-4 col-12 mb-5">
          <div className="card">
            <img src="./public/images/dior.webp" className="card-img-top img-fluid" alt="Gloss" />
            <div className="card-body">
              <h5 className="card-title">Dior</h5>
              <p className="card-text">Lip Gloss</p>
              <a href="#" className="btn btn-secondary">Details</a>
            </div>
          </div>
        </div>

        <div className="col-md-4 col-12 mb-5">
          <div className="card">
            <img src="./public/images/chanel.webp" className="card-img-top img-fluid" alt="Gloss" />
            <div className="card-body">
              <h5 className="card-title">Chanel</h5>
              <p className="card-text">Blush</p>
              <a href="#" className="btn btn-secondary">Details</a>
            </div>
          </div>
        </div>

        <div className="col-md-4 col-12 mb-5">
          <div className="card">
            <img src="./public/images/shiseido.webp" className="card-img-top img-fluid" alt="Gloss" />
            <div className="card-body">
              <h5 className="card-title">Shiseido</h5>
              <p className="card-text">Face Cream</p>
              <a href="#" className="btn btn-secondary">Details</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cards;
