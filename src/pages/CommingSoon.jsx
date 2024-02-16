import React, { useEffect, useState } from 'react'
import { Box, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import logoImage from '../assets/gp-1.svg';
import socialIcons from '../assets/Social-Icons.png';
import bgImage from '../assets/Img.png';
import PulseBeams from '../components/PulseBeam';
import { Controller, useForm } from 'react-hook-form';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

const CommingSoon = () => {


    const [isSubscribed, setSubscribed] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const { control, reset, handleSubmit, formState: { errors } } = useForm();

    const subscribeEmail = async (data) => {
        try {
            setIsLoading(true);
            let res = await axios.post('https://gnana-prakasam.onrender.com/subscribe', data);
            if (res.data.message) {
                toast.success(res.data.message);
            };
            reset();
            setIsLoading(false)
            setSubscribed(true);
        } catch (error) {
            setIsLoading(false);
            if (error.response.data.error) {
                toast.error(error.response.data.error)
            }
        }
    }






    const onSubmit = (data) => {
        subscribeEmail(data);
    };

  return (

      <Grid container sx={{
          height: '100vh'
      }}>
          <Grid item xs={12} md={4} padding={3} >
              <Box sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  height: '100%',
                  gap: 2
              }}>
                  <div style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center'
                  }} >
                      <img src={logoImage} style={{
                          height: '5rem'
                      }} alt="" />
                      <Typography sx={{
                          textAlign: 'center',
                          fontWeight: 700,
                          mt: 3,
                          fontFamily: 'Poppins',
                      }} variant='h4'>
                          Celebrate Health, Embrace Ayurveda
                      </Typography>

                      <Typography sx={{
                          textAlign: 'left',
                          mt: 7,
                          fontWeight: 700,
                          fontFamily:'Poppins'
                      }}>
                          Get notified when we get live!
                      </Typography>
                      <form onSubmit={handleSubmit(onSubmit)}>
                          <Controller
                              name="email"
                              control={control}
                              defaultValue=""
                              rules={{ required: 'Email is required', pattern: { value: /^\S+@\S+$/i, message: 'Invalid email' } }}
                              render={({ field }) => (
                                  <TextField
                                      {...field}
                                      placeholder='Enter your email'
                                      margin="normal"
                                      fullWidth
                                      variant="outlined"
                                      sx={{
                                          borderRadius: '24px',
                                      }}
                                      error={!!errors.email}
                                      helperText={errors.email?.message}
                                  />
                              )}
                          />
                          <Button
                              variant='contained'
                              type='submit'
                              disabled={isLoading || isSubscribed}
                              sx={{
                                  backgroundColor: "#27AE60",
                                  width: '100%',
                                  '&:hover': {
                                      backgroundColor: '#27AE60'
                                  },
                                  fontWeight: 500,
                                  fontFamily: 'Poppins',
                                  ":disabled": {
                                      backgroundColor: "#27AE60",
                                      color: 'white'
                                  }
                              }}
                              onClick={handleSubmit}
                          >
                              {isLoading ? <CircularProgress size={24} style={{
                                  color:'white'
                              }} /> : (isSubscribed ? 'Subscribed' : 'Subscribe')}
                          </Button>
                      </form>
                      <Typography sx={{
                          textAlign: 'center',
                          fontFamily: 'Poppins',
                          mt: 5,
                      }} variant='p'>Certified of Good Manufacturing Practice in accordance with WHO standards
                      </Typography>
                  </div>
                  <Box sx={{
                      display: { xs: 'none', md: 'flex' },
                      alignItems: 'center',
                      flexDirection: 'column'
                  }}>
                      <img src={socialIcons} alt="" />
                      <Typography sx={{
                          textAlign: 'center',
                          fontFamily: 'Poppins',
                          fontSize: '0.7rem'
                      }} variant='p' component='p'>
                          © Copyrights Gnana Prakasham | All Rights Reserved
                      </Typography>
                  </Box>

              </Box>
          </Grid>

          <Grid item xs={12} md={8} sx={{
              background: `linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), url(${bgImage}) lightgray 50% / cover no-repeat`,
              height: "100vh"
          }}>
              <PulseBeams />
          </Grid>
          <Grid item xs={12} sx={{
              display: { xs: 'flex', md: 'none' },
              justifyContent: 'center',
              padding: 2
          }}>
              <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  flexDirection: 'column'
              }}>
                  <img src={socialIcons} alt="" />
                  <Typography sx={{
                      textAlign: 'center',
                      fontFamily: 'Outfit',
                      fontSize: '0.7rem'
                  }} variant='p' component='p'>
                      © Copyrights Gnana Prakasham | All Rights Reserved
                  </Typography>
              </div></Grid>
          <Toaster />
      </Grid>
  )
}

export default CommingSoon