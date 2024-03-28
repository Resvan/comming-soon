import { Avatar, Box, Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import AboutImage from '../../assets/Ecom/about.png';
import ListImage from '../../assets/Ecom/list-img.png';

const About = () => {
  return (
      <Container sx={{
          background: `url(${AboutImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          py:'6rem'

      }}>
          
          <Grid container>
              <Grid item xs={12} md={6}>
                  
              </Grid>
              <Grid item xs={12} md={6}>
                  <Box sx={{
                      backgroundColor: 'white',
                      padding:'3rem 2.5rem'
                  }}>
                      <Box sx={{
                          display: 'flex',
                      }}>
                          <Typography variant="p" sx={{
                              fontFamily: 'Lato',
                              textTransform: 'uppercase',
                              color: '#363636',
                              letterSpacing: '4px',
                              padding: '5px 15px',
                              border: '1px solid rgba(206, 206, 206, 0.50)',
                              lineHeight: 'normal',
                              mb:1
                          }}>About us</Typography>
                      </Box>
                      <Typography component='h4' variant='h4' sx={{
                          color: '#143450',
                          fontSize: { xs: '1rem', md: '2rem' },
                          fontFamily: 'Montserrat',
                          fontWeight: 600,
                          mb:2
                      }}>
                          The Heart And Science <br /> Of Medicate Test
                      </Typography>
                      <Typography component='p' variant='body'
                          sx={{
                              fontFamily: 'Montserrat',
                              color: '#545454',
                              fontWeight: 400,
                              lineHeight: '28px',
                              mb:1
                      }}>
                          We thoroughly evaluate & treat all of the contributing root factors related to your issue. This includes, but is not limited to, your work and home stressors.
                      </Typography>

                      <Box sx={{
                          mt: 3,
                          display: 'flex',
                          justifyContent:'space-between'
                      }}>
                          <Box sx={{
                              display: 'flex',
                              gap: 2,
                              alignItems: 'center',
                              fontFamily:'Lato'
                          }}>
                              <Avatar sx={{
                                  backgroundColor: 'white',
                                  width: 40,
                                  height: 40,
                                  padding: '0.8rem',
                                  border: '1px solid #0FE3AF'
                              }}>
                                  <img src={ListImage} alt="Treatment" style={{ width: '70%', height: '70%', }} />
                              </Avatar>
                              <Typography component={'p'} variant='p' sx={{
                                  color: '#000',
                                  fontWeight:400
                              }}>
                                  Multi Specialty <br /> Pharma Treatment
                              </Typography>
                          </Box>
                          <Box sx={{
                              display: 'flex',
                              gap: 2,
                              alignItems: 'center',
                              fontFamily: 'Lato'
                          }}>
                              <Avatar sx={{
                                  backgroundColor: 'white',
                                  width: 40,
                                  height: 40,
                                  padding: '0.8rem',
                                  border: '1px solid #0FE3AF'
                              }}>
                                  <img src={ListImage} alt="Treatment" style={{ width: '70%', height: '70%', }} />
                              </Avatar>
                              <Typography component={'p'} variant='p' sx={{
                                  color: '#000',
                                  fontWeight: 400,
                                  lineHeight: '22px',
                                  letterSpacing:'0.3px'
                              }}>
                                  Multi Specialty <br /> Pharma Treatment
                              </Typography>
                          </Box>
                      </Box>
                      <Button
                          variant='contained'
                          sx={{
                          backgroundColor: "#036C5F",
                          padding: '0.9rem 1.4rem',
                          fontFamily: 'Lato',
                          textTransform: 'none',
                          fontWeight: 500,
                          mt: 5,
                          fontSize:'1rem'
                      }}>
                          More About Us
                      </Button>
                </Box>
              </Grid>
          </Grid>
          
    </Container>
    )
}

export default About