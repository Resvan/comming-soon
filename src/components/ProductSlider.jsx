import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Swiper, SwiperSlide } from 'swiper/react';
import productOne from '../assets/product-1.png';
import 'swiper/css';
import 'swiper/css/navigation';
import ProductCard from './ProductCard';
import { Navigation } from 'swiper/modules';

const ProductSlider = () => {
    const theme = useTheme();
    const isMd = useMediaQuery(theme.breakpoints.up('md'));
    const isLg = useMediaQuery(theme.breakpoints.up('lg'));

    const slidesPerView = isLg ? 3 : (isMd ? 2 : 1);

    return (
        <Swiper
            slidesPerView={slidesPerView}
            spaceBetween={30}
            navigation={{
                nextEl: ".image-swiper-button-next",
                prevEl: ".image-swiper-button-prev",
                disabledClass: "swiper-button-disabled"
            }}
            modules={[Navigation]}
            className="mySwiper"
            
        >
            <SwiperSlide>
                <ProductCard proData={productOne} />
            </SwiperSlide>
            <SwiperSlide>
                <ProductCard proData={productOne} />
            </SwiperSlide>
            <SwiperSlide>
                <ProductCard proData={productOne} />
            </SwiperSlide>
            <SwiperSlide>
                <ProductCard proData={productOne} />
            </SwiperSlide>
        </Swiper>
    );
};

export default ProductSlider;
