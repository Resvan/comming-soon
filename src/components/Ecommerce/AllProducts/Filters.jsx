import { ExpandMore } from '@mui/icons-material';
import { Accordion, AccordionDetails, AccordionSummary, Box, Checkbox, Grid, Slider, Typography, } from '@mui/material'
import React, { useState } from 'react'




const Filters = () => {
    const [proTyp, setProTyp] = useState(false);
    const [size, setSize] = useState(false);
    const [packaging, setPackaging] = useState(false);
    const [openPrice, setOpenPrice] = useState(false);

    const [price, setPrice] = useState([50, 500]);

    const handleChange = (event, newValue) => {
        setPrice(newValue);
    };


    return (
        <Grid item xs={12} md={4}>
            <Accordion
                expanded={proTyp}
                onChange={() => setProTyp(!proTyp)}
                sx={{
                    backgroundColor: '#FBF7F3',
                    border: 'none',
                    mb: 3
                }}>
                <AccordionSummary
                    expandIcon={<ExpandMore />}
                >
                    <Typography
                        component='h6' variant='h6'
                        sx={{
                            fontFamily: 'Montserrat',
                            fontWeight: 600,
                            color: '#143450;',
                            fontSize: '1.1rem',
                        }}
                    >
                        Product Types
                    </Typography>
                </AccordionSummary>
                <AccordionDetails >
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                        <Checkbox
                            sx={{
                                color: '#E1E9E8',
                                '&.Mui-checked': {
                                    color: '#036C5F',
                                },
                            }}

                        />
                        <Typography variant='p' component='p' sx={{
                            color: '#545454',
                            fontFamily: 'Lato',
                            fontSize: '1rem'
                        }}>
                            Combo (90)
                        </Typography>
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                        <Checkbox
                            sx={{
                                color: '#E1E9E8',
                                '&.Mui-checked': {
                                    color: '#036C5F',
                                },
                            }}

                        />
                        <Typography variant='p' component='p' sx={{
                            color: '#545454',
                            fontFamily: 'Lato',
                            fontSize: '1rem'
                        }}>
                            Cosmetics (19)
                        </Typography>
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                        <Checkbox
                            sx={{
                                color: '#E1E9E8',
                                '&.Mui-checked': {
                                    color: '#036C5F',
                                },
                            }}

                        />
                        <Typography variant='p' component='p' sx={{
                            color: '#545454',
                            fontFamily: 'Lato',
                            fontSize: '1rem'
                        }}>
                            Health Wellness (5)
                        </Typography>
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                        <Checkbox
                            sx={{
                                color: '#E1E9E8',
                                '&.Mui-checked': {
                                    color: '#036C5F',
                                },
                            }}

                        />
                        <Typography variant='p' component='p' sx={{
                            color: '#545454',
                            fontFamily: 'Lato',
                            fontSize: '1rem'
                        }}>
                            Herbal Powders/Churna (54)
                        </Typography>
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                        <Checkbox
                            sx={{
                                color: '#E1E9E8',
                                '&.Mui-checked': {
                                    color: '#036C5F',
                                },
                            }}

                        />
                        <Typography variant='p' component='p' sx={{
                            color: '#545454',
                            fontFamily: 'Lato',
                            fontSize: '1rem',
                        }}>
                            Juices (68)
                        </Typography>
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                        <Checkbox
                            sx={{
                                color: '#E1E9E8',
                                '&.Mui-checked': {
                                    color: '#036C5F',
                                },
                            }}

                        />
                        <Typography variant='p' component='p' sx={{
                            color: '#545454',
                            fontFamily: 'Lato',
                            fontSize: '1rem',
                            fontWeight: 400
                        }}>
                            Oil (1)
                        </Typography>
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                        <Checkbox
                            sx={{
                                color: '#E1E9E8',
                                '&.Mui-checked': {
                                    color: '#036C5F',
                                },
                            }}

                        />
                        <Typography variant='p' component='p' sx={{
                            color: '#545454',
                            fontFamily: 'Lato',
                            fontSize: '1rem'
                        }}>
                            Tablets (11)
                        </Typography>
                    </Box>
                </AccordionDetails>
            </Accordion>
            <Accordion
                expanded={size}
                onChange={() => setSize(!size)}
                sx={{
                    backgroundColor: '#FBF7F3',
                    mb: 3, '&:before': { height: '0px' }
                }}>
                <AccordionSummary
                    expandIcon={<ExpandMore />}
                >
                    <Typography
                        component='h6' variant='h6'
                        sx={{
                            fontFamily: 'Montserrat',
                            fontWeight: 600,
                            color: '#143450;',
                            fontSize: '1.1rem',
                        }}
                    >
                        Size
                    </Typography>
                </AccordionSummary>
                <AccordionDetails >
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                        <Checkbox
                            sx={{
                                color: '#E1E9E8',
                                '&.Mui-checked': {
                                    color: '#036C5F',
                                },
                            }}

                        />
                        <Typography variant='p' component='p' sx={{
                            color: '#545454',
                            fontFamily: 'Lato',
                            fontSize: '1rem'
                        }}>
                            Combo (90)
                        </Typography>
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                        <Checkbox
                            sx={{
                                color: '#E1E9E8',
                                '&.Mui-checked': {
                                    color: '#036C5F',
                                },
                            }}

                        />
                        <Typography variant='p' component='p' sx={{
                            color: '#545454',
                            fontFamily: 'Lato',
                            fontSize: '1rem'
                        }}>
                            Cosmetics (19)
                        </Typography>
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                        <Checkbox
                            sx={{
                                color: '#E1E9E8',
                                '&.Mui-checked': {
                                    color: '#036C5F',
                                },
                            }}

                        />
                        <Typography variant='p' component='p' sx={{
                            color: '#545454',
                            fontFamily: 'Lato',
                            fontSize: '1rem'
                        }}>
                            Health Wellness (5)
                        </Typography>
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                        <Checkbox
                            sx={{
                                color: '#E1E9E8',
                                '&.Mui-checked': {
                                    color: '#036C5F',
                                },
                            }}

                        />
                        <Typography variant='p' component='p' sx={{
                            color: '#545454',
                            fontFamily: 'Lato',
                            fontSize: '1rem'
                        }}>
                            Herbal Powders/Churna (54)
                        </Typography>
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                        <Checkbox
                            sx={{
                                color: '#E1E9E8',
                                '&.Mui-checked': {
                                    color: '#036C5F',
                                },
                            }}

                        />
                        <Typography variant='p' component='p' sx={{
                            color: '#545454',
                            fontFamily: 'Lato',
                            fontSize: '1rem',
                        }}>
                            Juices (68)
                        </Typography>
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                        <Checkbox
                            sx={{
                                color: '#E1E9E8',
                                '&.Mui-checked': {
                                    color: '#036C5F',
                                },
                            }}

                        />
                        <Typography variant='p' component='p' sx={{
                            color: '#545454',
                            fontFamily: 'Lato',
                            fontSize: '1rem',
                            fontWeight: 400
                        }}>
                            Oil (1)
                        </Typography>
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                        <Checkbox
                            sx={{
                                color: '#E1E9E8',
                                '&.Mui-checked': {
                                    color: '#036C5F',
                                },
                            }}

                        />
                        <Typography variant='p' component='p' sx={{
                            color: '#545454',
                            fontFamily: 'Lato',
                            fontSize: '1rem'
                        }}>
                            Tablets (11)
                        </Typography>
                    </Box>
                </AccordionDetails>
            </Accordion>
            <Accordion
                expanded={packaging}
                onChange={() => setPackaging(!packaging)}
                sx={{
                    backgroundColor: '#FBF7F3',
                    mb: 3, '&:before': { height: '0px' }
                }}>
                <AccordionSummary
                    expandIcon={<ExpandMore />}
                >
                    <Typography
                        component='h6' variant='h6'
                        sx={{
                            fontFamily: 'Montserrat',
                            fontWeight: 600,
                            color: '#143450;',
                            fontSize: '1.1rem',
                        }}
                    >
                        Packaging
                    </Typography>
                </AccordionSummary>
                <AccordionDetails >
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                        <Checkbox
                            sx={{
                                color: '#E1E9E8',
                                '&.Mui-checked': {
                                    color: '#036C5F',
                                },
                            }}

                        />
                        <Typography variant='p' component='p' sx={{
                            color: '#545454',
                            fontFamily: 'Lato',
                            fontSize: '1rem'
                        }}>
                            100 g | Pack of 1
                        </Typography>
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                        <Checkbox
                            sx={{
                                color: '#E1E9E8',
                                '&.Mui-checked': {
                                    color: '#036C5F',
                                },
                            }}

                        />
                        <Typography variant='p' component='p' sx={{
                            color: '#545454',
                            fontFamily: 'Lato',
                            fontSize: '1rem'
                        }}>
                            100 g | Pack of 2
                        </Typography>
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                        <Checkbox
                            sx={{
                                color: '#E1E9E8',
                                '&.Mui-checked': {
                                    color: '#036C5F',
                                },
                            }}

                        />
                        <Typography variant='p' component='p' sx={{
                            color: '#545454',
                            fontFamily: 'Lato',
                            fontSize: '1rem'
                        }}>
                            100 g | Pack of 4
                        </Typography>
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                        <Checkbox
                            sx={{
                                color: '#E1E9E8',
                                '&.Mui-checked': {
                                    color: '#036C5F',
                                },
                            }}

                        />
                        <Typography variant='p' component='p' sx={{
                            color: '#545454',
                            fontFamily: 'Lato',
                            fontSize: '1rem'
                        }}>
                            1000 ml | Pack of 2
                        </Typography>
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                        <Checkbox
                            sx={{
                                color: '#E1E9E8',
                                '&.Mui-checked': {
                                    color: '#036C5F',
                                },
                            }}

                        />
                        <Typography variant='p' component='p' sx={{
                            color: '#545454',
                            fontFamily: 'Lato',
                            fontSize: '1rem',
                        }}>
                            1000 ml | Pack of 1
                        </Typography>
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                        <Checkbox
                            sx={{
                                color: '#E1E9E8',
                                '&.Mui-checked': {
                                    color: '#036C5F',
                                },
                            }}

                        />
                        <Typography variant='p' component='p' sx={{
                            color: '#545454',
                            fontFamily: 'Lato',
                            fontSize: '1rem',
                            fontWeight: 400
                        }}>
                            250 g | Pack of 1
                        </Typography>
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                        <Checkbox
                            sx={{
                                color: '#E1E9E8',
                                '&.Mui-checked': {
                                    color: '#036C5F',
                                },
                            }}

                        />
                        <Typography variant='p' component='p' sx={{
                            color: '#545454',
                            fontFamily: 'Lato',
                            fontSize: '1rem'
                        }}>
                            500 g | Pack of 1
                        </Typography>
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                        <Checkbox
                            sx={{
                                color: '#E1E9E8',
                                '&.Mui-checked': {
                                    color: '#036C5F',
                                },
                            }}

                        />
                        <Typography variant='p' component='p' sx={{
                            color: '#545454',
                            fontFamily: 'Lato',
                            fontSize: '1rem'
                        }}>
                            500 ml | Pack of 2
                        </Typography>
                    </Box>
                </AccordionDetails>
            </Accordion>
            <Accordion
                expanded={openPrice}
                onChange={() => setOpenPrice(!openPrice)}
                sx={{
                    backgroundColor: '#FBF7F3',
                    mb: 3, '&:before': { height: '0px' }
                }}>
                <AccordionSummary
                    expandIcon={<ExpandMore />}
                >
                    <Typography
                        component='h6' variant='h6'
                        sx={{
                            fontFamily: 'Montserrat',
                            fontWeight: 600,
                            color: '#143450;',
                            fontSize: '1.1rem',
                        }}
                    >
                        Price
                    </Typography>
                </AccordionSummary>
                <AccordionDetails >
                    <Slider
                        value={price}
                        onChange={handleChange}
                        valueLabelDisplay="auto"
                        aria-labelledby="price-slider"
                        min={0}
                        max={5500}
                        sx={{
                            color: '#036C5F',
                            '& .MuiSlider-thumb': {
                                backgroundColor: 'white', 
                                border:'1px solid #036C5F'
                            },
                        }}
                    />
                    <Box sx={{
                        display: 'flex',
                        justifyContent:'space-between'
                    }}>
                        <Box sx={{
                            backgroundColor: '#FDFEFF',
                            border: '1px solid #E1E9E8',
                            padding: '10px 15px',
                            borderRadius:'100px'
                        }}
                        >
                        0
                        </Box>
                        <Box sx={{
                            backgroundColor: '#FDFEFF',
                            border: '1px solid #E1E9E8',
                            padding: '10px 15px',
                            borderRadius: '100px'
                        }}
                        >
                            5500
                        </Box>
                    </Box>
                </AccordionDetails>
            </Accordion>
            <Accordion
                expanded={packaging}
                onChange={() => setPackaging(!packaging)}
                sx={{
                    backgroundColor: '#FBF7F3',
                    mb: 3, '&:before': { height: '0px' }
                }}>
                <AccordionSummary
                    expandIcon={<ExpandMore />}
                >
                    <Typography
                        component='h6' variant='h6'
                        sx={{
                            fontFamily: 'Montserrat',
                            fontWeight: 600,
                            color: '#143450;',
                            fontSize: '1.1rem',
                        }}
                    >
                        Availability
                    </Typography>
                </AccordionSummary>
                <AccordionDetails >
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                        <Checkbox
                            sx={{
                                color: '#E1E9E8',
                                '&.Mui-checked': {
                                    color: '#036C5F',
                                },
                            }}

                        />
                        <Typography variant='p' component='p' sx={{
                            color: '#545454',
                            fontFamily: 'Lato',
                            fontSize: '1rem'
                        }}>
                            100 g | Pack of 1
                        </Typography>
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                        <Checkbox
                            sx={{
                                color: '#E1E9E8',
                                '&.Mui-checked': {
                                    color: '#036C5F',
                                },
                            }}

                        />
                        <Typography variant='p' component='p' sx={{
                            color: '#545454',
                            fontFamily: 'Lato',
                            fontSize: '1rem'
                        }}>
                            100 g | Pack of 2
                        </Typography>
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                        <Checkbox
                            sx={{
                                color: '#E1E9E8',
                                '&.Mui-checked': {
                                    color: '#036C5F',
                                },
                            }}

                        />
                        <Typography variant='p' component='p' sx={{
                            color: '#545454',
                            fontFamily: 'Lato',
                            fontSize: '1rem'
                        }}>
                            100 g | Pack of 4
                        </Typography>
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                        <Checkbox
                            sx={{
                                color: '#E1E9E8',
                                '&.Mui-checked': {
                                    color: '#036C5F',
                                },
                            }}

                        />
                        <Typography variant='p' component='p' sx={{
                            color: '#545454',
                            fontFamily: 'Lato',
                            fontSize: '1rem'
                        }}>
                            1000 ml | Pack of 2
                        </Typography>
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                        <Checkbox
                            sx={{
                                color: '#E1E9E8',
                                '&.Mui-checked': {
                                    color: '#036C5F',
                                },
                            }}

                        />
                        <Typography variant='p' component='p' sx={{
                            color: '#545454',
                            fontFamily: 'Lato',
                            fontSize: '1rem',
                        }}>
                            1000 ml | Pack of 1
                        </Typography>
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                        <Checkbox
                            sx={{
                                color: '#E1E9E8',
                                '&.Mui-checked': {
                                    color: '#036C5F',
                                },
                            }}

                        />
                        <Typography variant='p' component='p' sx={{
                            color: '#545454',
                            fontFamily: 'Lato',
                            fontSize: '1rem',
                            fontWeight: 400
                        }}>
                            250 g | Pack of 1
                        </Typography>
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                        <Checkbox
                            sx={{
                                color: '#E1E9E8',
                                '&.Mui-checked': {
                                    color: '#036C5F',
                                },
                            }}

                        />
                        <Typography variant='p' component='p' sx={{
                            color: '#545454',
                            fontFamily: 'Lato',
                            fontSize: '1rem'
                        }}>
                            500 g | Pack of 1
                        </Typography>
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                        <Checkbox
                            sx={{
                                color: '#E1E9E8',
                                '&.Mui-checked': {
                                    color: '#036C5F',
                                },
                            }}

                        />
                        <Typography variant='p' component='p' sx={{
                            color: '#545454',
                            fontFamily: 'Lato',
                            fontSize: '1rem'
                        }}>
                            500 ml | Pack of 2
                        </Typography>
                    </Box>
                </AccordionDetails>
            </Accordion>
        </Grid>
    )
}

export default Filters