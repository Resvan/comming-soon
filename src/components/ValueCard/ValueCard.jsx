import { Avatar, Box, Typography } from '@mui/material'
import React from 'react'


const ValueCard = ({imageUrl, heading, description}) => {
  return (
      <Box sx={{
          backgroundColor: 'white',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding:'3rem 2rem'
      }}>
          <Avatar sx={{ backgroundColor: '#DEEEEC', width: 50, height: 50, padding:'1rem' }}>
              <img src={imageUrl} alt="Feature" style={{ width: '70%', height: '70%', }} />
          </Avatar>
          <Typography variant='h5' component={'h5'} sx={{
              fontFamily: 'Outfit',
              color: '#042622',
              fontWeight: 600,
              mt: 2
          }}>{heading}</Typography>
          <Typography component={'p'} variant='p'
              sx={{
                  fontFamily: "Outfit",
                  color: "#3C4253",
                  textAlign: "center",
                  lineHeight: '30px',
                  mt:1
              }}
          >{description}</Typography>
    </Box>
  )
}

export default ValueCard