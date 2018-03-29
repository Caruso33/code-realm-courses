import React from "react";
import { AppBar, Toolbar, Typography } from "material-ui";
import CreateDialog from "../exercises/dialogs/Create";

export default ({ muscles, onExerciseCreate }) => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="headline" color="inherit" style={{ flex: 1 }}>
        Exercise DB
      </Typography>
      <CreateDialog onCreate={onExerciseCreate} muscles={muscles} />
    </Toolbar>
  </AppBar>
);
