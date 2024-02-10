import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import Qoute1 from '../../assets/qoutes1.svg';
import Qoute2 from '../../assets/qoutes2.svg';
import ArrowForwardIcon from '../../assets/forwardArrow.svg';
import ArrowBackwardIcon from '../../assets/backArrow.svg';
import ReviewCard from './ReviewCard';

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
                          width:'85%'
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
                                  mb:5,
                                  textAlign: 'left'
                              }}
                          >
                              What Our Patients Say About Us
                          </Typography>
                          <Box sx={{
                              display: 'flex',
                              alignItems: 'start',
                              gap:3
                          }}>
                              <img src={Qoute1} alt="" srcset="" />
                              <Typography sx={{
                                  position: 'relative',
                                  fontFamily: 'Outfit',
                                  color: '#3C4253',
                                  fontSize:'1.2rem'
                              }}>
                                   We are driven by a commitment to redefine the standards of patient care, always guided by the principle
                                  that every individual deserves not just treatment, but genuine wellness. Let our journey continue to illuminate
                                  the path of wellness for generations to come.  <span>
                                      <img src={Qoute2} alt="" srcset="" />
                                  </span>
                              </Typography>
                          </Box>
                      </Box>
                  </Grid>
                  <Grid item xs={12} md={6} sx={{
                      display: 'flex',
                      alignItems: { xs: 'start', md: 'end' },
                      gap: 2,
                      position: 'relative',
                      flexDirection:{xs:'column'}
                  }}>
                      <Box >
                          <div className="review-button image-review-button-next">
                              <img src={ArrowForwardIcon} alt="" />
                          </div>
                          <div className="review-button image-review-button-prev">
                              <img src={ArrowBackwardIcon} alt="" />
                          </div>
                      </Box>
                      <ReviewCard styles={{
                          zIndex:2
                      }}/>
                      <ReviewCard styles={{
                          position: 'absolute',
                          top: '10%',
                          right:'0',
                          opacity: 0.5,
                          zIndex:1
                      }} />
                  </Grid>
            </Grid>
          </Container>
      </Box>
  )
}

export default Testmonial