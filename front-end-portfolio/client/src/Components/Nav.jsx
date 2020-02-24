import React, { Component } from "react";

export class Nav extends Component {
  render() {
    return (
      // Navigation
      <>
      <header id="header">
        <div className="full-container">
          <div className="inner-container clearfix">
            <h1 className="logo">
              <a href="#home">PDK</a>
            </h1>
            <div className="m-gnb">
              <i className="first"></i>
              <i className="second"></i>
              <i className="third"></i>
            </div>
            <nav className="gnb-wrap">
              <h2 className="hidden-1">주요메뉴</h2>
              <ul className="gnb clearfix">
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#portfolio">Portfolio</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      </>
    );
  }
}

export default Nav;
