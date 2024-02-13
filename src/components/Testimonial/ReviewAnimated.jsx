import { motion, useAnimation } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import ReviewCard from './ReviewCard';
import { Box } from '@mui/material';


const animate = {
    active: {
        opacity: 1,
        y: 0,
        x:0,
        scale: 1,
        zIndex: 2,
    },
    next: {
        opacity: 0.7,
        y: "-50%",
        scale: 1,
        x:"10%",
        zIndex:1
    },
    exit: {
        opacity: 0,
        y: -100,
        scale: 0,
        zIndex:1
    },
    
};

const ReviewAnimated = ({ delay, active }) => {
    const controls = useAnimation();

    useEffect(() => {
        const animateSequence = async () => {
            if (active === 1) {
                await controls.start(animate.active);
            } else if (active === 2) {
                await controls.start(animate.next);
            }
        };

        const timeoutId = setTimeout(animateSequence, delay * 1000); 

        return () => clearTimeout(timeoutId);
    }, [active, controls, delay]);

    return (
        <motion.div style={{
            position:'absolute'
        }} initial={animate.exit} animate={controls} exit={animate.exit} transition={{ duration: 1 }}>
            <ReviewCard/>
        </motion.div>
    );
};

const Carousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);


    const handleNext = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % 5);
    };

    return (
        <Box sx={{
            position: 'relative',
            mt:20
        }}>
            {Array.from({ length: 5 }, (_, index) => (
                <ReviewAnimated key={index} delay={index * 0.5} active={(index === activeIndex) ? 1 : ((index === (activeIndex + 1) % 5) ? 2 : 0)} />
            ))}
            <button style={{
                marginTop:'15rem'
            }} onClick={handleNext}>Next</button>
        </Box>
    );
};

export default Carousel;
