import { Container, Box, Grid, Typography, Button, Avatar } from '@mui/material';
import React from 'react';
import bannerBg from '../../assets/Ecom/bannerBg.png';
import medicine from '../../assets/Ecom/medicine.svg';
import helath from '../../assets/Ecom/helthProducts.svg';
import cardio from '../../assets/Ecom/cardio.svg';
import wellness from '../../assets/Ecom/wellness.svg';

const Banner = () => {
    return (
        <>
            <Container sx={{
                backgroundImage: `url(${bannerBg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                mt: '1rem'
            }}>
                <Grid container sx={{
                    py: '8rem',
                    px: '2rem'
                }}>
                    <Grid item xs={12} md={6} >
                        <Typography component='p' variant='p'
                            sx={{
                                fontFamily: 'Lato',
                                letterSpacing: '3px',
                                fontWeight: 400,
                                backgroundColor: '#0FE3AF',
                                display: 'inline-block',
                                width: 'auto',
                                color: '#363636',
                                padding: '5px 10px',
                                mb: 1,
                                textTransform: 'uppercase'
                            }}
                        >
                            Medical Professionals
                        </Typography>
                        <Typography
                            component='h2'
                            variant='h2'
                            sx={{
                                fontWeight: 800,
                                fontFamily: 'Lato',
                                letterSpacing: '1px',
                                color: '#143450',
                                fontSize: { xs: '1.5rem', md: '3.5rem' },
                                mb: 1
                            }}
                        >
                            Makes Your Health <br /> Better Will Makes <br /> Us Better
                        </Typography>
                        <Typography component='p' variant='p' sx={{
                            color: '#545454',
                            fontFamily: 'Lato',
                            lineHeight:'25px'
                        }}>
                            This is open to everyone every day and provides primary <br /> health care and cutting-edge medicine in a central location.
                        </Typography>
                        <Button variant='contained' sx={{
                            backgroundColor: "#036C5F",
                            padding: '1rem 1.5rem',
                            fontFamily: 'Outfit',
                            textTransform: 'none',
                            fontWeight: 400,
                            mt: 2
                        }}>
                            Shop Now
                        </Button>
                    </Grid>
                    <Grid item xs={12} md={6}>

                    </Grid>
                </Grid>
            </Container>
            <Container sx={{
                backgroundColor: '#FBF7F3',
            }}>
                <Grid container spacing={3} sx={{
                    py: '3rem',
                    px: '1rem'
                }}>
                    <Grid item xs={12} sm={6} md={3} sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 2
                    }}>
                        <Avatar sx={{ backgroundColor: 'white', width: 45, height: 45, padding: '0.8rem' }}>
                            <img src={medicine} alt="medicine" style={{ width: '70%', height: '70%', }} />
                        </Avatar>
                        <Box>
                            <Typography sx={{
                                fontFamily: 'Outfit',
                                fontWeight: 600,
                                fontSize: '1.2rem'
                            }}>
                                Medicines
                            </Typography>
                            <Typography sx={{
                                fontFamily: 'Outfit',
                                fontSize: '1rem',
                                color: '#545454'
                            }}>
                                Phasellus Lobortis
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 2
                    }}>
                        <Avatar sx={{ backgroundColor: 'white', width: 45, height: 45, padding: '0.8rem' }}>
                            <img src={helath} alt="medicine" style={{ width: '70%', height: '70%', }} />
                        </Avatar>
                        <Box>
                            <Typography sx={{
                                fontFamily: 'Outfit',
                                fontWeight: 600,
                                fontSize: '1.2rem'
                            }}>
                                Health Products
                            </Typography>
                            <Typography sx={{
                                fontFamily: 'Outfit',
                                fontSize: '1rem',
                                color: '#545454'
                            }}>
                                Health Products
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 2
                    }}>
                        <Avatar sx={{ backgroundColor: 'white', width: 45, height: 45, padding: '0.8rem' }}>
                            <img src={cardio} alt="medicine" style={{ width: '70%', height: '70%', }} />
                        </Avatar>
                        <Box>
                            <Typography sx={{
                                fontFamily: 'Outfit',
                                fontWeight: 600,
                                fontSize: '1.2rem'
                            }}>
                                Cardio Care
                            </Typography>
                            <Typography sx={{
                                fontFamily: 'Outfit',
                                fontSize: '1rem',
                                color: '#545454'
                            }}>
                                Vitae Tincidunton
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 2
                    }}>
                        <Avatar sx={{ backgroundColor: 'white', width: 45, height: 45, padding: '0.8rem' }}>
                            <img src={wellness} alt="medicine" style={{ width: '70%', height: '70%', }} />
                        </Avatar>
                        <Box>
                            <Typography sx={{
                                fontFamily: 'Outfit',
                                fontWeight: 600,
                                fontSize: '1.2rem'
                            }}>
                                Wellness Products
                            </Typography>
                            <Typography sx={{
                                fontFamily: 'Outfit',
                                fontSize: '1rem',
                                color: '#545454'
                            }}>
                                Ullamcorper Neque
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default Banner;
