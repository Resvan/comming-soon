import { Box, Container, Grid, Typography, useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles';
import React from 'react';
import whyUsImage from '../../assets/whyusImage.png';
import drawonWhyUs from '../../assets/drawonWhyus.svg';
import OrgaincImg from '../../assets/organicSvg.svg';
import PureAurveda from '../../assets/pureAurvedaSvg.svg';
import ChemicalLess from '../../assets/chemicalSvg.svg';
import TestedSvg from '../../assets/testedSvg.svg';
import Features from './Features';
import ReviewCount from './ReviewCount';


const WhyUs = () => {
    const theme = useTheme();
    const isMd = useMediaQuery(theme.breakpoints.up('md'));

    
  return (
      <Box
          sx={{
              backgroundColor: '#FBF7F3',
              py: '5rem',
              my:5
          }}
      >
          <Container>
              <Grid container spacing={3} sx={{
                  display:{xs:'none',md:'flex'}
              }}>
                  <Grid item xs={12} md={6} sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      position: 'relative',
                  }}>
                      
                      <img src={whyUsImage} alt="" style={{
                          ...(isMd ? {
                              position: 'absolute',
                              top: '8%',
                              width: '70%',
                              minHeight: '90%',
                          } : {
                                  width: '90%',
                              height:'22rem'
                          })
                      }} />
                      <img src={drawonWhyUs} alt="" style={{
                          position:'absolute',
                          zIndex: 1,
                          bottom: '-10%',
                          left:'3%'
                      }} />
                      <ReviewCount/>
                  </Grid>
                  <Grid item container xs={12} md={6} spacing={4} >
                      <Grid item xs={12} sx={{
                      }}>
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
                                  Why Choose Us
                              </Typography>
                          </Box>
                          <Typography component='h4' variant='h4' sx={{
                              textAlign: 'left',
                              fontFamily: 'Outfit',
                              fontWeight: 600,
                              mt: 1
                          }}>
                              Your Journey to Better <br /> Health Starts Here
                          </Typography>
                      </Grid>
                      <Grid item xs={6}>
                          <Features imageUrl={OrgaincImg}
                              heading={'100% Organic'}
                              description={'Our qualified doctors are board-certified in their'}
                          />
                      </Grid>
                      <Grid item xs={6}>
                          <Features imageUrl={ChemicalLess}
                              heading={'Chemical Less'}
                              description={'Our qualified doctors are board-certified in their'}
                          />
                      </Grid>
                      <Grid item xs={6}>
                          <Features imageUrl={TestedSvg}
                              heading={'Tested Product'}
                              description={'Our qualified doctors are board-certified in their '}
                          />
                      </Grid>
                      <Grid item xs={6}>
                          <Features imageUrl={PureAurveda}
                              heading={'Pure Ayurveda'}
                              description={'Our qualified doctors are board-certified in their'}
                          />
                      </Grid>
                  </Grid>

              </Grid>

              <Grid container spacing={3} sx={{
                  display: { xs: 'flex', md: 'none' }
              }}>
                  <Grid item container xs={12} md={6} spacing={4} >
                      <Grid item xs={12} sx={{
                      }}>
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
                                  Why Choose Us
                              </Typography>
                          </Box>
                          <Typography component='h4' variant='h4' sx={{
                              textAlign: 'left',
                              fontFamily: 'Outfit',
                              fontWeight: 600,
                              mt: 1
                          }}>
                              Your Journey to Better <br /> Health Starts Here
                          </Typography>
                      </Grid>
                      <Grid item xs={6}>
                          <Features imageUrl={OrgaincImg}
                              heading={'100% Organic'}
                              description={'Our qualified doctors are board-certified in their'}
                          />
                      </Grid>
                      <Grid item xs={6}>
                          <Features imageUrl={ChemicalLess}
                              heading={'Chemical Less'}
                              description={'Our qualified doctors are board-certified in their'}
                          />
                      </Grid>
                      <Grid item xs={6}>
                          <Features imageUrl={TestedSvg}
                              heading={'Tested Product'}
                              description={'Our qualified doctors are board-certified in their '}
                          />
                      </Grid>
                      <Grid item xs={6}>
                          <Features imageUrl={PureAurveda}
                              heading={'Pure Ayurveda'}
                              description={'Our qualified doctors are board-certified in their'}
                          />
                      </Grid>
                  </Grid>
                  <Grid item xs={12} md={6} sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      position: 'relative',
                      mt:5
                  }}>

                      <img src={whyUsImage} alt="" style={{
                          ...(isMd ? {
                              position: 'absolute',
                              top: '8%',
                              width: '70%',
                              minHeight: '90%',
                          } : {
                              width: '90%',
                              height: '22rem'
                          })
                      }} />
                      <img src={drawonWhyUs} alt="" style={{
                          position: 'absolute',
                          zIndex: 1,
                          bottom: '-10%',
                          left: '3%',
                          height:'8rem'
                      }} />
                      <ReviewCount />
                  </Grid>
              </Grid>
          </Container>
    </Box>
  )
}

export default WhyUs