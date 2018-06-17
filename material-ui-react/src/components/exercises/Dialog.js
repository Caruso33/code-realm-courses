import React, { Fragment, Component } from 'react';
import { Button, Dialog } from 'material-ui';
import { Add } from '@material-ui/icons';

import {
  DialogContent,
  DialogContentText,
  DialogTitle
} from 'material-ui/Dialog';

import Form from './Form';

export default class CreateDialog extends Component {
  state = { open: false };
  handleToggle = () => this.setState({ open: !this.state.open });
  handleFormSubmit = exercise => {
    this.handleToggle();
    this.props.onCreate(exercise);
  };
  render() {
    const { muscles } = this.props;
    const { open } = this.state;
    return (
      <Fragment>
        <Button variant="fab" aria-label="add" mini onClick={this.handleToggle}>
          <Add />
        </Button>
        <Dialog open={open} onClose={this.handleToggle}>
          <DialogTitle>Create new exercise</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please fill out the form below
            </DialogContentText>
            <Form muscles={muscles} onSubmit={this.handleFormSubmit} />
          </DialogContent>
        </Dialog>
      </Fragment>
    );
  }
}
