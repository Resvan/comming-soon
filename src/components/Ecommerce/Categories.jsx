import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import CategoryCarousel from './CategoryCarousel';
import ArrowRight from '../../assets/Ecom/arrow-right.png';
import ArrowLeft from '../../assets/Ecom/arrow-left.png';

const Categories = () => {
  return (
      <Container sx={{
          my: '5rem',
      }}>
          <Box sx={{
              display: 'flex',
              justifyContent:'center'
          }}>
              <Typography variant="p" sx={{
                  fontFamily: 'Lato',
                  textTransform: 'uppercase',
                  color: '#363636',
                  letterSpacing: '4px',
                  padding: '5px 15px',
                  border: '1px solid rgba(206, 206, 206, 0.50)',
                  lineHeight:'normal'
              }}>Medical Need</Typography>
          </Box>
          <Typography sx={{
              fontFamily: "Lato",
              fontWeight: 600,
              textAlign: 'center',
              color: '#143450',
              textTransform:'capitalize',
              fontSize: { xs: '1.4rem', md: '2.4rem' },
              mt: 1,
              letterSpacing:'1px'
          }} variant='h4' component='h4' >
              Shop by Categories
          </Typography>
          <Box sx={{
              position: 'relative',
              mt:'2.4rem'
          }}>
              <div className="swiper-button-category image-swiper-category-button-next">
                  <img src={ArrowRight} alt="" />
              </div>
              <div className="swiper-button-category image-swiper-category-button-prev">
                  <img src={ArrowLeft} alt="" />
              </div>
              <CategoryCarousel />
          </Box>
    </Container>
  )
}

export default Categories