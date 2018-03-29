import React, { Fragment, Component } from "react";
import { Button, Dialog, TextField, Select } from "material-ui";
import { InputLabel } from "material-ui/Input";
import { FormControl } from "material-ui/Form";
import { MenuItem } from "material-ui/Menu";
import { Add } from "material-ui-icons";
import {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from "material-ui/Dialog";
import { withStyles } from "material-ui/styles";

const styles = theme => ({
  FormControl: {
    width: 500
  }
});

export default withStyles(styles)(
  class CreateDialog extends Component {
    state = {
      open: false,
      exercise: {
        title: "",
        description: "",
        muscles: ""
      }
    };
    handleToggle = () => {
      this.setState({
        open: !this.state.open
      });
    };
    handleChange = name => event => {
      this.setState({
        exercise: {
          ...this.state.exercise,
          [name]: event.target.value
        }
      });
    };
    handleSubmit = () => {
      //todo: validate form

      const { exercise } = this.state;
      this.props.onCreate({
        ...exercise,
        id: exercise.title.toLocaleLowerCase().replace(/ /g, "-")
      });

      this.setState({
        open: false,
        exercise: {
          title: "",
          muscles: "",
          description: ""
        }
      });
    };
    render() {
      const { open, exercise: { title, description, muscles } } = this.state;
      const { classes, muscles: categories } = this.props;
      return (
        <Fragment>
          <Button
            variant="fab"
            aria-label="add"
            mini
            onClick={this.handleToggle}
          >
            <Add />
          </Button>
          <Dialog
            open={open}
            onClose={this.handleToggle}
            aria-labelledby="form-dialog-title"
          >
            <DialogTitle id="form-dialog-title">
              Create new exercise
            </DialogTitle>
            <DialogContent>
              <DialogContentText>
                Please fill out the form below
              </DialogContentText>
              <form>
                <TextField
                  className={classes.FormControl}
                  label="Title"
                  value={title}
                  onChange={this.handleChange("title")}
                  margin="normal"
                />
                <br />
                <FormControl className={classes.FormControl}>
                  <InputLabel htmlFor="muscles">Muscles</InputLabel>
                  <Select
                    value={muscles}
                    onChange={this.handleChange("muscles")}
                  >
                    {categories.map(category => (
                      <MenuItem key={category} value={category}>
                        {category}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <br />
                <TextField
                  className={classes.FormControl}
                  multiline
                  rows={4}
                  label="Description"
                  value={description}
                  onChange={this.handleChange("description")}
                  margin="normal"
                />
              </form>
            </DialogContent>
            <DialogActions>
              <Button
                onClick={this.handleSubmit}
                color="primary"
                variant="raised"
              >
                Create
              </Button>
            </DialogActions>
          </Dialog>
        </Fragment>
      );
    }
  }
);
