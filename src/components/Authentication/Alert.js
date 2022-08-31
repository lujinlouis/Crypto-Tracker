import { Snackbar } from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import React from 'react'
import { CryptoState } from '../../CryptoContext'

const Alert = () => {

    const { alert, setAlert } = CryptoState();

    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }
        setAlert({ open: false });
    }


    return (
        <Snackbar
            open={alert.open}
            onClose={handleClose}
            autoHideDuration={3000}
            style={{
                left: '50%',
                transform: 'translate(-50%, -50%)',
            }}>
            <MuiAlert onClose={handleClose} elevation={10} variant="filled" severity={alert.type}>
                {alert.message}
            </MuiAlert>
        </Snackbar>
    )
}

export default Alert