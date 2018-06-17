import React from 'react';
import { AppBar, Toolbar, Typography } from 'material-ui';
import Dialog from '../exercises/Dialog';

export default ({ muscles, onExerciseCreate }) => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="headline" color="inherit" style={{ flex: 1 }}>
        Exercise DB
      </Typography>
      <Dialog onCreate={onExerciseCreate} muscles={muscles} />
    </Toolbar>
  </AppBar>
);
