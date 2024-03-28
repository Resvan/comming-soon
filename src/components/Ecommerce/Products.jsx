import { Box, Button, Container, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import ProductImg from '../../assets/Ecom/product.png';



const Products = () => {

    const tabItem = ["All", "Arishtam", "Bhasmam", "Churnam", "Ghritam", "Granule"];

    const [value, setValue] = useState(0);

    const handleChange = (newValue) => {
        setValue(newValue);
    };
  return (
      <Container sx={{
          my:'6rem'
      }}>
          <Box sx={{
              display: 'flex',
              justifyContent: 'center'
          }}>
              <Typography variant="p" sx={{
                  fontFamily: 'Lato',
                  textTransform: 'uppercase',
                  color: '#363636',
                  letterSpacing: '4px',
                  padding: '5px 15px',
                  border: '1px solid rgba(206, 206, 206, 0.50)',
                  lineHeight: 'normal'
              }}>Our Products</Typography>
          </Box>
          <Typography sx={{
              fontFamily: "Lato",
              fontWeight: 600,
              textAlign: 'center',
              color: '#143450',
              textTransform: 'capitalize',
              fontSize: { xs: '1.4rem', md: '2.4rem' },
              mt: 1,
              letterSpacing: '1px'
          }} variant='h4' component='h4' >
              New Arrival Medicines
          </Typography>
          <Box sx={{
              display: 'flex',
              justifyContent: 'center',
              mt: 4,
              gap:2,
          }}>
              {
                  tabItem.map((item, index) => (
                      <Button  sx={{
                          borderBottom: index == value ? '3px solid #036C5F' : 'none',
                          borderRadius: 0, 
                          textTransform:'none'
                      }}
                        onClick={()=>handleChange(index)}
                      >
                          <Typography sx={{
                              fontWeight: 600,
                              fontSize: '1rem',
                              fontFamily: 'Lato',
                              color: value == index ? '#036C5F' : 'black'

                          }}>{item}</Typography>
                      </Button> 
                  ))
              }
                      
          </Box>
         
          <Grid container spacing={5} sx={{
              mt:1
          }}>
              <Grid item xs={12} md={4}>
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
                          mb:'2rem'
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
              <Grid item xs={12} md={4}>
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
              <Grid item xs={12} md={4}>
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
              <Grid item xs={12} md={4}>
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
              <Grid item xs={12} md={4}>
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
                          <Box sx={{
                              display: 'flex',
                              gap:2,
                          }}>
                              <Typography component='h6' variant='h6' sx={{
                                  fontFamily: 'Lato',
                                  color: '#143450',
                                  fontWeight: 600,
                                  fontSize: '1.2rem'
                              }}>
                                  ₹ 90.00
                              </Typography>
                              <Typography component='h6' variant='h6' sx={{
                                  fontFamily: 'Lato',
                                  color: 'rgba(84, 84, 84, 0.75)',
                                  fontWeight: 600,
                                  fontSize: '1.2rem',
                                  textDecoration:'line-through'
                              }}>
                                  ₹ 90.00
                              </Typography>
                          </Box>
                         
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
              <Grid item xs={12} md={4}>
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
          </Grid>
    </Container>
  )
}

export default Products