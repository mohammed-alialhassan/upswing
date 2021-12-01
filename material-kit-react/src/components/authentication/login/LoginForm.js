import * as Yup from 'yup';
import React, { useState, useContext, useEffect } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useFormik, Form, FormikProvider } from 'formik';
import { Icon } from '@iconify/react';
import eyeFill from '@iconify/icons-eva/eye-fill';
import eyeOffFill from '@iconify/icons-eva/eye-off-fill';
import axios from 'axios';
// material
import {
  Link,
  Stack,
  Checkbox,
  TextField,
  IconButton,
  InputAdornment,
  FormControlLabel
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { values } from 'lodash';
import GlobalState from '../../GlobalState';

// ----------------------------------------------------------------------

export default function LoginForm() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  // May have to change to state/useState to match global state import (ex in app.js)
  const [login, setLogin] = useContext(GlobalState);


  const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Email must be a valid email address').required('Email is required'),
    password: Yup.string().required('Password is required')
  });

  let username = '';
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      username: '',
      remember: true
    },
    validationSchema: LoginSchema,
    onSubmit: () => {
      axios.post("http://localhost:8081/login", {
        email: values.email,
        password: values.password,
      }).then((res) => {
        username = res.data.data.username
        console.log(res)
      })
      setLogin(login => ({...login,
        email: values.email,
        password: values.password,
        username: username.username
      }))
      navigate('/dashboard/watchlist', { replace: true });
    }
  });
  console.log(login);
/*
If you want to update a state based on a previous state, we do the following:
setState(state => ({...state, count: state.count + 1}));
*/



  const { errors, touched, values, isSubmitting, handleSubmit, getFieldProps } = formik;
  const handleShowPassword = () => {
    setShowPassword((show) => !show);
  };

  /* Server error config (May need to remove handleSubmit from being defined twice)
  const emailAlreadyInUse= [];
  const handleSubmit = (values, {
    setSubmitting,
    setFieldError,
    setStatus
  }) => {
    axios.post("http://localhost:8081/login", values)
      .then(
        () => {
          // Do something
          // possibly reset emailsAlreadyInUse if needed unless component is going to be unmounted.
        },
        (error) => {
          // example of setting error
          setFieldError('email', 'email is already used');
          // Assuming error object you receive has data object that has email property
          emailAlreadyInUse.push(error.data.email);
        })
      .finally(() => {
        setSubmitting(false)
      });
  };
*/


 return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <TextField
            fullWidth
            autoComplete="email"
            type="email"
            label="Email address"
            {...getFieldProps('email')}
            error={Boolean(touched.email && errors.email)}
            helperText={touched.email && errors.email}
          />

          <TextField
            fullWidth
            autoComplete="current-password"
            type={showPassword ? 'text' : 'password'}
            label="Password"
            {...getFieldProps('password')}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleShowPassword} edge="end">
                    <Icon icon={showPassword ? eyeFill : eyeOffFill} />
                  </IconButton>
                </InputAdornment>
              )
            }}
            error={Boolean(touched.password && errors.password)}
            helperText={touched.password && errors.password}
          />
        </Stack>

        <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
          <FormControlLabel
            control={<Checkbox {...getFieldProps('remember')} checked={values.remember} />}
            label="Remember me"
          />

          <Link component={RouterLink} variant="subtitle2" to="#">
            Forgot password?
          </Link>
        </Stack>

        <LoadingButton
          fullWidth
          size="large"
          type="submit"
          variant="contained"
          loading={isSubmitting}
        >
          Login
        </LoadingButton>
      </Form>
    </FormikProvider>
  );
}
