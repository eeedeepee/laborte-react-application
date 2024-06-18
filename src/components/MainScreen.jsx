import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import '../styles/MainScreen.css';

const MainScreen = ({ content }) => {
  return (
    <Box className="main-screen">
      <Paper className="paper" elevation={3}>
        <Typography variant="h4" gutterBottom>
          Main Screen
        </Typography>
        <Typography variant="body1">{content}</Typography>
      </Paper>
    </Box>
  );
};

export default MainScreen;
