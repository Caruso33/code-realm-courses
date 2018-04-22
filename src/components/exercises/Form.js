import React from 'react';

import { withStyles } from 'material-ui/styles';
import { TextField, Select, Button } from 'material-ui';
import { InputLabel } from 'material-ui/Input';
import { FormControl } from 'material-ui/Form';
import { MenuItem } from 'material-ui/Menu';

const styles = theme => ({
  FormControl: {
    width: '100%'
  }
});

export default withStyles(styles)(
  class extends React.Component {
    state = this.getInitialState();

    getInitialState() {
      const { exercise } = this.props;

      return exercise
        ? exercise
        : {
            title: '',
            description: '',
            muscles: ''
          };
    }

    static getDerivedStateFromProps({ exercise }) {
      return exercise || null;
    }
    handleToggle = () => {
      this.setState({
        open: !this.state.open
      });
    };
    handleChange = name => event =>
      this.setState({ [name]: event.target.value });

    handleSubmit = () => {
      //todo: validate form

      this.props.onSubmit({
        id: this.state.title.toLocaleLowerCase().replace(/ /g, '-'),
        ...this.state // overrides the id if it is there
      });

      this.setState(this.getInitialState());
    };
    render() {
      const { title, description, muscles } = this.state;
      const { classes, muscles: categories, exercise } = this.props;
      return (
        <form>
          <TextField
            className={classes.FormControl}
            label="Title"
            value={title}
            onChange={this.handleChange('title')}
            margin="normal"
          />
          <br />
          <FormControl className={classes.FormControl}>
            <InputLabel htmlFor="muscles">Muscles</InputLabel>
            <Select value={muscles} onChange={this.handleChange('muscles')}>
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
            onChange={this.handleChange('description')}
            margin="normal"
          />
          <br />
          <Button onClick={this.handleSubmit} color="primary" variant="raised">
            {exercise ? 'Edit' : 'Create'}
          </Button>
        </form>
      );
    }
  }
);
