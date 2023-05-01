import React from 'react'
import "./Navbar.css"
export default function Navbar() {
  return (
<>

<nav className="navbar navbar-expand-lg navbar-light bg-black">
                    <div className="container-fluid">
                        <img src="./images/netflix-logo-2.jpg" id='navbar-img' alt="" />
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <div id='nav-alighn'>
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li  className="nav-item">
                                    <a style={{color:"white"}} className="nav-link active" aria-current="page" href="/">
                                        Home
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a style={{color:"white"}} className="nav-link" href="#">
                                        Movies
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a style={{color:"white"}} className="nav-link" href="#">
                                        Series
                                    </a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a style={{color:"white"}} 
                                        className="nav-link dropdown-toggle"
                                        href="#"
                                        id="navbarDropdown"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        My List
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li>
                                            <a style={{color:"white"}} className="dropdown-item" href="#">
                                                Action
                                            </a>
                                        </li>
                                        <li>
                                            <a style={{color:"white"}} className="dropdown-item" href="#">
                                                Another action
                                            </a>
                                        </li>
                                        <li>
                                            <hr className="dropdown-divider" />
                                        </li>
                                        <li>
                                            <a style={{color:"white"}} className="dropdown-item" href="#">
                                                Something else here
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                              
                            </ul>
                            </div>
                          
                            <form className="d-flex">
                                <input
                                    className="form-control me-2"
                                    type="search"
                                    placeholder="Search"
                                    aria-label="Search"
                                />
                                <button className="btn btn-outline-success" type="submit">
                                    Search
                                </button>
                            </form>
                        </div>
                    </div>
                </nav>
</> 
 )
}
