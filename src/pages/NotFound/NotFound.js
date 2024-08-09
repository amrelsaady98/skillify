import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import notfoundImg from '../../Images/notfound.svg'
const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
    marginTop: theme.spacing(0),
  },
  logo: {
    margin: '0 auto',
    marginTop: "90px",
    marginBottom: theme.spacing(5),
  },
  button: {
    marginTop: theme.spacing(1),
    color: 'white',
  },
  link: {
    textDecoration: 'none',
  },
}));

const NotFound = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Box>
        <img
          src={notfoundImg}
          alt="Logo"
          className={classes.logo}
          style={{ width: '600px' }}
        />
      </Box>
      <Typography variant="h5" component="h2" gutterBottom>
        Ooops! Page Not Found
      </Typography>
      <Typography variant="body1" color="textSecondary">
        This page doesn't exist or was removed! We suggest you back to home.
      </Typography>
      <Box mt={3}>
        <Button
          variant="contained"
          className={classes.button}
          href="/"
        >
          Back to Home
        </Button>
      </Box>
    </Container>
  );
};

export default NotFound;
