import { Avatar, Box, Container, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import Qoute1 from '../../assets/qoutes1.svg';
import Qoute2 from '../../assets/qoutes2.svg';
import ArrowForwardIcon from '../../assets/forwardArrow.svg';
import ArrowBackwardIcon from '../../assets/backArrow.svg';
import CeoImage from '../../assets/ceo.png';
import SuffleCard from './SuffleCard';
import TestmonialShape from '../../assets/testmonial-shape.svg'
import ReviewCard from './ReviewCard';

const Testmonial = ({bgcolor = true}) => {
    const cards = [
        { backgroundColor: 'red', content: 'my card one' },
        { backgroundColor: 'green', content: 'my card two' },
        { backgroundColor: 'blue', content: 'my card three' },
        { backgroundColor: 'yellow', content: 'my card four' },
        { backgroundColor: 'black', content: 'my card five' }
    ];

    const [activeCard, setActiveCard] = useState(0);
    const [prevCard, setPrevCard] = useState(cards.length - 1);
    const [nextCard, setNextCard] = useState(1);


    const handleNext = () => {
        setPrevCard(activeCard);
        setActiveCard((prev) => (prev + 1) % cards.length);
        setNextCard((prev) => (prev + 1) % cards.length);
    };

    const handlePrev = () => {
        setActiveCard(prevCard);
        setNextCard(activeCard);
        setPrevCard((prev) => (prev - 1 + cards.length) % cards.length);
    };

  return (
      <Box
          sx={{
              backgroundColor: bgcolor ? '#FBF7F3' : 'white' ,
              py: '6rem',
              mt: 5,
              position:'relative'
          }}
      >
          <Container>
              <Grid container >
                  <Grid item xs={12} md={6} >
                      <Box sx={{
                          display: 'flex',
                          alignItems: 'center',
                          flexDirection: 'column',
                          width:'85%'
                      }}>
                          <Typography component='p' variant='p' sx={{
                              position: 'relative',
                              fontWeight: 500,
                              color: '#EEA676',
                              '::before': {
                                  content: '""',
                                  position: 'absolute',
                                  width: '10.5rem',
                                  height: '3px',
                                  background: '#EEA676',
                                  top: '50%',
                                  transform: 'translateY(-50%)',
                                  right: '110%',
                              },
                          }}>
                              Team Members
                          </Typography>
                          <Typography
                              component='h3' variant='h3'
                              sx={{
                                  fontFamily: 'Outfit',
                                  fontWeight: 600,
                                  mb:5,
                                  textAlign: 'left'
                              }}
                          >
                              What Our Patients Say About Us
                          </Typography>
                          <Box sx={{
                              display: 'flex',
                              alignItems: 'start',
                              gap:3
                          }}>
                              <img src={Qoute1} alt="" srcset="" />
                              <Typography sx={{
                                  position: 'relative',
                                  fontFamily: 'Outfit',
                                  color: '#3C4253',
                                  fontSize:'1.2rem'
                              }}>
                                   We are driven by a commitment to redefine the standards of patient care, always guided by the principle
                                  that every individual deserves not just treatment, but genuine wellness. Let our journey continue to illuminate
                                  the path of wellness for generations to come.  <span>
                                      <img src={Qoute2} alt="" srcset="" />
                                  </span>
                              </Typography>
                          </Box>
                          
                      </Box>
                      <Box sx={{
                          display: 'flex',
                          mt: 4,
                          gap:2,
                      }}>
                          <Avatar style={{
                              height: '3rem',
                              width:'3rem'
                          }} src={CeoImage} />
                          <Box sx={{
                              display: 'flex',
                              flexDirection:'column'
                          }}>
                              <Typography sx={{
                                  fontFamily: 'Outfit',
                                  color: '#042622',
                                  fontWeight: '600',
                                  textWrap: 'nowrap'
                              }}>Olivia Parker</Typography>
                              <Typography sx={{
                                  fontFamily: 'Outfit',
                                  color: '#3C4253',
                                  fontSize: '0.9rem'
                              }}>CEO & Founder</Typography>
                          </Box>
                      </Box>
                  </Grid>
                  <Grid item xs={12} md={6} sx={{
                      display: { xs: 'none', md: 'flex' },
                  }}>

                      <Box sx={{
                          alignSelf: 'center',
                          mt:'8rem'
                      }}>
                          <div style={{
                              marginBottom:'1rem'
                          }} className="review-button">
                              <img src={ArrowBackwardIcon}
                                  onClick={handlePrev} alt="" />
                          </div>
                          <div className="review-button image-review-button-next">
                              <img src={ArrowForwardIcon}
                                  onClick={handleNext} alt="" />
                          </div>
                      </Box>
                      <Box sx={{
                          position: 'relative',
                          width: '100%',
                          display: 'flex',
                          justifyContent:'end'
                      }}>
                          {cards.map((card, index) => (
                              <Box
                                  key={index}
                                  style={{
                                      position: 'absolute',
                                      zIndex: activeCard === index ? 2 : nextCard === index ? 1 : 0,
                                      opacity: activeCard === index ? 1 : nextCard === index ? 0.5 : prevCard === index ? 0 : 0,
                                      transition: 'all 0.5s linear',
                                      transform: activeCard === index ? 'translateY(50%) translateX(-20%) ' : prevCard === index ? 'translateY(100%) translateX(0%)' : 'none',
                                  }}
                                  sx={{
                                      width: { xs: '90%', md: '80%' },
                                      justifySelf: 'end',
                                      boxShadow:'0px 22px 80px 0px rgba(0, 0, 0, 0.04)'
                                  }}
                              >
                                  <ReviewCard />
                              </Box>
                          ))}
                      </Box>
 
                  </Grid>
                  <Grid item xs={12} md={6} sx={{
                      display: { xs: 'flex', md: 'none' },
                      flexDirection: 'column',
                      mt:'3rem'
                  }}>
                      <Box sx={{
                          position: 'relative',
                          width: '100%',
                          display: 'flex',
                          justifyContent: 'end'
                      }}>
                          {cards.map((card, index) => (
                              <Box
                                  key={index}
                                  style={{
                                      position: 'absolute',
                                      zIndex: activeCard === index ? 2 : nextCard === index ? 1 : 0,
                                      opacity: activeCard === index ? 1 : nextCard === index ? 0.5 : prevCard === index ? 0 : 0,
                                      transition: 'all 0.5s linear',
                                      transform: activeCard === index ? 'translateY(30%) translateX(-10%) ' : prevCard === index ? 'translateY(100%) translateX(0%)' : 'none',
                                  }}
                                  sx={{
                                      width: { xs: '90%', md: '10%' },
                                      justifySelf: 'end'
                                  }}
                              >
                                  <ReviewCard />
                              </Box>
                          ))}
                      </Box>
                      <Box sx={{
                          mt: '18rem',
                          alignSelf:'end'
                      }}>
                          <div style={{
                              marginBottom: '1rem'
                          }} className="review-button">
                              <img src={ArrowBackwardIcon}
                                  onClick={handlePrev} alt="" />
                          </div>
                          <div className="review-button image-review-button-next">
                              <img src={ArrowForwardIcon}
                                  onClick={handleNext} alt="" />
                          </div>
                      </Box>
                  </Grid>
                  {/* <Grid item xs={12} sx={{
                      display: { xs: 'block', md: 'none' },
                      position: 'relative',
                      minHeight:'18rem',
                     mt:15
                  }}>
                      
                    <SuffleCard/>
                      <Box sx={{
                          display: 'flex',
                          justifyContent: 'end',
                          gap: 2,
                          mt:2
                      }}>
                          <div className="review-button">
                              <img src={ArrowBackwardIcon} alt="" />
                          </div>
                          <div className="review-button image-review-button-next">
                              <img src={ArrowForwardIcon} alt="" />
                          </div>
                      </Box>
                  </Grid>
                  <Grid item xs={12} md={6} style={{
                      position: 'relative'
                  }} >
                      
                      <Box sx={{
                          display: 'flex',
                          justifyContent: 'end',
                          gap: 2,
                          mt: 5
                      }}>
                          <div className="review-button">
                              <img src={ArrowBackwardIcon}
                                  onClick={handlePrev}  alt="" />
                          </div>
                          <div className="review-button image-review-button-next">
                              <img src={ArrowForwardIcon}
                                  onClick={handleNext}    alt="" />
                          </div>
                      </Box>
                  </Grid> */}
              </Grid>
              
          </Container>
          <Box sx={{
              position:'absolute',
              right: '0',
              bottom: '2%',
          }}>
              <img style={{
                  height:'8rem'
              }} src={TestmonialShape} alt="" />
          </Box>
      </Box>
  )
}

export default Testmonial