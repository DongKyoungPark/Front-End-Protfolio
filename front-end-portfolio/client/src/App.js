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
import CircularProgress from "@material-ui/core/CircularProgress";
import axios from "axios";

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
  },
  progress: {
    margin: theme.spacing(2),
    color: theme.palette.common.black
  }
});

class App extends Component {
  state = {
    users: "",
    completed: 0
  };

  componentDidMount() {
    this.timer = setInterval(this.progress, 20);
    this.callApi()
      .then(res => this.setState({ users: res }))
      .catch(err => console.log(err));
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  callApi = async () => {
    const response = await fetch("/api/users");
    const body = await response.json();
    return body;
  };

  progress = () => {
    const { completed } = this.state;
    this.setState({ completed: completed >= 100 ? 0 : completed + 1 });
  };

  render() {
    const { classes } = this.props;
    const { completed } = this.state;

    return (
      <>
        <Nav />
        <div id="container">
          <Main />
          <About />
          <Portpolio />
          <Contact />

          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
              <TableHead>
                <StyledTableRow>
                  <StyledTableCell align="center">번호</StyledTableCell>
                  <StyledTableCell align="center">이름</StyledTableCell>
                  <StyledTableCell align="center">내용</StyledTableCell>
                  <StyledTableCell align="center">날짜</StyledTableCell>
                </StyledTableRow>
              </TableHead>

              <TableBody>
                {this.state.users ? (
                  this.state.users.map(data => {
                    return (
                      <ContactText
                        key={data.id}
                        id={data.id}
                        name={data.name}
                        dsc={data.dsc}
                        date={data.date}
                      />
                    );
                  })
                ) : (
                  <StyledTableRow>
                    <StyledTableCell colSpan="4" align="center">
                      <CircularProgress
                        className={classes.progress}
                        variant="determinate"
                        value={completed}
                      />
                    </StyledTableCell>
                  </StyledTableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </div>

        <div>
        <Footer />
        </div>
        
        <div className="top-btn-wrap">
          <a href="#" className="top-btn hidden-2">
            위로
          </a>
        </div>
      </>
    );
  }
}

export default withStyles(styles)(App);
