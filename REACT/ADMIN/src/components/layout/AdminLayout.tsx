import React, { useState } from 'react';
import { Box, AppBar, Toolbar, IconButton, Drawer} from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import DashboardIcon from '@mui/icons-material/Dashboard'; 
// import SettingsIcon from '@mui/icons-material/Settings';
// import ExpandLess from '@mui/icons-material/ExpandLess';
// import ExpandMore from '@mui/icons-material/ExpandMore';
import { Outlet } from 'react-router-dom';

const AdminLayout: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };  

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar position="fixed" >
        {/* sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }} */}
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleDrawerOpen}>
            {/* <MenuIcon /> */}
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="temporary"
        open={open}
        onClose={handleDrawerClose}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
      >
        <List>
          <ListItem button>
            <ListItemIcon>
              {/* <DashboardIcon /> */}
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem button onClick={handleDropdownToggle}>
            <ListItemIcon>
              {/* <SettingsIcon /> */}
            </ListItemIcon>
            <ListItemText primary="Settings" />
            {/* {dropdownOpen ? <SettingsIcon /> : <SettingsIcon />} */}
          </ListItem>
          <Collapse in={dropdownOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button sx={{ pl: 4 }}>
                <ListItemText primary="User Settings" />
              </ListItem>
              <ListItem button sx={{ pl: 4 }}>
                <ListItemText primary="System Settings" />
              </ListItem>
            </List>
          </Collapse>
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {/* Main content goes here */}
        <Outlet />
      </Box>
    </Box>
  );
};

export default AdminLayout;