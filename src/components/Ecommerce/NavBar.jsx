import { Box, Container, InputAdornment, TextField, Toolbar, Typography } from '@mui/material';
import React from 'react';
import phone from '../../assets/Ecom/phone.png';
import email from '../../assets/Ecom/email.png';
import logo from '../../assets/gp-1.svg';
import user from '../../assets/Ecom/user.png';
import cart from '../../assets/Ecom/cart.png';
import search from '../../assets/Ecom/search.png';


const NavBar = () => {
    return (
        <>
            <Box sx={{
                backgroundColor: '#036C5F',
                color: 'white',
                p: 2,

            }}>
                <Container sx={{
                    display: { xs: 'none', md: 'flex' },
                    justifyContent: 'space-between',

                }}>
                    <Typography sx={{
                        fontFamily: 'Lato'
                    }}>
                        Welcome to <span style={{
                            textDecoration: 'underline'
                        }}>Gnana Prakasam.</span> Expert in Healthcare service.
                    </Typography>
                    <Box sx={{
                        display: 'flex',
                        gap: 4,
                        fontFamily: 'Lato',
                        fontWeight: 400
                    }}>
                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1
                        }}>
                            <img src={phone} alt="" />
                            (987) 654 - 3210
                        </Box>

                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1
                        }}>
                            <img src={email} alt="" />
                            contact@gnanaprakasam.com
                        </Box>
                    </Box>
                </Container>
            </Box>
            <Container>
                <Box sx={{
                    display: { xs: 'none', md: 'flex' },
                    background: '#fff',
                    color: 'black',
                    py: 3,
                    gap: { md: 2, lg: 4 },
                    alignItems: 'center',
                }}>
                    <Box sx={{ display: 'flex', flexGrow: 1, alignItems: 'center', gap: { md: '0.6rem', lg: '2rem' } }}>
                        <img src={logo} alt="" onClick={() => navigate('/home')} style={{
                            cursor: 'pointer',
                        }} />
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1
                    }}>
                        <img src={user} alt="" />
                        <Typography sx={{
                            fontFamily: 'Lato',

                        }}>
                            Sign in / Sign up
                        </Typography>
                    </Box>
                    <Box sx={{
                        position: 'relative',
                        display: 'flex',
                        alignItems: 'center',
                        mt: 0.7
                    }}>
                        <Typography sx={{
                            position: 'absolute',
                            padding: '1px 6px',
                            backgroundColor: '#EEA676',
                            borderRadius: '50%',
                            color: 'white',
                            fontSize: '12px',
                            bottom: 5,
                            right: -5
                        }}>
                            0
                        </Typography>
                        <img src={cart} alt="" />

                    </Box>
                    <TextField

                        placeholder='First Name'
                        margin="normal"
                        variant="outlined"
                        sx={{
                            backgroundColor: 'white',
                            borderRadius: '40px',
                            width: "30%"
                        }}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <img src={search} alt="Icon" /> {/* Add your image here */}
                                </InputAdornment>
                            ),
                            sx: {
                                borderRadius: '40px',

                            }
                        }}

                    />
                </Box>
            </Container>

        </>
    )
}

export default NavBar