import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import productOne from '../assets/product-1.png'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules

const ProductSlider = () => {
    const theme = useTheme();
    const isMd = useMediaQuery(theme.breakpoints.up('md'));
    const isLg = useMediaQuery(theme.breakpoints.up('lg'));

    const slidesPerView = isLg ? 3 : (isMd ? 2 : 1); // Adjust the number of slides per view based on screen size

    return (
        <Swiper
            slidesPerView={slidesPerView}
            spaceBetween={30}
            pagination={{
                clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
        >
            <SwiperSlide>
                <img src={productOne} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={productOne} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={productOne} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={productOne} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={productOne} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={productOne} alt="" />
            </SwiperSlide>
        </Swiper>
    );
};

export default ProductSlider;
