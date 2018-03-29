import React, { Fragment } from "react";
import { Paper, Typography, List } from "material-ui";
import { ListItem, ListItemText } from "material-ui/List";

export default ({ styles, exercises, category, onSelect }) => (
  <Paper style={styles.Paper}>
    {exercises.map(
      ([group, exercises]) =>
        !category || category === group ? (
          <Fragment key={group}>
            <Typography
              variant="headline"
              style={{ textTransform: "capitalize" }}
            >
              {group}
            </Typography>
            <List component="ul">
              {exercises.map(({ id, title }) => (
                <ListItem key={title} onClick={() => onSelect(id)} button>
                  <ListItemText primary={title} />
                </ListItem>
              ))}
            </List>
          </Fragment>
        ) : null
    )}
  </Paper>
);
