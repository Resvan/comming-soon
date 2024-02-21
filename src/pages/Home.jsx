import { Box, Container, Grid, IconButton, Typography } from '@mui/material'
import React, { useRef, useState } from 'react';
import topArrowRight from '../assets/arrow-top-right.svg';
import Stethoscope from '../assets/stethoscope.svg';
import Medicine from '../assets/medicine.svg';
import ReactPlayer from 'react-player';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import aboutImageOne from '../assets/about-i1.png';
import aboutImageTwo from '../assets/about-i2.png';
import joinUs from '../assets/joinus.svg';
import tickIcon from '../assets/tickIcon.svg';
import topArrowPrimary from '../assets/topArrowPrimary.svg';
import ProductSlider from '../components/ProductSlider';
import ArrowForwardIcon from '../assets/forwardArrow.svg';
import ArrowBackwardIcon from '../assets/backArrow.svg';
import WhyUs from '../components/WhyUs/WhyUs';
import Facilities from '../components/Facilities/Facilities';
import OurtExpertDoctors from '../components/OurExpertDoctors/OurtExpertDoctors';
import Testmonial from '../components/Testimonial/Testmonial';
import Blog from '../components/Blog/Blog';
import Footer from '../components/Footer/Footer';
import Facebook from '../assets/facebook.svg';
import NavBar from '../components/NavBar/NavBar';





