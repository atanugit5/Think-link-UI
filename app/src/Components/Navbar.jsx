import React from 'react'
import style from "../Styles/Navbar.module.css"

const Navbar = () => {
  return (
    <div className={style.navbar}>
        <p>CORKOWL</p>
        <div className={style.searchDiv}><i className="fa fa-search" aria-hidden="true"></i>
        <input type="text" placeholder='Search wines, customers here...' />
        </div>
        <div className={style.profileDiv}>
        <i className="fa fa-bell-o" aria-hidden="true"></i>
        <p>Nicholas D.</p>
        <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="" />
        <i className="fa fa-angle-down" aria-hidden="true"></i>
        </div>
    </div>
  )
}

export default Navbar