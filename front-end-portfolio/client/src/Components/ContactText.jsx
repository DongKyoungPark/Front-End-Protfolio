import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14
  }
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: "#e0e0e0"
    }
  }
}))(TableRow);

export class ContactText extends Component {
  render() {
    return (
      <>
        <StyledTableRow>
          <StyledTableCell component="th" scope="row" align="center">
            {this.props.id}
          </StyledTableCell>
          <StyledTableCell align="center">{this.props.name}</StyledTableCell>
          <StyledTableCell align="center">{this.props.dsc}</StyledTableCell>
          <StyledTableCell align="center">{this.props.date}</StyledTableCell>
        </StyledTableRow>
      </>
    );
  }
}

export default ContactText;
