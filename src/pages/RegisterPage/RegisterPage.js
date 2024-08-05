
import React, { useState } from 'react';
import { Grid, TextField, Button, Typography } from '@mui/material';
import image from '../../Images/login image.jpg';
import "./RegisterPage.css"


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

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if there are any errors
    const hasErrors = Object.values(errors).some(err => err);

    if (!hasErrors) {
      // Save data to local storage
      localStorage.setItem('Name', JSON.stringify(userData.name));
      localStorage.setItem('Email', JSON.stringify(userData.email));
      localStorage.setItem('Password', JSON.stringify(userData.password));
      console.log('Form submitted and data saved to local storage!');
      // Optionally, reset form data or redirect user
      setUserData({
        name: "",
        email: "",
        username: "",
        password: "",
        confirmpassword: ""
      });
      // Optionally, clear local storage or show a success message
    } else {
      console.log('Form contains errors. Please fix them before submitting.');
    }
  };

  return (
    <Grid container direction="row" justify="center" alignContent="center" alignItems="center">

         <Grid item xs={12} sm={6} md={6} lg={6} xl={5} ml={5} sx={{ display: {  xs: 'none', sm: 'none', md: 'flex'}, justifyContent: 'left', alignItems: 'center', marginTop: '80px', marginLeft: '100px' }}>
          <img src={image} alt="registerImage"  />
         </Grid>

        <Grid item xs={12} sm={6} md={6} lg={4} xl={6} sx={{ marginTop:'70px',
            marginLeft: {xs: 0, sm: 0, md: '80px',lg: 0, xl:0 },
            display: { md: 'flex'},
            justifyContent: 'center',
            alignItems: 'center'}} >
          <form onSubmit={handleSubmit}>
            <Typography variant="h4" fontWeight="bold">Sign Up and get started !</Typography>
            <Grid container direction="column" sx={{ marginTop: 4 }}>
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
                  sx={{ borderColor: !!errors.nameErr ? 'error' : 'none' }} // Set border color to error if there's an error
              />
              </Grid>
              <Grid item sx={{ marginTop: 2 }}>
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
                sx={{ borderColor: !!errors.emailErr ? 'error' : 'none' }}
              />
              </Grid>
              <Grid item sx={{ marginTop: 2 }}>
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
                  sx={{ borderColor: !!errors.usernameErr ? 'error' : 'none' }}
              />
              </Grid>
              <Grid item sx={{ marginTop: 2 }}>
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
                  sx={{ borderColor: !!errors.passwordErr ? 'error' : 'none' }}
                />
              </Grid>
              <Grid item sx={{ marginTop: 2 }}>
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
                  sx={{ borderColor: !!errors.confirmpasswordErr ? 'error' : 'none' }}
              />
              </Grid>
              <Button
                variant="contained"
                sx={{ backgroundColor: `rgb(71, 50, 233)`, marginTop: 4 }}
                style={{color:"white"}}
                type="submit"
                fullWidth
                disabled={!!(
                  errors.nameErr  || errors.emailErr || errors.usernameErr|| errors.passwordErr  || errors.confirmpasswordErr)}
              >
                Register
              </Button>
            </Grid>
          </form>
        </Grid>
    </Grid>
  );
}

export default RegisterInfo;
