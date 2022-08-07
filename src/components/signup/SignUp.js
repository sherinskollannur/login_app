import React, { useEffect, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useHistory } from 'react-router-dom';
import { userActions } from '../../store/user';
import { useDispatch, useSelector } from 'react-redux';

export default function SignUp() {
  const theme = createTheme();
  const history = useHistory();

  const dispatch = useDispatch();
  const userData = useSelector((state) => state.users);
  const [signUpData, setSignUpData] = useState();

  const duplicateUserCheck = (data) => {
    let index = userData.findIndex((user) => user.email === data.get('email'));
    if (index === -1) {
      dispatch(
        userActions.addUserData({
          email: data.get('email'),
          password: data.get('password'),
          userName: data.get('firstName') + ' ' + data.get('lastName'),
          userType: 'user',
        })
      );
      history.push('/');
      alert('User Created');
    } else {
      alert('User already existed..Try another email');
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    setSignUpData(data);
    if (
      data.get('email') &&
      data.get('password') &&
      data.get('firstName') &&
      data.get('lastName')
    ) {
      duplicateUserCheck(data);
    }
  };

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}></Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                    error={signUpData && signUpData.get('firstName') === ''}
                    helperText={
                      signUpData && signUpData.get('firstName') === ''
                        ? 'Empty!'
                        : ' '
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="family-name"
                    error={signUpData && signUpData.get('lastName') === ''}
                    helperText={
                      signUpData && signUpData.get('lastName') === ''
                        ? 'Empty!'
                        : ' '
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    error={signUpData && signUpData.get('email') === ''}
                    helperText={
                      signUpData && signUpData.get('email') === ''
                        ? 'Empty!'
                        : ' '
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    // error
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                    error={signUpData && signUpData.get('password') === ''}
                    helperText={
                      signUpData && signUpData.get('password') === ''
                        ? 'Empty!'
                        : ' '
                    }
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item xs>
                  <Link
                    onClick={() => {
                      history.push('/');
                    }}
                    variant="body2"
                  >
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
}
