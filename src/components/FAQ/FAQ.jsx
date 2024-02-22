import { ExpandMore } from '@mui/icons-material'
import { Accordion, AccordionDetails, AccordionSummary, Box, Container, Grid, Typography } from '@mui/material'
import React, { useState } from 'react';
import FaqImg from '../../assets/Faq-img.png'
import FaqShape from '../../assets/Faq-shape.svg';

const FAQ = () => {
    const [expanded, setExpanded] = useState('panel1');

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : null);
    };
  return (
      <Container sx={{
          my:'6rem'
      }}>
          <Grid container>
              <Grid item xs={12} md={6}>
                  <Box sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'start',
                      gap: 2,
                  }}>
                      <div style={{
                          height: '2px',
                          width: '7rem',
                          backgroundColor: '#EEA676',
                          alignSelf: 'center'
                      }}></div>
                      <Typography component='p' variant='p' sx={{
                          color: '#EEA676',
                          fontFamily: 'Outfit',
                          position: 'relative',
                          fontWeight: 500
                      }}>
                          FAQ
                      </Typography>
                  </Box>
                  <Typography
                      component='h3' variant='h3'
                      sx={{
                          fontFamily: 'Outfit',
                          fontWeight: 600,
                          mb: 6,
                          mt: 1,
                          color: '#042622',
                          fontSize: { xs: '1.5rem', md: '2.5rem' },
                      }}
                  >
                      Get Your General Answers
                  </Typography>
                  
                  <Accordion
                      expanded={expanded === 'panel1'}
                      onChange={handleChange('panel1')}
                      sx={{
                          backgroundColor: expanded === 'panel1' ? 'white' : '#DEEEEC',
                          border: 'none',
                          mb: 3
                      }}>
                      <AccordionSummary
                          expandIcon={<ExpandMore />}
                      >
                          <Typography
                              component='h6' variant='h6'
                              sx={{
                                  fontFamily: 'Outfit',
                                  fontWeight: 600,
                                  color: '#042622;',
                                  fontSize: '1.2rem',
                              }}
                          >
                              What medical services do you provide?
                          </Typography>
                      </AccordionSummary>
                      <AccordionDetails >
                          <Typography component='p' variant='p' sx={{
                              fontFamily: 'Outfit',
                              lineHeight:'30px'
                              
                          }}>
                              We offer a comprehensive range of medical services across various departments,
                          including Cardiology, Neurology, Urology, General Surgery, and additional specialties.
                              Visit our services page for more information.
                          </Typography>

                      </AccordionDetails>
                  </Accordion>
                  <Accordion
                      expanded={expanded === 'panel2'}
                      onChange={handleChange('panel2')}
                      sx={{
                          backgroundColor: expanded === 'panel2' ? 'white' : '#DEEEEC',
                          border: 'none',
                          mb: 3
                      }}>
                      <AccordionSummary
                          expandIcon={<ExpandMore />}
                      >
                          <Typography
                              component='h6' variant='h6'
                              sx={{
                                  fontFamily: 'Outfit',
                                  fontWeight: 600,
                                  color: '#042622;',
                                  fontSize: '1.2rem',
                              }}
                          >
                              How can I make an appointment?
                          </Typography>
                      </AccordionSummary>
                      <AccordionDetails >
                          <Typography component='p' variant='p' sx={{
                              fontFamily: 'Outfit',
                              lineHeight: '30px'

                          }}>
                              We offer a comprehensive range of medical services across various departments,
                              including Cardiology, Neurology, Urology, General Surgery, and additional specialties.
                              Visit our services page for more information.
                          </Typography>

                      </AccordionDetails>
                  </Accordion>
                  <Accordion expanded={expanded === 'panel3'}
                      onChange={handleChange('panel3')}
                      sx={{
                          backgroundColor: expanded === 'panel3' ? 'white' : '#DEEEEC',
                          border: 'none',
                          mb: 3
                      }}>
                      <AccordionSummary
                          expandIcon={<ExpandMore />}
                      >
                          <Typography
                              component='h6' variant='h6'
                              sx={{
                                  fontFamily: 'Outfit',
                                  fontWeight: 600,
                                  color: '#042622;',
                                  fontSize: '1.2rem',
                              }}
                          >
                              What are your office hours?
                          </Typography>
                      </AccordionSummary>
                      <AccordionDetails >
                          <Typography component='p' variant='p' sx={{
                              fontFamily: 'Outfit',
                              lineHeight: '30px'

                          }}>
                              We offer a comprehensive range of medical services across various departments,
                              including Cardiology, Neurology, Urology, General Surgery, and additional specialties.
                              Visit our services page for more information.
                          </Typography>

                      </AccordionDetails>
                  </Accordion>
                  <Accordion expanded={expanded === 'panel4'}
                      onChange={handleChange('panel4')}
                      sx={{
                          backgroundColor: expanded === 'panel4' ? 'white' : '#DEEEEC',
                          border: 'none',
                      }}>
                      <AccordionSummary
                          expandIcon={<ExpandMore />}
                      >
                          <Typography
                              component='h6' variant='h6'
                              sx={{
                                  fontFamily: 'Outfit',
                                  fontWeight: 600,
                                  color: '#042622;',
                                  fontSize: '1.2rem',
                              }}
                          >
                              Do you accept insurance?
                          </Typography>
                      </AccordionSummary>
                      <AccordionDetails >
                          <Typography component='p' variant='p' sx={{
                              fontFamily: 'Outfit',
                              lineHeight: '30px'

                          }}>
                              We offer a comprehensive range of medical services across various departments,
                              including Cardiology, Neurology, Urology, General Surgery, and additional specialties.
                              Visit our services page for more information.
                          </Typography>

                      </AccordionDetails>
                  </Accordion>
              </Grid>
              <Grid item xs={12} md={6} sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  height: '100%',
                  mt:{xs:'2rem', md:'0'}
              }}>
                  <Box sx={{
                      position:'relative'
                  }}>
                      <img src={FaqImg} height={'95%'} width={'90%'} alt="" />
                      <Box sx={{
                          position: 'absolute',
                          padding: '1rem',
                          right: { xs: '0' , md:'-10%'},
                          bottom: '20%',
                          backgroundColor: 'white',
                          boxShadow:'6px 10px 24px 0px rgba(0, 0, 0, 0.05)'
                      }}>
                          <Typography component='p' variant='p' sx={{
                              fontFamily: 'Outfit',
                              color:'#042622;'
                          }}>
                              Total Wellness <br /> <span style={{
                                  color: '#036C5F',
                                  fontFamily: 'Outfit',
                                  fontWeight: 500,
                                  mt:1
                              }}>
                                  1,36,896
                              </span> 
                          </Typography>
                          <img src={FaqShape} style={{
                              height:'3.5rem'
                          }} alt="" />
                      </Box>
                  </Box>
                  
              </Grid>
          </Grid>
   </Container>
  )
}

export default FAQ