import React from 'react'
import '/public/css/Navbar.css';


const Navbar = () => {
  return (
    <nav className="navbar navosh navbar-expand-lg navbar-light ">
  <div className=" icon container">
    <img src="/public/images/icon.png" alt="" width="130px" height="110px" to="#"/>
    <a className="navbar-brand  text-secondary" href="#">GlamourShop</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
        <li className="nav-item ">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="#">About Us</a>
        </li>

        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Sale</a></li>
            <li><a className="dropdown-item" href="#">Best Sellers</a></li>
            <li><hr className="dropdown-divider"></hr></li>
            <li><a className="dropdown-item" href="#">Favourite</a></li>
          </ul>
        </li>
      </ul>
      {/* <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" />
        <button className="btn btn-outline-success p-2" type="submit">Search</button>
      </form> */}
    </div>
  </div>
</nav>

  )
}

export default Navbar