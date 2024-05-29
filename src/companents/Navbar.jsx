import React, { useRef, useState } from 'react';
import { IoMdClose } from "react-icons/io";
import { Link } from 'react-router-dom';
import '/public/css/Navbar.css';

const Navbar = () => {
  const [isShippingVisible, setIsShippingVisible] = useState(true); 
  const blackMenu = useRef();

  const handleShippingClose = () => {
    setIsShippingVisible(false); 
  };

  const openMenu = () => {
    blackMenu.current.classList.add("aktiv");
  };

  const closeMenu = () => {
    blackMenu.current.classList.remove("aktiv");
  };

  const closeMenuOnClick = () => {
    if (blackMenu.current.classList.contains("aktiv")) {
      closeMenu();
    }
  };

  return (
    <>
      {isShippingVisible && ( 
        <p className='text-center shipping'>
          Free worldwide shipping for orders over $55. Shop now 
          <button className='close' onClick={handleShippingClose}>X</button>
        </p>
      )}

      <div className="mobile-menu position-fixed" ref={blackMenu}>
        <IoMdClose className='close-icon' onClick={closeMenu} />
        <nav className="mobile-links">
          <Link to="/" className="nav-link fw-medium" onClick={closeMenuOnClick}>Home</Link>
          <Link to="/customers" className="nav-link fw-medium" onClick={closeMenuOnClick}>Clients</Link>
          <Link to="/swiper" className="nav-link fw-medium" onClick={closeMenuOnClick}>Products</Link>
          <Link to="/cards" className="nav-link fw-medium" onClick={closeMenuOnClick}>Paradise</Link>
          <Link to="/mail" className="nav-link fw-medium" onClick={closeMenuOnClick}>Contact</Link>
        </nav>
      </div>



      <nav className="navbar navbar-expand-lg navbar-light container">
        <div className="container-fluid">
          <img src="/public/images/icon.png" alt="Icon" width='130px' height='150px'/>
          <Link className="navbar-brand text-secondary ps-5" to="/">GlamourShop</Link>
          <button className="navbar-toggler" type="button" aria-label="Toggle navigation" onClick={openMenu}>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/section">About us</Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><Link className="dropdown-item" to="/customers">Clients</Link></li>
                  <li><Link className="dropdown-item" to="/swiper">Products</Link></li>
                  <li><hr className="dropdown-divider"/></li>
                  <li><Link className="dropdown-item" to="/cards">Paradise</Link></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
