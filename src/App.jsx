import { useState } from 'react'

import { Box, Button, Container, Grid, TextField, Typography } from '@mui/material';
import logoImage from './assets/Logo.png';
import socialIcons from './assets/Social-Icons.png';
import bgImage from './assets/Img.png';
import PulseBeams from './components/PulseBeam';


function App() {

  return (

      <Grid container sx={{
        height:'100vh'
      }}>
        <Grid item xs={12} md={4} padding={5} >
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '100%',
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems:'center'
          }} >
            <img src={logoImage} alt="" />
            <Typography sx={{
              textAlign: 'left',
              fontWeight: 700,
              mt: 5,
              fontFamily: 'Poppins'
            }} variant='h4'>A service for our eco-friendly packages
            </Typography>
            <Typography sx={{
              textAlign: 'left',
              mt: 6,
              fontWeight: 700
            }}>
              Get notified when we get live!
            </Typography>
            <TextField
              placeholder='Enter email or phone'
              margin="normal"
              fullWidth
              variant="outlined"
              sx={{
                borderRadius: '24px',
              }}
            />
            <Button variant='contained' sx={{
              backgroundColor: "#27AE60",
              width: '100%',
              '&:hover': {
                backgroundColor: '#27AE60'
              },
              fontWeight: 500,
              fontFamily: 'Poppins'
            }}>
              Subscribe
            </Button>
          </div>
          <div>
            <img src={socialIcons} alt="" />
            <Typography sx={{
              textAlign: 'center',
              fontFamily: 'Poppins',
              fontSize: '0.7rem'
            }} variant='p' component='p'>
              © Copyrights Greelogix | All Rights Reserved
            </Typography>
          </div>

        </Box>
        </Grid>

      <Grid item xs={12} md={8} sx={{
        background: `linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), url(${bgImage}) lightgray 50% / cover no-repeat`,
        }}>
          <PulseBeams/>
        </Grid>
      </Grid>
  )
}

export default App
