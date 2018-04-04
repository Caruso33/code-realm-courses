import React, { Fragment } from 'react';
import { Paper, Typography, List, IconButton } from 'material-ui';
import {
  ListItem,
  ListItemText,
  ListItemSecondaryAction
} from 'material-ui/List';
import { Delete, Edit } from 'material-ui-icons';

export default ({
  styles,
  exercises,
  category,
  onSelect,
  onDelete,
  onSelectEdit
}) => (
  <Paper style={styles.Paper}>
    {exercises.map(
      ([group, exercises]) =>
        !category || category === group ? (
          <Fragment key={group}>
            <Typography
              variant="headline"
              style={{ textTransform: 'capitalize' }}
            >
              {group}
            </Typography>
            <List component="ul">
              {exercises.map(({ id, title }) => (
                <ListItem key={title} onClick={() => onSelect(id)} button>
                  <ListItemText primary={title} />
                  <ListItemSecondaryAction>
                    <IconButton onClick={() => onSelectEdit(id)}>
                      <Edit />
                    </IconButton>
                    <IconButton onClick={() => onDelete(id)}>
                      <Delete />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              ))}
            </List>
          </Fragment>
        ) : null
    )}
  </Paper>
);
