import React, { Component, memo } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import DeleteIcon from '@material-ui/icons/Delete';
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
    dialog:{
      width: '100%',
      textAlign:'center',
      justifyContent: "center",
    },
     button:{
        justifyContent: "center",
    },
    fontsize1:{
        fontSize: '3em'
    },
    fontsize2:{
        fontSize: '2em'
    }
  });

export class UserDelete extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  deleteUser(id) {
    const url = "/users/" + id;
    fetch(url, {
      method: "DELETE"
    });
    this.props.stateRefresh();
  }

  handleClickOpen = () => {
    this.setState({
      open: true
    });
  };

  handleClose = () => {
    this.setState({
      open: false
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <>
        <div className="form-user-delete">
          <Button
            id="form-user-delete-btn"
            variant="contained"
            color="primary"
            startIcon={<DeleteIcon />}
            onClick={this.handleClickOpen}
          >
            삭제
          </Button>
          <Dialog className={classes.dialog} fullWidth open={this.state.open} onClose={this.handleClose}>
            <DialogTitle onClose={this.handleClose}>
                <Typography className={classes.fontsize1}>삭제 하시겠습니까?</Typography>
            </DialogTitle>
            <DialogContent>
              <Typography className={classes.fontsize2} gutterBottom>선택한 댓글이 삭제됩니다.</Typography>
            </DialogContent>
            <DialogActions className={classes.button}>
              <Button
                id="form-user-delete-btn"
                variant="contained"
                color="primary"
                size="medium"
                startIcon={<DeleteIcon />}
                onClick={e => {
                  this.deleteUser(this.props.id);
                }}
              >
                삭제
              </Button>
              <Button
                id="form-user-delete-btn"
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

export default memo(withStyles(styles)(UserDelete));
