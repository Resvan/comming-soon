import { Avatar, Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import Stethoscope from '../assets/stethoscope.svg';
import Medicine from '../assets/medicine.svg';
import Authentic from '../assets/Authentic.png';
import Personal from '../assets/Personal.png';
import Expert from '../assets/Expert.png';
import Patients from '../assets/Patients.png';
import Empathy from '../assets/Emapthy.png';
import Responsiblity from '../assets/Responsiblity.png';
import Care from '../assets/Care.png';
import Commitment from '../assets/Commitment.png';
import FAQ from '../components/FAQ/FAQ';
import Footer from '../components/Footer/Footer';
import gallery1 from '../assets/gallery-1.png';
import gallery2 from '../assets/gallery-2.png';
import gallery3 from '../assets/gallery-3.png';
import gallery4 from '../assets/gallery-4.png';
import gallery5 from '../assets/gallery-5.png';
import gallery6 from '../assets/gallery-6.png';
import drawonWhyUs from '../assets/drawonWhyus.svg';


const Facilities = () => {
    return (
        <>
            <Box
                sx={{
                    color: 'white',
                    pt: 2,
                    pb: '5rem',
                    position: 'relative',
                    backgroundColor: '#036C5F',
                }}>
                <NavBar />
                <Container sx={{
                    mt: '5rem',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
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
                            fontWeight: 500,
                            fontSize: '1.2rem'
                        }}>
                            Our Facilities
                        </Typography>
                    </Box>
                    <Typography sx={{
                        fontFamily: "Outfit",
                        fontWeight: 600,
                        textAlign: 'center',
                        fontSize: { xs: '2rem', md: '3.5rem' },
                        mt: 2
                    }} variant='h2' component='h2' >
                        Our Way of Operations <br /> Congue Sapien
                    </Typography>
                </Container>
                <Box
                    sx={{
                        position: 'absolute',
                        bottom: '-5%',
                        left: '1%',
                        transform: 'translateY(-55%)', // Center vertically
                        zIndex: 1, // Ensure SVG is above other content
                    }}
                >
                    <img src={Stethoscope} style={{
                        height: '6rem'
                    }} alt="" />
                </Box>
                <Box
                    sx={{
                        position: 'absolute',
                        right: '1%',
                        bottom: '20%',
                        transform: 'translateY(-60%)', // Center vertically
                        zIndex: 1, // Ensure SVG is above other content

                    }}
                >
                    <img src={Medicine} style={{
                        height: '5rem'
                    }} alt="" />
                </Box>
            </Box>
            <Container sx={{
                position: 'relative',
            }}>
                <Grid container spacing={4} sx={{
                    my: '5rem',
                    flexDirection: { xs: 'column-reverse', md: 'row' }
                }}>
                    <Grid item xs={12} md={6}>
                        <img src={Authentic} style={{
                            width: '95%',
                            height: ''
                        }} alt="" />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 2,
                        }}>
                            <div style={{
                                height: '2px',
                                width: '25%',
                                backgroundColor: '#EEA676',
                                alignSelf: 'center'
                            }}></div>
                            <Typography component='p' variant='p' sx={{
                                color: '#EEA676',
                                fontFamily: 'Outfit',
                                position: 'relative',
                                fontWeight: 500,
                                fontSize: '1.2rem'
                            }}>
                                Authentic Treatments
                            </Typography>
                        </Box>
                        <Typography component='h3' variant='h3' sx={{
                            textAlign: 'left',
                            fontFamily: 'Outfit',
                            fontWeight: 600,
                            mt: 1,
                            fontSize: { xs: '2rem', md: '3rem' },
                            color: '#042622'
                        }}>
                            Every Great Doctor has a Great Story Behind
                        </Typography>
                        <Typography component='p' variant='p' sx={{
                            fontFamily: 'Outfit',
                            mt: 2,
                            color: '#3C4253',
                            fontWeight: 400,
                            lineHeight: "1.8rem"
                        }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam proin nibh cursus at sed sagittis amet, sed. Tristique id nibh lobortis nunc elementum. Tellus quam mauris aenean turpis vulputate sodales nullam lobortis. Vulputate tortor tincidun.
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container spacing={4} sx={{
                    mb: '5rem',
                }}>
                    <Grid item xs={12} md={6}
                        sx={{
                            display: 'flex',
                            alignItems: 'center'
                        }}
                    >
                        <Box>
                            <Box sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 2,
                            }}>
                                <div style={{
                                    height: '2px',
                                    width: '25%',
                                    backgroundColor: '#EEA676',
                                    alignSelf: 'center'
                                }}></div>
                                <Typography component='p' variant='p' sx={{
                                    color: '#EEA676',
                                    fontFamily: 'Outfit',
                                    position: 'relative',
                                    fontWeight: 500,
                                    fontSize: '1.2rem'
                                }}>
                                    Personal Guidance
                                </Typography>
                            </Box>
                            <Typography component='h3' variant='h3' sx={{
                                textAlign: 'left',
                                fontFamily: 'Outfit',
                                fontWeight: 600,
                                mt: 1,
                                fontSize: { xs: '2rem', md: '3rem' },
                                color: '#042622'
                            }}>
                                Benefits, Risks, Tips if You are Considering Going
                            </Typography>
                            <Typography component='p' variant='p' sx={{
                                fontFamily: 'Outfit',
                                mt: 2,
                                color: '#3C4253',
                                fontWeight: 400,
                                lineHeight: "1.8rem"
                            }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam proin nibh cursus at sed sagittis amet, sed. Tristique id nibh lobortis nunc elementum. Tellus quam mauris aenean turpis vulputate sodales nullam lobortis. Vulputate tortor tincidun.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6} sx={{
                        display: 'flex',
                        justifyContent: 'end'
                    }}>
                        <img src={Personal} style={{
                            width: '95%',
                            height: ''
                        }} alt="" />
                    </Grid>
                </Grid>
                <Grid container spacing={4} sx={{
                    mb: '5rem',
                    flexDirection: { xs: 'column-reverse', md: 'row' }
                }}>
                    <Grid item xs={12} md={6}>
                        <img src={Expert} style={{
                            width: '95%',
                            height: ''
                        }} alt="" />
                    </Grid>
                    <Grid item xs={12} md={6} sx={{
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                        <Box>
                            <Box sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 2,
                            }}>
                                <div style={{
                                    height: '2px',
                                    width: '25%',
                                    backgroundColor: '#EEA676',
                                    alignSelf: 'center'
                                }}></div>
                                <Typography component='p' variant='p' sx={{
                                    color: '#EEA676',
                                    fontFamily: 'Outfit',
                                    position: 'relative',
                                    fontWeight: 500,
                                    fontSize: '1.2rem'
                                }}>
                                    Authentic Treatments
                                </Typography>
                            </Box>
                            <Typography component='h3' variant='h3' sx={{
                                textAlign: 'left',
                                fontFamily: 'Outfit',
                                fontWeight: 600,
                                mt: 1,
                                fontSize: { xs: '2rem', md: '3rem' },
                                color: '#042622'
                            }}>
                                Every Great Doctor has a Great Story Behind
                            </Typography>
                            <Typography component='p' variant='p' sx={{
                                fontFamily: 'Outfit',
                                mt: 2,
                                color: '#3C4253',
                                fontWeight: 400,
                                lineHeight: "1.8rem"
                            }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam proin nibh cursus at sed sagittis amet, sed. Tristique id nibh lobortis nunc elementum. Tellus quam mauris aenean turpis vulputate sodales nullam lobortis. Vulputate tortor tincidun.
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
                <Grid container spacing={4} sx={{
                    mb: '5rem',
                }}>
                    <Grid item xs={12} md={6} sx={{
                        display: 'flex',
                        alignItems: 'end'
                    }}>
                        <Box>
                            <Box sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 2,
                            }}>
                                <div style={{
                                    height: '2px',
                                    width: '25%',
                                    backgroundColor: '#EEA676',
                                    alignSelf: 'center'
                                }}></div>
                                <Typography component='p' variant='p' sx={{
                                    color: '#EEA676',
                                    fontFamily: 'Outfit',
                                    position: 'relative',
                                    fontWeight: 500,
                                    fontSize: '1.2rem'
                                }}>
                                    Authentic Treatments
                                </Typography>
                            </Box>
                            <Typography component='h3' variant='h3' sx={{
                                textAlign: 'left',
                                fontFamily: 'Outfit',
                                fontWeight: 600,
                                mt: 1,
                                fontSize: { xs: '2rem', md: '3rem' },
                                color: '#042622'
                            }}>
                                Every Great Doctor has a Great Story Behind
                            </Typography>
                            <Typography component='p' variant='p' sx={{
                                fontFamily: 'Outfit',
                                mt: 2,
                                color: '#3C4253',
                                fontWeight: 400,
                                lineHeight: "1.8rem"
                            }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam proin nibh cursus at sed sagittis amet, sed. Tristique id nibh lobortis nunc elementum. Tellus quam mauris aenean turpis vulputate sodales nullam lobortis. Vulputate tortor tincidun.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6} sx={{
                        display: 'flex',
                        justifyContent:'end'
                    }}>
                        <img src={Patients} style={{
                            width: '95%',
                            height: ''
                        }} alt="" />
                    </Grid>
                </Grid>
                <Box
                    sx={{
                        position: 'absolute',
                        backgroundColor: '#EEA676',
                        width: { xs: '80%', md: '30%' },
                        height: '15rem',
                        top: { xs: '20%', md: '25%' },
                        left: { xs: '57%', md: '50%' },
                        transform: 'translate(-50%, -50%)',
                        zIndex: -1,
                    }}
                />
                <Box
                    sx={{
                        position: 'absolute',
                        backgroundColor: '#EEA676',
                        width: { xs: '80%', md: '30%' },
                        height: '15rem',
                        top: { xs: '46.5%', md: '50%' },
                        left: { xs: '42%', md: '50%' },
                        transform: 'translate(-50%, -50%)',
                        zIndex: -1,
                    }}
                />
                <Box
                    sx={{
                        position: 'absolute',
                        backgroundColor: '#EEA676',
                        width: { xs: '80%', md: '30%' },
                        height: '15rem',
                        top: { xs: '71.5%', md: '75%' },
                        left: { xs: '57.5%', md: '50%' },
                        transform: 'translate(-50%, -50%)',
                        zIndex: -1,
                    }}
                />
                <Box
                    sx={{
                        display: { xs: 'block', md: 'none' },
                        position: 'absolute',
                        backgroundColor: '#EEA676',
                        width: { xs: '80%', md: '30%' },
                        height: '15rem',
                        top: { xs: '96.5%', md: '75%' },
                        left: { xs: '43%', md: '50%' },
                        transform: 'translate(-50%, -50%)',
                        zIndex: -1,
                    }}
                />
            </Container>
            <Box sx={{
                backgroundColor: '#FBF7F3',
                py: '5rem',
            }}>
                <Container sx={{
                    justifyContent: 'center'
                }}>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 2,
                        width: '95%'
                    }}>
                        <div style={{
                            height: '2px',
                            width: '6rem',
                            backgroundColor: '#EEA676',
                            alignSelf: 'center'
                        }}></div>
                        <Typography component='p' variant='p' sx={{
                            color: '#EEA676',
                            fontFamily: 'Outfit',
                            position: 'relative',
                            fontWeight: 500
                        }}>
                            Our Values
                        </Typography>
                    </Box>
                    <Typography
                        component='h3' variant='h3'
                        sx={{
                            fontFamily: 'Outfit',
                            fontWeight: 600,
                            mb: 2,
                            mt: 1,
                            textAlign: 'center',
                            color: '#042622',
                            fontSize: { xs: '1.5rem', md: '3rem' },
                        }}
                    >
                        Our Work is Heavily Shaped by <br /> My Core Values
                    </Typography>
                    <Grid container
                        component="main"
                        spacing={5}
                        sx={{
                            justifyContent: 'center',
                            mt: 5
                        }}>
                        <Grid item xs={12} md={6}>
                            <Box sx={{
                                backgroundColor: 'white',
                                display: 'flex',
                                gap: 2,
                                padding: '2rem'
                            }}>
                                <Avatar sx={{ backgroundColor: '#DEEEEC', width: 50, height: 50, padding: '1rem' }}>
                                    <img src={Empathy} alt="Feature" style={{ width: '70%', height: '70%', }} />
                                </Avatar>
                                <Box>
                                    <Typography variant='h5' component={'h5'} sx={{
                                        fontFamily: 'Outfit',
                                        color: '#042622',
                                        fontWeight: 600,
                                    }}>Empathy</Typography>
                                    <Typography component={'p'} variant='p'
                                        sx={{
                                            fontFamily: "Outfit",
                                            color: "#3C4253",
                                            lineHeight: '30px',
                                            mt: 1,
                                            width:'90%'
                                        }}
                                    >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu sed ut vel volutpat. Dui sapien, aenean turpis posuere urna.</Typography>
                                </Box>

                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box sx={{
                                backgroundColor: 'white',
                                display: 'flex',
                                gap: 2,
                                padding: '2rem'
                            }}>
                                <Avatar sx={{ backgroundColor: '#DEEEEC', width: 50, height: 50, padding: '1rem' }}>
                                    <img src={Responsiblity} alt="Feature" style={{ width: '70%', height: '70%', }} />
                                </Avatar>
                                <Box>
                                    <Typography variant='h5' component={'h5'} sx={{
                                        fontFamily: 'Outfit',
                                        color: '#042622',
                                        fontWeight: 600,
                                    }}>Responsibility</Typography>
                                    <Typography component={'p'} variant='p'
                                        sx={{
                                            fontFamily: "Outfit",
                                            color: "#3C4253",
                                            lineHeight: '30px',
                                            mt: 1,
                                            width: '90%'
                                        }}
                                    >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu sed ut vel volutpat. Dui sapien, aenean turpis posuere urna.</Typography>
                                </Box>

                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box sx={{
                                backgroundColor: 'white',
                                display: 'flex',
                                gap: 2,
                                padding: '2rem'
                            }}>
                                <Avatar sx={{ backgroundColor: '#DEEEEC', width: 50, height: 50, padding: '1rem' }}>
                                    <img src={Care} alt="Feature" style={{ width: '70%', height: '70%', }} />
                                </Avatar>
                                <Box>
                                    <Typography variant='h5' component={'h5'} sx={{
                                        fontFamily: 'Outfit',
                                        color: '#042622',
                                        fontWeight: 600,
                                    }}>Care & Service</Typography>
                                    <Typography component={'p'} variant='p'
                                        sx={{
                                            fontFamily: "Outfit",
                                            color: "#3C4253",
                                            lineHeight: '30px',
                                            mt: 1,
                                            width: '90%'
                                        }}
                                    >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu sed ut vel volutpat. Dui sapien, aenean turpis posuere urna.</Typography>
                                </Box>

                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box sx={{
                                backgroundColor: 'white',
                                display: 'flex',
                                gap: 2,
                                padding: '2rem'
                            }}>
                                <Avatar sx={{ backgroundColor: '#DEEEEC', width: 50, height: 50, padding: '1rem' }}>
                                    <img src={Commitment} alt="Feature" style={{ width: '70%', height: '70%', }} />
                                </Avatar>
                                <Box>
                                    <Typography variant='h5' component={'h5'} sx={{
                                        fontFamily: 'Outfit',
                                        color: '#042622',
                                        fontWeight: 600,
                                    }}>Commitment</Typography>
                                    <Typography component={'p'} variant='p'
                                        sx={{
                                            fontFamily: "Outfit",
                                            color: "#3C4253",
                                            lineHeight: '30px',
                                            mt: 1,
                                            width: '90%'
                                        }}
                                    >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu sed ut vel volutpat. Dui sapien, aenean turpis posuere urna.</Typography>
                                </Box>

                            </Box>
                        </Grid>
                    </Grid>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 2,
                        width: '95%',
                        mt:'5rem'
                    }}>
                        <div style={{
                            height: '2px',
                            width: '6rem',
                            backgroundColor: '#EEA676',
                            alignSelf: 'center'
                        }}></div>
                        <Typography component='p' variant='p' sx={{
                            color: '#EEA676',
                            fontFamily: 'Outfit',
                            position: 'relative',
                            fontWeight: 500
                        }}>
                            Our Gallery
                        </Typography>
                    </Box>
                    <Typography
                        component='h3' variant='h3'
                        sx={{
                            fontFamily: 'Outfit',
                            fontWeight: 600,
                            mb: 2,
                            mt: 1,
                            textAlign: 'center',
                            color: '#042622',
                            fontSize: { xs: '1.5rem', md: '3rem' },
                        }}
                    >
                        Affordable Appointment <br /> Memories for Everyone
                    </Typography>
                    <Grid container spacing={4} mt={5}>
                        <Grid item xs={12} sm={6} md={4}>
                            <img src={gallery1} alt="" />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <img src={gallery2} alt="" />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <img src={gallery3} alt="" />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <img src={gallery4} alt="" />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <img src={gallery5} alt="" />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} position={'relative'}>
                            <img src={gallery6} alt="" />
                            <img src={drawonWhyUs} alt="" style={{
                                position: 'absolute',
                                bottom: "-10%",
                                right:"-20%",
                            }} />
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <FAQ />
            <Footer/>
        </>
    )
}

export default Facilities