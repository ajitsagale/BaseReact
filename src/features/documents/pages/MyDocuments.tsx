import { ArrowCircleDown } from '@mui/icons-material';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import Add from '@mui/icons-material/Add';
import React, { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import DataTable, { Column } from '../../../components/DataTable';
import { log } from 'console';


const MyDocuments: React.FC = () => {
    const [sortExpression, setSortExpression] = useState('Date');
    const [sortOrder, setSortOrder] = useState('desc');
    const [data, setData] = useState([
        { ID: 1, Name: 'Document 1', Date: '2023-01-03', Status: 'Active' },
        { ID: 2, Name: 'Document 2', Date: '2023-01-02', Status: 'Inactive' },
        { ID: 3, Name: 'Document 3', Date: '2023-01-01', Status: 'Active' },
        { ID: 4, Name: 'Document 4', Date: '2023-01-01', Status: 'Active' },
        { ID: 5, Name: 'Document 5', Date: '2023-01-01', Status: 'Active' },
        { ID: 6, Name: 'Document 6', Date: '2023-01-01', Status: 'Active' },
        { ID: 7, Name: 'Document 7', Date: '2023-01-01', Status: 'Active' },
        { ID: 8, Name: 'Document 8', Date: '2023-01-01', Status: 'Active' },
        { ID: 9, Name: 'Document 9', Date: '2023-01-01', Status: 'Active' },
        { ID: 10, Name: 'Document 10', Date: '2023-01-01', Status: 'Active' },
        { ID: 11, Name: 'Document 11', Date: '2023-01-01', Status: 'Active' },
        // Add more data as needed
      ]);
      const clickRow = (id:any) => {
          alert("delete "+id)
      }
      const clickHeader = (id:any) => {
        setSortOrder(sortExpression !== id?'desc':
            sortOrder ==='desc' ? 'asc' : 'desc')
        setSortExpression(id)
      }
      const columns =  [
          {
              id: 'Name',
              label: 'Name',
              renderCell: (rowData:any) => rowData.Name,
              renderHeader: () => <Typography onClick={()=>clickHeader("Name")} >Name
              {sortExpression === 'Name' ? 
              (sortOrder === 'desc' ? <ArrowCircleDown /> : <ArrowCircleUpIcon />):''}
              </Typography>,
          },
          {
              id: 'Date',
              label: 'Date',
              renderCell: (rowData:any) => <Button onClick={()=>{clickRow(rowData)}} > {rowData.Date}</Button>,
              renderHeader: () => <Typography onClick={()=>clickHeader("Date")} >Date
              {sortExpression === 'Date' ? 
              (sortOrder === 'desc' ? <ArrowCircleDown /> : <ArrowCircleUpIcon />):''}
              </Typography>,
          },
      ]
    return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom>
        Document List
      </Typography>
      <Box sx={{ mt: 2, overflowX: 'auto' }}>
      <DataTable columns={columns} data={data} />
      </Box>
    </Box>
  );
};

export default MyDocuments;