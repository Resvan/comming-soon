import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import bannerImage from '../assets/bannerImage.jpg';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';
import { Box, Button, Container, Typography } from '@mui/material';

const Banner = () => {
  return (
      <Swiper navigation={{
          nextEl: ".image-swiper-button-next",
          prevEl: ".image-swiper-button-prev",
          disabledClass: "swiper-button-disabled"
      }} modules={[Navigation]} className="mySwiper" speed={1400}>
          {[...Array(5)].map((_, index) => (
              <SwiperSlide key={index}>
                  <Box sx={{
                      background: `url(${bannerImage}) center/cover no-repeat`,
                      height: '100vh',
                  }}>
                      <Container sx={{
                          height: '80%',
                          display: 'flex',
                          alignItems: 'center',
                      }}>
                          <Box sx={{
                              display: 'flex',
                              flexDirection: 'column',
                              justifyContent: 'flex-start',
                              paddingRight: 4,
                          }}>
                              <Typography
                                  variant='h3'
                                  component={'h2'}
                                  sx={{
                                      fontFamily: "Inter",
                                      color: "white",
                                      textAlign: 'left',
                                      fontWeight: 700,
                                      fontSize:{xs:'1.5rem', md:'3rem'}
                                  }}
                              >
                                  Herbal Detoxification <br />
                                  and Rejuvenation
                              </Typography>
                              <Typography
                                  sx={{
                                      fontFamily: "Inter",
                                      color: 'white',
                                      textAlign: 'left',
                                      mt: 2,
                                      fontWeight: 600,
                                      fontSize: { xs: '0.9rem', md: '1rem' }
                                  }}
                                  variant='p'
                                  component={'p'}
                              >
                                  Lorem Ipsum is simply dummy text of the printing and <br />
                                  typesetting industry.
                              </Typography>
                              <Button variant='contained' sx={{
                                  alignSelf: 'flex-start',
                                  background: '#75BC28',
                                  '&:hover': {
                                      background: '#75BC28',
                                  },
                                  fontWeight: 600,
                                  fontFamily: 'Inter',
                                  marginTop: 2,
                              }}>
                                  Learn More
                              </Button>
                          </Box>
                      </Container>
                  </Box>
              </SwiperSlide>
          ))}
      </Swiper>

  )
}

export default Banner