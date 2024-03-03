import { Box, Button, Container, Grid, InputAdornment, TextField, Typography } from '@mui/material';
import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import Stethoscope from '../assets/stethoscope.svg';
import Medicine from '../assets/medicine.svg';
import DoctorImage from '../assets/Doctor-detail.png';
import like from '../assets/like.png';
import Testmonial from '../components/Testimonial/Testmonial';
import Footer from '../components/Footer/Footer';
import { Controller, useForm } from 'react-hook-form';
import { Select, MenuItem } from '@mui/material';
import user from '../assets/userSvg.svg';
import mail from '../assets/mailSvg.svg';
import calendar from '../assets/calendarSvg.svg';
import clock from '../assets/clockSvg.svg';


const DoctorDetails = () => {

    const { control, formState: { errors } } = useForm();
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
                          Our Experts
                      </Typography>
                  </Box>
                  <Typography sx={{
                      fontFamily: "Outfit",
                      fontWeight: 600,
                      textAlign: 'center',
                      fontSize: { xs: '2rem', md: '3.5rem' },
                      mt: 2,
                      letterSpacing: '1.36px'
                  }} variant='h2' component='h2' >
                      Healthcare Excellence: Introducing <br /> Our Expert Doctors
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
              my:'5rem'
          }}>
              <Typography variant='h4' component='h4' sx={{
                  fontFamily: 'Outfit',
                  fontWeight: 600,
                  color:'#036C5F'
              }}>
                  Cyrus Mercer
              </Typography>
              <Typography variant='p' component='p' sx={{
                  fontFamily: 'Outfit',
                  fontWeight: 500,
                  color:'#3C4253'
              }}>
                  Orthopedics
              </Typography>
              <Grid container spacing={5} sx={{mt:1}}>
                  <Grid item xs={12} md={7}>
                      <Box sx={{
                          backgroundColor: '#FBF7F3',
                          height: '40rem',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          pt:1,
                      }}>
                          <img src={DoctorImage} style={{
                              objectFit: 'contain',
                              width: '100%',
                              height: '100%'
                          }} alt="" />
                      </Box>
                      <Box sx={{
                          display: 'flex',
                          gap: 1,
                          alignItems: 'center',
                          mt:5
                      }}>
                          <img src={like} alt="" />
                          <Typography component='h6' variant='h6' sx={{
                              fontFamily: 'Outfit',
                              fontWeight: 600,
                              color: "#036C5F",
                              letterSpacing:'0.48px'
                          }}>About Me</Typography>
                      </Box>
                      <Typography variant='p' component='p' sx={{
                          fontFamily: "Outfit",
                          color: '#3C4253',
                          lineHeight: '30px',
                          mt: 1,
                          fontSize:'1.1rem'
                      }}>
                          Dr. Jessica Miller is a highly skilled and compassionate gynecologist dedicated to providing exceptional women's healthcare. With a years of experience, Dr. Miller is a respected member of our medical team.
                      </Typography>
                      <Box sx={{
                          display: 'flex',
                          gap: 1,
                          alignItems: 'center',
                          mt: 5
                      }}>
                          <img src={like} alt="" />
                          <Typography component='h6' variant='h6' sx={{
                              fontFamily: 'Outfit',
                              fontWeight: 600,
                              color: "#036C5F",
                              letterSpacing: '0.48px'
                          }}>Professional Experience</Typography>
                      </Box>
                      <ul style={{
                          color:'#3C4253'
                      }}>
                          <li>
                              <Typography variant='p' component='p' sx={{
                                  fontFamily: "Outfit",
                                  color: '#3C4253',
                                  lineHeight: '30px',
                                  fontSize: '1.1rem',
                                  mt: 1
                              }}>Serenity Care Hospital - Chief Gynecologist
                              </Typography>
                          </li>
                          <li>
                              <Typography variant='p' component='p' sx={{
                                  fontFamily: "Outfit",
                                  color: '#3C4253',
                                  lineHeight: '30px',
                                  fontSize: '1.1rem',
                                  mt: 1
                              }}>Azure Springs Hospital- Senior Gynecologist
                              </Typography>
                          </li>
                          <li>
                              <Typography variant='p' component='p' sx={{
                                  fontFamily: "Outfit",
                                  color: '#3C4253',
                                  lineHeight: '30px',
                                  fontSize: '1.1rem',
                                  mt: 1
                              }}>
                                  Crestwood Summit Medical Facility - Obstetrics and Gynecology Residency
                              </Typography>
                          </li>
                      </ul>
                      <Box sx={{
                          display: 'flex',
                          gap: 1,
                          alignItems: 'center',
                          mt: 5
                      }}>
                          <img src={like} alt="" />
                          <Typography component='h6' variant='h6' sx={{
                              fontFamily: 'Outfit',
                              fontWeight: 600,
                              color: "#036C5F",
                              letterSpacing: '0.48px'
                          }}>Areas of Expertise:</Typography>
                      </Box>
                      <ul style={{
                          color: '#3C4253'
                      }}>
                          <li>
                              <Typography variant='p' component='p' sx={{
                                  fontFamily: "Outfit",
                                  color: '#3C4253',
                                  lineHeight: '30px',
                                  fontSize: '1.1rem',
                                  mt: 1
                              }}>Obstetrics and Gynecology
                              </Typography>
                          </li>
                          <li>
                              <Typography variant='p' component='p' sx={{
                                  fontFamily: "Outfit",
                                  color: '#3C4253',
                                  lineHeight: '30px',
                                  fontSize: '1.1rem',
                                  mt: 1
                              }}>Reproductive Endocrinology
                              </Typography>
                          </li>
                          <li>
                              <Typography variant='p' component='p' sx={{
                                  fontFamily: "Outfit",
                                  color: '#3C4253',
                                  lineHeight: '30px',
                                  fontSize: '1.1rem',
                                  mt: 1
                              }}>
                                  Minimally Invasive Surgery
                              </Typography>
                          </li>
                          <li>
                              <Typography variant='p' component='p' sx={{
                                  fontFamily: "Outfit",
                                  color: '#3C4253',
                                  lineHeight: '30px',
                                  fontSize: '1.1rem',
                                  mt: 1
                              }}>
                                  Family Planning and Contraception
                              </Typography>
                          </li>
                          <li>
                              <Typography variant='p' component='p' sx={{
                                  fontFamily: "Outfit",
                                  color: '#3C4253',
                                  lineHeight: '30px',
                                  fontSize: '1.1rem',
                                  mt: 1
                              }}>
                                  Menstrual Disorders
                              </Typography>
                          </li>
                          <li>
                              <Typography variant='p' component='p' sx={{
                                  fontFamily: "Outfit",
                                  color: '#3C4253',
                                  lineHeight: '30px',
                                  fontSize: '1.1rem',
                                  mt: 1
                              }}>
                                  Pelvic Floor Disorders
                              </Typography>
                          </li>
                          <li>
                              <Typography variant='p' component='p' sx={{
                                  fontFamily: "Outfit",
                                  color: '#3C4253',
                                  lineHeight: '30px',
                                  fontSize: '1.1rem',
                                  mt: 1
                              }}>
                                  Gynecologic Oncology Screening
                              </Typography>
                          </li>
                      </ul>
                      <Typography variant='p' component='p' sx={{
                          fontFamily: "Outfit",
                          color: '#3C4253',
                          lineHeight: '30px',
                          mt: 5,
                          fontSize: '1.1rem'
                      }}>
                          Patients appreciate Dr. Miller's empathetic approach and clear communication, fostering a comfortable and trusting patient-doctor relationship. She is currently accepting new patients and looks forward to providing comprehensive and compassionate care to women of all ages.
                      </Typography>
                  </Grid>
                  <Grid item xs={12} md={5} >
                      <Box sx={{
                          pb: 5,
                          boxShadow: '0px 8px 124px 0px rgba(0, 0, 0, 0.05)',
                      }}>
                          <Box sx={{
                              backgroundColor: '#036C5F',
                              py:'2rem'
                          }}>
                              <Typography variant='h5' component='h5' sx={{
                                  fontFamily: 'Outfit',
                                  fontWeight: 600,
                                  letterSpacing: '0.64px',
                                  textAlign: 'center',
                                  color:'white'
                              }}>Book An Appointment</Typography>
                          </Box>
                          <Box sx={{
                              px:5
                          }}>
                              <Controller
                                  name="email"
                                  control={control}
                                  defaultValue=""
                                  rules={{ required: 'Email is required' }}
                                  render={({ field }) => (
                                      <Select
                                          {...field}
                                          displayEmpty
                                          defaultValue=""
                                          margin="normal"
                                          fullWidth
                                          variant="outlined"
                                          sx={{
                                              backgroundColor: 'rgba(222, 238, 236, 0.35)',
                                              mt: 5,
                                              mb: 2,
                                              color:'rgba(60, 66, 83, 0.65)'
                                          }}
                                          error={!!errors.email}
                                      >
                                          <MenuItem value="" disabled>
                                              Choose Department
                                          </MenuItem>
                                          <MenuItem value="email1@example.com">email1@example.com</MenuItem>
                                          <MenuItem value="email2@example.com">email2@example.com</MenuItem>
                                          {/* Add other email options as needed */}
                                      </Select>
                                  )}
                              />
                              <Controller
                                  name="email"
                                  control={control}
                                  defaultValue=""
                                  rules={{ required: 'Email is required' }}
                                  render={({ field }) => (
                                      <Select
                                          {...field}
                                          displayEmpty
                                          defaultValue=""
                                          margin="normal"
                                          fullWidth
                                          variant="outlined"
                                          sx={{
                                              backgroundColor: 'rgba(222, 238, 236, 0.35)',
                                              my: 2,
                                              color:'rgba(60, 66, 83, 0.65)'
                                          }}
                                          error={!!errors.email}
                                      >
                                          <MenuItem value="" disabled>
                                              Choose Doctor
                                          </MenuItem>
                                          <MenuItem value="email1@example.com">email1@example.com</MenuItem>
                                          <MenuItem value="email2@example.com">email2@example.com</MenuItem>
                                          {/* Add other email options as needed */}
                                      </Select>
                                  )}
                              />
                              <Controller
                                  name="name"
                                  control={control}
                                  defaultValue=""
                                  rules={{ required: 'Email is required', pattern: { value: /^\S+@\S+$/i, message: 'Invalid email' } }}
                                  render={({ field }) => (
                                      <TextField
                                          {...field}
                                          placeholder='Enter Your Name'
                                          margin="normal"
                                          fullWidth
                                          variant="outlined"
                                          sx={{
                                              backgroundColor: 'rgba(222, 238, 236, 0.35)',
                                              mt:2
                                          }}
                                          error={!!errors.email}
                                          helperText={errors.email?.message}
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
                              <Controller
                                  name="email"
                                  control={control}
                                  defaultValue=""
                                  rules={{ required: 'Email is required', pattern: { value: /^\S+@\S+$/i, message: 'Invalid email' } }}
                                  render={({ field }) => (
                                      <TextField
                                          {...field}
                                          placeholder='Email Address'
                                          margin="normal"
                                          fullWidth
                                          variant="outlined"
                                          sx={{
                                              backgroundColor: 'rgba(222, 238, 236, 0.35)',
                                              mt: 3
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
                              <Controller
                                  name="Date"
                                  control={control}
                                  defaultValue=""
                                  rules={{ required: 'Email is required', pattern: { value: /^\S+@\S+$/i, message: 'Invalid email' } }}
                                  render={({ field }) => (
                                      <TextField
                                          {...field}
                                          placeholder='Date'
                                          margin="normal"
                                          fullWidth
                                          variant="outlined"
                                          sx={{
                                              backgroundColor: 'rgba(222, 238, 236, 0.35)',
                                              mt: 3
                                          }}
                                          error={!!errors.email}
                                          helperText={errors.email?.message}
                                          InputProps={{
                                              endAdornment: (
                                                  <InputAdornment position="end">
                                                      <img src={calendar} alt="Icon" /> {/* Add your image here */}
                                                  </InputAdornment>
                                              )
                                          }}
                                      />
                                  )}
                              />
                              <Controller
                                  name="Time"
                                  control={control}
                                  defaultValue=""
                                  rules={{ required: 'Email is required', pattern: { value: /^\S+@\S+$/i, message: 'Invalid email' } }}
                                  render={({ field }) => (
                                      <TextField
                                          {...field}
                                          placeholder='Time'
                                          margin="normal"
                                          fullWidth
                                          variant="outlined"
                                          sx={{
                                              backgroundColor: 'rgba(222, 238, 236, 0.35)',
                                              mt: 3
                                          }}
                                          error={!!errors.email}
                                          helperText={errors.email?.message}
                                          InputProps={{
                                              endAdornment: (
                                                  <InputAdornment position="end">
                                                      <img src={clock} alt="Icon" /> {/* Add your image here */}
                                                  </InputAdornment>
                                              )
                                          }}
                                      />
                                  )}
                              />
                              <Button variant='contained'
                                  fullWidth
                                  sx={{
                                      background: '#EEA676',
                                      borderRadius: '50px',
                                      fontFamily: "Outfit",
                                      textWrap: 'nowrap',
                                      py: 2,
                                      mt: 3,
                                      '&:hover': {
                                          backgroundColor: '#EEA676',
                                      },

                                  }}>
                                  Book Appoinment
                              </Button>    
                          </Box>
                      </Box>
                </Grid>
              </Grid>
          </Container>
          <Testmonial bgcolor={false} />
          <Footer/>
      </>
  )
}

export default DoctorDetails