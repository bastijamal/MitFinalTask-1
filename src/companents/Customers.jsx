import 'bootstrap/dist/css/bootstrap.min.css';
import '/public/css/Customers.css';
import React from 'react';

const Customers = () => {
  return (
    <div className="container p-5">
      <div className="row clients">
        <h1 className='text-muted text-center p-5'>Our Clients Reviews</h1>

        <div className="col-md-4 col-sm-6 col-12 mb-4">
          <div className="card mb-3">
            <div className="row g-0">
              <div className="col-md-4 photo text-center">
                <img src="./public/images/fatime.jpeg" alt="Rukush Azadaliyeva" />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Fatime Camalova</h5>
                  <h6 className="card-subtitle mb-2 text-muted">Product Manager</h6>
                  <p className="card-text">Heyy! That's crazy</p>
                  <div className="rating">
                    <span className="text-warning">&#9733;</span>
                    <span className="text-warning">&#9733;</span>
                    <span className="text-warning">&#9733;</span>
                    <span className="text-warning">&#9733;</span>
                    <span className="text-muted">&#9733;</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4 col-sm-6 col-12 mb-4">
          <div className="card mb-3">
            <div className="row g-0">
              <div className="col-md-4 photo text-center">
                <img src="./public/images/gulshen.jpeg" alt="Rukush Azadaliyeva" />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Gulshen Nagiyeva</h5>
                  <h6 className="card-subtitle mb-2 text-muted">Translator</h6>
                  <p className="card-text">Heyy! That's crazy</p>
                  <div className="rating">
                    <span className="text-warning">&#9733;</span>
                    <span className="text-warning">&#9733;</span>
                    <span className="text-warning">&#9733;</span>
                    <span className="text-warning">&#9733;</span>
                    <span className="text-muted">&#9733;</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4 col-sm-6 col-12 mb-4">
          <div className="card mb-3">
            <div className="row g-0">
              <div className="col-md-4 photo text-center">
                <img src="./public/images/besti.jpeg" alt="Basti Jamal" className='besti'/>
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Basti Jamal</h5>
                  <h6 className="card-subtitle mb-2 text-muted">IT</h6>
                  <p className="card-text">Blossom</p>
                  <div className="rating">
                    <span className="text-warning">&#9733;</span>
                    <span className="text-warning">&#9733;</span>
                    <span className="text-warning">&#9733;</span>
                    <span className="text-warning">&#9733;</span>
                    <span className="text-muted">&#9733;</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4 col-sm-6 col-12 mb-4">
          <div className="card mb-3">
            <div className="row g-0">
              <div className="col-md-4 photo text-center">
                <img src="./public/images/rukush.jpeg" alt="Basti Jamal" className='besti'/>
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Ruhiyya Azad</h5>
                  <h6 className="card-subtitle mb-2 text-muted">Translator</h6>
                  <p className="card-text">Not Bad</p>
                  <div className="rating">
                    <span className="text-warning">&#9733;</span>
                    <span className="text-warning">&#9733;</span>
                    <span className="text-warning">&#9733;</span>
                    <span className="text-warning">&#9733;</span>
                    <span className="text-muted">&#9733;</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4 col-sm-6 col-12 mb-4">
          <div className="card mb-3">
            <div className="row g-0">
              <div className="col-md-4 photo text-center">
                <img src="./public/images/gulnare.jpeg" alt="Basti Jamal" className='besti'/>
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Gulnare Camalova</h5>
                  <h6 className="card-subtitle mb-2 text-muted">Psychology</h6>
                  <p className="card-text">Bad!</p>
                  <div className="rating">
                    <span className="text-warning">&#9733;</span>
                    <span className="text-warning">&#9733;</span>
                    <span className="text-warning">&#9733;</span>
                    <span className="text-warning">&#9733;</span>
                    <span className="text-muted">&#9733;</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Customers;
