import React, { useEffect, useState } from 'react';
import profilePic from '../../../src/assets/images/ivana-squares.jpg'
import { BarChart } from '@mui/x-charts/BarChart';
import { PieChart } from '@mui/x-charts/PieChart';


import {
  Box,
  Grid,
  Avatar,
  Typography,
  Card,
  CardContent,

  Button,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import {
  AccountCircle,
  Event,
  EmojiEvents,
  Schedule,
  Mail
} from '@mui/icons-material';
import { Link } from 'react-router-dom';


function Admindashboard(){

    const [selectedIndex, setSelectedIndex] = useState(0);
    const data = [
      { id: 0, value: 10, label: 'series A' },
      { id: 1, value: 15, label: 'series B' },
      { id: 2, value: 20, label: 'series C' },
    ];


  return (
    <Box sx={{ display: 'flex', height: '100vh'}}>
      {/* Sidebar */}
      <Box sx={{ width: '250px', bgcolor: '#2d2562', color: '#ffffff', p: 2, position: 'relative',marginTop:"80px" }}>
        <Typography variant="h4" sx={{ mb: 4, color: '#ffffff' }}>
          Skillify Academy
        </Typography>
        <List sx={{ mb: 4 }}>
          {['overview', 'My Courses', 'Events', 'Achievements', 'Schedule'].map((text, index) => (
            <ListItem
              button
              key={text}
              component={Link}
              to={index === 0 ? '/profile' : index === 1 ? '/my-courses' : '/Schedule'}
              selected={selectedIndex === index}
              sx={{
                mb: 3,
                bgcolor: selectedIndex === index ? 'transparent' : 'transparent',
                borderRadius: selectedIndex === index ? '0 20px 20px 0' : '0',
                pr: selectedIndex === index ? '20px' : '0',
                pl: '16px',
               
              }}
            >
              <ListItemIcon sx={{ color: '#fff' }}>
                {index === 0 && <AccountCircle />}
                {index === 1 && <Mail />}
                {index === 2 && <Event />}
                {index === 3 && <EmojiEvents />}
                {index === 4 && <Schedule />}
                {index === 5 && <Mail />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        
      </Box>

      {/* Main Content */}
      <Box sx={{ flex: 1, p: 2, bgcolor: '#e6ecff',marginTop:"80px" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={7}>
            <Card sx={{ mb: 2 }}>
              <CardContent>
                <Grid container spacing={1} alignItems="center">
                <BarChart
                  series={[
                    { data: [35, 44, 24, 34] },
                    { data: [51, 6, 49, 30] },
                    { data: [15, 25, 30, 50] },
                    { data: [60, 50, 15, 25] },
                  ]}
                  height={290}
                  xAxis={[{ data: ['Q1', 'Q2', 'Q3', 'Q4'], scaleType: 'band' }]}
                  margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
                />
                </Grid>
              </CardContent>
            </Card>

            <Card>
              <CardContent>
                <Typography variant="h6">Recent Courses</Typography>
                <Divider sx={{ my: 2 }} />
                <Box>
                  <Typography variant="body2">UX/UI Design — Applications</Typography>
                  <Typography variant="caption">Mobile application interface design... 12 lessons</Typography>
                  <Button variant="contained" color="success" size="small" sx={{marginLeft:"60px"}}>Completed</Button>
                </Box>
                <Divider sx={{ my: 2 }} />
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={5}>
            <Card sx={{ mb: 2 }}>
              <CardContent>
        

              </CardContent>
            </Card>
            <Card>
              <CardContent>
              <PieChart
                series={[
                  {
                    data,
                    highlightScope: { faded: 'global', highlighted: 'item' },
                    faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
                  },
                ]}
                height={200}
              />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Admindashboard;
