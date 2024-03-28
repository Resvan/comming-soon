import { Box, Button, Container, Grid, InputAdornment, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
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
import axios from '../axios/axios';
import { useParams } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';


const DoctorDetails = () => {

    const { id } = useParams();

    const { control, reset, handleSubmit, formState: { errors } } = useForm();
    const [isLoading, setIsLoading] = useState(false);
    const [bookedSlots, setBookedSlots] = useState([]);
    

    const timeSlots = [
        "09:00 AM", "09:30 AM",
        "10:00 AM", "10:30 AM",
        "11:00 AM", "11:30 AM",
        "12:00 PM", "12:30 PM",
        "01:00 PM", "01:30 PM",
        "02:00 PM", "02:30 PM",
        "03:00 PM", "03:30 PM",
        "04:00 PM", "04:30 PM",
        "05:00 PM", "05:30 PM",
        "06:00 PM", "06:30 PM",
        "07:00 PM", "07:30 PM",
        "08:00 PM", "08:30 PM",
    ];

    const bookAppointment = async (data) => {
        try {
            setIsLoading(true);
            let res = await axios.post('/appointment/book-appointment', data);
            
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
        bookAppointment(data)
    };

    const getBookedSlots = async (date) => {
        try {
            let res = await axios.get(`/appointment/booked-appointments/doctor-${id}/${date}`);
            setBookedSlots(res.data.appointment);
            
        } catch (error) {
            console.log(error);
        }
    }

    const handleDateChange = (date) => {
        getBookedSlots(date);
    }



  return (
      <>
          <Toaster/>
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
                              <form onSubmit={handleSubmit(onSubmit)} >
                              <Controller
                                  name="department"
                                  control={control}
                                  defaultValue=""
                                  rules={{ required: 'Department is required' }}
                                  render={({ field }) => (
                                      <>
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
                                                  color: 'rgba(60, 66, 83, 0.65)'
                                              }}
                                              error={!!errors.department}
                                          >
                                              <MenuItem value="" disabled>
                                                  Choose Department
                                              </MenuItem>
                                              <MenuItem value="cardiology">Cardiology</MenuItem>
                                              <MenuItem value="neurology">Neurology</MenuItem>
                                              <MenuItem value="urology">Urology</MenuItem>
                                              <MenuItem value="generalSurgery">General Surgery</MenuItem>
                                              <MenuItem value="orthopedics">Orthopedics</MenuItem>
                                              <MenuItem value="gynecology">Gynecology</MenuItem>
                                              <MenuItem value="pediatrics">Pediatrics</MenuItem>
                                              <MenuItem value="internalMedicine">Internal Medicine</MenuItem>
                                              <MenuItem value="oncology">Oncology</MenuItem>
                                              <MenuItem value="ent">ENT</MenuItem>
                                              <MenuItem value="dermatology">Dermatology</MenuItem>
                                              <MenuItem value="additional">Additional</MenuItem>
                                              {/* Add other department options as needed */}
                                          </Select>
                                          {errors.department && (
                                              <Typography variant="body2" color="error">
                                                  {errors.department.message}
                                              </Typography>
                                          )}
                                      </>
                                  )}
                              />

                              <Controller
                                  name="doctor"
                                  control={control}
                                  defaultValue=""
                                  rules={{ required: 'Doctor is required' }}
                                  render={({ field }) => (
                                      <>
                                          <Select
                                              {...field}
                                              displayEmpty
                                              defaultValue=""
                                              margin="normal"
                                              fullWidth
                                              variant="outlined"
                                              sx={{
                                                  backgroundColor: 'rgba(222, 238, 236, 0.35)',
                                                  mt: 3,
                                                  color: 'rgba(60, 66, 83, 0.65)'
                                              }}
                                              error={!!errors.doctor}
                                          >
                                              <MenuItem value="" disabled>
                                                  Choose Doctor
                                              </MenuItem>
                                              <MenuItem value="doctor-1">Doctor 1</MenuItem>
                                              <MenuItem value="doctor-2">Doctor 2</MenuItem>
                                              <MenuItem value="doctor-3">Doctor 3</MenuItem>
                                              <MenuItem value="doctor-4">Docotor 4</MenuItem>

                                          </Select>
                                          {errors.doctor && (
                                              <Typography variant="body2" color="error">
                                                  {errors.doctor.message}
                                              </Typography>
                                          )}
                                      </>
                                      )}
                                     
                              />
                              <Controller
                                  name="name"
                                  control={control}
                                  defaultValue=""
                                  rules={{ required: 'Name is required',  }}
                                  render={({ field }) => (
                                      <TextField
                                          {...field}
                                          placeholder='Enter Your Name'
                                          margin="normal"
                                          fullWidth
                                          variant="outlined"
                                          sx={{
                                              backgroundColor: 'rgba(222, 238, 236, 0.35)',
                                              mt: 3,
                                              color: 'rgba(60, 66, 83, 0.65)'
                                          }}
                                          error={!!errors.name}
                                          helperText={errors.name?.message}
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
                                              mt: 3,
                                              color: 'rgba(60, 66, 83, 0.65)'
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
                                  name="date"
                                  control={control}
                                  defaultValue=""
                                  rules={{ required: 'Date is required',  }}
                                  render={({ field }) => (
                                      <TextField
                                          {...field}
                                          placeholder='Date'
                                          margin="normal"
                                          fullWidth
                                          type='date'
                                          variant="outlined"
                                          onChange={(e) => {
                                              field.onChange(e.target.value);
                                             handleDateChange(e.target.value)
                                          }}
                                          sx={{
                                              backgroundColor: 'rgba(222, 238, 236, 0.35)',
                                              mt: 3,
                                              color: 'red'
                                          }}
                                          error={!!errors.date}
                                          helperText={errors.date?.message}
                                      />
                                  )}
                              />
                                  <Controller
                                      name="time"
                                      control={control}
                                      defaultValue=""
                                      rules={{ required: 'Time is required' }}
                                      render={({ field }) => (
                                          <>
                                              <Select
                                                  {...field}
                                                  fullWidth
                                                  displayEmpty
                                                  variant="outlined"
                                                  sx={{
                                                      backgroundColor: 'rgba(222, 238, 236, 0.35)',
                                                      mt: 3,
                                                      color: 'rgba(60, 66, 83, 0.65)'
                                                  }}
                                                  error={!!errors.time}
                                              >
                                                  <MenuItem value="" disabled>
                                                      Select a slot
                                                  </MenuItem>
                                                  {timeSlots.filter(slot => !bookedSlots.some(bookedSlot => bookedSlot.time === slot)).map(slot => (
                                                      <MenuItem key={slot} value={slot}>{slot}</MenuItem>
                                                  ))}


                                              </Select>
                                              {errors.time && (
                                                  <Typography variant="body2" color="error">
                                                      {errors.time.message}
                                                  </Typography>
                                              )}
                                          </>
                                      )}
                                  />
                                  <Button
                                      variant='contained'
                                      fullWidth
                                      type='submit'
                                      sx={{
                                          background: '#EEA676',
                                          borderRadius: '50px',
                                          fontFamily: "Outfit",
                                          textWrap: 'nowrap',
                                          py: 2,
                                          mt: 4,
                                          '&:hover': {
                                              backgroundColor: '#EEA676',
                                          },
                                      }}>
                                      Book Appointment
                                  </Button>
                              </form>    
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