import React from 'react'
import Link from "../../utils/ActiveLink";

function NavbarInner({
  classOne,
  products,
  handleSearchForm,
  searchForm,
  toggleModal,
}) {
  return (
    <div className={classOne} id="navbarSupportedContent">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link href="/" activeClassName="active">
            <a className="nav-link">Home</a>
          </Link>
        </li>

        <li className="nav-item">
          <Link href="/about">
            <a className="nav-link">About</a>
          </Link>
        </li>

        <li className="nav-item">
          <Link href="/services" activeClassName="active">
            <a className="nav-link">Services</a>
          </Link>
        </li>

        <li className="nav-item">
          <Link href="/projects">
            <a className="nav-link">Portfolio</a>
          </Link>
        </li>

        <li className="nav-item">
          <Link href="/contact" activeClassName="active">
            <a className="nav-link">Contact</a>
          </Link>
        </li>
      </ul>

      <div className="others-options">
        

        <div className="burger-menu" onClick={toggleModal}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
}

export default NavbarInner
