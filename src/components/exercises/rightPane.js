import React from "react";
import { Paper, Typography } from "material-ui";

export default ({
  styles,
  exercise: {
    id,
    title = "Welcome!",
    description = "Please select an exercise from the list on the left."
  }
}) => (
  <Paper style={styles.Paper}>
    <Typography variant="display1" style={{ textTransform: "capitalize" }}>
      {title}
    </Typography>
    <Typography variant="subheading" style={{ marginTop: 20 }}>
      {description}
    </Typography>
  </Paper>
);
