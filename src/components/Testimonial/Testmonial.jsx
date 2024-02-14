import { Avatar, Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import Qoute1 from '../../assets/qoutes1.svg';
import Qoute2 from '../../assets/qoutes2.svg';
import ArrowForwardIcon from '../../assets/forwardArrow.svg';
import ArrowBackwardIcon from '../../assets/backArrow.svg';
import CeoImage from '../../assets/ceo.png';
import SuffleCard from './SuffleCard';
import NewSlider from './NewSldert';
import TestmonialShape from '../../assets/testmonial-shape.svg'

const Testmonial = () => {
  return (
      <Box
          sx={{
              backgroundColor: '#FBF7F3',
              py: '6rem',
              mt: 5,
              position:'relative'
          }}
      >
          <Container>
              <Grid container >
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
                                  width: '10.5rem',
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
                      <Box sx={{
                          display: 'flex',
                          mt: 4,
                          gap:2,
                      }}>
                          <Avatar style={{
                              height: '3rem',
                              width:'3rem'
                          }} src={CeoImage} />
                          <Box sx={{
                              display: 'flex',
                              flexDirection:'column'
                          }}>
                              <Typography sx={{
                                  fontFamily: 'Outfit',
                                  color: '#042622',
                                  fontWeight: '600',
                                  textWrap: 'nowrap'
                              }}>Olivia Parker</Typography>
                              <Typography sx={{
                                  fontFamily: 'Outfit',
                                  color: '#3C4253',
                                  fontSize: '0.9rem'
                              }}>CEO & Founder</Typography>
                          </Box>
                      </Box>
                  </Grid>
                  <Grid item xs={12} md={6} sx={{
                      display: {xs:'none', md:'flex'},
                      gap: 2,
                      position: 'relative',
                  }}>
                      {/* <Box sx={{
                          alignSelf:'end'
                      }}>
                          <div className="review-button image-review-button-next">
                              <img src={ArrowForwardIcon} alt="" />
                          </div>
                          <div className="review-button image-review-button-prev">
                              <img src={ArrowBackwardIcon} alt="" />
                          </div>
                      </Box> */}
                      <SuffleCard/>
                  </Grid>
                  <Grid item xs={12} sx={{
                      display: { xs: 'block', md: 'none' },
                      position: 'relative',
                      minHeight:'18rem',
                     mt:15
                  }}>
                      
                    <SuffleCard/>
                      {/* <Box sx={{
                          display: 'flex',
                          justifyContent: 'end',
                          gap: 2,
                          mt:2
                      }}>
                          <div className="review-button">
                              <img src={ArrowBackwardIcon} alt="" />
                          </div>
                          <div className="review-button image-review-button-next">
                              <img src={ArrowForwardIcon} alt="" />
                          </div>
                      </Box> */}
                  </Grid>
                  {/* <Grid item md={6} style={{
                      position: 'relative'
                  }} >
                      {Array.from({ length: 5 }, (_, index) => (
                      <NewSlider key={index} active={index} />
                                  ))}
                      <Box sx={{
                          display: 'flex',
                          justifyContent: 'end',
                          gap: 2,
                          mt: 5
                      }}>
                          <div className="review-button">
                              <img src={ArrowBackwardIcon} alt="" />
                          </div>
                          <div className="review-button image-review-button-next">
                              <img src={ArrowForwardIcon} alt="" />
                          </div>
                      </Box>
                  </Grid> */}
              </Grid>
              
          </Container>
          <Box sx={{
              position:'absolute',
              right: '0',
              bottom: '2%',
          }}>
              <img style={{
                  height:'8rem'
              }} src={TestmonialShape} alt="" />
          </Box>
      </Box>
  )
}

export default Testmonial