import React, { Component, memo } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import SaveIcon from "@material-ui/icons/Save";
import { Typography } from "@material-ui/core";
import axios from "axios";

const styles = theme => ({
  dialog: {
    width: "100%",
    textAlign: "center",
    justifyContent: "center"
  },
  button: {
    justifyContent: "center"
  },
  fontsize: {
    fontSize: "3em"
  }
});

class UserAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      dsc: "",
      open: false
    };
  }

  handleFormSubmit = e => {
    e.preventDefault();
    if (!this.props.name || !this.props.dsc) {
      return;
    }
    this.addUser();

    setTimeout(
      function() {
        this.props.stateRefresh();
      }.bind(this),
      200
    );

    this.setState({
      name: "",
      dsc: "",
      open: false
    });
  };

  addUser = () => {
    axios({
      method: "POST",
      url: "/api/users",
      data: {
        name: this.state.name,
        dsc: this.state.dsc
      }
    })
      .then(function(response) {
        console.log(response.data);
      })
      .catch(function(err) {
        console.log(err);
      });
  };

  handleValueChange = e => {
    let nextState = {};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);
  };

  handleClickOpen = () => {
    this.setState({
      open: true
    });
  };

  handleClose = () => {
    this.setState({
      name: "",
      dsc: "",
      open: false
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <>
        <div className="form-user-add">
          <Button
            id="form-user-add-btn"
            variant="contained"
            color="primary"
            startIcon={<SaveIcon />}
            onClick={this.handleClickOpen}
          >
            댓글 등록하기
          </Button>

          <Dialog
            className={classes.dialog}
            fullWidth
            id="dialog"
            open={this.state.open}
            onClose={this.handleClose}
          >
            <DialogTitle>
              <Typography className={classes.fontsize}>
                {" "}
                [ 댓글 등록 ]{" "}
              </Typography>
            </DialogTitle>
            <DialogContent>
              <TextField
                className={classes.dialog}
                label="이름"
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleValueChange}
              ></TextField>
              <br />
              <TextField
                className={classes.dialog}
                label="댓글"
                type="text"
                name="dsc"
                multiline
                rows="10"
                value={this.state.dsc}
                onChange={this.handleValueChange}
              ></TextField>
              <br />
            </DialogContent>
            <DialogActions className={classes.button}>
              <Button
                id="form-user-add-btn"
                variant="contained"
                color="primary"
                size="medium"
                method="post"
                startIcon={<SaveIcon />}
                onClick={this.handleFormSubmit}
              >
                등록
              </Button>
              <Button
                id="form-user-add-btn"
                variant="contained"
                color="primary"
                size="large"
                onClick={this.handleClose}
              >
                닫기
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      </>
    );
  }
}

export default memo(withStyles(styles)(UserAdd));
