import React, { useState } from 'react';
import { Button, Grid, Input, InputLabel, Typography } from '@mui/material';
import image from '../../Images/login image.jpg';

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
  };

  return (
    <Grid container direction="row" justify="center" alignContent="center" alignItems="center" >

      <Grid item xs={12} sm={6} md={6} lg={6} xl={6} ml={5}style={{ display: 'flex', justifyContent: 'left', alignItems: 'center', marginTop: '80px', marginLeft: '100px' }}>
        <img src={image} alt="image"  />
      </Grid>

      <Grid item xs={12} sm={6} md={6} lg={4} xl={6}>
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