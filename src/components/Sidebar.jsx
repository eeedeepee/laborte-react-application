import React from 'react';
import { List, ListItem, ListItemText, ListSubheader, Divider } from '@mui/material';

const Sidebar = ({ setContent }) => {
  return (
    <List
      component="nav"
      subheader={<ListSubheader component="div">Menu</ListSubheader>}
      sx={{
        width: '100%',
        maxWidth: 360,
        bgcolor: 'background.paper',
      }}
    >
      <ListItem button onClick={() => setContent('Table1')}>
        <ListItemText primary="Table 1" />
      </ListItem>
      <Divider />
      <ListItem button onClick={() => setContent('Table2')}>
        <ListItemText primary="Table 2" />
      </ListItem>
      <Divider />
      <ListItem button onClick={() => setContent('Profile')}>
        <ListItemText primary="Profile" />
      </ListItem>
    </List>
  );
};

export default Sidebar;
