import React from "react";
import { Grid, Paper } from "material-ui";
import Leftpane from "./leftPane";
import Rightpane from "./rightPane";

const styles = {
  Paper: {
    padding: 20,
    marginTop: 10,
    marginBottom: 10,
    height: 500,
    overflowY: "auto"
  }
};

export default ({ exercises, category, exercise, onSelect }) => (
  <Grid container>
    <Grid item sm={4}>
      <Leftpane
        styles={styles}
        onSelect={onSelect}
        category={category}
        exercises={exercises}
      />
    </Grid>
    <Grid item sm={8}>
      <Rightpane styles={styles} exercise={exercise} />
    </Grid>
  </Grid>
);
