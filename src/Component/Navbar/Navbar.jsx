import React from 'react'
import { Link } from 'react-router-dom'
import style from './Navbar.module.css'
export default function Navbar() {
  return (
    <div>
     <nav className="navbar navbar-expand-lg bg-white">
  <div className="container">
    <Link className={ `${style.brand} navbar-brand` } to='product'>Ecommerce</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link  className={ `${style.brand} nav-link active `} aria-current="page" to='product'>Home</Link>
        </li>

      <li className="nav-item">
          <Link  className={ `${style.brand} nav-link  `} aria-current="page" to='product'>Category</Link>
        </li>

        <li className="nav-item">
          <Link  className={ `${style.brand} nav-link  `} aria-current="page" to='product'>Cart</Link>
        </li>

    
        
       
      </ul>
      
    </div>
  </div>
</nav>

    </div>
  )
}
