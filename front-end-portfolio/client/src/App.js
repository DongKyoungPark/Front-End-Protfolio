import React, { Component } from "react";
import Nav from "./Components/Nav";
import Main from "./Components/Main";
import About from "./Components/About";
import Portpolio from "./Components/Portfolio";
import Contact from "./Components/Contact";
import ContactText from "./Components/ContactText";
import Footer from "./Components/Footer";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    fontSize: 16
  }
}))(TableCell);

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(3),
    overflowX: "auto"
  },

  table: {
    minWidth: 1080
  }
});

const users = [
  {
    id: 1,
    name: "박동경",
    dsc: "안녕하세요!",
    date: "2020-02-24"
  },
  {
    id: 2,
    name: "서동화",
    dsc: "안녕하세요!",
    date: "2020-02-24"
  },
  {
    id: 3,
    name: "홍길동",
    dsc: "안녕하세요!",
    date: "2020-02-24"
  }
];

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <>
        <div className="wrap">
          <Nav />
          <div id="container">
            <Main />
            <About />
            <Portpolio />
            <Contact />

            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell align="center">번호</StyledTableCell>
                    <StyledTableCell align="center">이름</StyledTableCell>
                    <StyledTableCell align="center">내용</StyledTableCell>
                    <StyledTableCell align="center">날짜</StyledTableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {users.map(data => {
                    return (                        
                      <ContactText
                        key={data.id}
                        id={data.id}
                        name={data.name}
                        dsc={data.dsc}
                        date={data.date}
                      />
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>

        <div className="top-btn-wrap">
          <a href="#" className="top-btn hidden-2">
            위로
          </a>
        </div>

        <Footer />
      </>
    );
  }
}

export default withStyles(styles)(App);
