/* // src/components/Dashboard.js
import React from 'react';
import { AppBar, Toolbar, Typography, Drawer, List, ListItem, ListItemIcon, ListItemText, CssBaseline } from '@mui/material';
import { Dashboard as DashboardIcon, School as SchoolIcon, BarChart as BarChartIcon } from '@mui/icons-material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: 240,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 240,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  toolbar: theme.mixins.toolbar,
}));

function Dashboard({ children }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Admin Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.toolbar} />
        <List>
          <ListItem button>
            <ListItemIcon><DashboardIcon /></ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem button>
            <ListItemIcon><SchoolIcon /></ListItemIcon>
            <ListItemText primary="Courses" />
          </ListItem>
          <ListItem button>
            <ListItemIcon><BarChartIcon /></ListItemIcon>
            <ListItemText primary="Statistics" />
          </ListItem>
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {children}
      </main>
    </div>
  );
}

export default Dashboard;
 */


import React from 'react';
import { AppBar, Toolbar, Typography, Drawer, List, ListItem, ListItemIcon, ListItemText, Box, Avatar, Grid, Paper } from '@mui/material';
import { Dashboard, AttachMoney, MenuBook, CloudUpload, ExitToApp } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const drawerWidth = 240;

const Admindashboard = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Admin Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            <ListItem button>
              <ListItemIcon><Dashboard /></ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItem>
            <ListItem button>
              <ListItemIcon><AttachMoney /></ListItemIcon>
              <ListItemText primary="My Earnings" />
            </ListItem>
            <ListItem button component={Link} to="/">
              <ListItemIcon><MenuBook /></ListItemIcon>
              <ListItemText primary="My Courses" />
            </ListItem>
            <ListItem button>
              <ListItemIcon><CloudUpload /></ListItemIcon>
              <ListItemText primary="Upload Course" />
            </ListItem>
            <ListItem button>
              <ListItemIcon><ExitToApp /></ListItemIcon>
              <ListItemText primary="Log Out" />
            </ListItem>
          </List>
        </Box>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Toolbar />
        <Typography variant="h4">Welcome back, Jacob Jones!</Typography>
        <Typography variant="body1">Lorem ipsum dolor sit amet consectetur. Condimentum viverra pellentesque diam at sed.</Typography>
        <Grid container spacing={3} sx={{ mt: 3 }}>
          <Grid item xs={3}>
            <Paper sx={{ p: 2, textAlign: 'center' }}>
              <Typography variant="h6">Total Course</Typography>
              <Typography variant="h4">21</Typography>
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper sx={{ p: 2, textAlign: 'center' }}>
              <Typography variant="h6">Total Students</Typography>
              <Typography variant="h4">12.5K</Typography>
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper sx={{ p: 2, textAlign: 'center' }}>
              <Typography variant="h6">Av. Ratings</Typography>
              <Typography variant="h4">4.92</Typography>
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper sx={{ p: 2, textAlign: 'center' }}>
              <Typography variant="h6">Total Earnings</Typography>
              <Typography variant="h4">$5.1K</Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Admindashboard;
