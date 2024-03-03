import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import Stethoscope from '../assets/stethoscope.svg';
import Medicine from '../assets/medicine.svg';
import NewDoctor from '../assets/NewDoctor.png';
import Footer from '../components/Footer/Footer';


const Doctors = () => {

    const doctorsData = new Array(9).fill(null);


  return (
      <>
          <Box
              sx={{
                  color: 'white',
                  pt: 2,
                  pb: '5rem',
                  position: 'relative',
                  backgroundColor: '#036C5F',
              }}>
              <NavBar />
              <Container sx={{
                  mt: '5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
              }}>
                  <Box sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 2,
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
                          fontWeight: 500,
                          fontSize: '1.2rem'
                      }}>
                          Our Experts
                      </Typography>
                  </Box>
                  <Typography sx={{
                      fontFamily: "Outfit",
                      fontWeight: 600,
                      textAlign: 'center',
                      fontSize: { xs: '2rem', md: '3.5rem' },
                      mt: 2,
                      letterSpacing:'1.36px'
                  }} variant='h2' component='h2' >
                      Healthcare Excellence: Introducing <br /> Our Expert Doctors
                  </Typography>
              </Container>
              <Box
                  sx={{
                      position: 'absolute',
                      bottom: '-5%',
                      left: '1%',
                      transform: 'translateY(-55%)', // Center vertically
                      zIndex: 1, // Ensure SVG is above other content
                  }}
              >
                  <img src={Stethoscope} style={{
                      height: '6rem'
                  }} alt="" />
              </Box>
              <Box
                  sx={{
                      position: 'absolute',
                      right: '1%',
                      bottom: '20%',
                      transform: 'translateY(-60%)', // Center vertically
                      zIndex: 1, // Ensure SVG is above other content

                  }}
              >
                  <img src={Medicine} style={{
                      height: '5rem'
                  }} alt="" />
              </Box>
          </Box>
          <Container sx={{
              py: '4rem',
              mb: '4rem',
          }}>
              <Grid container spacing={5}>
                  {doctorsData.map((_, index) => (
                      <Grid item key={index} xs={12} sm={6} md={4} sx={{
                          textAlign: 'center',
                          color: '#042622',
                          '&:hover': {
                              color: '#036C5F',
                              '& > *': {
                                  color: '#036C5F'
                              },
                          },
                      }}>
                          <Box sx={{
                              backgroundColor: '#FBF7F3',
                              display: 'flex',
                              alignItems: 'end',
                              mb: 2,
                              pt: 2
                          }}>
                              <img src={NewDoctor} style={{
                                  objectFit: 'contain'
                              }} alt="" />
                          </Box>
                          <Typography component='h6' variant='h6' sx={{
                              color: '#042622',
                              fontFamily: "Outfit",
                              fontWeight: 600,
                          }}>
                              Jessica Miller
                          </Typography>
                          <Typography sx={{
                              color: '#3C4253',
                              fontFamily: "Outfit",
                              fontWeight: 500,
                          }}>
                              Gynecology
                          </Typography>
                      </Grid>
                  ))}
              </Grid>
          </Container>
          <Footer/>
      </>
  )
}

export default Doctors