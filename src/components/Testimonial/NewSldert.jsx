import React, { useEffect } from 'react';
import ReviewCard from './ReviewCard';
import { Box } from '@mui/material';
import { motion, useAnimation } from 'framer-motion';

const NewSlider = ({active}) => {
    const controles = useAnimation();
    
    useEffect(() => {
        startAnimation()
    }, []);

    

    async function startAnimation() {

        if (active === 0) {
            await controles.start({
                y: '0%',
                x: '0%',
                opacity: 1,
            })
        } else if (active === 1) {
            
        }
    }
    return (
                <motion.div
                    animate={controles}
                    initial={{
                        y: '-50%',
                        x: '8%',
                        opacity: 0.8,
                        zIndex:5-active
                    }}
                    transition={{ duration: 0.8 }}
                    style={{
                        position:'absolute'
                    }}
                >
                <ReviewCard
                    />
                </motion.div>

    );
};

export default NewSlider;
