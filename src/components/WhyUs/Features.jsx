import { Avatar, Box, Typography } from '@mui/material';
import React from 'react';

const Features = ({ imageUrl, heading, description }) => {
    return (
        <Box >
            <Avatar sx={{ backgroundColor: 'white', width: 50, height: 50, }}>
                <img src={imageUrl} alt="Feature" style={{ width: '70%', height: '70%' }} />
            </Avatar>
            <Typography variant='h6' component={'h6'} sx={{
                fontFamily: 'Outfit',
                fontWeight:600
            }}>{heading}</Typography>
            <Typography component={'p'} variant='p'>{description}</Typography>
        </Box>
    );
};

export default Features;
