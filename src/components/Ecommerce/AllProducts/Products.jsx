import { Box, Button, Grid, InputAdornment, InputBase, MenuItem, Pagination, Select, Typography } from '@mui/material';
import React, { useState } from 'react';
import ProductImg from '../../../assets/Ecom/product.png';
import { ExpandMore } from '@mui/icons-material';

const Products = () => {
    const [page, setPage] = useState(0);
    const handleChangePage = () => {

    }

    const options = [
        { value: '', label: 'Option 1' },
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' },
    ];

  return (
      <Grid item container spacing={5} xs={12} md={8}>
          <Grid item xs={12} md={6} sx={{
              display: 'flex',
              gap: 2,
              alignItems:'center'
          }}>
              <Typography variant='p' component='p' sx={{
                  fontFamily: 'Lato',
                  color: '#143450',
                  fontWeight:700
              }}>
                  Sort by:
              </Typography>
              <Select
                  defaultValue={"doctor-1"}
                  margin="normal"
                  variant="outlined"
                  
                  sx={{
                      borderRadius: '50px',
                      width:'75%'
                  }}
              >
                  <MenuItem value="doctor-1">Doctor 1</MenuItem>
                  <MenuItem value="doctor-2">Doctor 2</MenuItem>
                  <MenuItem value="doctor-3">Doctor 3</MenuItem>
                  <MenuItem value="doctor-4">Docotor 4</MenuItem>

              </Select>
          </Grid>
          <Grid item xs={12} md={6} sx={{
              display: 'flex',
              justifyContent: 'end',
              alignItems:'center'
          }}>
              <Typography sx={{
                  fontFamily: 'Lato',
                  fontWeight:600
              }}>
                  Showing 1 - 6 of 20 results
              </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
              <Box sx={{
                  borderLeft: '1px solid rgba(206, 206, 206, 0.50)',
                  borderRight: '1px solid rgba(206, 206, 206, 0.50)',
                  borderBottom: '1px solid rgba(206, 206, 206, 0.50)',
                  borderRadius: '3%',
              }}>
                  <img width='100%' src={ProductImg} alt="" />
                  <Box sx={{
                      paddingInline: '2rem',
                      mt: '1rem',
                      mb: '2rem'
                  }}>
                      <Typography component='h6' variant='h6' sx={{
                          fontFamily: 'Lato',
                          color: '#036C5F',
                          fontWeight: 500,
                          fontSize: '1.4rem'
                      }}>
                          Neem Aloevera Facewash
                      </Typography>
                      <Typography component='h6' variant='h6' sx={{
                          fontFamily: 'Lato',
                          color: '#143450',
                          fontWeight: 600,
                          fontSize: '1.2rem'
                      }}>
                          ₹ 90.00
                      </Typography>
                      <Button variant='contained' sx={{
                          backgroundColor: "#EEA676",
                          padding: '0.9rem 1.4rem',
                          fontFamily: 'Lato',
                          textTransform: 'none',
                          fontWeight: 500,
                          mt: 2
                      }}>
                          Add to Cart
                      </Button>
                  </Box>
              </Box>
          </Grid>
          <Grid item xs={12} md={6}>
              <Box sx={{
                  borderLeft: '1px solid rgba(206, 206, 206, 0.50)',
                  borderRight: '1px solid rgba(206, 206, 206, 0.50)',
                  borderBottom: '1px solid rgba(206, 206, 206, 0.50)',
                  borderRadius: '3%',
              }}>
                  <img width='100%' src={ProductImg} alt="" />
                  <Box sx={{
                      paddingInline: '2rem',
                      mt: '1rem',
                      mb: '2rem'
                  }}>
                      <Typography component='h6' variant='h6' sx={{
                          fontFamily: 'Lato',
                          color: '#036C5F',
                          fontWeight: 500,
                          fontSize: '1.4rem'
                      }}>
                          Neem Aloevera Facewash
                      </Typography>
                      <Typography component='h6' variant='h6' sx={{
                          fontFamily: 'Lato',
                          color: '#143450',
                          fontWeight: 600,
                          fontSize: '1.2rem'
                      }}>
                          ₹ 90.00
                      </Typography>
                      <Button variant='contained' sx={{
                          backgroundColor: "#EEA676",
                          padding: '0.9rem 1.4rem',
                          fontFamily: 'Lato',
                          textTransform: 'none',
                          fontWeight: 500,
                          mt: 2
                      }}>
                          Add to Cart
                      </Button>
                  </Box>
              </Box>
          </Grid>
          <Grid item xs={12} sx={{
              display: 'flex',
              justifyContent:'center'
          }}>
              <Pagination
                  count={10} // Total number of pages
                  page={page}
                  onChange={handleChangePage}
                  sx={{
                      color: 'red'
                  }}
              />
          </Grid>
         
    </Grid>
  )
}

export default Products