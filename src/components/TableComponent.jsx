import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';

const TableComponent = ({ data }) => {
  return (
    <TableContainer component={Paper} sx={{ mt: 2 }}>
      <Typography variant="h6" component="div" sx={{ p: 2, bgcolor: 'primary.main', color: 'white' }}>
        Table Data
      </Typography>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Balance</TableCell>
            <TableCell align="right">Column 3</TableCell>
            <TableCell align="right">Column 4</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.balance}</TableCell>
              <TableCell align="right">{row.col3}</TableCell>
              <TableCell align="right">{row.col4}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableComponent;
