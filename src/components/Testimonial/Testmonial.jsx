import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import Qoute1 from '../../assets/qoutes1.svg';
import Qoute2 from '../../assets/qoutes2.svg';

const Testmonial = () => {
  return (
      <Box
          sx={{
              backgroundColor: '#FBF7F3',
              py: '3rem',
              my: 5
          }}
      >
          <Container>
              <Grid container>
                  <Grid item xs={12} md={6} >
                      <Box sx={{
                          display: 'flex',
                          alignItems: 'center',
                          flexDirection: 'column',
                          width:'75%'
                      }}>
                          <Typography component='p' variant='p' sx={{
                              position: 'relative',
                              fontWeight: 500,
                              color: '#EEA676',
                              '::before': {
                                  content: '""',
                                  position: 'absolute',
                                  width: '8.2rem',
                                  height: '3px',
                                  background: '#EEA676',
                                  top: '50%',
                                  transform: 'translateY(-50%)',
                                  right: '110%',
                              },
                          }}>
                              Team Members
                          </Typography>
                          <Typography
                              component='h3' variant='h3'
                              sx={{
                                  fontFamily: 'Outfit',
                                  fontWeight: 600,
                                  mb:3,
                                  textAlign: 'left'
                              }}
                          >
                              What Our Patients Say About Us
                          </Typography>
                          <Typography sx={{
                              position: 'relative',
                              fontFamily:'Outfit'
                          }}>
                              <span style={{
                                  position: 'absolute',
                                  top: '-10%',
                                  left:'-5%'
                              }}> <img src={Qoute1} alt="" srcset="" /></span> We are driven by a commitment to redefine the standards of patient care, always guided by the principle
                              that every individual deserves not just treatment, but genuine wellness. Let our journey continue to illuminate
                              the path of wellness for generations to come. <span>
                                  <img src={Qoute2} alt="" srcset="" />

                              </span>
                          </Typography>
                      </Box>
                  </Grid>
            </Grid>
          </Container>
      </Box>
  )
}

export default Testmonial