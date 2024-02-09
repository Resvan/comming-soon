import { Star } from '@mui/icons-material'
import { Avatar, AvatarGroup, Box, Typography } from '@mui/material'
import React from 'react'

const ReviewCount = () => {
  return (
      <Box sx={{
          position: 'absolute',
          top: '0%',
          right:'7%',
          backgroundColor: 'white',
          padding:'1.4rem'
      }}>
          <AvatarGroup
              renderSurplus={(surplus) => <span>+</span>}
              total={4251}
          >
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
              <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
          </AvatarGroup>
          <Box sx={{
              display: 'flex',
              alignItems: 'center',
          }}>
              <Star sx={{
                  color: '#FFAF3B'
              }} /> 
              <Typography component='p' variant='p' sx={{
                  fontFamily: 'Outfit',
                  fontWeight:500
              }}>
                  4.9 (5210 Reviews)
              </Typography>
          </Box>
    </Box>
  )
}

export default ReviewCount