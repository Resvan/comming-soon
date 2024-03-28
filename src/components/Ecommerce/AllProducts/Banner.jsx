import { Container, Typography } from '@mui/material';
import React from 'react';
import bannerBg from '../../../assets/Ecom/all-products.png';

const Banner = () => {
  return (
      <Container sx={{
          backgroundImage: `url(${bannerBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          mt: '1rem',
          py:'5rem'
      }}>
          <Typography component='h4' variant='h4' sx={{
              color: '#143450',
              fontFamily: 'Montserrat',
              fontWeight: 700,
              letterSpacing: '1px',
          }}>
              All Products
          </Typography>
      </Container>
  )
}

export default Banner