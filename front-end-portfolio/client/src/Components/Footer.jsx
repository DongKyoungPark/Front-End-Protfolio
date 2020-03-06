import React, { Component, memo } from "react";

export class Footer extends Component {
  render() {
    return (
      <>
        <section id="footer">
          <footer>
            <div className="inner-container">
              <div className="row">
                <div className="col-sm-3">
                  <h5>Copyright &copy; 2020</h5>
                  <p> PDK All right reserved.</p>
                  <h5>박동경</h5>
                  <h5>(Park Dong Kyoung)</h5>
                </div>
                <div className="col-sm-3">
                  <h5>E-mail</h5>
                  <p>oe1lolo@nate.com</p>
                  <h5>Phone</h5>
                  <p>010-4554-0898</p>
                </div>
                <div className="col-sm-3">
                  <h5>SNS</h5>
                  <div className="list-group">
                    <a href="#" className="list-group-item">
                      KaKaoTalk
                    </a>
                    <a href="https://github.com/DongKyoungPark" className="list-group-item">
                      GitHub
                    </a>
                  </div>
                </div>
                <div className="col-sm-3">
                  <h4 className="name">By&nbsp;박동경</h4>
                </div>
              </div>
            </div>
          </footer>
        </section>
      </>
    );
  }
}

export default memo(Footer);
