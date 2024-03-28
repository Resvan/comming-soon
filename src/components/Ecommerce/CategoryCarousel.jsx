import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Herbal from '../../assets/Ecom/Herbal.png';
import { Box, Typography } from '@mui/material';

const CategoryCarousel = () => {
    const theme = useTheme();
    const isMd = useMediaQuery(theme.breakpoints.up('md'));
    const isLg = useMediaQuery(theme.breakpoints.up('lg'));

    const slidesPerView = isLg ? 5 : (isMd ? 3 : 1);

    return (
        <Swiper
            slidesPerView={slidesPerView}
            spaceBetween={30}
            // centeredSlides={true}
            // loop={true}
            navigation={{
                nextEl: ".image-swiper-category-button-next",
                prevEl: ".image-swiper-category-button-prev",
                disabledClass: "swiper-button-disabled"
            }}
            modules={[Navigation]}
            className="mySwiper"

        >
            <SwiperSlide>
                <Box >
                    <img src={Herbal} alt="" />
                    <Typography variant='h6' sx={{
                        fontFamily: 'Montserrat',
                        color: '#1C1C1C',
                        mt: 2,
                        fontWeight:600,
                    }}>
                        Herbal Powder
                    </Typography>
                </Box>
            </SwiperSlide>
            <SwiperSlide>
                <Box >
                    <img src={Herbal} alt="" />
                    <Typography variant='h6' sx={{
                        fontFamily: 'Montserrat',
                        color: '#1C1C1C',
                        mt: 2,
                        fontWeight: 600,
                    }}>
                        Herbal Powder
                    </Typography>
                </Box>
            </SwiperSlide>
            <SwiperSlide>
                <Box >
                    <img src={Herbal} alt="" />
                    <Typography variant='h6' sx={{
                        fontFamily: 'Montserrat',
                        color: '#1C1C1C',
                        mt: 2,
                        fontWeight: 600,
                    }}>
                        Herbal Powder
                    </Typography>
                </Box>
            </SwiperSlide>
            <SwiperSlide>
                <Box >
                    <img src={Herbal} alt="" />
                    <Typography variant='h6' sx={{
                        fontFamily: 'Montserrat',
                        color: '#1C1C1C',
                        mt: 2,
                        fontWeight: 600,
                    }}>
                        Herbal Powder
                    </Typography>
                </Box>
            </SwiperSlide>
            <SwiperSlide>
                <Box >
                    <img src={Herbal} alt="" />
                    <Typography variant='h6' sx={{
                        fontFamily: 'Montserrat',
                        color: '#1C1C1C',
                        mt: 2,
                        fontWeight: 600,
                    }}>
                        Herbal Powder
                    </Typography>
                </Box>
            </SwiperSlide>
            <SwiperSlide>
                <Box >
                    <img src={Herbal} alt="" />
                    <Typography variant='h6' sx={{
                        fontFamily: 'Montserrat',
                        color: '#1C1C1C',
                        mt: 2,
                        fontWeight: 600,
                    }}>
                        Herbal Powder
                    </Typography>
                </Box>
            </SwiperSlide>
           
        </Swiper>
    );
};

export default CategoryCarousel;
