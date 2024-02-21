import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import authenticTreatment from '../../assets/authenticTreatment.png';
import PersonalGuidence from '../../assets/PersonalGuidence.png';
import ExpertDoctor from '../../assets/ExpertDoctor.png';
import PatientsCare from '../../assets/PatientsCare.png';
import FaciltiyItem from './FaciltiyItem';
import topArrowPrimary from '../../assets/topArrowPrimary.svg';


const Facilities = () => {
  return (
      <Container sx={{
          my: '5rem',
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
              Our Working Facilities
          </Typography>
          <Typography
              component='h3' variant='h3'
              sx={{
                  fontFamily: 'Outfit',
                  fontWeight: 600,
                  mb: 2,
                  mt:1,
                  textAlign:'center'
              }}
          >
              Our Way of Operation
          </Typography>
          <Box sx={{
              display: 'flex',
              justifyContent:'center'
          }}>
              <Typography sx={{
                  fontFamily: 'Outfit',
                  width: '60%',
                  textAlign: 'center',
              }}>
                  Blandit enim augue sit faucibus vitae ornare tortor velit. Quisque hendrerit etiam eget odio fermentum dolor. Aliquet nibh scelerisque massa at eleifend pretium.
              </Typography>
          </Box>
          <Grid container mt={3}>
              <FaciltiyItem
                  heading={'Authentic Treatments'}
                  description={'Cursus sed eget in molestie mauris placerat suspendisse.'}
                  imageUrl={authenticTreatment}
              />
              <FaciltiyItem
                  heading={'Personal Guidance'}
                  description={'Sit tincidunt neque at ipsum ligula. At vitae amet ultrices.'}
                  imageUrl={PersonalGuidence}
              />
              <FaciltiyItem
                  heading={'Expert Doctor'}
                  description={'Tellus sed nulla tempor ultrices et pharetra. Molestie quisque.'}
                  imageUrl={ExpertDoctor}
              />
              <FaciltiyItem
                  heading={'Patients Care'}
                  description={'Ullamcorper mi enim commodo ultricies. Et tempus ultrices.'}
                  imageUrl={PatientsCare}
              />
          </Grid>
          <Box sx={{
              border: '1.5px solid #036C5F',
              maxWidth: 'fit-content',
              px: 4,
              py: 2.8,
              borderRadius: '50px',
              display: 'flex',
              gap: 1,
              my:8
          }}>
              <Typography component={'p'} variant='p' sx={{
                  fontFamily: 'Outfit',
                  letterSpacing: '0.38px',
                  color: '#036C5F',
                  fontWeight: 600,
                  textWrap:'nowrap'
              }}>Make an Appointment</Typography>
              <img src={topArrowPrimary} alt="" />
          </Box>
    </Container>
  )
}

export default Facilities