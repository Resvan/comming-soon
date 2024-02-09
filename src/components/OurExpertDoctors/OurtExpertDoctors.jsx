import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import DoctorSlider from './DoctorSlider'

const OurtExpertDoctors = () => {

    
  return (
      <Container sx={{
          my: 5,
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
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
                  mb: 8,
                  textAlign: 'center'
              }}
          >
              Our Expert Doctors
          </Typography>
          <DoctorSlider/>
    </Container>
  )
}

export default OurtExpertDoctors