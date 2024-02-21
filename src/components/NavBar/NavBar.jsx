import { Box, Button, Container, Drawer, Grid, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography } from '@mui/material';
import React, { useState } from 'react'
import logo from '../../assets/gp-1.svg';
import styled from '@emotion/styled';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import cartIcon from '../../assets/cart-icon.svg';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const StyledText = styled(Typography)(({ theme, variant }) => ({
    cursor: 'pointer',
    fontFamily: 'Outfit',
    fontWeight: 600,
    color: '#036C5F'
}));

const NavBar = () => {
    const theme = useTheme();
    const isMd = useMediaQuery(theme.breakpoints.up('md'));
    const isLg = useMediaQuery(theme.breakpoints.up('lg'));

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const handleDrawerOpen = () => {
        setIsDrawerOpen(true);
    };



    const handleDrawerClose = () => {
        setIsDrawerOpen(false);
    };

    const navigate = useNavigate();

    const menuItems = [
        { label: 'About', path: '/about' },
        { label: 'Services', path: '/services' },
        { label: 'Products', path: '/products' },
        { label: 'Facilities', path: '/facilities' },
        { label: 'Doctors', path: '/doctors' },
        { label: 'Contact', path: '/contact' },
    ];
  return (
      <Container >
          <Box sx={{
              display: { xs: 'none', md: 'flex' },
              gap: 5,

          }}>
              <Typography variant='p' component='p'
                  sx={{
                      fontSize: "1rem"
                  }}
              >(987) 654 - 3210</Typography>
              <Typography variant='p' component='p'
                  sx={{
                      fontSize: "1rem"
                  }}
              >contact@gnanaprakasam.com</Typography>
          </Box>
          <Toolbar sx={{
              display: { xs: 'none', lg: 'flex' },
              background: '#fff',
              py: 1,
              mt: 3,
              gap: 2
          }}>
              <Box sx={{ display: 'flex', flexGrow: 1, alignItems: 'center', gap: '2rem' }}>
                  <img src={logo} alt="" onClick={() => navigate('/home')} style={{
                      cursor: 'pointer',
                  }} />
                  {menuItems.map((item, index) => (
                      <StyledText key={index} onClick={() => navigate(item.path)}>
                          {item.label}
                      </StyledText>
                  ))}
              </Box>
              <Box sx={{
                  position: 'relative'
              }}>
                  <img src={cartIcon} alt="" />
                  <Box sx={{
                      background: '#EEA676',
                      position: 'absolute',
                      padding: '0.2rem 0.6rem',
                      borderRadius: "50%",
                      right: -6,
                      bottom: '0',
                  }}>
                      0
                  </Box>
              </Box>
              <Button variant='contained'
                  sx={{
                      background: '#EEA676',
                      padding: "0.6rem 1.5rem",
                      borderRadius: '50px',
                      fontFamily: "Outfit",
                      textWrap:'nowrap',
                      '&:hover': {
                          backgroundColor: '#EEA676',
                      },
                  }}>
                  Book Appoinment
              </Button>
          </Toolbar>
          <Toolbar sx={{ padding: '5px', display: { xs: 'flex', lg: 'none' }, alignItems: 'start' }}>
              <Grid container alignItems="end" justifyContent="center">
                  <Box sx={{
                      background: 'white',
                      padding: 1
                  }}>
                      <img style={{ height: '4rem' }} src={logo} alt="Logo" />
                  </Box>
              </Grid>
              <IconButton
                  sx={{ display: { xs: 'block', lg: 'none' } }}
                  color="inherit"
                  onClick={handleDrawerOpen}
              >
                  <MenuIcon />
              </IconButton>
          </Toolbar>
          <Drawer
              anchor="right"
              open={isDrawerOpen}
              onClose={handleDrawerClose}
          >
              <List>
                  {menuItems.map((item, index) => (
                      <ListItem>
                          <ListItemButton key={index} onClick={() => { handleDrawerClose(); navigate(item.path); }}>
                              <ListItemText primary={item.label} />
                          </ListItemButton>
                      </ListItem>
                  ))}
                  <ListItem>
                      <Button variant='contained'
                          sx={{
                              background: '#EEA676',
                              padding: "0.6rem 1.5rem",
                              borderRadius: '50px',
                              fontFamily: "Outfit",
                              '&:hover': {
                                  backgroundColor: '#EEA676',
                              },
                          }}>
                          Book Appoinment
                      </Button>
                  </ListItem>
              </List>
          </Drawer>
      </Container>
  )
}

export default NavBar