import { Box, Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import bgImage from '../../assets/Ecom/bg-img.png';
import bgImg from '../../assets/Ecom/bg-img-1.png';

const Appointment = () => {
  return (
      <Container sx={{
          mb:'4rem'
      }}>
          <Grid container sx={{
              backgroundColor: '#036C5F',
              position:'relative',
          }}>
              <img src={bgImage} style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '20%',  // Adjust the width as needed
                  height: 'auto'
              }} alt="" />
              <img src={bgImg} style={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  width: '20%',  // Adjust the width as needed
                  height: 'auto'
              }} alt="" />
              <Grid item xs={12} sx={{
                  py:'6rem'
              }}>
                  <Typography component='h5' variant='h5' sx={{
                      textAlign: 'center',
                      fontFamily: 'Montserrat',
                      fontWeight: 600,
                      color:'white'
                  }}>
                      Schedule an Personal or Virtual <br /> Medical Appointment
                  </Typography>
                  <Box sx={{
                      display: 'flex',
                      justifyContent:'center'
                  }}>
                      <Button
                          variant='contained'
                          sx={{
                              backgroundColor: "#0FE3AF",
                              padding: '0.9rem 1.4rem',
                              fontFamily: 'Lato',
                              textTransform: 'none',
                              fontWeight: 700,
                              fontSize: '1rem',
                              mt: 2,
                              color:'black'
                          }}>
                          Book an Appointment
                      </Button>
                  </Box>
                 
              </Grid>
          </Grid>
    </Container>
  )
}

export default Appointment