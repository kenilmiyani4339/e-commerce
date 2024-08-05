import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {


  const logout = () => {
    localStorage.removeItem("user")
  }

  const data = localStorage.getItem("user")
 

  return (



    <div>


      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">DEPORT ADMIN</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav justify-content-center flex-grow-1 pe-3">
              <li className="nav-item">
                <Link to={"/"} className="nav-link active mx-4" aria-current="page" >Show-Item</Link>
              </li>
              <li className="nav-item">
                <Link to={"/additem"} className="nav-link active mx-4" aria-current="page" >Add-Item</Link>
              </li>
              <li className="nav-item">
                <Link to={"/updateitem"} className="nav-link active mx-4" >Update-Item</Link>
              </li>

            </ul>
            {
              data ?
                <Link to={"/login"} >
                  <button type="button" className="w-100 px-4 py-2" onClick={logout}>logout</button>
                </Link> : null
            }

          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
