import { Box, Container, Divider, Grid, Typography } from '@mui/material'
import React from 'react'
import logoImage from '../../assets/gp-1.svg';
import Facebook from '../../assets/facebook.svg';
import Linkedin from '../../assets/linkedin.svg';
import Instagram from '../../assets/instagram.svg';
import Sethoscope from '../../assets/stethoscope-1.svg';
import Medicine from '../../assets/medicine-1.svg';


const Footer = () => {
    return (
        <footer>
            <Box
                sx={{
                    backgroundColor: '#FBF7F3',
                    pt: '4rem',
                    position: 'relative'
                }}
            >
                <Box sx={{
                    position: 'absolute',
                    top:'30%'
                }}>
                    <img src={Sethoscope} alt="" />
                </Box>
                <Box sx={{
                    position: 'absolute',
                    right: 0,
                    bottom:'20%'
                }}>
                    <img src={Medicine} alt="" />
                </Box>
                <Container>
                    <Grid container>
                        <Grid item xs={12} sm={6} md={3}>
                            <img src={logoImage} alt="" />
                            <Typography component='p' variant='p' sx={{
                                fontFamily: 'Outfit',
                                mt: 1,
                                fontSize: '1rem',
                                color: '#3C4253'
                            }}>From wellness tips to expert advice, we're here to support your journey to a healthier you.
                            </Typography>
                            <Box sx={{
                                mt: 3
                            }}>
                                <img src={Facebook} alt="" />
                                <img src={Instagram} style={{
                                    marginLeft: '0.5rem'
                                }} alt="" />
                                <img src={Linkedin} style={{
                                    marginLeft: '0.5rem'
                                }} alt="" />
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} md={2} sx={{
                            display: 'flex',
                            justifyContent: { xs: 'start', md: 'center' },
                            mt:{xs: 5, md: 0}
                        }}>
                            <Box >
                                <Typography component='h6' variant='h6' sx={{
                                    fontFamily: 'Outfit',
                                    fontSize: '1.2rem',
                                    color: '#036C5F',
                                    fontWeight: 700,
                                    textAlign: 'left'
                                }}>
                                    Quick Links
                                </Typography>
                                <Typography sx={{
                                    fontFamily: 'Outfit',
                                    textAlign: 'left',
                                    color: '#3C4253',
                                    fontSize: '1rem',
                                    mt: {xs:2, md:4},
                                    fontWeight: 500,
                                }}>
                                    &gt; About
                                </Typography>
                                <Typography sx={{
                                    fontFamily: 'Outfit',
                                    textAlign: 'left',
                                    color: '#3C4253',
                                    fontSize: '1rem',
                                    mt: 2,
                                    fontWeight: 500,
                                }}>
                                    &gt; Services
                                </Typography>
                                <Typography sx={{
                                    fontFamily: 'Outfit',
                                    textAlign: 'left',
                                    color: '#3C4253',
                                    fontSize: '1rem',
                                    mt: 2,
                                    fontWeight: 500,
                                }}>
                                    &gt; Products
                                </Typography>
                                <Typography sx={{
                                    fontFamily: 'Outfit',
                                    textAlign: 'left',
                                    color: '#3C4253',
                                    fontSize: '1rem',
                                    mt: 2,
                                    fontWeight: 500,
                                }}>
                                    &gt; Facilities
                                </Typography>
                                <Typography sx={{
                                    fontFamily: 'Outfit',
                                    textAlign: 'left',
                                    color: '#3C4253',
                                    fontSize: '1rem',
                                    mt: 2,
                                    fontWeight: 500,
                                }}>
                                    &gt; Doctors
                                </Typography>
                                <Typography sx={{
                                    fontFamily: 'Outfit',
                                    textAlign: 'left',
                                    color: '#3C4253',
                                    fontSize: '1rem',
                                    mt: 2,
                                    fontWeight: 500,
                                }}>
                                    &gt; Contact
                                </Typography>
                            </Box>

                        </Grid>
                        <Grid item xs={12} sm={6} md={4} sx={{
                            display: 'flex',
                            justifyContent: { xs: 'start', md: 'center' },
                            mt: { xs: 5, md: 0 }
                        }}>
                            <Box sx={{
                                width: '100%'
                            }}>

                                <Typography component='h6' variant='h6' sx={{
                                    fontFamily: 'Outfit',
                                    fontSize: '1.2rem',
                                    color: '#036C5F',
                                    fontWeight: 700,
                                    textAlign: 'left'
                                }}>
                                    Opening Hours
                                </Typography>
                                <Box sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between'
                                }}>
                                    <Typography sx={{
                                        fontFamily: 'Outfit',
                                        textAlign: 'left',
                                        color: '#3C4253',
                                        fontSize: '1rem',
                                        mt: {xs:2, md:4},
                                        fontWeight: 500,
                                    }}>
                                        Mon - Tues
                                    </Typography>
                                    <Typography sx={{
                                        fontFamily: 'Outfit',
                                        textAlign: 'left',
                                        color: '#3C4253',
                                        fontSize: '1rem',
                                        mt: 4,
                                        fontWeight: 500,
                                    }}>
                                        08:00 AM - 05:00PM
                                    </Typography>
                                </Box>
                                <Box sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between'
                                }}>
                                    <Typography sx={{
                                        fontFamily: 'Outfit',
                                        textAlign: 'left',
                                        color: '#3C4253',
                                        fontSize: '1rem',
                                        mt: 2,
                                        fontWeight: 500,
                                    }}>
                                        Wed - Thu
                                    </Typography>
                                    <Typography sx={{
                                        fontFamily: 'Outfit',
                                        textAlign: 'left',
                                        color: '#3C4253',
                                        fontSize: '1rem',
                                        mt: 2,
                                        fontWeight: 500,
                                    }}>
                                        09:00 AM - 06:00PM
                                    </Typography>
                                </Box>
                                <Box sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between'
                                }}>
                                    <Typography sx={{
                                        fontFamily: 'Outfit',
                                        textAlign: 'left',
                                        color: '#3C4253',
                                        fontSize: '1rem',
                                        mt: 2,
                                        fontWeight: 500,
                                    }}>
                                        Fri - Sat
                                    </Typography>
                                    <Typography sx={{
                                        fontFamily: 'Outfit',
                                        textAlign: 'left',
                                        color: '#3C4253',
                                        fontSize: '1rem',
                                        mt: 2,
                                        fontWeight: 500,
                                    }}>
                                        08:00 AM - 05:00PM
                                    </Typography>
                                </Box>
                               
                                <Box sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between'
                                }}>
                                    <Typography sx={{
                                        fontFamily: 'Outfit',
                                        textAlign: 'left',
                                        color: '#3C4253',
                                        fontSize: '1rem',
                                        mt: 2,
                                        fontWeight: 500,
                                    }}>
                                        Sunday
                                    </Typography>
                                    <Typography sx={{
                                        fontFamily: 'Outfit',
                                        textAlign: 'left',
                                        color: '#3C4253',
                                        fontSize: '1rem',
                                        mt: 2,
                                        fontWeight: 500,
                                    }}>
                                        Emergency Only
                                    </Typography>
                                </Box>
                                <Box sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between'
                                }}>
                                    <Typography sx={{
                                        fontFamily: 'Outfit',
                                        textAlign: 'left',
                                        color: '#3C4253',
                                        fontSize: '1rem',
                                        mt: 2,
                                        fontWeight: 500,
                                    }}>
                                       Personal
                                    </Typography>
                                    <Typography sx={{
                                        fontFamily: 'Outfit',
                                        textAlign: 'left',
                                        color: '#3C4253',
                                        fontSize: '1rem',
                                        mt: 2,
                                        fontWeight: 500,
                                    }}>
                                       Mon - 05:00PM
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3} sx={{
                            display: 'flex',
                            justifyContent: { xs: 'start', md: 'center' },
                            mt: { xs: 5, md: 0 }
                        }}>
                            <Box >
                                <Typography component='h6' variant='h6' sx={{
                                    fontFamily: 'Outfit',
                                    fontSize: '1.2rem',
                                    color: '#036C5F',
                                    fontWeight: 700,
                                    textAlign: 'left'
                                }}>
                                    Contact
                                </Typography>
                                <Typography sx={{
                                    fontFamily: 'Outfit',
                                    textAlign: 'left',
                                    color: '#3C4253',
                                    fontSize: '1rem',
                                    mt: {xs:2, md:4},
                                    fontWeight: 500,
                                }}>
                                    82 New street . NY 1013
                                </Typography>
                                <Typography sx={{
                                    fontFamily: 'Outfit',
                                    textAlign: 'left',
                                    color: '#3C4253',
                                    fontSize: '1rem',
                                    mt: 2,
                                    fontWeight: 500,
                                }}>
                                    (987) 654 - 3210
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
                <Divider sx={{
                    mt:4,
                }} />
                <Typography sx={{
                    fontFamily: 'Outfit',
                    textAlign: 'center',
                    my:2
                }}>
                    © 2024 Ganna Prakasam. All rights reserved.
                </Typography>
            </Box>
        </footer>
    )
}

export default Footer
