import { Avatar, Box, Typography } from '@mui/material'
import React from 'react';

const ServiceCard = ({ speciality, image, link, des }) => {




  return (
      <Box sx={{
          backgroundColor: 'white',
          padding: '1.5rem',
          border:'1px solid #E1E9E8'
      }}>
          <Avatar sx={{ backgroundColor: '#DEEEEC', width: 50, height: 50, padding: '1rem' }}>
              <img src={image} alt={speciality} style={{ width: '70%', height: '70%', }} />
          </Avatar>
          <Typography variant='h6' component={'h6'} sx={{
              fontFamily: 'Outfit',
              color: '#042622',
              fontWeight: 600,
              mt: 2
          }}>{speciality}</Typography>
          <Typography component={'p'} variant='p'
              sx={{
                  fontFamily: "Outfit",
                  color: "#3C4253",
                  lineHeight: '30px',
                  mt: 1
              }}
          >{des}</Typography>
      </Box>
  )
}

export default ServiceCard