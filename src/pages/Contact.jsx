import { Accordion, AccordionDetails, AccordionSummary, Avatar, Box, Button, Container, Grid, InputAdornment, TextField, Typography } from '@mui/material'
import React, {useState } from 'react'
import NavBar from '../components/NavBar/NavBar'
import Stethoscope from '../assets/stethoscope.svg';
import Medicine from '../assets/medicine.svg';
import PhoneIcon from '../assets/phoneIcon.svg';
import MessageIcon from '../assets/messageIcon.svg';
import { Controller, useForm } from 'react-hook-form';
import user from '../assets/userIcon.svg';
import phone from '../assets/phoneIcon.svg';
import mail from '../assets/mailIcon.svg';
import { ExpandMore } from '@mui/icons-material';
import Clock from '../assets/clockIcon.svg'
import Location from '../assets/locationIcon.png';
import Gmap from '../assets/gmap.png';
import Footer from '../components/Footer/Footer';
import toast, { Toaster } from 'react-hot-toast';
import axios from '../axios/axios';



const Contact = () => {

    const { control, reset, handleSubmit, formState: { errors } } = useForm();

    const [expanded, setExpanded] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : null);
    };

    const sendMessage = async (data) => {
        try {
            setIsLoading(true);
            let res = await axios.post('/contact', data);
            if (res.data.message) {
                toast.success(res.data.message);
            };
            reset();
            setIsLoading(false)
        } catch (error) {
            setIsLoading(false);
            console.log(error);
            if (error.response.data.error) {
                toast.error(error.response.data.error)
            }
        }
    }

    const onSubmit = (data) => {
        sendMessage(data)
    };

  return (
      <>
          <Box
              sx={{
                  color: 'white',
                  pt: 2,
                  position: 'relative',
                  backgroundColor: 'white',
                  backgroundImage: "linear-gradient(to bottom, #036C5F 55%, rgba(0, 0, 0, 0) 45%)" // Removed spaces before %
              }}>

              <NavBar />
              <Container sx={{
                  mt: 7,
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
                          Contact Us
                      </Typography>
                  </Box>
                  <Typography sx={{
                      fontFamily: "Outfit",
                      fontWeight: 600,
                      textAlign: 'center',
                      fontSize: { xs: '2rem', md: '4.3rem' },
                      mt: 2
                  }} variant='h2' component='h2' >
                      Get in Touch Today
                  </Typography>
              </Container>
              <Container sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  mt: "7rem",
                  position:'relative'
              }} >
                  <form onSubmit={handleSubmit(onSubmit)} style={{
                      zIndex:1,
                  }}>

                  <Grid container spacing={3} sx={{
                      backgroundColor: '#FBF7F3',
                      mx: '2rem',
                      py: '3rem',
                      px: '2rem',
                  }} >
                      
                      <Grid item xs={12} md={6} >
                          <Typography variant='h4' component='h4' sx={{
                              fontFamily: 'Outfit',
                              color: '#036C5F',
                              fontWeight:600
                          }}>
                              Have questions?
                          </Typography>
                          <Typography variant='h4' component='h4' sx={{
                              fontFamily: 'Outfit',
                              color: "#042622",
                              fontWeight:600
                          }}>
                              We are ready to assist you
                          </Typography>
                          <Typography component='p' variant='p' sx={{
                              fontFamily: 'Outfit',
                              color: '#3C4253',
                              letterSpacing: '0.36px',
                              lineHeight: '30px',
                              mt:3
                          }}>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis id sodales enim, venenatislo.
                          </Typography>
                          <Box sx={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: 2,
                              mt:5
                          }}>
                              <Box sx={{
                                  backgroundColor: '#036C5F',
                                  width: 'fit-content',
                                  padding: '7px',
                                  borderRadius: '50%'
                              }} >
                                  <img src={PhoneIcon} alt="" style={{ display: 'block' }} />
                              </Box>
                              <Typography sx={{
                                  fontFamily: 'Outfit',
                                  color:'#036C5F'
                              }}>
                                  (987) 654 - 3210
                              </Typography>
                          </Box>
                          <Box sx={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: 2,
                              mt: 2
                          }}>
                              <Box sx={{
                                  backgroundColor: '#036C5F',
                                  width: 'fit-content',
                                  padding: '7px',
                                  borderRadius: '50%'
                              }} >
                                  <img src={MessageIcon} alt="" style={{ display: 'block' }} />
                              </Box>
                              <Typography sx={{
                                  fontFamily: 'Outfit',
                                  color: '#036C5F'
                              }}>
                                  contact@gnanaprakasam.com
                              </Typography>
                          </Box>
                      </Grid>
                      <Grid item container rowGap={1} columnSpacing={2} xs={12} md={6}>
                          
                          <Grid item xs={12} md={6}>
                                  <Controller
                                      name="firstName"
                                      control={control}
                                      defaultValue=""
                                      rules={{ required: 'First Name is required', pattern: { message: 'Invalid First Name' } }}
                                      render={({ field }) => (
                                          <TextField
                                              {...field}
                                              fullWidth
                                              placeholder='First Name'
                                              margin="normal"
                                              variant="outlined"
                                              sx={{
                                                  backgroundColor: 'white'
                                              }}
                                              error={!!errors.firstName}
                                              helperText={errors.firstName?.message}
                                              InputProps={{
                                                  endAdornment: (
                                                      <InputAdornment position="end">
                                                          <img src={user} alt="Icon" /> {/* Add your image here */}
                                                      </InputAdornment>
                                                  )
                                              }}
                                          />
                                      )}
                                  />
                          </Grid>
                          <Grid item xs={12} md={6}>
                              <Controller
                                  name="lastName"
                                  control={control}
                                  defaultValue=""
                                  rules={{ required: 'Last Name is required', pattern: { message: 'Invalid Last Name' } }}
                                  render={({ field }) => (
                                      <TextField
                                          {...field}
                                          placeholder='Last Name'
                                          margin="normal"
                                          variant="outlined"
                                          sx={{
                                              backgroundColor: 'white'
                                          }}
                                          error={!!errors.lastName}
                                          helperText={errors.lastName?.message}
                                          InputProps={{
                                              endAdornment: (
                                                  <InputAdornment position="end">
                                                      <img src={user} alt="Icon" /> {/* Add your image here */}
                                                  </InputAdornment>
                                              )
                                          }}
                                      />
                                  )}
                              />
                          </Grid>
                          <Grid item xs={12} md={6}>
                              <Controller
                                  name="phone"
                                  control={control}
                                  defaultValue=""
                                    rules={{ required: 'Phone is required', pattern: { value: /^\d{10}$/, message: 'Invalid phone number' } }}
                                  render={({ field }) => (
                                      <TextField
                                          {...field}
                                          placeholder='Phone'
                                          margin="normal"
                                          variant="outlined"
                                          sx={{
                                              backgroundColor:'white'
                                          }}
                                          error={!!errors.phone}
                                          helperText={errors.phone?.message}
                                          InputProps={{
                                              endAdornment: (
                                                  <InputAdornment position="end">
                                                      <img src={phone} alt="Icon" /> {/* Add your image here */}
                                                  </InputAdornment>
                                              )
                                          }}
                                      />
                                  )}
                              />
                          </Grid>
                          <Grid item xs={12} md={6}>
                              <Controller
                                  name="email"
                                  control={control}
                                  defaultValue=""
                                  rules={{ required: 'Email is required', pattern: { value: /^\S+@\S+$/i, message: 'Invalid email' } }}
                                  render={({ field }) => (
                                      <TextField
                                          {...field}
                                          placeholder='Email'
                                          margin="normal"
                                          variant="outlined"
                                          sx={{
                                              backgroundColor: 'white'
                                          }}
                                          error={!!errors.email}
                                          helperText={errors.email?.message}
                                          InputProps={{
                                              endAdornment: (
                                                  <InputAdornment position="end">
                                                      <img src={mail} alt="Icon" /> {/* Add your image here */}
                                                  </InputAdornment>
                                              )
                                          }}
                                      />
                                  )}
                              />
                          </Grid>
                              <Grid item xs={12}>
                                  <Controller
                                      name="message"
                                      control={control}
                                      defaultValue=""
                                      rules={{ required: 'Message is required' }}
                                      render={({ field }) => (
                                          <TextField
                                              {...field}
                                              placeholder="Message"
                                              margin="normal"
                                              variant="outlined"
                                              fullWidth
                                              multiline
                                              rows={4}
                                              sx={{
                                                  backgroundColor: 'white',
                                                 
                                              }}
                                              error={!!errors.message}
                                              helperText={errors.message?.message}
                                          />
                                      )}
                                  />
                              </Grid>
                              {/* Submit button */}
                              <Grid item xs={12}>
                                  <Button variant='contained'
                                      disabled={isLoading}
                                      sx={{
                                          background: '#EEA676',
                                          padding: "1rem 1.5rem",
                                          borderRadius: '50px',
                                          fontFamily: "Outfit",
                                          textWrap: 'nowrap',
                                          mt: 2,
                                          '&:hover': {
                                              backgroundColor: '#EEA676',
                                          },
                                          minWidth: 'max-content'
                                      }}
                                      type='submit'
                                  >
                                      Send Message
                                  </Button>
                              </Grid>
                          </Grid>
                  </Grid>
              </form>

                  <Box sx={{
                      backgroundColor: '#EEA676',
                      minHeight: '92%',
                      width: { xs: '85%', md: '75%' },
                      position: 'absolute',
                      zIndex: 0,
                      top: { xs: '-4%',md: '-8%' },
                      left: { xs: '0%', md: '3%' }
                      
                  }}>
                  </Box>
              </Container>
              <Box
                  sx={{
                      position: 'absolute',
                      bottom: '40%',
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
                      right: '3%',
                      bottom: '58%',
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
              my:'4rem'
          }}>
                  <Box sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
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
                          mb: 2,
                          mt: 1,
                          color: '#042622',
                          textAlign: 'center',
                          fontSize: { xs: '1.5rem', md: '2.5rem' },
                      }}
                  >
                      Get Your General Answers
                  </Typography>
              <Box sx={{
                  display: 'flex',
                  justifyContent:'center'
              }}>
                  <Typography component='p' variant='p' sx={{
                      fontFamily: 'Outfit',
                      color: '#3C4253',
                      letterSpacing: '0.36px',
                      lineHeight: '30px',
                      mb: 5,
                      textAlign: 'center',
                      width: { xs: '95%', md: '75%' }
                  }}>
                      Elementum eu et morbi in vulputate. Lectus amet non fringilla dolor eu suspendisse urna diam. Vulputate quam neque scelerisque purus dignissim ut iaculis. Integer cursus non pellentesque.
                  </Typography>
                      </Box>
              <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
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
                                  lineHeight: '30px'

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
                  <Grid item xs={12} md={6}>
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
                                  lineHeight: '30px'

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
              </Grid>
          </Container>
          <Container sx={{
              display: 'flex',
              justifyContent: 'center',
              mt: { xs: '5rem', md: '15rem' },
              position: 'relative',
              mb: { xs: '4rem', md: '8rem' },
              flexDirection: { xs: 'column-reverse', md: 'row' },
              gap:5,
          }}>
              <img src={Gmap} style={{
                  width: '100%',
              }} alt="" />
              <Grid container sx={{
                  backgroundColor: '#036C5F',
                  width: { xs: '100%', md:'80%'},
                  py: { xs: '0.5rem', md: '1rem' },
                  px: {xs:'0rem', md:'2rem'},
                  position: { xs: 'static', md: 'absolute' },
                  top:'-22%'
              }}>
                  <Grid item xs={12} md={5}>
                      <Box sx={{
                          display: 'flex',
                          gap: 2,
                          padding: { xs: '1rem', md: '2rem' },
                          flexDirection:{xs:'column', md:'row'}
                      }}>
                          <Avatar sx={{ backgroundColor: '#FFFFFF', width: 40, height: 40, padding: '1rem' }}>
                              <img src={Location} alt="Feature" style={{ width: '100%', height: '100%', }} />
                          </Avatar>
                          <Box>
                              <Typography variant='h5' component={'h5'} sx={{
                                  fontFamily: 'Outfit',
                                  color: '#FFFFFF',
                                  fontWeight: 500,
                                  letterSpacing: '0.44px'
                              }}>Address</Typography>
                              <Typography component={'p'} variant='p'
                                  sx={{
                                      fontFamily: "Outfit",
                                      color: "white",
                                      lineHeight: '30px',
                                      mt: 1,
                                      width: '80%',
                                      letterSpacing: '0.36px',
                                      fontSize: '1rem'
                                  }}
                              >24 Broadcast Drive Charlotte NC 28202, USA</Typography>
                          </Box>

                      </Box>
                  </Grid>
                  <Grid item xs={12} md={7}>
                      <Box sx={{
                          display: 'flex',
                          gap: 2,
                          padding: { xs: '1rem', md: '2rem' },
                          flexDirection: { xs: 'column', md: 'row' }
                      }}>
                          <Avatar sx={{ backgroundColor: '#FFFFFF', width: 40, height: 40, padding: '1rem' }}>
                              <img src={Clock} alt="Feature" style={{ width: '100%', height: '100%', }} />
                          </Avatar>
                          <Box>
                              <Typography variant='h5' component={'h5'} sx={{
                                  fontFamily: 'Outfit',
                                  color: '#FFFFFF',
                                  fontWeight: 500,
                                  letterSpacing: '0.44px'
                              }}>Hours</Typography>
                              <Typography component={'p'} variant='p'
                                  sx={{
                                      fontFamily: "Outfit",
                                      color: "white",
                                      lineHeight: '30px',
                                      letterSpacing: '0.36px',
                                      fontSize: '1rem'
                                  }}
                              >Mon - Tues ------ 08:00 am - 05:00 pm</Typography>
                              <Typography component={'p'} variant='p'
                                  sx={{
                                      fontFamily: "Outfit",
                                      color: "white",
                                      lineHeight: '30px',
                                      letterSpacing: '0.36px',
                                      fontSize: '1rem'
                                  }}
                              >Wed - Thu ------ 09:00 am - 06:00 pm</Typography>
                              <Typography component={'p'} variant='p'
                                  sx={{
                                      fontFamily: "Outfit",
                                      color: "white",
                                      lineHeight: '30px',
                                      letterSpacing: '0.36px',
                                      fontSize: '1rem'
                                  }}
                              >Fri - Sat ------ 08:00 am - 05:00 pm</Typography>
                          </Box>

                      </Box>
                  </Grid>
              </Grid>

          </Container>
          <Footer />
          <Toaster/>
      </>
  )
}

export default Contact