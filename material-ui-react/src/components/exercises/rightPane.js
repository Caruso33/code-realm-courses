import React, { Fragment } from 'react';
import { Paper, Typography } from 'material-ui';
import Form from './Form';
export default ({
  classes,
  editMode,
  onSubmit,
  muscles,
  exercise,
  exercise: {
    id,
    title = 'Welcome!',
    description = 'Please select an exercise from the list on the left.'
  }
}) => (
  <Paper className={classes.Paper}>
    {editMode ? (
      <Form muscles={muscles} onSubmit={onSubmit} exercise={exercise} />
    ) : (
      <Fragment>
        <Typography variant="display1" style={{ textTransform: 'capitalize' }}>
          {title}
        </Typography>
        <Typography variant="subheading" style={{ marginTop: 20 }}>
          {description}
        </Typography>
      </Fragment>
    )}
  </Paper>
);
