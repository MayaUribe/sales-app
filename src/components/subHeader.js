import React, { Component } from 'react';
import {FaChevronLeft, FaHome} from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

class SubHeader extends Component {

  render() {
    let classes = "container product-header";

    return (
      <section className="bg-project" id="project">
        <div className="row">
          <div className={classes}>
            <h2 className="project-title">
              {this.props.isHome ?
                <FaHome className="app-icon" />
              :
                <NavLink to='/'>
                  <FaChevronLeft className="app-icon" />
                </NavLink>
              }
              <span>{this.props.title || ""}</span>
            </h2>
          </div>
        </div>
      </section>
    );
  }
}

export default SubHeader;
