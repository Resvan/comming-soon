import { Avatar, Box, Typography } from '@mui/material';
import React from 'react';

const Features = ({ imageUrl, heading, description }) => {
    return (
        <Box sx={{
            width: '80%',
        }} >
            <Avatar sx={{ backgroundColor: 'white', width: 50, height: 50, }}>
                <img src={imageUrl} alt="Feature" style={{ width: '70%', height: '70%', }} />
            </Avatar>
            <Typography variant='h6' component={'h6'} sx={{
                fontFamily: 'Outfit',
                color: '#042622',
                fontSize:'1.2rem',
                fontWeight: 600,
                mt:1
            }}>{heading}</Typography>
            <Typography component={'p'} variant='p'
                sx={{
                    fontFamily: "Outfit",
                    color: "#3C4253",
            }}
            >{description}</Typography>
        </Box>
    );
};

export default Features;
