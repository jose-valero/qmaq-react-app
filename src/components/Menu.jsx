import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../assets/img/qmaq2.svg';
import '../assets/styles/menu.css';

const Menu = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark mt-3 mb-5 mx-0 shadow   rounded">
      <Link className="navbar-brand" to="/">
        <img className="menu__logo" src={Logo} alt=""></img>
      </Link>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <NavLink className="nav-link" to="/adjuntar">
              <span className="link__name">Adjuntar Archivo</span>
            </NavLink>
          </li>
          <li className="nav-item active">
            <NavLink className="nav-link " to="/tablas">
              <span className="link__name">Visualizar Tabla</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Menu;
