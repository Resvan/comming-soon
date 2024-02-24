import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import Stethoscope from '../assets/stethoscope.svg';
import Medicine from '../assets/medicine.svg';
import ServiceCard from '../components/ServiceCard.jsx/ServiceCard';
import Cardiology from '../assets/Cardiology.png';
import Neurology from '../assets/Neurology.png';
import Urology from '../assets/Urology.png';
import GeneralSurgery from '../assets/General Surgery.png';
import Orthopedics from '../assets/Orthopedics.png';
import Gynecology from '../assets/Gynecology.png';
import Pediatrics from '../assets/Pediatrics.png';
import InternalMedicine from '../assets/Internal Medicine.png';
import Oncology from '../assets/Oncology.png';
import Dermatology from '../assets/Dermatology.png';
import Additional from '../assets/Additional.png';
import ENT from '../assets/ENT.png';
import Facilities from '../components/Facilities/Facilities';
import topArrowWhite from '../assets/topArrowWhite.svg';
import AppoinmentImg from '../assets/AppoinmentImg.png';
import Footer from '../components/Footer/Footer';
import AppoinmentShape from '../assets/appoinmentShape.svg';

const Service = () => {
    const specialties = [
        {
            "heading": "Cardiology",
            "speciality": Cardiology,
            "link": "/cardiology",
            "des": "Conducting tests to assess heart structure and function."
        },
        {
            "heading": "Neurology",
            "speciality": Neurology,
            "link": "/neurology",
            "des": "Managing diverse nervous system conditions."
        },
        {
            "heading": "Urology",
            "speciality": Urology,
            "link": "/urology",
            "des": "Treatment for any diseases affecting the urinary system."
        },
        {
            "heading": "General Surgery",
            "speciality": GeneralSurgery,
            "link": "/general-surgery",
            "des": "Conducting Instrumental action on other body parts."
        },
        {
            "heading": "Orthopedics",
            "speciality": Orthopedics,
            "link": "/orthopedics",
            "des": "Orthopedic surgeries, such as joint replacement."
        },
        {
            "heading": "Gynecology",
            "speciality": Gynecology,
            "link": "/gynecology",
            "des": "Gynecological exams, screenings, and treatments."
        },
        {
            "heading": "Pediatrics",
            "speciality": Pediatrics,
            "link": "/pediatrics",
            "des": "Treatment of common childhood illnesses."
        },
        {
            "heading": "Internal Medicine",
            "speciality": InternalMedicine,
            "link": "/internal-medicine",
            "des": "Preventive care, annual checkups, and vaccinations."
        },
        {
            "heading": "Oncology",
            "speciality": Oncology,
            "link": "/oncology",
            "des": "Cancer screening and early detection services."
        },
        {
            "heading": "ENT",
            "speciality": ENT,
            "link": "/ent",
            "des": "Diagnosis and treatment of ear, nose, and throat."
        },
        {
            "heading": "Dermatology",
            "speciality": Dermatology,
            "link": "/dermatology",
            "des": "Diagnosis and treatment of skin conditions, such as acne."
        },
        {
            "heading": "Additional",
            "speciality": Additional,
            "link": "/additional",
            "des": "Other services such as physical checkup & more."
        }
    ];

  return (
      <>
          <Box
              sx={{
                  color: 'white',
                  pt: 2,
                  pb:'5rem',
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
                          fontSize:'1.2rem'
                      }}>
                          Our Services
                      </Typography>
                  </Box>
                  <Typography sx={{
                      fontFamily: "Outfit",
                      fontWeight: 600,
                      textAlign: 'center',
                      fontSize: { xs: '2rem', md: '4rem' },
                      mt: 2
                  }} variant='h2' component='h2' >
                      Explore Our Specialized <br /> Medical Services
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
          <Container>
              <Grid container spacing={3} sx={{
                  mt: '4rem'
              }}>
                  {
                      specialties.map((spe, i) => (
                          <Grid key={i} item xs={12} sm={6} md={3}>
                              <ServiceCard speciality={spe.heading} image={spe.speciality} link={spe.link} des={spe.des} />
                          </Grid>
                      ))
                  }
              </Grid>
          </Container>
          <Facilities />
          <Container sx={{
              mb: "6rem",
          }}>
              <Grid container>
                  <Grid item xs={12} md={6} sx={{
                      backgroundColor: '#036C5F',
                      pt: '4rem',
                      pb: '6rem',
                      px: '3rem',
                      position:'relative',
                  }}>
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
                              Appointment
                          </Typography>
                      </Box>
                      <Typography sx={{
                          color:'white',
                          fontFamily: "Outfit",
                          fontWeight: 600,
                          fontSize: { xs: '2rem', md: '2.5rem' },
                          mt:1,
                      }} variant='h2' component='h2' >
                          Schedule a Virtual or <br /> Presential Appointment
                      </Typography>
                      <Typography component={'p'} variant='p'
                          sx={{
                              fontFamily: "Outfit",
                              color: "white",
                              lineHeight: '30px',
                              mt: 3,
                              fontWeight: 400,
                              width:'90%'
                          }}
                      >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam proin nibh cursus at sed sagittis amet, sed.
                      </Typography>
                      <Box sx={{
                          border: '1.5px solid white',
                          maxWidth: 'fit-content',
                          px: 4,
                          py: 2,
                          mt: 4,
                          borderRadius: '50px',
                          display: 'flex',
                          gap: 1,
                          alignItems: 'center'
                      }}>
                          <Typography component={'p'} variant='p' sx={{
                              fontFamily: 'Outfit',
                              letterSpacing: '0.38px',
                              color: 'white',
                              fontWeight: 500,
                              textWrap: 'nowrap'
                          }}>Learn More</Typography>
                          <img src={topArrowWhite} alt="" />
                      </Box>
                      <Box sx={{
                          position: 'absolute',
                          right: '0%',
                         bottom:'0%'
                      }}>
                          <img src={AppoinmentShape} style={{
                              height:'8rem '
                          }} alt="" />
                      </Box>
                  </Grid>
                  <Grid item xs={12} md={6}>
                      <img style={{
                          height: '100%',
                          width:'100%'
                      }} src={AppoinmentImg} alt="" />
                  </Grid>
              </Grid>
          </Container>
          <Footer/>
      </>
  )
}

export default Service