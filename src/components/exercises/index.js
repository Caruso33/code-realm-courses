import React from 'react';
import { Grid } from 'material-ui';
import Leftpane from './leftPane';
import Rightpane from './rightPane';

const styles = {
  Paper: {
    padding: 20,
    marginTop: 10,
    marginBottom: 10,
    height: 500,
    overflowY: 'auto'
  }
};

export default ({
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
    <Grid item sm={5}>
      <Leftpane
        styles={styles}
        onSelect={onSelect}
        onSelectEdit={onSelectEdit}
        onDelete={onDelete}
        category={category}
        exercises={exercises}
      />
    </Grid>
    <Grid item sm={7}>
      <Rightpane
        styles={styles}
        exercise={exercise}
        editMode={editMode}
        muscles={muscles}
        onSubmit={onEdit}
      />
    </Grid>
  </Grid>
);
