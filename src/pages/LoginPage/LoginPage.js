import React, { useEffect, useState } from 'react';
import { Button, Grid, Input, InputLabel, Typography } from '@mui/material';
import image from '../../Images/login image.jpg';
import {CURRENT_USER_KEY, USERS_DATA_KEY} from "../../utils/constants/loaclStorageConstants";
import Box from "@mui/material/Box";
import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {userLogin} from "../../redux/actions/authActions";
import {getCurrentUser} from "../../services/auth_service";

function LoginInfo() {
  const [userData, setUserData] = useState({
    email: "",
    password: ""
  });

  const [errors, setErrors] = useState({
    emailErr: "",
    passwordErr: ""
  });

  const {userItem, isLoggedIn} = useSelector(state => state.auth)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/;


  useEffect(() => {
    // Retrieve data from local storage and set it to state
    const storedEmail = localStorage.getItem('Email');
    const storedPassword = localStorage.getItem('Password');

    if (storedEmail && storedPassword) {
      setUserData({
        email: JSON.parse(storedEmail),
        password: JSON.parse(storedPassword)
      });
    }
  }, []);

  const changeUserData = (e) => {
    if (e.target.name === "email") {
      setUserData({
        ...userData,
        email: e.target.value
      });
      setErrors({
        ...errors,
        emailErr: e.target.value.length === 0 ? "Email is Required" : !emailRegex.test(e.target.value) && "Please write a valid email!"
      });
    } else {
      setUserData({
        ...userData,
        password: e.target.value
      });
      setErrors({
        ...errors,
        passwordErr: e.target.value.length === 0 ? "Password is Required" : !passwordRegex.test(e.target.value) && "Use at least 8 characters, at least one uppercase, one lowercase and number"
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted!');
    //TODO: Handel Login || Done
    if (isPasswordCorrect(userData.email, userData.password)) {
      loginUser(userData.email);
      //TODO: route to home page
      console.log(userData);
      dispatch(userLogin(getCurrentUser()));
      navigate('/');
    } else {
      //TODO: Alert user --> incorrect password || Done
      setErrors({...errors, passwordErr: "check password"})

    }

  };

  // check if password is correct @return bool
  function isPasswordCorrect(email, password) {
    let data = localStorage.getItem(USERS_DATA_KEY);
    let usersData = JSON.parse(data);
    let isUserCorrect = false;

    usersData.forEach(element => {
      if (element.user.email == email && password == element.user.password) {
        isUserCorrect = true;
      }
    });
    return isUserCorrect;
  }


  function loginUser(email) {
    let data = localStorage.getItem(USERS_DATA_KEY);
    let usersData = JSON.parse(data);
    let currentUser;

    usersData.forEach(element => {
      if (element.user.email == email) {
        currentUser = element;
      }
    });

    sessionStorage.setItem(CURRENT_USER_KEY, JSON.stringify(currentUser));
  }



  return (
    <Grid
      container direction="row"
      justify="center"
      alignContent="center"
      alignItems="center"
      style={{

      }}
    >

      <Box

        sx={{
          width:'50%',
          padding:'0',
          margin:'0',
          display: {  xs: 'none', sm: 'none', md: 'flex'},

        }}
      >
        <img
          src={image} alt="login"
          style={{
            width:'100%',
            height:'100vh',
            objectFit:'cover',
          }}
        />
      </Box>

      <Grid
       sx={{
         width:{  xs: '100%', sm: '100%', md: '50%'},
         height:{  xs: '100vh', sm: '100vh', md: '100%'},
       }}
      >

        <Box
          style={{
            display:'flex',
            height:'100%',
            width:'100%',
            justifyContent:'center',
            alignItems:'center',
            flexDirection:'column'
          }}
        >
          <Box
            style={{
              display:'flex',
              alignItems:'center',
              padding:'3rem 0',
              cursor:'pointer'
            }}
            onClick={()=>{
              navigate('/')
            }}
          >
            <img
              style={{
                borderRadius:'50%',
                height:'4rem',
                width:'4rem',
                margin:'1rem',
              }}
              src={require('assets/images/logos/website_logo.png')}/>
            <Typography>
              S K I L L I F Y
            </Typography>
          </Box>
          <form onSubmit={handleSubmit}>
            <Typography variant="h4" fontWeight="bold">Login to your Account</Typography>
            <Grid container direction="column" sx={{marginTop: 4}}>
              <Grid item>
                <InputLabel shrink> Email Address </InputLabel>
                <Input
                  type="email"
                  name="email"
                  value={userData.email}
                  onChange={(e) => changeUserData(e)}
                  fullWidth
                />
                <Typography color="error">{errors.emailErr}</Typography>
              </Grid>
              <Grid item sx={{marginTop: 2}}>
                <InputLabel shrink> Password </InputLabel>
                <Input
                  type="password"
                  name="password"
                  value={userData.password}
                  onChange={(e) => changeUserData(e)}
                  fullWidth
                />
                <Typography color="error">{errors.passwordErr}</Typography>
              </Grid>
              <Button
                variant="contained"
                sx={{backgroundColor: `rgb(71, 50, 233)`, marginTop: 4}}
                style={{color: "white"}}
                disabled={errors.emailErr || errors.passwordErr}
                type="submit"
                fullWidth
              >
                Login
              </Button>
              <Box style={{
                padding:'1rem'
              }}>
                <Typography>
                  Did not have an account? <Link to={"/register"}>Register here</Link>
                </Typography>
              </Box>
            </Grid>
          </form>
        </Box>
      </Grid>
    </Grid>
  );
}

export default LoginInfo;