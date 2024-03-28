import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import GalleryImg from '../../assets/Ecom/gallery.png';
import { Box, Typography } from '@mui/material';

const GalleryCarousel = () => {
    const theme = useTheme();
    const isMd = useMediaQuery(theme.breakpoints.up('md'));
    const isLg = useMediaQuery(theme.breakpoints.up('lg'));

    const slidesPerView = isLg ? 4 : (isMd ? 3 : 1);

    return (
        <Swiper
            slidesPerView={slidesPerView}
            spaceBetween={30}
            // centeredSlides={true}
            // loop={true}
            navigation={{
                nextEl: ".image-swiper-gallery-button-next",
                prevEl: ".image-swiper-gallery-button-prev",
                disabledClass: "swiper-button-disabled"
            }}
            modules={[Navigation]}
            className="mySwiper"

        >
            <SwiperSlide>
                <Box >
                    <img src={GalleryImg} style={{
                        borderRadius: '3%'
                    }} alt="" />
                   
                </Box>
            </SwiperSlide>
            <SwiperSlide>
                <Box  >
                    <img src={GalleryImg} style={{
                        borderRadius: '3%'
                    }} alt="" />
                    
                </Box>
            </SwiperSlide>
            <SwiperSlide>
                <Box >
                    <img src={GalleryImg} style={{
                        borderRadius: '3%'
                    }} alt="" />
                    
                </Box>
            </SwiperSlide>
            <SwiperSlide>
                <Box >
                    <img src={GalleryImg} style={{
                        borderRadius: '3%'
                    }} alt="" />
                </Box>
            </SwiperSlide>
            <SwiperSlide>
                <Box >
                    <img src={GalleryImg} style={{
                        borderRadius: '3%'
                    }} alt="" />
                </Box>
            </SwiperSlide>
            <SwiperSlide>
                <Box >
                    <img src={GalleryImg} style={{
                        borderRadius: '3%'
                    }} alt="" />
                </Box>
            </SwiperSlide>

        </Swiper>
    );
};

export default GalleryCarousel;
