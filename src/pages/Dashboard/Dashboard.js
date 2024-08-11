import React, {useEffect, useState} from 'react';
import {BarChart} from '@mui/x-charts/BarChart';
import { PieChart } from '@mui/x-charts/PieChart';
import Stack from '@mui/material/Stack';

import {
  Box,
  Button,
  Card,
  CardContent,
  CircularProgress,
  Divider,
  Grid, Input,
  LinearProgress,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Pagination,
  TextField,
  Typography,
} from '@mui/material';
import {AccountCircle, Add, Logout, EmojiEvents, Mail, Menu, Schedule} from '@mui/icons-material';
import {Link, useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {addCourse, fetchCourses} from "../../redux/actions/coursesActions";
import {grey, teal} from "@mui/material/colors";
import Container from "@mui/material/Container";

function Admindashboard() {

  const navigate = useNavigate();

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [page, setPage] = React.useState(1);


  const pieParams = { height: 200, margin: { right: 5 } };

  const [createCourseData, setCreateCourseData] = React.useState({
    title: '',
    description: '',
    details: {
      duration: '',
      startDate: '',
      applicationDeadline: '',
      adminFee: '',
      commitment: '',
    },
    highlights: [
      "Learning a Collection of AI Tools",
      "Hands-on Experience",
      "Creating a Professional Tool Kit"
    ],
    weeklyWorkflow: [
      {"week": 1, "title": "Getting Smart About AI", "description": "Understand fundamental AI concepts and trends."},
      {
        "week": 2,
        "title": "Improving Your Persona",
        "description": "Enhance your personal branding and professional presence."
      },
      {
        "week": 3,
        "title": "Becoming More Creative at Work",
        "description": "Learn how AI can boost your creativity and productivity."
      },
      {
        "week": 4,
        "title": "Becoming a Superhero at Work",
        "description": "Develop skills to excel in your current role with AI."
      },
      {
        "week": 5,
        "title": "Mastering AI for Entrepreneurship",
        "description": "Use AI tools to innovate and drive business success."
      },
      {
        "week": 6,
        "title": "Bringing It All Together",
        "description": "Integrate your learning and prepare for the future."
      }
    ],
    outcomes: [
      {
        "title": "Comprehensive Understanding of AI",
        "description": "Deep dive into LLM, GenAI, GPT, and effective AI prompting."
      },
      {
        "title": "Empowered Professional Growth",
        "description": "Leverage AI tools to enhance your job search, CVs, and personal branding."
      },
      {
        "title": "Entrepreneurial Empowerment & Execution",
        "description": "Craft business plans and develop websites using AI tools to drive innovation."
      }
    ],
    callToAction: {
      "text": "Ready to Get Started?",
      "description": "For more information or to begin your journey, reach out to LEA, your ALX AI Assistant. Start gaining in-demand job skills today!"
    },
    imageURL: "https://via.placeholder.com/300?text=AI+Career+Essentials"

  });
  const [createCourseDataErr, setCreateCourseDataErr] = React.useState({
    titleErr: '',
    descriptionErr: '',
    durationErr: '',
    startDateErr: '',
    applicationDeadlineErr: '',
    adminFeeErr: '',
    commitmentErr: '',
  });

  useEffect(() => {
    console.log(createCourseData)
  }, [createCourseData]);

  const dispatch = useDispatch();
  const {data, isLoading, error} = useSelector((state) => state.courses);


  useEffect(() => {
    dispatch(fetchCourses(`p=1&l=8`))
  }, []);

  useEffect(() => {
    dispatch(fetchCourses(`p=${page}&l=8`))
  }, [page]);

  const handleChange = (event, value) => {
    setPage(value);
  };

  const isInputValid = () => {
    const currentDate = new Date().toISOString().split('T')[0];
    const { startDate, applicationDeadline } = createCourseData.details;

    let errors = {
      titleErr: '',
      descriptionErr: '',
      durationErr: '',
      startDateErr: '',
      applicationDeadlineErr: '',
      adminFeeErr: '',
      commitmentErr: ''
    };

    if (!createCourseData.title) errors.titleErr = 'Title is required';
    if (!createCourseData.description) errors.descriptionErr = 'Description is required';
    if (!createCourseData.details.duration) errors.durationErr = 'Duration is required';
    if (!createCourseData.details.adminFee) errors.adminFeeErr = 'Admin Fee is required';
    if (!createCourseData.details.commitment) errors.commitmentErr = 'Commitment is required';

    if (startDate < currentDate) errors.startDateErr = 'Start date must be today or later';
    if (applicationDeadline && startDate && applicationDeadline <= startDate) errors.applicationDeadlineErr = 'Application deadline must be after start date';

    setCreateCourseDataErr(errors);

    return Object.values(errors).every(error => error === '');

/* 
    for (let [key, value] of Object.entries(createCourseDataErr)) {
      if (value.length > 0){
        return false
      }
    }
    return true; */
  }

  const handleLogout = () => {
    localStorage.removeItem("currentUser"); // Remove user data
    navigate("/login"); // Redirect to login page
  };

  const sideBarItems = ['overview', 'My Courses', 'Add Course']
  return (
    <Box sx={{display: 'flex', height: '100vh'}}>
      {/* Sidebar */}
      <Box sx={{width: '250px', bgcolor: '#2d2562', color: '#ffffff', p: 2, position: 'relative',}}>
        <Typography variant="h4" sx={{mb: 4, color: '#ffffff'}}>
          Skillify Academy
        </Typography>
        <List sx={{mb: 4}}>
          {sideBarItems.map((text, index) => (
            <ListItem
              button
              key={text}
              component={Link}
              // to={index === 0 ? '/profile' : index === 1 ? '/my-courses' : '/Schedule'}
              selected={selectedIndex === index}
              sx={{
                mb: 3,
                bgcolor: selectedIndex === index ? 'transparent' : 'transparent',
                borderRadius: selectedIndex === index ? '0 20px 20px 0' : '0',
                pr: selectedIndex === index ? '20px' : '0',
                pl: '16px',

              }}
              onClick={() => {
                setSelectedIndex(index)
              }}
            >
              <ListItemIcon sx={{color: '#fff'}}>
                {index === 0 && <AccountCircle/>}
                {index === 1 && <Menu/>}
                {index === 2 && <Add/>}
                {index === 3 && <EmojiEvents/>}
                {index === 4 && <Schedule/>}
                {index === 5 && <Mail/>}
              </ListItemIcon>
              <ListItemText primary={text}/>
            </ListItem>
          ))}
          <ListItem>
              <Button 
                variant="text"
                sx={{color: '#fff', fontSize:'18px',marginTop: "300px"}}
                onClick={handleLogout} >
                  <ListItemIcon sx={{color: '#fff'}}>
                    <Logout/>
                  </ListItemIcon>
                  Logout
              </Button>
          </ListItem>
        </List>
      </Box>

      {/* Main Content */}
      {selectedIndex == 0 && <Box sx={{flex: 1, p: 2, bgcolor: '#e6ecff', marginTop: "80px"}}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={7}>
            <Card sx={{mb: 2}}>
              <CardContent>
                <Grid container spacing={1} alignItems="center">
                  <BarChart
                    series={[
                      {data: [35, 44, 24, 34]},
                      {data: [51, 6, 49, 30]},
                      {data: [15, 25, 30, 50]},
                      {data: [60, 50, 15, 25]},
                    ]}
                    height={290}
                    xAxis={[{data: ['Q1', 'Q2', 'Q3', 'Q4'], scaleType: 'band'}]}
                    margin={{top: 10, bottom: 30, left: 40, right: 10}}
                  />
                </Grid>
              </CardContent>
            </Card>

            <Card>
              <CardContent>
                <Typography variant="h6">Recent Courses</Typography>
                <Divider sx={{my: 3}}/>
                <Box>
                  <Typography variant="body2">UX/UI Design — Applications</Typography>
                  <Typography variant="caption">Mobile application interface design... 12 lessons</Typography>
                  <Button variant="contained" color="success" size="small" sx={{marginLeft: "60px"}}>Completed</Button>
                </Box>
                <Divider sx={{my: 2}}/>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={5}>
            <Card sx={{mb: 2}}>
              <CardContent>
                <Typography variant="subtitle2" color="textSecondary">
                  TOTAL STUDENTS
                </Typography>
                <Typography variant="h4">
                  700.0
                </Typography>
                <Typography variant="body2" style={{ color: 'green' }}>
                  16% Since last month
                </Typography>
              </CardContent>
            </Card>

            <Card sx={{mb: 2}}>
              <CardContent>
                <Typography variant="subtitle2" color="textSecondary">
                  COMPLETED COURSES
                </Typography>
                <Typography variant="h4">
                  33.2%
                </Typography>
                <Box mt={2}>
                  <LinearProgress variant="determinate" value={33.2} style={{ height: 10, borderRadius: 5 }} />
                </Box>
              </CardContent>
            </Card>

            <Card>
              <CardContent>
              <Stack direction="row" width="100%" textAlign="center" spacing={2}>
                  <Box flexGrow={1}>
                    <Typography>Courses PieChart</Typography>
                    <PieChart
                      series={[{ data: [{ value: 10 }, { value: 15 }, { value: 20 }] }]}
                      {...pieParams}
                    />
                  </Box>
                </Stack>
              </CardContent>
            </Card>
            
          </Grid>
        </Grid>
      </Box>}
      {selectedIndex == 1 &&
        <Box
          style={{
            width: '100%',
          }}
        >
          <Box
            style={{
              width: '100%',
              padding: '1rem',
              display: 'grid',
              gridTemplateColumns: 'repeat(6, 1fr)',
              justifyContent: 'center',
              textAlign: 'center'
            }}>
            <Typography variant={'caption'}>Name</Typography>
            <Typography variant={'caption'}>Admin Fee</Typography>
            <Typography variant={'caption'}>Duration</Typography>
            <Typography variant={'caption'}>Start Date</Typography>
            <Typography variant={'caption'}>Application DeadLine</Typography>
          </Box>
          <Divider/>

          {!isLoading &&
            data.map((item, index) => (
              <>
                <Box
                  style={{
                    width: '100%',
                    padding: '1rem',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(6, 1fr)',
                    justifyContent: 'center',
                    textAlign: 'center',
                    background: index % 2 == 0 ? 'white' : grey['100'],
                    cursor: 'pointer',

                  }}
                  onClick={() => {
                    navigate(`/course/${item.id}`)
                  }}
                >
                  <Typography variant={'caption'}>{item.title}</Typography>
                  <Typography variant={'caption'}>{item.details.adminFee}</Typography>
                  <Typography variant={'caption'}>{item.details.duration}</Typography>
                  <Typography variant={'caption'}>{item.details.startDate}</Typography>
                  <Typography variant={'caption'}>{item.details.applicationDeadline}</Typography>
                </Box>
                <Divider style={{
                  height: '2px',
                  padding: '0',
                  margin: '0'
                }}/>

              </>
            ))
          }
          {
            isLoading && <Box
              style={{
                height: '500px',
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <CircularProgress/>
            </Box>
          }
          <Container sx={{height: "100%", m: '2rem'}}>
            <Grid container item justifyContent="center" xs={12} lg={6} mx="auto" height="100%">
              <Pagination
                count={5}
                page={page}
                onChange={handleChange}
              />
            </Grid>
          </Container>
        </Box>
      }

      {
        selectedIndex == 2 &&
        <Box
          style={{
            width: '100%'
          }}
        >
          <Box

            style={{
              width: '100%',
              padding: '2rem',
              backgroundColor: teal['100'],
            }}
          >
            <Typography variant={'h3'}>
              Add New Course
            </Typography>
          </Box>
          <Box
            style={{
              width: '60%',
              padding:'2rem',
              display:'flex',
              flexDirection: 'column',
            }}
          >
              <TextField
                label={'title'}
                type={'text'}
                variant={'outlined'}
                value={createCourseData.title}
                error={createCourseDataErr.titleErr}
                helperText={createCourseDataErr.titleErr}
                onChange={(e) => {
                  setCreateCourseData({
                    ...createCourseData,
                    title: e.target.value
                  });
                }}
                onFocus={()=>{
                  setCreateCourseDataErr({...createCourseDataErr, titleErr: ''})
                }}
                onBlur={(e)=>{
                  if (!e.target.value) {
                    setCreateCourseDataErr({...createCourseDataErr, titleErr: 'required'})
                  }
                }}

                style={{
                  margin:'0.5rem'
                }}
              />
              <TextField
                label={'description'}
                type={'text'}
                variant={'outlined'}
                multiline={true}
                rows={3}
                value={createCourseData.description}
                error={createCourseDataErr.descriptionErr}
                helperText={createCourseDataErr.descriptionErr}
                onChange={(e) => {
                  setCreateCourseData({
                    ...createCourseData,
                    description: e.target.value
                  });
                }}
                onFocus={()=>{
                  setCreateCourseDataErr({...createCourseDataErr, descriptionErr: ''})
                }}
                onBlur={(e)=>{
                  if (!e.target.value) {
                    setCreateCourseDataErr({...createCourseDataErr, descriptionErr: 'required'})
                  }
                }}
                style={{
                  margin:'0.5rem'
                }}
              />
              <TextField
                label={'duration'}
                type={'text'}
                variant={'outlined'}
                value={createCourseData.details.duration}
                error={createCourseDataErr.durationErr}
                helperText={createCourseDataErr.durationErr}
                onChange={(e) => {
                  setCreateCourseData({
                    ...createCourseData,
                    details: {
                      ...createCourseData.details,
                      duration: e.target.value
                    }
                  });
                }}
                onFocus={()=>{
                  setCreateCourseDataErr({...createCourseDataErr, durationErr: ''})
                }}
                onBlur={(e)=>{
                  if (!e.target.value) {
                    setCreateCourseDataErr({...createCourseDataErr, durationErr: 'required'})
                  }
                }}
                style={{
                  margin:'0.5rem'
                }}
              />
              <TextField
                label={'Admen Fee'}
                type={'text'}
                variant={'outlined'}
                value={createCourseData.details.adminFee}
                error={createCourseDataErr.adminFeeErr}
                helperText={createCourseDataErr.adminFeeErr}
                onChange={(e) => {
                  setCreateCourseData({
                    ...createCourseData,
                    details: {
                      ...createCourseData.details,
                      adminFee: e.target.value
                    }
                  });
                }}
                onFocus={()=>{
                  setCreateCourseDataErr({...createCourseDataErr, adminFeeErr: ''})
                }}
                onBlur={(e)=>{
                  if (!e.target.value) {
                    setCreateCourseDataErr({...createCourseDataErr, adminFeeErr: 'required'})
                  }
                }}
                style={{
                  margin:'0.5rem'
                }}
              />
              <TextField
                label={'Commitment'}
                type={'text'}
                variant={'outlined'}
                value={createCourseData.details.commitment}
                error={createCourseDataErr.commitmentErr}
                helperText={createCourseDataErr.commitmentErr}
                onChange={(e) => {
                  setCreateCourseData({
                    ...createCourseData,
                    details: {
                      ...createCourseData.details,
                      commitment: e.target.value
                    }
                  });
                }}
                onFocus={()=>{
                  setCreateCourseDataErr({...createCourseDataErr, commitmentErr: ''})
                }}
                onBlur={(e)=>{
                  if (!e.target.value) {
                    setCreateCourseDataErr({...createCourseDataErr, commitmentErr: 'required'})
                  }
                }}
                style={{
                  margin:'0.5rem'
                }}
              />
              <TextField
                label={'Start Date'}
                type={'date'}
                variant={'outlined'}
                value={createCourseData.details.startDate}
                error={createCourseDataErr.startDateErr}
                helperText={createCourseDataErr.startDateErr}
                onChange={(e) => {
                  setCreateCourseData({
                    ...createCourseData,
                    details: {
                      ...createCourseData.details,
                      startDate: e.target.value
                    }
                  });
                }}
                sx={{
                  '& .MuiInputBase-input': {
                    textAlign: 'right', // Align the input text to the right
                  },
                  '& .MuiFormLabel-root': {
                    textAlign: 'right', // Align the label text to the right
                  },
                }}
                onFocus={()=>{
                  setCreateCourseDataErr({...createCourseDataErr, startDateErr: ''})
                }}
                onBlur={(e)=>{
                  if (!e.target.value) {
                    setCreateCourseDataErr({...createCourseDataErr, startDateErr: 'required'})
                  }
                }}
                style={{
                  margin:'0.5rem'
                }}
              />
              <TextField
                label={'Application Deadline'}
                type={'date'}
                variant={'outlined'}
                value={createCourseData.details.applicationDeadline}
                error={createCourseDataErr.applicationDeadlineErr}
                helperText={createCourseDataErr.applicationDeadlineErr}
                onChange={(e) => {
                  setCreateCourseData({
                    ...createCourseData,
                    details: {
                      ...createCourseData.details,
                      applicationDeadline: e.target.value
                    }
                  });
                }}
                sx={{
                  '& .MuiInputBase-input': {
                    textAlign: 'right', // Align the input text to the right
                  },
                  '& .MuiFormLabel-root': {
                    textAlign: 'right', // Align the label text to the right
                  },
                }}
                onFocus={()=>{
                  setCreateCourseDataErr({...createCourseDataErr, applicationDeadlineErr: ''})
                }}
                onBlur={(e)=>{
                  if (!e.target.value) {
                    setCreateCourseDataErr({...createCourseDataErr, applicationDeadlineErr: 'required'})
                  }
                }}
                style={{
                  margin:'0.5rem'
                }}
              />

              <Button variant={'contained'} color='success'  style={{
                  margin:'0.5rem'
                }} onClick={()=>{
                if (isInputValid()) {
                  dispatch(addCourse(createCourseData))
                }
              }}>
                <Typography>
                  Add Course
                </Typography>
              </Button>

          </Box>
        </Box>
      }

    </Box>
  );
}

export default Admindashboard;

