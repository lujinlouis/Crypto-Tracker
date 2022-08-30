
import { Typography } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react'
import Carousel from './Carousel';



const Banner = () => {



    return (
        <div className="banner">
            <Container style={{
                height: 400,
                display: "flex",
                flexDirection: "column",
                paddingTop: 25,
                justifyContent: "space-around",
            }}>
                <div className='tagline'>
                    <Typography
                        variant='h2'
                        style={{
                            fontWeight: "bold",
                            marginBottom: 15,
                            fontFamily: "Montserrat"    
                        }}>
                        Super Crypto Tracker
                    </Typography>
                    <Typography
                    variant='subtitle2'
                    style={{
                        color: "darkgrey",
                        textTransform: "capitalize",
                        fontFamily: "montserrat",
                    }}>
                        Get all the Info regarding your favorite Crypto currency
                    </Typography>
                </div>
                <Carousel />
            </Container>
        </div>
    )
}

export default Banner
