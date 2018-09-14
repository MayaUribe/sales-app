import React, { Component } from 'react';
import { FaBars } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { Link } from "react-router-dom";

class HeaderMenu extends Component {

  _renderMenuPages() {
    return (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link js-scroll-trigger" to='/'>Home</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link js-scroll-trigger" href="#contact">Contacto</a>
        </li>
      </ul>
    );
  }

  render() {
    let currentRouteName = "";

    let classes = "navbar navbar-expand-lg navbar-dark fixed-top";
    classes = (currentRouteName.indexOf('project') !== -1) ? classes + " navbar-shrink" : classes;

    return (
      <nav className={classes} id="mainNav">
        <div className="container">
          <NavLink className="navbar-brand js-scroll-trigger" to="/product/1" exact activeClassName="selected">
            Venta de Garage
          </NavLink>

          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            Menu
            <FaBars className="icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            {this._renderMenuPages()}
          </div>
        </div>
      </nav>
    );
  }
}

export default HeaderMenu;
