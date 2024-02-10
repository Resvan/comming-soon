import { Avatar, Box, Typography } from '@mui/material'
import React from 'react'
import reviewStars from '../../assets/reviewStars.svg'

const ReviewCard = ({styles}) => {
  return (
      <Box sx={{
          backgroundColor: 'white',
          padding: { xs: '0.9rem', md: '1.4rem' },
          width: { xs: '80%', md: '55%' },
          ...styles,
      }}>
          <Box sx={{
              display: 'flex',
              gap: 1,
              mb:4
          }}>
              <Avatar style={{
                  height: '3rem',
                  width: "3rem"
              }} src='../../assets/doctor.png' />
              <Box sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',

              }}>
                  <Typography sx={{
                      fontFamily: 'Outfit',
                      color: '#042622',
                      fontWeight: '600',
                      textWrap:'nowrap'
                  }}>Olivia Parker</Typography>
                  <Typography sx={{
                      fontFamily: 'Outfit',
                      color: '#EEA676',
                      fontSize: '0.9rem'
                  }}>Washington</Typography>
              </Box>
              <Box sx={{
                  alignSelf: 'center'
              }}>
                  <img src={reviewStars} style={{
                      height: '1.5rem',
                  }} alt="" />
              </Box>
            
          </Box>
          <Typography sx={{
              fontFamily: "Outfit",
              color:'#000'
          }}>"The team's dedication and support truly made my healing journey effortless. Thank you, Medicio, for an outstanding experience!"</Typography>
      </Box>
  )
}

export default ReviewCard