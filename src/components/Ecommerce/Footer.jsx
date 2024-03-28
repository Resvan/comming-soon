import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import PhoneIcon from '../../assets/Ecom/phone-footer.png';
import MailIcon from '../../assets/Ecom/email-footer.png';
import InstagramIcon from '../../assets/Ecom/insta.png';
import Xicon from '../../assets/Ecom/x-img.png';
import facebookIcon from '../../assets/Ecom/facebook.png';
import logo from '../../assets/gp-1.svg';


const Footer = () => {
  return (
    <Container sx={{
      backgroundColor: '#FBF7F3',
      py: '3rem',
      mt: '3rem',
    }}>
      <Box>
        <Grid container>
          <Grid item xs={12} md={5} sx={{
            px:{xs:0, md:'2rem'}
          }} >
            <img src={logo} alt="" />
          </Grid>
          <Grid item xs={12} md={2} sx={{
            display: 'flex',
            alignItems:'center'
          }} >
            <Box sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1
            }}>
              <img src={PhoneIcon} alt="" />
              <Typography variant='p' component='p' sx={{
                color: '#545454',
                fontFamily: 'Lato',
                fontWeight:500
              }}>
                (987) 654 - 3210
             </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={3} sx={{
            display: 'flex',
            alignItems: 'center'
          }} >
            <Box sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1
            }}>
              <img src={MailIcon} alt="" />
              <Typography variant='p' component='p' sx={{
                color: '#545454',
                fontFamily: 'Lato',
                fontWeight: 500
              }}>
                contact@gnanaprakasam.com
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={2} sx={{
            display: 'flex',
            alignItems: 'center',
            gap:3
          }} >
            <img src={InstagramIcon} alt="" />
            <img src={facebookIcon} alt="" />
            <img src={Xicon} alt="" />
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}

export default Footer