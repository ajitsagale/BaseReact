import React from 'react';
import { Box, Grid, Paper, Typography } from '@mui/material';
import { motion } from 'framer-motion';

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
                {/* Placeholder for graph */}
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  height="100%"
                  bgcolor="#f5f5f5"
                >
                  Graph {graph} content
                </Box>
              </Paper>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Dashboard;