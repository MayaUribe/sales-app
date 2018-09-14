import React, { Component } from 'react';
import { FaChevronLeft } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

class SubHeader extends Component {

  render() {
    return (
      <section className="bg-project" id="project">
        <div className="row">
          <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 text-right back-button">
            <NavLink to='/'>
              <FaChevronLeft />
            </NavLink>
          </div>
          <div className="col-lg-10 col-md-10 col-sm-10 col-xs-10 product-header">
            <h2 className="project-title">{this.props.title || ""}</h2>
          </div>
        </div>
      </section>
    );
  }
}

export default SubHeader;
