import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const Profile: React.FC = () => {
  return (
    <Container maxWidth="md">
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Profile
        </Typography>
        <Typography variant="body1">
          This is the profile page. Here you can display user information and allow the user to update their profile details.
        </Typography>
      </Box>
    </Container>
  );
};

export default Profile;