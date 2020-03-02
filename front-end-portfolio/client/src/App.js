import React, { Component, memo } from "react";
import Nav from "./Components/Nav";
import Main from "./Components/Main";
import About from "./Components/About";
import Portpolio from "./Components/Portfolio";
import Contact from "./Components/Contact";
import ContactText from "./Components/ContactText";
import UserAdd from "./Components/UserAdd";
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
// import axios from "axios";

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: "100%",
    fontFamily: '"Noto Sans KR", sans-serif'
  },
  progress: {
    margin: theme.spacing(2),
    color: theme.palette.common.black
  },
  tableHead: {
    flexGrow: 1,
    fontSize: 16,
    fontFamily: '"Noto Sans KR", sans-serif'
  },
  menu: {
    flexGrow: 1,
    display: "flex",
    justifyContent: "center",
    padding: 20,
    fontFamily: '"Noto Sans KR", sans-serif'
  },
  paper: {
    flexGrow: 1,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 15,
    fontFamily: '"Noto Sans KR", sans-serif'
  }
});

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
    fontSize: 16,
    fontFamily: '"Noto Sans KR", sans-serif'
  }
}))(TableCell);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: "",
      completed: 0
    };
  }

  stateRefresh = () => {
    this.setState({
      users: "",
      completed: 0
    });
    this.callApi()
      .then(res => this.setState({ users: res }))
      .catch(err => console.log(err));
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
    // try {
    //   const response = await axios.get("/api/users");
    //   console.log(response);
    //   this.setState({
    //     users: response.data
    //   });
    // } catch (e) {
    //   console.log(e);
    // }
    const response = await fetch("/api/users");
    const body = await response.json();
    console.log(body);
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

          <div className={classes.menu}>
            <UserAdd stateRefresh={this.stateRefresh} />
          </div>

          <div className={classes.root}>
            <Paper className={classes.paper}>
              <TableContainer className={classes.table}>
                <Table>
                  <TableHead>
                    <StyledTableRow>
                      <StyledTableCell align="center">번호</StyledTableCell>
                      <StyledTableCell align="center">이름</StyledTableCell>
                      <StyledTableCell align="center">내용</StyledTableCell>
                      <StyledTableCell align="center">날짜</StyledTableCell>
                      <StyledTableCell align="center">설정</StyledTableCell>
                    </StyledTableRow>
                  </TableHead>

                  <TableBody>
                    {this.state.users ? (
                      this.state.users.map(c => {
                        return (
                          <ContactText
                            stateRefresh={this.stateRefresh}
                            key={c.id}
                            id={c.id}
                            name={c.name}
                            dsc={c.dsc}
                            date={c.date}
                          />
                        );
                      })
                    ) : (
                      <StyledTableRow>
                        <StyledTableCell colSpan="5" align="center">
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
            </Paper>
          </div>

          <div>
            <Footer />
          </div>

          <div className="top-btn-wrap">
            <a href="#" className="top-btn hidden-2">
              위로
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default memo(withStyles(styles)(App));
