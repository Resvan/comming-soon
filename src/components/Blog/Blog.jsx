import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react';
import blogMain from '../../assets/blog-main.png';
import topArrowPrimary from '../../assets/topArrowPrimary.svg';
import blogOne from '../../assets/blog-1.png';


const Blog = () => {
  return (
      <Box sx={{
        py:'5rem'
      }}>
          <Container>
              <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                      <Box sx={{
                          display: 'flex',
                          gap: 2,
                      }}>
                          <div style={{
                              height: '2px',
                              width: '5rem',
                              backgroundColor: '#EEA676',
                              alignSelf: 'center'
                          }}></div>
                          <Typography component='p' variant='p' sx={{
                              color: '#EEA676',
                              fontFamily: 'Outfit',
                              position: 'relative',
                              fontWeight: 500
                          }}>
                              Our Blog
                          </Typography>
                      </Box>
                      <Typography component='h4' variant='h4' sx={{
                          textAlign: 'left',
                          fontFamily: 'Outfit',
                          fontWeight: 600,
                      }}>
                          Our Latest Posts
                      </Typography>
                      <Box sx={{
                          mt:2
                      }}>
                          <img style={{
                              width: '100%',
                          }} src={blogMain} alt="blog-main" />
                      </Box>
                      <Typography component='h4' variant='h4' sx={{
                          textAlign: 'left',
                          fontFamily: 'Outfit',
                          fontWeight: 600,
                          width: '90%',
                          fontSize:'1.8rem'
                      }}>
                          Exploring Breakthroughs and Best Practices.
                      </Typography>
                      <Typography component='p' variant='p' sx={{
                          fontFamily: 'Outfit',
                          width: '90%',
                          mt: 1,
                          mb: 4
                      }}>We are a team of highly skilled and experienced medical professionals, including doctors, nurses, specialists, and support staff, with a commitment to excellence.
                      </Typography>
                        <Box sx={{
                            display: 'flex',
                            gap: 1,
                            alignItems:'center'
                        }}>
                            <Typography component={'p'} variant='p' sx={{
                                fontFamily: 'Outfit',
                                letterSpacing: '0.38px',
                                color: '#036C5F',
                                fontWeight: 600,
                                textWrap:'nowrap'
                            }}>Read More</Typography>
                            <img src={topArrowPrimary} alt="" />
                        </Box>
                  </Grid>
                  <Grid item xs={12} md={6}>
                      <Box sx={{
                          display: 'flex',
                          justifyContent: 'end',
                          alignItems: 'center',
                          height: '12.7%',
                      }}>
                          <Box sx={{
                              border: '1.5px solid #036C5F',
                              borderRadius: '50px',
                              display: 'flex',
                              gap: 1,
                              alignItems: 'center',
                              height: '60%',
                              px:2
                          }}>
                              <Typography component={'p'} variant='p' sx={{
                                  fontFamily: 'Outfit',
                                  letterSpacing: '0.38px',
                                  color: '#036C5F',
                                  fontWeight: 500,
                                  textWrap: 'nowrap'
                              }}>Read All Posts</Typography>
                              <img src={topArrowPrimary} alt="" />
                          </Box> 
                      </Box>
                      <Box >
                          {Array.from({ length: 3 }, (_, index) => (
                              <Box sx={{
                                  height: '25%',
                                  display: 'flex',
                                  gap: 2,
                                  mb:2
                              }}>
                                      <img style={{
                                          height: '9rem',
                                          width:'25rem'
                                      }} src={blogOne} alt="" />
                                  <Box sx={{
                                      display: 'flex',
                                      minHeight: '100%',
                                      flexDirection: 'column',
                                      justifyContent: 'space-between',
                                  }}>
                                      <Typography component='h4' variant='h4' sx={{
                                          textAlign: 'left',
                                          fontFamily: 'Outfit',
                                          fontWeight: 600,
                                          width: '90%',
                                          fontSize: '1.5rem'
                                      }}>
                                          Demystifying Common Myths About Vaccines.
                                      </Typography>
                                      <Typography component='p' variant='p' sx={{
                                          fontFamily: 'Outfit',
                                          width: '90%',
                                          mt: 1,
                                          fontSize: '1.1rem',
                                          color:'#3C4253'
                                      }}>Vaccines have long been an important tool in protecting public health, yet various lies and misinformation
                                      </Typography>
                                  </Box>
                                      
                              </Box>
                          ))}
                      </Box>
                  </Grid>
              </Grid>
          </Container>
    </Box>
  )
}

export default Blog