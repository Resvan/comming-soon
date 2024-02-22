import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react'
import NavBar from '../components/NavBar/NavBar';
import Stethoscope from '../assets/stethoscope.svg';
import Medicine from '../assets/medicine.svg';
import AboutImageOne from '../assets/about-img-1.png';
import AboutImageTwo from '../assets/about-img-2.png';
import topArrowPrimary from '../assets/topArrowPrimary.svg';
import ValueCard from '../components/ValueCard/ValueCard';
import Compassion from '../assets/compassion.svg';
import Excellence from '../assets/excellence.svg';
import PatientCare from '../assets/patient-Care.svg';
import Integrity from '../assets/integrity.svg';
import Engagement from '../assets/engagement.svg';
import Improvement from '../assets/improvement.png';
import Footer from '../components/Footer/Footer';
import AboutShape from '../assets/about-shape.svg'
import FAQ from '../components/FAQ/FAQ';


const AboutUs = () => {

    const milestones = [
        {
            year: 2015,
            heading: "Year of Founding",
            description: "Sed consectetur etiam amet ut tristique tincidunt diam justo gravida. Ut in tellus cursus faucibus egestas vestibulum euismod faucibus pharetra. In pharetra mattis sem nulla nulla bibendum. Nec proin lobortis facilisis congue feugiat turpis in fames semper mattis."
        },
        {
            year: 2017,
            heading: "Early Milestones",
            description: "Urna sed quis lectus adipiscing. Tellus blandit tristique vulputate orci. Convallis id turpis pulvinar gravida. Augue neque morbi id dapibus penatibus leo vel. Blandit dictum sem arcu et augue adipiscing."
        },
        {
            year: 2018,
            heading: "Expanding Our Services",
            description: "In aliquet eget pellentesque quam. Tempus egestas fames donec nibh. Lectus leo pellentesque aliquam consectetur pellentesque pulvinar. Sit maecenas malesuada magna aliquam morbi iaculis et. Nisi leo arcu ut in scelerisque at vel. Ultrices dui libero sem nulla."
        },
        {
            year: 2024,
            heading: "Present Day",
            description: "Nunc velit rhoncus convallis malesuada nec sed. Suspendisse donec lobortis congue diam lectus. Tellus purus aliquam pretium facilisis eu euismod sit sed. Sem duis aliquet nibh turpis at purus lectus. Tellus tempus a pellentesque netus vestibulum. Semper urna."
        }
    ];

    return (
        <>
            <Box
                sx={{
                    color: 'white',
                    pt: 2,
                    position: 'relative',
                    backgroundColor: 'white',
                    backgroundImage: "linear-gradient(to bottom, #036C5F 80%, rgba(0, 0, 0, 0) 20%)" // Removed spaces before %
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
                            width: '5rem',
                            backgroundColor: '#EEA676',
                            alignSelf: 'center'
                        }}></div>
                        <Typography component='p' variant='p' sx={{
                            color: '#EEA676',
                            fontFamily: 'Outfit',
                            position: 'relative',
                            fontWeight: 500
                        }}>
                            About Us
                        </Typography>
                    </Box>
                    <Typography sx={{
                        fontFamily: "Outfit",
                        fontWeight: 600,
                        textAlign: 'center',
                        fontSize: { xs: '2rem', md: '4.3rem' },
                        mt: 2
                    }} variant='h2' component='h2' >
                        Your Journey to Better Health <br /> Begins With Us
                    </Typography>
                </Container>
                <Container sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    mt: 10,
                }} >
                    <Grid container spacing={3} >
                        <Grid item xs={12} md={6} sx={{
                            position: 'relative',
                            display: 'flex',
                            justifyContent: 'end'
                        }}>
                            <Box sx={{
                                position: 'absolute',
                                background: "#EEA676",
                                width: '85%',
                                top: { xs: '10%', md: '5%' },
                                left: { xs: '4%', md: '5%' },
                                height: '90%',
                                zIndex: 0
                            }}></Box>
                            <img src={AboutImageOne} alt="" style={{ position: 'relative', zIndex: 1, marginTop: "1rem", height: '95%', width:'95%' }} />
                        </Grid>


                        <Grid item xs={12} md={6} sx={{
                            position: 'relative',
                            display: 'flex',
                            justifyContent: 'center'
                        }}>
                            <Box sx={{
                                position: 'absolute',
                                background: "#EEA676",
                                width: '85%',
                                bottom: '0%',
                                right: { xs: '-3%', md: '-1%' },
                                height: '90%',
                                zIndex: 0
                            }}></Box>
                            <img src={AboutImageTwo} alt="" style={{ position: 'relative', zIndex: 1, height: '95%', width: '95%' }} />
                        </Grid>
                    </Grid>
                    <Box
                        sx={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            display: 'flex',
                            alignItems: 'center',
                            zIndex: 1
                        }}
                    >
                    </Box>
                </Container>
                <Box
                    sx={{
                        position: 'absolute',
                        bottom: '25%',
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
                        bottom: '38%',
                        transform: 'translateY(-60%)', // Center vertically
                        zIndex: 1, // Ensure SVG is above other content

                    }}
                >
                    <img src={Medicine} style={{
                        height: '5rem'
                    }} alt="" />
                </Box>
            </Box>
            <Box sx={{
                position:'relative'
            }}>
                <Container sx={{
                    my: '2rem'
                }}>
                    <Grid container spacing={2} sx={{
                        mt: 8,
                        justifyContent: 'center'
                    }}>
                        <Grid item xs={12} md={6} sx={{
                            display: 'grid'
                        }}>
                            <Box>
                                <Box sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 2,
                                }}>
                                    <div style={{
                                        height: '2px',
                                        width: '28%',
                                        backgroundColor: '#EEA676',
                                        alignSelf: 'center'
                                    }}></div>
                                    <Typography component='p' variant='p' sx={{
                                        color: '#EEA676',
                                        fontFamily: 'Outfit',
                                        position: 'relative',
                                        fontWeight: 600
                                    }}>
                                        Our Story
                                    </Typography>
                                </Box>
                                <Typography component='h3' variant='h3' sx={{
                                    textAlign: 'left',
                                    fontFamily: 'Outfit',
                                    fontWeight: 600,
                                    mt: 1,
                                    fontSize: { xs: '2rem', md: '3rem' },
                                    color: '#042622 '
                                }}>
                                    Unveiling Our Journey: <br /> From Vision to Mission
                                </Typography>
                                <Typography component='p' variant='p' sx={{
                                    fontFamily: 'Outfit',
                                    width: '75%',
                                    mt: 2,
                                    mb: 4,
                                    color: '#3C4253',
                                    fontWeight: 400,
                                    lineHeight: "1.8rem"
                                }}>
                                    Diam suspendisse nisi ultricies sit pellentesque volutpat et arcu sed. Consequat lacus venenatis dui luctus lobortis urna arcu eget. Proin convallis vestibulum orci justo elit velit donec diam dignissim.
                                </Typography>
                                <Box sx={{
                                    border: '1.5px solid #036C5F',
                                    maxWidth: 'fit-content',
                                    px: 4,
                                    py: 2,
                                    borderRadius: '50px',
                                    display: 'flex',
                                    gap: 1,
                                    alignItems: 'center',
                                    mb:4
                                }}>
                                    <Typography component={'p'} variant='p' sx={{
                                        fontFamily: 'Outfit',
                                        letterSpacing: '0.38px',
                                        color: '#036C5F',
                                        fontWeight: 500,
                                        textWrap: 'nowrap'
                                    }}>Learn More</Typography>
                                    <img src={topArrowPrimary} alt="" />
                                </Box>
                            </Box>

                        </Grid>
                        <Grid item xs={12} md={6}>
                            {
                                milestones.map((_, index) => (
                                    <Box key={index} sx={{
                                        border: '1px solid #E1E9E8',
                                        padding: '3rem 2rem 2rem 2rem',
                                        mb: 4,
                                        width: '80%',
                                        position: 'relative'
                                    }}>
                                        <Typography variant='h5' component='h5' sx={{
                                            fontFamily: 'Outfit',
                                            fontWeight: 600,
                                            color: '#042622'
                                        }}>
                                            {_.heading}
                                        </Typography>
                                        <Typography component='p' variant='p' sx={{
                                            fontFamily: "Outfit",
                                            color: '#3C4253',
                                            mt: 2,
                                            lineHeight: '1.7rem'
                                        }}>
                                           {_.description}
                                        </Typography>
                                        <Box sx={{
                                            position: 'absolute',
                                            top: { xs: '-8%', md: '-10%' },
                                            backgroundColor: 'white',
                                            padding: '1rem'
                                        }}>
                                            <Typography variant='p' component='p' sx={{
                                                fontFamily: 'Outfit',
                                                color: '#036C5F',
                                                fontWeight: 500
                                            }}>{_.year}</Typography>
                                        </Box>
                                    </Box>
                                ))
                            }
                        </Grid>
                    </Grid>
                </Container>
                <img src={AboutShape} style={{
                    position: 'absolute',
                    top: '40%',
                    height:'8rem'
                }} alt="" />
            </Box>
            <Box sx={{
                backgroundColor: '#FBF7F3',
                py: '5rem',
            }}>
                <Container sx={{
                    justifyContent:'center'
                }}>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent:'center',
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
                            fontSize: { xs: '2rem', md: '3rem' },
                        }}
                    >
                        Our Core Values in Healthcare
                    </Typography>
                    <Grid container
                        component="main"
                        spacing={4}
                        sx={{
                            justifyContent: 'center',
                            mt:5
                        }}>
                        <Grid item xs={12} md={4} >
                            <ValueCard imageUrl={Compassion} heading={'Compassion'}
                                description={'Non a ornare donec elementum nunc amet gravida id amet. Adipiscing ac in congue ac viverra. Facilisi cursus.'} />
                        </Grid>
                        <Grid item xs={12} md={4} >
                            <ValueCard imageUrl={Excellence} heading={'Excellence'} description={'Non a ornare donec elementum nunc amet gravida id amet. Adipiscing ac in congue ac viverra. Facilisi cursus.'} />
                        </Grid>
                        <Grid item xs={12} md={4} >
                            <ValueCard imageUrl={PatientCare} heading={'Patient Care'} description={'Non a ornare donec elementum nunc amet gravida id amet. Adipiscing ac in congue ac viverra. Facilisi cursus.'} />
                        </Grid>
                        <Grid item xs={12} md={4} >
                            <ValueCard imageUrl={Integrity} heading={'Integrity'} description={'Non a ornare donec elementum nunc amet gravida id amet. Adipiscing ac in congue ac viverra. Facilisi cursus.'} />
                        </Grid>
                        <Grid item xs={12} md={4} >
                            <ValueCard imageUrl={Engagement} heading={'Engagement'} description={'Non a ornare donec elementum nunc amet gravida id amet. Adipiscing ac in congue ac viverra. Facilisi cursus.'} />
                        </Grid>
                        <Grid item xs={12} md={4} >
                            <ValueCard imageUrl={Improvement} heading={'Improvement'} description={'Non a ornare donec elementum nunc amet gravida id amet. Adipiscing ac in congue ac viverra. Facilisi cursus.'} />
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <FAQ/>
            <Footer/>
        </>
    )
}

export default AboutUs