const Home = () => {

    const [playing, setPlaying] = useState(false);
    const playerRef = useRef(null);


    const handlePlayPause = () => {
        setPlaying(!playing);
    };

    return (
        <>
            <Box
                sx={{
                    color: 'white',
                    pt: 2,
                    position: 'relative',
                    backgroundColor: 'white',
                    backgroundImage: "linear-gradient(to bottom, #036C5F 80%, rgba(0, 0, 0, 0) 20%)" // Removed spaces before %
                }}>
                <NavBar/>
                <Container sx={{
                    mt: 7,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Typography sx={{
                        fontFamily: "Outfit",
                        fontWeight: 600,
                        textAlign: 'center',
                        fontSize: { xs: '2rem' ,md:'4.3rem'},
                    }} variant='h2' component='h2' >
                        Quality Healthcare That Comes <br /> From the Heart
                    </Typography>
                    <Typography sx={{
                        fontFamily: "Outfit",
                        textAlign: 'center',
                        mt: 3,
                        fontWeight: 300,
                        lineHeight: '150%'
                    }} variant='p' component='p' >
                        At Medicio hospital, we believe that healthcare should be more than just a service; it should be a <br /> compassionate and collaborative journey towards wellness.
                    </Typography>
                    <Box sx={{
                        border: '1px solid white',
                        maxWidth: 'fit-content',
                        mt: 4,
                        px: 4,
                        py: 2.8,
                        borderRadius: '50px',
                        display: 'flex',
                        gap: 1
                    }}>
                        <Typography component={'p'} variant='p' sx={{
                            fontFamily: 'Outfit',
                            letterSpacing: '0.38px',
                            fontWeight: 300
                        }}>Free Consultation </Typography>
                        <img src={topArrowRight} alt="" />
                    </Box>
                </Container>
                <Container sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    mt: 10,
                    position: 'relative'
                }} >
                    <div style={{
                        position: 'absolute',
                        background: "#EEA676",
                        width: '70%',
                        top: -10,
                        left: '6%',
                        height: '90%'
                    }}></div>

                    <ReactPlayer

                        ref={playerRef}
                        url={'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'}
                        playing={playing}
                        controls={true}
                        width="90%"
                        height={'100%'}
                        style={{
                            zIndex: 1,
                        }}
                    />
                    <Box
                        sx={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            display: 'flex',
                            alignItems: 'center',
                            zIndex: 1
                        }}
                    >
                        <IconButton
                            onClick={handlePlayPause}
                            sx={{
                                backgroundColor: 'white',
                                borderRadius: '50%',
                                padding: '18px',
                                '&:hover': {
                                    backgroundColor: 'white',
                                },
                            }}
                        >
                            {playing ? (
                                <PauseIcon sx={{ color: '#EEA676' }} />
                            ) : (
                                <PlayArrowIcon sx={{ color: '#EEA676' }} />
                            )}
                        </IconButton>
                    </Box>
                </Container>
                <Box
                    sx={{
                        position: 'absolute',
                        top: '40%',
                        left: '3%',
                        transform: 'translateY(-55%)', // Center vertically
                        zIndex: 1, // Ensure SVG is above other content
                    }}
                >
                    <img src={Stethoscope} alt="" />
                </Box>
                <Box
                    sx={{
                        position: 'absolute',
                        right: '5%',
                        top: '38%',
                        transform: 'translateY(-60%)', // Center vertically
                        zIndex: 1, // Ensure SVG is above other content

                    }}
                >
                    <img src={Medicine} alt="" />
                </Box>
            </Box>
            <Container>
                <Grid container spacing={2} sx={{
                    mt: 8,
                    justifyContent: 'center'
                }}>
                    <Grid item xs={12} md={6} sx={{
                        display:'grid'
                    }}>
                        <Box sx={{
                            display: 'flex',
                            alignItems:'center',
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
                                About Us
                            </Typography>
                        </Box>
                        <Typography component='h3' variant='h3' sx={{
                            textAlign: 'left',
                            fontFamily: 'Outfit',
                            fontWeight: 600,
                            mt: 1,
                            fontSize:{xs:'2rem',md:'3rem'}
                        }}>
                            Your Journey to Better <br /> Health Starts Here
                        </Typography>
                        <Typography component='p' variant='p' sx={{
                            fontFamily: 'Outfit',
                            width: '75%',
                            mt: 2,
                            mb: 4
                        }}>We are a team of highly skilled and experienced medical professionals, including doctors, nurses, specialists, and support staff, with a commitment to excellence.
                        </Typography>
                        <Box sx={{
                            display: 'flex',
                            alignItems:'center',
                            gap: 2,
                            mb: 1,
                        }}>
                            <img src={tickIcon} style={{
                                height:'1.5rem'
                            }} alt="" />
                            <Typography sx={{
                                fontFamily: 'Outfit'
                            }}>Comprehensive Care</Typography>
                        </Box>
                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 2,
                            mb: 1,
                        }}>
                            <img src={tickIcon} alt="" style={{
                                height: '1.5rem'
                            }} />
                            <Typography sx={{
                                fontFamily: 'Outfit'
                            }}>Access and Convenience</Typography>
                        </Box>
                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 2,
                            mb: 1,
                        }}>
                            <img src={tickIcon} alt="" style={{
                                height: '1.5rem'
                            }} />
                            <Typography sx={{
                                fontFamily: 'Outfit'
                            }}>Expert Healthcare Providers</Typography>
                        </Box>
                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 2,
                            mb: 1,
                        }}>
                            <img src={tickIcon} alt="" style={{
                                height: '1.5rem'
                            }} />
                            <Typography sx={{
                                fontFamily: 'Outfit'
                            }}>Patient-Centered Approach</Typography>
                        </Box>
                        <Box sx={{
                            border: '1.5px solid #036C5F',
                            maxWidth: 'fit-content',
                            px: 4,
                            py: 2,
                            mt:4,
                            borderRadius: '50px',
                            display: 'flex',
                            gap: 1,
                            alignItems:'center'
                        }}>
                            <Typography component={'p'} variant='p' sx={{
                                fontFamily: 'Outfit',
                                letterSpacing: '0.38px',
                                color: '#036C5F',
                                fontWeight: 500,
                                textWrap:'nowrap'
                            }}>Learn More</Typography>
                            <img src={topArrowPrimary} alt="" />
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6} sx={{
                        position: 'relative'
                    }}>
                        <img src={aboutImageOne} style={{
                            width:'100%'
                        }} alt="" />
                        <img src={aboutImageTwo} style={{
                            // marginTop: '1rem',
                            width:'100%'
                        }} alt="" />
                        <Box sx={{
                            backgroundColor: "white",
                            position: 'absolute',
                            top: '50%',
                            right: { xs: '-1%', md: '-10%' },
                            transform: 'translateY(-55%)',
                            borderRadius: '50%',
                            padding: '5px'
                        }}>
                            <Box sx={{
                                position: 'relative', 
                                display: 'inline-block' 
                            }}>
                                <img src={joinUs} className='rotated-image' style={{
                                    height: '6rem',
                                }} alt="" />
                                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                <img src={Facebook} style={{
                                    position: 'absolute', 
                                    top: '45%', 
                                    left: '50%',
                                    transform: 'translate(-50%, -50%)', 
                                    zIndex: 1,
                                    cursor: 'pointer',
                                    
                                }} alt="" />
                                </a>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
            <Container sx={{
                mt: '7rem',
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                position:'relative'
            }}>
                <Typography component='p' variant='p' sx={{
                    position: 'relative',
                    fontWeight: 500,
                    color:'#EEA676',
                    '::before': {
                        content: '""',
                        position: 'absolute',
                        width: '9.5rem',
                        height: '3px', 
                        background: '#EEA676',
                        top: '50%', 
                        transform: 'translateY(-50%)', 
                        right: '110%', 
                    },
                }}>
                    Our Products
                </Typography>
                <Typography
                    component='h3' variant='h3'
                    sx={{
                        fontFamily: 'Outfit',
                        fontWeight: 600,
                        mb: 2,
                        mt: 1,
                        fontSize: { xs: '2rem', md: '3rem' }
                    }}
                >
                    Best for Your Health
                </Typography>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    mb:4
                }}>
                    <Typography sx={{
                        fontFamily: 'Outfit',
                        width: { xs: '100%', md: '60%' },
                        textAlign: { xs: 'left', md:'center'},
                    }}>
                        Sed et a in nunc morbi odio quam rhoncus. Libero vulputate arcu risus accumsan eget euismod. Euismod amet tellus libero accumsan eget faucibus dui. Diam orci.
                    </Typography>
                </Box>
                <div className="swiper-button image-swiper-button-next">
                    <img src={ArrowForwardIcon} alt="" />
                </div>
                <div className="swiper-button image-swiper-button-prev">
                    <img src={ArrowBackwardIcon} alt="" />
                </div>
                    <ProductSlider />
                <Box sx={{
                    border: '1.5px solid #036C5F',
                    maxWidth: 'fit-content',
                    px: 4,
                    py: 2.5,
                    borderRadius: '50px',
                    display: 'flex',
                    gap: 1
                }}>
                    <Typography component={'p'} variant='p' sx={{
                        fontFamily: 'Outfit',
                        letterSpacing: '0.38px',
                        color: '#036C5F',
                        fontWeight: 500
                    }}>Shop Now</Typography>
                    <img src={topArrowPrimary} alt="" />
                </Box>
            </Container>
            <WhyUs/>
            <Facilities />
            <OurtExpertDoctors />
            <Testmonial />
            <Blog />
            <Footer/>
        </>
    )
}

export default Home