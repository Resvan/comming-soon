import React from 'react';
import { Card, CardContent, Typography, CardActions, Box } from '@mui/material';

const ProductCard = ({ proData }) => {
    return (
        <Card style={{
            border: '1.2px solid #E1E9E8',
            background: '#FFF',
            padding: '24px 34px 24px 24px',
        }}>
            <Box sx={{ position: 'relative' }}>
                <div style={{
                    position: 'absolute',
                    background: "#EEA676",
                    width: '100%',
                    bottom: -10,
                    right: -10,
                    height: '100%',
                }}></div>
                <div style={{ position: 'relative' }}>
                    <img
                        height="200"
                        src={proData}
                        alt="Image"
                    />
                </div>
            </Box>
            <CardContent sx={{
                padding: '0',
                mt: 2,
            }}>
                <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{
                        fontFamily: 'Outfit',
                        fontWeight: 600,
                        textAlign: "left",
                    }}
                >
                    Eu nulla neque nisl
                </Typography>
                <Typography variant="body1" sx={{
                    textAlign: 'left',
                    fontFamily: 'Outfit'
                }}>
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                </Typography>
                <Typography sx={{
                    fontFamily: 'Outfit',
                    color: '#EEA676',
                    textAlign: 'left',
                    fontWeight: 600,
                    mt: 1
                }}>₹ 239.00</Typography>
            </CardContent>
            <CardActions sx={{
                padding: '0',
                mt: 3,
            }}>
                <Typography sx={{
                    fontFamily: 'Outfit',
                    color: '#036C5F',
                    textAlign: 'left',
                    fontWeight: 600,
                    textDecorationLine: 'underline',
                    '&:hover': {
                        cursor: 'pointer'
                    },
                }}>Explore Now</Typography>
            </CardActions>
        </Card>
    );
};

export default ProductCard;
