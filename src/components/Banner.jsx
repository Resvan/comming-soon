import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import bannerImage from '../assets/bannerImage.jpg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';
import { Box, Button, Container, Typography } from '@mui/material';
import { motion, useAnimation } from 'framer-motion';

const Banner = () => {
    const controls = useAnimation();
    const textAnimationControls = useAnimation(); // Animation controls for the text
    const buttonAnimationControls = useAnimation(); // Animation controls for the button
    const swiperRef = useRef(null);

    const handleSlideChange = async () => {
        // Trigger animation when the slide changes
        await Promise.all([
            controls.start({ opacity: 0, x: '100%' }),
            textAnimationControls.start({ opacity: 0, y: '100%' }),
            buttonAnimationControls.start({ opacity: 0, y: '100%' }),
        ]);

        await Promise.all([
            controls.start({ opacity: 1, x: 0 }),
            textAnimationControls.start({ opacity: 1, y: 0 }),
            buttonAnimationControls.start({ opacity: 1, y: 0 }),
        ]);
    };


    useEffect(() => {
        // Trigger animation for the initial slide
        handleSlideChange();
    }, []);

    return (
        <Swiper
            navigation={{
                nextEl: ".image-swiper-button-next",
                prevEl: ".image-swiper-button-prev",
                disabledClass: "swiper-button-disabled"
            }}
            modules={[Navigation]}
            className="mySwiper"
            speed={1400}
            onSlideChange={handleSlideChange}
            ref={swiperRef}
        >
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
                                <motion.div
                                    initial={{ opacity: 0, x: '100%' }}
                                    animate={controls}
                                    transition={{ duration: 0.8 }}
                                >
                                    <Typography
                                        variant='h3'
                                        component={'h2'}
                                        sx={{
                                            fontFamily: "Inter",
                                            color: "white",
                                            textAlign: 'left',
                                            fontWeight: 700,
                                            fontSize: { xs: '1.5rem', md: '3rem' }
                                        }}
                                    >
                                        Herbal Detoxification <br />
                                        and Rejuvenation
                                    </Typography>
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, y: '100%' }}
                                    animate={textAnimationControls}
                                    transition={{ duration: 1 }}
                                >
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
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, y: '100%' }}
                                    animate={buttonAnimationControls}
                                    transition={{ duration: 1 }}
                                    style={{
                                        alignSelf: 'flex-start',
                                    }}
                                >
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
                                </motion.div>
                            </Box>
                        </Container>
                    </Box>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Banner;
