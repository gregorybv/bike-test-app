import React from "react"
import "./header.scss"
import logo from "../../assets/logo.svg"

const Header = () => {
  return (
    <header className='header'>
      <div className='container'>
        <div className='header__inner'>
          <a href='index.html' className='header__logo'>
            <img src={logo} alt='img' className='logo__img img' />
          </a>
          <nav className='menu'>
            <ul className='menu__list'>
              <li className='menu__item'>
                <a href='#' className='menu__link'>
                  About
                </a>
              </li>
              <li className='menu__item'>
                <a href='#' className='menu__link'>
                  Shop
                </a>
              </li>
              <li className='menu__item'>
                <a href='#' className='menu__link'>
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          <nav className='menu-user'>
            <ul className='menu-user__list'>
              <li className='menu-user__item'>
                <a href='' className='menu-user__link'></a>
              </li>
              <li className='menu-user__item'>
                <a href='' className='menu-user__link'></a>
              </li>
              <li className='menu-user__item'>
                <a href='' className='menu-user__link'></a>
              </li>
            </ul>
          </nav>
          <div className='header__burger'>
            <span></span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
