import React, { Component, memo } from "react";
import { withStyles } from "@material-ui/core/styles";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import UserDelete from "./UserDelete";

const StyledTableRow = withStyles(theme => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: "#e0e0e0",
      fontFamily: '"Noto Sans KR", sans-serif'
    }
  }
}))(TableRow);

const StyledTableCell = withStyles(theme => ({
  root:{
    fontSize: 14,
    fontFamily: '"Noto Sans KR", sans-serif',
  }
}))(TableCell);

  export class ContactText extends Component {      
    render() {
      const { id, name, dsc, date } = this.props;      
      let dateFormat = require('dateformat');
      let dateType = dateFormat(date, 'yyyy-mm-dd HH:MM:ss');
    
    return (
      <>
        <StyledTableRow>
          <StyledTableCell id="table" align="center">{id}</StyledTableCell>
          <StyledTableCell id="table" align="center">{name}</StyledTableCell>
          <StyledTableCell id="table" align="center">{dsc}</StyledTableCell>
          <StyledTableCell id="table" align="center">{dateType}</StyledTableCell>
          <StyledTableCell id="table" align="center">
            <UserDelete
              stateRefresh={this.props.stateRefresh}
              id={this.props.id}
            />
          </StyledTableCell>
        </StyledTableRow>
      </>
    );
  }
}

export default memo(ContactText);
