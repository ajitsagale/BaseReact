import React, { useState } from 'react';
import { Box, AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemText, CssBaseline, Container, Typography, useMediaQuery, useTheme, Backdrop } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Outlet, Link } from 'react-router-dom';
import ProfileMenu from './ProfileMenu';

const drawerWidth = 240;

const AuthenticatedLayout: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <List>
        {['Dashboard', 'Graph 1', 'Graph 2', 'Graph 3', 'Graph 4'].map((text, index) => (
          <ListItem component={Link} to={`/${text.toLowerCase().replace(' ', '-')}`} key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '80vh'  }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'block' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
          <Box sx={{ marginLeft: 'auto' }} >
          <ProfileMenu />
            </Box>
          </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { drawerWidth }, flexShrink: 0 }}
        aria-label="mailbox folders"
      >
        <Drawer
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
          <Backdrop open={mobileOpen} onClick={handleDrawerToggle} sx={{ zIndex: theme.zIndex.drawer - 1 }} />
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
        //   width:'100%',
          width: { sm: mobileOpen ? `calc(100% - ${drawerWidth}px)` : '100%' },
          transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
        }}
      >
        <Toolbar />
        <Outlet />
        <Box component="footer" sx={{ py: 1, mt: 'auto', width: '100vw', backgroundColor: (theme) => theme.palette.grey[200] }}>
          <Container maxWidth="lg">
            <Typography variant="body1">
              My sticky footer can be found here.
            </Typography>
          </Container>
        </Box>
      </Box>
    </Box>
  );
};

export default AuthenticatedLayout;