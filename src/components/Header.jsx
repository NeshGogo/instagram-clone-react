import React from 'react';
import '../assets/styles/components/Header.scss';
import logo from '../assets/static/logo.png';
import userIcon from '../assets/static/user-account.png';
import SearchBox from './SearchBox';


const Header =  () => {
  return (
    <header className="header">
      <div className="header__hero">
        <img src={logo} alt="Logo de instagram" />
      </div>
      <SearchBox />
      <div className="header__access">
        <a className="header__access--home" href="./home.html">
          <svg fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px">
            <path
              fill="none"
              stroke="#000000"
              strokeMiterlimit="10"
              strokeWidth="2"
              d="M19,11v9h-5v-6h-4v6H5v-9H3.606L12,3.445L20.394,11H19z" />
          </svg>
        </a>
        <div className="header__access__user">
          <div>
            <div className="header__access__user--image">
              <img id="headerUserImage" src={userIcon} alt="imagen del perfil del usuario" />
            </div>
            <p id="headerUserFullname"></p>
          </div>
          <ul>
            <li><a href="./profile.html">Perfil</a></li>
            <li><a id="changePassword">Cambiar contraseña</a></li>
            <li><a id="signOut">Cerrar sesion</a></li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;