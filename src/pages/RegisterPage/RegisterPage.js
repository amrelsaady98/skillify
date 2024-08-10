
import React, { useState } from 'react';
import { Grid, TextField, Button, Typography } from '@mui/material';
import image from '../../Images/login image.jpg';
import "./RegisterPage.css"
import {USERS_DATA_KEY} from "../../utils/constants/loaclStorageConstants";
import Box from "@mui/material/Box";
import {Link} from "react-router-dom";


function RegisterInfo() {



  const [userData, setUserData] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
    confirmpassword: ""
  });

  const [errors, setErrors] = useState({
    nameErr: '',
    emailErr: '',
    usernameErr: '',
    passwordErr: '',
    confirmpasswordErr: '',
  });

  const NameRegex = /^[a-zA-Z.'-]+ ([a-zA-Z.'-]+)?$/;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const usernameRegex = /^[a-zA-Z0-9_]+$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/;

  const changeUserData = (e) => {
    if (e.target.name === 'name') {
      setUserData({
        ...userData,
        name: e.target.value
      });
      setErrors({
        ...errors,
        nameErr: e.target.value.length === 0 ? 'Name is required' : e.target.value.length < 2 ? 'Please Enter your Real Name' : !NameRegex.test(e.target.value) && 'Please Enter a valid Name!',
      });
    } else if (e.target.name === 'email') {
      setUserData({
        ...userData,
        email: e.target.value
      });
      setErrors({
        ...errors,
        emailErr: e.target.value.length === 0 ? "Email is Required" : !emailRegex.test(e.target.value) && "Please write a valid email!"
      });
    } else if (e.target.name === 'username') {
      setUserData({
        ...userData,
        username: e.target.value
      })
      setErrors({
        ...errors,
        usernameErr: e.target.value.length === 0 ? 'User Name is Required' : !usernameRegex.test(e.target.value) && 'Enter a Username without any spaces or special char!',
      });
    } else if (e.target.name === 'password') {
      setUserData({
        ...userData,
        password: e.target.value
      })
      setErrors({
        ...errors,
        passwordErr: e.target.value.length === 0 ? 'Password is Required' : !passwordRegex.test(e.target.value) && 'Use at least 8 characters, one uppercase, one lowercase and number',
      });
    } else if (e.target.name === 'confirmedpassword') {
      setUserData({
        ...userData,
        confirmpassword: e.target.value
      })
      setErrors({
        ...errors,
        confirmpasswordErr: e.target.value.length === 0 ? 'Confirm Password please' : userData.password !== e.target.value && 'Password doesn\'t match!',
      });
    }
  };

  function addUserToLocalStorage(user = {name:'', email:'', password:''}) {
    // fetch all user from localStorage --> transform to json Object [{}, {}, {}...]
    let localDataStr = localStorage.getItem(USERS_DATA_KEY);
    let data = JSON.parse(localDataStr); // [{}, {}, {}...]
    if (data == null || data.length === 0){
      data = [];
    }
    // append new user
    data.push({user:user, courses:[]});
    // save data to localStorage
    localStorage.setItem(USERS_DATA_KEY, JSON.stringify(data));
  }

  function isUserExist(email) {
    let data = localStorage.getItem(USERS_DATA_KEY);
    let usersData = JSON.parse(data);
    let isUserExist = false;

    if (usersData == null || usersData.length === 0) {
      console.log("there are no users in db");
      return false;
    }

    usersData.forEach(element => {
      if (element.user.email === email) {
        isUserExist = true;
      }
    });

    return isUserExist;
  }


  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if there are any errors
    // great job! -->
    const hasErrors = Object.values(errors).some(err => err);

    if (!hasErrors) {
      // Save data to local storage
      //DONE: save items in list
      if(isUserExist(userData.email)) {
        setErrors({
          ...errors,
          emailErr: 'User Already Exist !!',
        })
      } else {
        addUserToLocalStorage({
          name: userData.name,
          email: userData.email,
          password: userData.password,
        })

        // console.log('Form submitted and data saved to local storage!');
        // Optionally, reset form data or redirect user
        setUserData({
          name: "",
          email: "",
          username: "",
          password: "",
          confirmpassword: ""
        });
        //TODO: alert user --> account registered

      }

      // Optionally, clear local storage or show a success message
    } else {
      console.log('Form contains errors. Please fix them before submitting.');
    }
  };

  return (
    <Grid container direction="row" justify="center" alignContent="center" alignItems="center">

      <Box

        sx={{
          width:{  xs: '100%', sm: '100%', md: '50%', lg: '60%'},
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
            width:{  xs: '100%', sm: '100%', md: '50%', lg: '40%'},
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
            <form onSubmit={handleSubmit}>
              <Typography variant="h4" fontWeight="bold">Sign Up and get started !</Typography>
              <Grid container direction="column" sx={{marginTop: 4}}>
                <Grid item>
                  <TextField
                    label="Name"
                    variant="outlined"
                    name="name"
                    value={userData.name}
                    onChange={(e) => changeUserData(e)}
                    error={!!errors.nameErr} // Set error to true if there's an error
                    helperText={errors.nameErr}
                    fullWidth
                    sx={{borderColor: !!errors.nameErr ? 'error' : 'none'}} // Set border color to error if there's an error
                  />
                </Grid>
                <Grid item sx={{marginTop: 2}}>
                  <TextField
                    label="Email"
                    type="email"
                    name="email"
                    variant="outlined"
                    value={userData.email}
                    onChange={(e) => changeUserData(e)}
                    error={!!errors.emailErr}
                    helperText={errors.emailErr}
                    fullWidth
                    sx={{borderColor: !!errors.emailErr ? 'error' : 'none'}}
                  />
                </Grid>
                <Grid item sx={{marginTop: 2}}>
                  <TextField
                    label="Username"
                    type="text"
                    name="username"
                    variant="outlined"
                    value={userData.username}
                    onChange={(e) => changeUserData(e)}
                    error={!!errors.usernameErr}
                    helperText={errors.usernameErr}
                    fullWidth
                    sx={{borderColor: !!errors.usernameErr ? 'error' : 'none'}}
                  />
                </Grid>
                <Grid item sx={{marginTop: 2}}>
                  <TextField
                    label="Password"
                    type="password"
                    name="password"
                    variant="outlined"
                    value={userData.password}
                    onChange={(e) => changeUserData(e)}
                    error={!!errors.passwordErr}
                    helperText={errors.passwordErr}
                    fullWidth
                    sx={{borderColor: !!errors.passwordErr ? 'error' : 'none'}}
                  />
                </Grid>
                <Grid item sx={{marginTop: 2}}>
                  <TextField
                    label="Confirm Password"
                    type="password"
                    name="confirmedpassword"
                    variant="outlined"
                    value={userData.confirmpassword}
                    onChange={(e) => changeUserData(e)}
                    error={!!errors.confirmpasswordErr}
                    helperText={errors.confirmpasswordErr}
                    fullWidth
                    sx={{borderColor: !!errors.confirmpasswordErr ? 'error' : 'none'}}
                  />
                </Grid>
                <Button
                  variant="contained"
                  sx={{backgroundColor: `rgb(71, 50, 233)`, marginTop: 4}}
                  style={{color: "white"}}
                  type="submit"
                  fullWidth
                  disabled={!!(
                    errors.nameErr || errors.emailErr || errors.usernameErr || errors.passwordErr || errors.confirmpasswordErr)}
                >
                  Register
                </Button>
              </Grid>
            </form>
            <Box style={{
              padding:'1rem'
            }}>
              <Typography>
                Already have an account? <Link to={"/login"}>Login here</Link>
              </Typography>
            </Box>
          </Box>

        </Grid>
    </Grid>
  );
}

export default RegisterInfo;
