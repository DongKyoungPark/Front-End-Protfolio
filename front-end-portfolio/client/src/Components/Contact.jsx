import React, { Component, memo } from "react";

export class Contact extends Component {
  render() {
    return (
        // Contact
      <>
        <section id="contact">
          <div className="inner-container">
            <div className="title-wrap">
              <h2 className="title">Contact</h2>
            </div>
            <p className="email">oe1lolo@nate.com</p>
            <p>010-4554-0898</p>
          </div>

          {/* <TableRow>
          <TableCell>
            
          </TableCell>
        </TableRow> */}
        </section>
      </>
    );
  }
}

export default memo(Contact);
