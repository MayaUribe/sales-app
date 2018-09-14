import React, { Component } from 'react';
import { FaChevronUp } from 'react-icons/fa';
import $ from 'jquery';

class Footer extends Component {
  handleUpClick() {
    $('body,html').animate({
      scrollTop : 0
    }, 500);
  }

  _renderFooter() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <ul className="list-inline quicklinks">
              <li className="list-inline-item">
                mail@gmail.com
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }

  render() {
    return (
      <footer id="footer">
        <a href="javascript:" id="return-to-top" onClick={this.handleUpClick.bind(this)}>
          <FaChevronUp className="chevron-up" />
        </a>
      </footer>
    );
  }
}

export default Footer;
