import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react';
import whyUsImage from '../../assets/whyUsImage.png'

const WhyUs = () => {
  return (
      <Box
          sx={{
              backgroundColor: '#FBF7F3',
              py: '3rem',
              mt:5
          }}
      >
          <Container>
              <Grid container >
                  <Grid item xs={12} md={6}  sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent:'center'
                  }}>
                      <img src={whyUsImage} alt="" style={{
                          height: '100%',
                          width:'60%'
                      }} />
                  </Grid>
                  <Grid item container xs={12} md={6} >
                      <Grid item xs={12} sx={{
                          maxHeight: '3rem'
                      }}>
                          <Box sx={{
                              display: 'flex',
                              gap: 2,
                              justifyContent: 'center'
                          }}>
                              <div style={{
                                  height: '2px',
                                  width: '5rem',
                                  backgroundColor: '#EEA676',
                                  alignSelf: 'center'
                              }}></div>
                              <Typography component='p' variant='p' sx={{
                                  color: '#EEA676',
                                  fontFamily: 'Outfit',
                                  position: 'relative',
                                  fontWeight: 500
                              }}>
                                  Why Choose Us
                              </Typography>
                          </Box>
                          <Typography component='h4' variant='h4' sx={{
                              textAlign: 'left',
                              fontFamily: 'Outfit',
                              fontWeight: 600,
                              mt: 1
                          }}>
                              Your Journey to Better <br /> Health Starts Here
                          </Typography>
                      </Grid>
                      <Grid item xs={6}>1</Grid>
                      <Grid item xs={6}>1</Grid>
                      <Grid item xs={6}>1</Grid>
                      <Grid item xs={6}>1</Grid>
                  </Grid>

              </Grid>
          </Container>
    </Box>
  )
}

export default WhyUs