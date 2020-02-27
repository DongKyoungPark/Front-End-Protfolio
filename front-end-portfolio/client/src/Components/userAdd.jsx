import React, { Component, memo } from "react";
import { post } from "axios";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import SaveIcon from '@material-ui/icons/Save';
import { Typography } from "@material-ui/core";

const styles = theme => ({
  dialog:{
    width: '100%',
    textAlign:'center',
    justifyContent: "center"
  },
   button:{
    justifyContent: "center",
  },
  fontsize:{
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
    this.addUser().then(response => {
      console.log(response.data);
      this.props.stateRefresh();
    });
    this.setState({
      name: "",
      dsc: "",
      open:false
    });
  };

  handleValueChange = e => {
    let nextState = {};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);
  };

  addUser = () => {
    const url = "/users";
    const formData = new FormData();
    formData.append("name", this.state.name);
    formData.append("dsc", this.state.dsc);

    console.log(this.state.name);
    console.log(this.state.dsc);
    const config = {
      headers: {
        "content-type": "multipart/form-data"
      }
    };
    return post(url, formData, config);
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
          
          <Dialog className={classes.dialog} fullWidth id="dialog" open={this.state.open} onClose={this.handleClose}>
            <DialogTitle><Typography className={classes.fontsize}> [ 댓글 등록 ] </Typography></DialogTitle>
            <DialogContent >
              <TextField className={classes.dialog}
                label="이름"
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleValueChange}
              ></TextField>
              <br />
              <TextField className={classes.dialog}
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
