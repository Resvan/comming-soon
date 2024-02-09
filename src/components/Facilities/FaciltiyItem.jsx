import { Grid, Typography } from '@mui/material'
import React from 'react'

const FaciltiyItem = ({imageUrl, heading, description}) => {
  return (
      <Grid item xs={12} sm={6} md={3} sx={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          gap: 2
      }}>
          <img src={imageUrl} alt={heading} />
          <Typography component='h6' variant='h6' sx={{
              fontFamily: 'Outfit',
              fontWeight: 600
          }}>
              {heading}
          </Typography>
          <Typography sx={{
              fontFamily: 'Outfit',
              color: "#3C4253",
              textAlign: 'center'
          }}>
              {description}
          </Typography>
      </Grid>
  )
}

export default FaciltiyItem