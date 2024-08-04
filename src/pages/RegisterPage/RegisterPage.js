import React, { useState } from 'react';
import { Grid, TextField, Button, Typography } from '@mui/material';

function RegisterInfo() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmpassword] = useState('');
  const [errors, setErrors] = useState({
    nameErr: '',
    emailErr: '',
    usernameErr: '',
    passwordErr: '',
    confirmpasswordErr: '',
  });

  const NameRegex = /^[a-zA-Z.'-]+$/;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const usernameRegex = /^[a-zA-Z0-9_]+$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/;

  const changeUserData = (e) => {
    if (e.target.name === 'name') {
      setName(e.target.value);
      setErrors({
        ...errors,
        nameErr: e.target.value.length === 0 ? 'Name is required' : e.target.value.length < 2 ? 'Please Enter your Real Name' : !NameRegex.test(e.target.value) && 'Please Enter a valid Name!',
      });
    } else if (e.target.name === 'email') {
      setEmail(e.target.value);
      setErrors({
        ...errors,
        emailErr: e.target.value.length === 0 ? 'Email is Required' : !emailRegex.test(e.target.value) && 'Please Enter a valid Email!',
      });
    } else if (e.target.name === 'username') {
      setUsername(e.target.value);
      setErrors({
        ...errors,
        usernameErr: e.target.value.length === 0 ? 'User Name is Required' : !usernameRegex.test(e.target.value) && 'Enter a Username without any spaces or special char!',
      });
    } else if (e.target.name === 'password') {
      setPassword(e.target.value);
      setErrors({
        ...errors,
        passwordErr: e.target.value.length === 0 ? 'Password is Required' : !passwordRegex.test(e.target.value) && 'Use at least 8 characters, one uppercase, one lowercase and number',
      });
    } else if (e.target.name === 'confirmedpassword') {
      setConfirmpassword(e.target.value);
      setErrors({
        ...errors,
        confirmpasswordErr: e.target.value.length === 0 ? 'Confirm Password please' : password !== e.target.value && 'Password doesn\'t match!',
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <Grid container direction="column" justify="center" alignContent="center" alignItems="center">
      <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
        <Typography variant="h4" fontWeight="bold">Register</Typography>
        <Grid container direction="column" sx={{ marginTop: 4 }}>
          <Grid item>
            <TextField
              label="Name"
              variant="outlined"
              value={name}
              onChange={(e) => changeUserData(e)}
              error={errors.nameErr !== ''}
              helperText={errors.nameErr}
            />
          </Grid>
          <Grid item sx={{ marginTop: 2 }}>
            <TextField
              label="Email"
              type="email"
              variant="outlined"
              value={email}
              onChange={(e) => changeUserData(e)}
              error={errors.emailErr !== ''}
              helperText={errors.emailErr}
            />
          </Grid>
          <Grid item sx={{ marginTop: 2 }}>
            <TextField
              label="Username"
              type="text"
              variant="outlined"
              value={username}
              onChange={(e) => changeUserData(e)}
              error={errors.usernameErr !== ''}
              helperText={errors.usernameErr}
            />
          </Grid>
          <Grid item sx={{ marginTop: 2 }}>
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              value={password}
              onChange={(e) => changeUserData(e)}
              error={errors.passwordErr !== ''}
              helperText={errors.passwordErr}
            />
          </Grid>
          <Grid item sx={{ marginTop: 2 }}>
            <TextField
              label="Confirm Password"
              type="password"
              variant="outlined"
              value={confirmpassword}
              onChange={(e) => changeUserData(e)}
              error={errors.confirmpasswordErr !== ''}
              helperText={errors.confirmpasswordErr}
            />
          </Grid>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            disabled={
              errors.nameErr !== '' || errors.emailErr !== '' || errors.usernameErr !== '' || errors.passwordErr !== '' || errors.confirmpasswordErr !== ''
            }
          >
            Register
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default RegisterInfo;