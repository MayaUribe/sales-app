import React, { Component } from 'react';
import HeaderMenu from "./headerMenu";
import $ from 'jquery';

class Header extends Component {
  _handleGoToBottom() {
    $("html, body").animate({
      scrollTop: $(document).height()
    }, 1000);
  }

  _renderHeaderIntro() {
    return (
      <header className="masthead">
        <div className="container">
          <div className="intro-text">
            <div className="intro-heading">I'm a Software Developer</div>
            <div className="intro-lead-in">Passionate developer • Frontend specialist • Curious about new technologies • Multicultural experience • Worldwide teams</div>
            <a className="btn btn-xl btn-md btn-xs js-scroll-trigger contact-me-btn" onClick={this._handleGoToBottom.bind(this)}>Contact Me</a>
          </div>
        </div>
      </header>
    )
  }

  render() {
    return (
      <div>
        <HeaderMenu/>
        {this._renderHeaderIntro()}
      </div>
    );
  }
}

export default Header;
