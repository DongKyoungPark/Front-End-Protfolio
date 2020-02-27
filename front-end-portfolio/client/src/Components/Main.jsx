import React, { Component, memo } from "react";

export class Main extends Component {
  render() {
    return (
      // Main
      <>
      <section id="home" className="first">
        <h2 className="hidden-1">메인화면</h2>
        <div className="visual-title">
          <div className="move-text">
            <span
              className="txt-rotate"
              data-period="2000"
              data-rotate='[ "Front-End Developer"]'
            ></span>
          </div>
          <p>Park DongKyoung</p>
        </div>
        <a className="btn-scroll" href="#about"></a>
      </section>
      </>
    );
  }
}

export default memo(Main);
