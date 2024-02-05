import { Box, Button, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import logoImage from '../assets/logonew.jpeg';
import phoneImage from '../assets/phoneImage.svg';
import arrowSvg from '../assets/arrow.svg';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import bannerImage from '../assets/bannerImage.png';

const StyledText = styled(Typography)(({ theme, variant }) => ({
    cursor: 'pointer',
    fontFamily: 'Inter',
    fontWeight: 600,
    color:'white'
}));

const Home = () => {

    const menuItems = [
        { label: 'Home', path: '/home' },
        { label: 'About Us', path: '/aboutus' },
        { label: 'Products', path: '/products' },
        { label: 'Facilities', path: '/facilities' },
        { label: 'Doctors', path: '/doctors' },
        { label: 'Contact Us', path: '/contactus' },
    ];

    const navigate = useNavigate();

    return (
        <>
            <Container>
                <Grid container sx={{
                    py: 2
                }}>
                    <Grid item md={7}>
                        <img src={logoImage} style={{
                            height: '5rem',
                        }} alt="" />
                    </Grid>
                    <Grid item md={5} sx={{
                        alignSelf: 'center'
                    }}>
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'space-between'
                        }}>
                            <Box sx={{
                                display: 'flex',
                                gap: 1,
                            }}>
                                <img src={phoneImage} alt="" />
                                <Box sx={{
                                    alignSelf: 'center'
                                }}>
                                    <Typography variant='p' component='p'
                                        fontFamily='Inter'
                                        fontWeight={600}
                                    >CONTACT : 9876543210</Typography>
                                    <Typography variant='p' component='p' >call us today</Typography>
                                </Box>
                            </Box>
                            <Button variant='contained' sx={{
                                justifySelf: 'end',
                                background: '#75BC28',
                                '&:hover': {
                                    background: '#75BC28',
                                },
                                textTransform: 'none',
                                fontWeight: 600,
                                fontFamily: 'Inter'
                            }} >
                                Book Appointment <img src={arrowSvg} alt="" />
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
            <Box sx={{
                backgroundColor: "#007337",
                py:1
            }}>
                <Container sx={{ display: 'flex', flexGrow: 1, alignItems: 'center', gap: '2rem', }}>
                    {menuItems.map((item, index) => (
                        <StyledText key={index} onClick={() => navigate(item.path)}>
                            {item.label}
                        </StyledText>
                    ))}
                </Container>
            </Box>
            <Box>
                <img src={bannerImage} alt="" style={{ width: '100%', height: 'auto' }} />
            </Box>

        </>
    )
}

export default Home