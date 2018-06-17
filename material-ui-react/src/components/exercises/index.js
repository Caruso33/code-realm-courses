import React from 'react';
import { withStyles } from 'material-ui/styles';
import { Grid } from 'material-ui';
import Leftpane from './leftPane';
import Rightpane from './rightPane';

const styles = theme => ({
  Paper: {
    padding: 20,
    marginTop: 5,
    height: 500,
    overflowY: 'auto'
  }
});

export default withStyles(styles)(
  ({
    classes,
    muscles,
    exercises,
    category,
    exercise,
    onSelect,
    onDelete,
    editMode,
    onSelectEdit,
    onEdit
  }) => (
    <Grid container>
      <Grid item sm={6} xs={12}>
        <Leftpane
          classes={classes}
          onSelect={onSelect}
          onSelectEdit={onSelectEdit}
          onDelete={onDelete}
          category={category}
          exercises={exercises}
        />
      </Grid>
      <Grid item sm={6} xs={12}>
        <Rightpane
          classes={classes}
          exercise={exercise}
          editMode={editMode}
          muscles={muscles}
          onSubmit={onEdit}
        />
      </Grid>
    </Grid>
  )
);
