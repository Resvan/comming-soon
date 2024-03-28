import { Container, Grid } from '@mui/material'
import React from 'react'
import Products from './Products'
import Filters from './Filters'

const MainSection = () => {
    return (
        <Container sx={{
            mt:'5rem'
        }}>
            <Grid container spacing={5}>
                <Filters/>
                <Products/>
            </Grid> 
      </Container>
  )
}

export default MainSection