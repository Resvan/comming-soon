import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import logoImage from '../../assets/gp-1.svg';
import Facebook from '../../assets/facebook.svg';
import Linkedin from '../../assets/linkedin.svg';
import Instagram from '../../assets/instagram.svg';


const Footer = () => {
  return (
      <footer>
          <Box
              sx={{
                  backgroundColor: '#FBF7F3',
                  py: '4rem',
                  position: 'relative'
              }}
          >
              <Container>
                  <Grid container>
                      <Grid item xs={12} sm={6} md={3}>
                          <img src={logoImage}  alt="" />
                          <Typography component='p' variant='p' sx={{
                              fontFamily: 'Outfit',
                              mt: 1,
                              fontSize: '1rem',
                              color: '#3C4253'
                          }}>From wellness tips to expert advice, we're here to support your journey to a healthier you.
                          </Typography>
                          <Box sx={{
                              mt:3
                          }}>
                              <img src={Facebook} alt="" />
                              <img src={Instagram} style={{
                                marginLeft:'0.5rem'
                              }} alt="" />
                              <img src={Linkedin} style={{
                                marginLeft:'0.5rem'
                              }} alt="" />
                          </Box>
                      </Grid>
                      <Grid item xs={12} sm={6} md={2} sx={{
                          display: 'flex',
                          justifyContent:{xs:'start',md:'center'}
                      }}>
                          <Box >
                              <Typography component='h6' variant='h6' sx={{
                                  fontFamily: 'Outfit',
                                  fontSize: '1.2rem',
                                  color: '#036C5F',
                                  fontWeight: 700,
                                  textAlign: 'left'
                              }}>
                                  Quick Links
                              </Typography>
                              <Typography sx={{
                                  fontFamily: 'Outfit',
                                  textAlign: 'left',
                                  color: '#3C4253',
                                  fontSize: '1rem',
                                  mt: 4,
                                  fontWeight:500,
                              }}>
                                  &gt; About 
                              </Typography>
                              <Typography sx={{
                                  fontFamily: 'Outfit',
                                  textAlign: 'left',
                                  color: '#3C4253',
                                  fontSize: '1rem',
                                  mt: 2,
                                  fontWeight:500,
                              }}>
                                  &gt; Services
                              </Typography>
                              <Typography sx={{
                                  fontFamily: 'Outfit',
                                  textAlign: 'left',
                                  color: '#3C4253',
                                  fontSize: '1rem',
                                  mt: 2,
                                  fontWeight:500,
                              }}>
                                  &gt; Products
                              </Typography>
                              <Typography sx={{
                                  fontFamily: 'Outfit',
                                  textAlign: 'left',
                                  color: '#3C4253',
                                  fontSize: '1rem',
                                  mt: 2,
                                  fontWeight:500,
                              }}>
                                  &gt; Facilities
                              </Typography>
                              <Typography sx={{
                                  fontFamily: 'Outfit',
                                  textAlign: 'left',
                                  color: '#3C4253',
                                  fontSize: '1rem',
                                  mt: 2,
                                  fontWeight:500,
                              }}>
                                  &gt; Doctors
                              </Typography>
                              <Typography sx={{
                                  fontFamily: 'Outfit',
                                  textAlign: 'left',
                                  color: '#3C4253',
                                  fontSize: '1rem',
                                  mt: 2,
                                  fontWeight:500,
                              }}>
                                  &gt; Contact
                              </Typography>
                          </Box>
                         
                      </Grid>
                      <Grid item xs={12} sm={6} md={4} sx={{
                          display: 'flex',
                          justifyContent:{xs:'start',md:'center'}
                      }}>
                          <Box >
                              <Typography component='h6' variant='h6' sx={{
                                  fontFamily: 'Outfit',
                                  fontSize: '1.2rem',
                                  color: '#036C5F',
                                  fontWeight: 700,
                                  textAlign: 'left'
                              }}>
                                  Opening Hours
                              </Typography>
                              <Typography sx={{
                                  fontFamily: 'Outfit',
                                  textAlign: 'left',
                                  color: '#3C4253',
                                  fontSize: '1rem',
                                  mt: 4,
                                  fontWeight: 500,
                              }}>
                                  Mon - Tues <span style={{
                                      marginLeft:'4rem'
                                  }}>08:00 AM - 05:00PM</span>
                              </Typography>
                              <Typography sx={{
                                  fontFamily: 'Outfit',
                                  textAlign: 'left',
                                  color: '#3C4253',
                                  fontSize: '1rem',
                                  mt: 4,
                                  fontWeight: 500,
                              }}>
                                  Wed - Thu <span style={{
                                      marginLeft: '4rem'
                                  }}>09:00 AM - 06:00PM</span>
                              </Typography>
                              <Typography sx={{
                                  fontFamily: 'Outfit',
                                  textAlign: 'left',
                                  color: '#3C4253',
                                  fontSize: '1rem',
                                  mt: 4,
                                  fontWeight: 500,
                              }}>
                                  Fri - Sat <span style={{
                                      marginLeft: '4rem'
                                  }}>08:00 AM - 05:00PM</span>
                              </Typography>
                              <Typography sx={{
                                  fontFamily: 'Outfit',
                                  textAlign: 'left',
                                  color: '#3C4253',
                                  fontSize: '1rem',
                                  mt: 4,
                                  fontWeight: 500,
                              }}>
                                  Sunday <span style={{
                                      marginLeft: '4rem'
                                  }}>Emergency Only</span>
                              </Typography>
                              <Typography sx={{
                                  fontFamily: 'Outfit',
                                  textAlign: 'left',
                                  color: '#3C4253',
                                  fontSize: '1rem',
                                  mt: 4,
                                  fontWeight: 500,
                              }}>
                                  Personal<span style={{
                                      marginLeft: '4rem'
                                  }}>Mon - 05:00PM</span>
                              </Typography>
                          </Box>
                      </Grid>
                      <Grid item xs={12} sm={6} md={3} sx={{
                          display: 'flex',
                          justifyContent: 'center'
                      }}>
                          <Box >
                              <Typography component='h6' variant='h6' sx={{
                                  fontFamily: 'Outfit',
                                  fontSize: '1.2rem',
                                  color: '#036C5F',
                                  fontWeight: 700,
                                  textAlign: 'left'
                              }}>
                                  Contact
                              </Typography>
                              <Typography sx={{
                                  fontFamily: 'Outfit',
                                  textAlign: 'left',
                                  color: '#3C4253',
                                  fontSize: '1rem',
                                  mt: 4,
                                  fontWeight: 500,
                              }}>
                                  82 New street . NY 1013
                              </Typography>
                              <Typography sx={{
                                  fontFamily: 'Outfit',
                                  textAlign: 'left',
                                  color: '#3C4253',
                                  fontSize: '1rem',
                                  mt: 2,
                                  fontWeight: 500,
                              }}>
                                  (987) 654 - 3210
                              </Typography>
                              </Box>
                      </Grid>
                  </Grid>
              </Container>
          </Box>
    </footer>
  )
}

export default Footer
