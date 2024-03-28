import { Box, Button, Container, Typography } from '@mui/material';
import React from 'react';
import ArrowRight from '../../assets/Ecom/arrow-right.png';
import ArrowLeft from '../../assets/Ecom/arrow-left.png';
import GalleryCarousel from './GalleryCarousel';

const Gallery = () => {
  return (
      <Container>
          <Box sx={{
              display: 'flex',
              justifyContent: 'center'
          }}>
              <Typography variant="p" sx={{
                  fontFamily: 'Lato',
                  textTransform: 'uppercase',
                  color: '#363636',
                  letterSpacing: '4px',
                  padding: '5px 15px',
                  border: '1px solid rgba(206, 206, 206, 0.50)',
                  lineHeight: 'normal'
              }}>Our Gallery</Typography>
          </Box>
          <Typography sx={{
              fontFamily: "Montserrat",
              fontWeight: 600,
              textAlign: 'center',
              color: '#143450',
              textTransform: 'capitalize',
              fontSize: { xs: '1.4rem', md: '2.4rem' },
              mt: 1,
              letterSpacing: '1px'
          }} variant='h4' component='h4' >
              Experienced in Medical Practices
          </Typography>
          <Box sx={{
              display: 'flex',
              justifyContent: 'center',
              mt:1
          }}>
              <Typography
                  component='p'
                  variant='p'
                  sx={{
                  fontFamily: 'Lato',
                  color: '#545454',
                  textAlign: 'center',
                      width: { xs: '95%', md: '70%' },
                      fontSize: '1.1rem',
                  lineHeight:'28px'
              }}>
                  Turpis dictum penatibus a pretium sed netus quam venenatis. In nisi id euismod faucibus eget sit. Ipsum ornare gravida quisque senectus convallis tincidunt. Sit non facilisis eget diam donec.
              </Typography> 
          </Box>
          
          <Box sx={{
              position: 'relative',
              mt:'2.4rem'
          }}>
              <div className="swiper-button-gallery image-swiper-gallery-button-next">
                  <img src={ArrowRight} alt="" />
              </div>
              <div className="swiper-button-gallery image-swiper-gallery-button-prev">
                  <img src={ArrowLeft} alt="" />
              </div>
              <GalleryCarousel />
          </Box>
          <Box sx={{
              display: 'flex',
              justifyContent:'center'
          }}>
              <Button
                  variant='contained'
                  sx={{
                      backgroundColor: "#036C5F",
                      padding: '0.9rem 1.4rem',
                      fontFamily: 'Lato',
                      textTransform: 'none',
                      fontWeight: 500,
                      fontSize: '1rem',
                      borderRadius: 0,
                  }}>
                  Explore More
              </Button>
          </Box>
    </Container>
  )
}

export default Gallery