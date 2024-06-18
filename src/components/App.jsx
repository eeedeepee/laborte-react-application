import React, { useState } from 'react';
import { Box, Drawer, AppBar, Toolbar, Typography } from '@mui/material';
import Sidebar from './Sidebar';
import MainScreen from './MainScreen';
import TableComponent from './TableComponent';
import ProfileComponent from './ProfileComponent';
import '../styles/App.css';

const drawerWidth = 240;

const App = () => {
  const [content, setContent] = useState('Select an item from the sidebar.');
  
  const table1Data = [
    { name: 'John Doe', balance: 1000, col3: 'Data 1', col4: 'Data 2' },
    { name: 'Jane Smith', balance: 2000, col3: 'Data 3', col4: 'Data 4' },
  ];

  const table2Data = [
    { name: 'Alice Johnson', balance: 3000, col3: 'Data 5', col4: 'Data 6' },
    { name: 'Bob Brown', balance: 4000, col3: 'Data 7', col4: 'Data 8' },
  ];

  const personProfile = {
    name: 'John Doe',
    balanceDetails: [
      { month: 'January', balance: 100 },
      { month: 'February', balance: 200 },
      { month: 'March', balance: 300 },
      // Add more months here
    ],
  };

  const renderContent = () => {
    switch (content) {
      case 'Table1':
        return <TableComponent data={table1Data} />;
      case 'Table2':
        return <TableComponent data={table2Data} />;
      case 'Profile':
        return <ProfileComponent person={personProfile} />;
      default:
        return <MainScreen content={content} />;
    }
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            My Web Application
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <Sidebar setContent={setContent} />
        </Box>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: `calc(100% - ${drawerWidth}px)`, mt: 8 }}
      >
        {renderContent()}
      </Box>
    </Box>
  );
};

export default App;
