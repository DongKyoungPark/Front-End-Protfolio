import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

const StyledTableRow = withStyles(theme => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: "#e0e0e0"
    }
  }
}))(TableRow);

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14
  }
}))(TableCell);


export class ContactText extends Component {
  
  render() {

    const {id, name, dsc, date} = this.props;
    
    return (
      <>
        <StyledTableRow>
          <StyledTableCell align="center">{id}</StyledTableCell>
          <StyledTableCell align="center">{name}</StyledTableCell>
          <StyledTableCell align="center">{dsc}</StyledTableCell>
          <StyledTableCell align="center">{date}</StyledTableCell>
        </StyledTableRow>
      </>
    )
  }
}

export default ContactText;
