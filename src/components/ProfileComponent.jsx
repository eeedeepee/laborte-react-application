import React from 'react';
import { Box, Typography, Paper, List, ListItem, ListItemText } from '@mui/material';

const ProfileComponent = ({ person }) => {
  return (
    <Box p={2}>
      <Paper elevation={3} sx={{ padding: 2 }}>
        <Typography variant="h4" gutterBottom>
          Profile: {person.name}
        </Typography>
        <Typography variant="h6">Balance Details:</Typography>
        <List>
          {person.balanceDetails.map((detail, index) => (
            <ListItem key={index}>
              <ListItemText primary={`${detail.month}: $${detail.balance}`} />
            </ListItem>
          ))}
        </List>
      </Paper>
    </Box>
  );
};

export default ProfileComponent;
