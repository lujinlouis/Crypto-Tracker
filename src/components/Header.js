import { AppBar, createTheme, MenuItem, Select, ThemeProvider, Toolbar, Typography } from '@mui/material'
import { Container } from '@mui/system';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { CryptoState } from '../CryptoContext';




const Header = () => {

    const navigate = useNavigate();

    const { currency, setCurrency } = CryptoState();


    const darkTheme = createTheme({
        palette: {
          mode: "dark"
        }
    })

    return (
        <ThemeProvider theme={darkTheme}>
            <AppBar color='transparent' position='static'>
                <Container>
                    <Toolbar>

                        <Typography onClick={() => navigate('/')} className="title" sx={{ fontFamily: 'Montserrat', fontWeight: 'bold' }}>
                            Crypto Tracker
                        </Typography>

                        <Select 
                        variant="outlined"
                        style={{
                                width: 100,
                                height: 40,
                                marginRight: 15,
                                color: "white",
                            }}
                            value={currency}
                            onChange={(e) => setCurrency(e.target.value)} >
                            <MenuItem value={"USD"}>USD</MenuItem>
                            <MenuItem value={"CNY"}>CNY</MenuItem>
                        </Select>
                    </Toolbar>
                </Container>
            </AppBar>
        </ThemeProvider>
    )
}

export default Header
