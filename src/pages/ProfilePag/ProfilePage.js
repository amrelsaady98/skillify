import React, { useEffect, useState } from 'react';
import profilePic from '../../../src/assets/images/ivana-squares.jpg'
import axios from 'axios';
import {
  Box,
  Grid,
  Avatar,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
} from '@mui/material';
import {
  AccountCircle,
  Event,
  EmojiEvents,
  Schedule,
  Mail,
  Payment,
  CreditCard,
} from '@mui/icons-material';

function ProfilePage(){

    const [courses, setCourses] = useState([]);

    const [selectedIndex, setSelectedIndex] = useState(0);
    const [userData, setUserData] = useState({
        email: "",
        password: ""
      });

      useEffect(() => {
        // Retrieve data from local storage and set it to state
        const storedName = localStorage.getItem('Name');
        const storedEmail = localStorage.getItem('Email');
        const storedPassword = localStorage.getItem('Password');
    
        if (storedEmail && storedPassword) {
          setUserData({
            name: JSON.parse(storedName),
            email: JSON.parse(storedEmail),
            password: JSON.parse(storedPassword)
          });
        }
      }, []);

      useEffect(() => {
        axios.get(`https://66b17fd61ca8ad33d4f44343.mockapi.io/api/v2/courses`)
          .then((res) => setCourses(res.data))
          .catch((err) => console.log(err));
      }, []);

    const handleListItemClick = (index) => {
        setSelectedIndex(index);
    };

  return (
    <Box sx={{ display: 'flex', height: '100vh'}}>
      {/* Sidebar */}
      <Box sx={{ width: '300px', bgcolor: '#5c52d2', color: '#fff', p: 2, position: 'relative',marginTop:"80px" }}>
        <Typography variant="h4" sx={{ mb: 4 }}>
          SUCCESS
        </Typography>
        <List sx={{ mb: 4 }}>
          {['Profile', 'My Courses', 'Events', 'Achievements', 'Schedule', 'Messages'].map((text, index) => (
            <ListItem
              button
              key={text}
              selected={selectedIndex === index}
              onClick={() => handleListItemClick(index)}
              sx={{
                mb: 2,
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
          <Grid item xs={12} md={8}>
            <Card sx={{ mb: 2 }}>
              <CardContent>
                <Grid container spacing={2} alignItems="center">
                  <Grid item>
                    <Avatar sx={{ width: 100, height: 100 }}>
                      <img src={profilePic} alt="Avatar" style={{ width: '100%', height: '100%' }} />
                    </Avatar>
                  </Grid>
                  <Grid item>
                    <Typography variant="h5">{userData.name}</Typography>
                    <Typography variant="body2">Registration Date: November 24, 2022</Typography>
                    <Typography variant="body2">Country, City: Egypt, Cairo</Typography>
                    <Typography variant="body2">Date of Birth: April 8, 1993</Typography>
                    <Typography variant="body2">E-mail: {userData.email}</Typography>
                    <Typography variant="body2">Phone: +378 265 236 25</Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>

            <Card>
              <CardContent>
                <Typography variant="h6">My Courses</Typography>
                
                {courses.map((course, index) => (
                  <Box sx={{ mt: 2 }}>
                    <Typography variant="body2">{course.title}</Typography>
                    <Button variant="contained" color="success" size="small" sx={{marginLeft:"40px"}}>Completed</Button>
                  </Box>
                ))}
                <Divider sx={{ my: 2 }} />
                <Box>
                  <Typography variant="body2">UX/UI Design — Applications</Typography>
                  <Typography variant="caption">Mobile application interface design... 12 lessons</Typography>
                  <Button variant="contained" color="success" size="small" sx={{marginLeft:"60px"}}>Completed</Button>
                </Box>
                <Divider sx={{ my: 2 }} />
                <Box>
                  <Typography variant="body2">UX/UI Design — Animation</Typography>
                  <Typography variant="caption">Animation elements in interface... 12 lessons</Typography>
                  <Button variant="contained" color="info" size="small" sx={{marginLeft:"60px"}}>Started: June 13, 2023</Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card sx={{ mb: 2 }}>
              <CardContent>
                <Typography variant="h6">Payment Information</Typography>
                <Typography variant="body2">Card Number: 236 *** *** 265</Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                  <Payment />
                  <CreditCard />
                </Box>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <Typography variant="h6">Individual Success Premium Subscription</Typography>
                <Typography variant="body2">1 month Premium for free</Typography>
                <Typography variant="body2">2 months free for students</Typography>
                <Typography variant="body2">Cancel anytime</Typography>
                <Typography variant="body2">Best deals, discounts, and offers every month</Typography>
              </CardContent>
              <CardActions>
                <Button variant="contained" color="primary" style={{color:"white"}}>Subscribe</Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default ProfilePage;
