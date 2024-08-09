import React, { useEffect, useState } from 'react';
import { Button, Grid, Input, InputLabel, Typography } from '@mui/material';
import image from '../../Images/login image.jpg';
import {CURRENT_USER_KEY, USERS_DATA_KEY} from "../../utils/constants/loaclStorageConstants";

function LoginInfo() {
  const [userData, setUserData] = useState({
    email: "",
    password: ""
  });

  const [errors, setErrors] = useState({
    emailErr: "",
    passwordErr: ""
  });

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
      console.log("Correct");
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
    <Grid container direction="row" justify="center" alignContent="center" alignItems="center" >

      <Grid item xs={12} sm={6} md={6} lg={6} xl={5} ml={5} sx={{ display: {  xs: 'none', sm: 'none', md: 'flex'}, justifyContent: 'left', alignItems: 'center', marginTop: '80px', marginLeft: '100px' }}>
        <img src={image} alt="login"  />
      </Grid>

      <Grid item xs={12} sm={6} md={6} lg={4} xl={6} sx={{ marginTop:'70px',
            marginLeft: {xs: 0, sm: 0, md: '80px',lg: 0, xl:0 },
            display: { md: 'flex'},
            justifyContent: 'center',
            alignItems: 'center'}} >
        <form onSubmit={handleSubmit}>
          <Typography variant="h4" fontWeight="bold">Login to your Account</Typography>
          <Grid container direction="column" sx={{ marginTop: 4 }}>
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
            <Grid item sx={{ marginTop: 2 }}>
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
              sx={{ backgroundColor: `rgb(71, 50, 233)`, marginTop: 4 }}
              style={{color:"white"}}
              disabled={errors.emailErr || errors.passwordErr}
              type="submit"
              fullWidth
            >
              Login
            </Button>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
}

export default LoginInfo;