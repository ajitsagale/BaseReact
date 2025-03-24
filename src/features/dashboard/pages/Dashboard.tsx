import React from 'react';
import { Box, Grid, Paper, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import Graph from '../../../components/Graph';

const sampleOptions = {
  chart: {
    id: 'basic-bar',
  },
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
  },
};

const sampleSeries = [
  {
    name: 'series-1',
    data: [30, 40, 45, 50, 49, 60, 70, 91, 125],
  },
];

const Dashboard: React.FC = () => {
  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      <Grid container spacing={3}>
        {[1, 2, 3, 4].map((graph) => (
          <Grid item xs={12} md={6} key={graph}>
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Paper elevation={3} style={{ height: '300px', padding: '16px' }}>
                <Typography variant="h6">Graph {graph}</Typography>
                {true ? (
                  <Graph  options={sampleOptions} series={sampleSeries} height={250} 
                  type={(graph === 1 || graph === 4)?"bar":"line"}
                  />
                ) : (
                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    height="100%"
                    bgcolor="#f5f5f5"
                  >
                    Graph {graph} content
                  </Box>
                )}
              </Paper>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Dashboard;