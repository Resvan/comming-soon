import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import DoctorImage from '../../assets/Doctor.png';
import { useTheme } from '@mui/material/styles';

import 'swiper/css';
import 'swiper/css/navigation';
import { Box, Typography, useMediaQuery } from '@mui/material';

const DoctorSlider = () => {
    const theme = useTheme();
    const isMd = useMediaQuery(theme.breakpoints.up('md'));
    const isLg = useMediaQuery(theme.breakpoints.up('lg'));
    const [activeIndex, setActiveIndex] = useState(0);

    const slidesPerView = isLg ? 3 : (isMd ? 2 : 1);

    const handleSlideChange = (e) => {
        setActiveIndex(e.activeIndex);
    }
  return (
    
      <Swiper
          slidesPerView={slidesPerView}
          centeredSlides={true}
        //   loop={true}
          navigation={{
              nextEl: ".image-swiper-button-next",
              prevEl: ".image-swiper-button-prev",
              disabledClass: "swiper-button-disabled"
          }}
          modules={[Navigation, Autoplay]}
          autoplay={{ delay: 3000 }}
          className="mySwiper"
          onSlideChange={handleSlideChange}
      >

          {Array.from({ length: 6 }).map((_, index) => (
              <SwiperSlide style={{
                  display: 'flex',
                  flexDirection: 'column'
              }}>
                  <Box sx={{
                      backgroundColor: '#FBF7F3',
                      display: 'flex',
                      alignItems: 'end',
                      mb: 2
                  }}>
                      <img src={DoctorImage} style={{
                          objectFit: 'contain'
                      }} alt="" />
                  </Box>
                  <Typography component='h6' variant='h6' sx={{
                      color: activeIndex === index ? '#036C5F' : '#042622',
                      fontFamily: "Outfit",
                      fontWeight: 600
                  }}>
                      Jessica Miller
                  </Typography>
                  <Typography sx={{
                      color: activeIndex === index ? '#036C5F' : '#3C4253',
                      fontFamily: "Outfit",
                      fontWeight: 500
                  }}>
                      Gynecology
                  </Typography>
              </SwiperSlide>
          ))}
      </Swiper>
  )
}

export default DoctorSlider