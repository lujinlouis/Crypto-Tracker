import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Login from './Login';
import Signup from './Signup';
import GoogleButton from 'react-google-button';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../../firebase';
import { CryptoState } from '../../CryptoContext';


function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    color: "white",
    borderRadius: 2
};



export default function AuthModal() {
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState(0);



    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const { setAlert } = CryptoState();
    const googleProvider = new GoogleAuthProvider();

    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider).then(res => {
            setAlert({
                open: true,
                message: `Login Successful. Welcome ${res.user.email}`,
                type: "success"
            });

            handleClose();
        }).catch((error) => {
            setAlert({
                open: true,
                message: error.message,
                type: "error"
            });
            return;
        })
    };

    return (
        <div>
            <Button
                variant='contained'
                style={{
                    width: 85,
                    height: 40,
                    backgroundColor: "#EEBC1D",
                }}
                onClick={handleOpen}>
                Login
            </Button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <Box
                            position="static"
                            style={{ backgroundColor: "transparent", color: "white" }}>
                            <Tabs
                                value={value}
                                onChange={handleChange}
                                variant="fullWidth"
                                style={{ borderRadius: 10 }}
                            >
                                <Tab label="Login" {...a11yProps(0)} />
                                <Tab label="Sign Up" {...a11yProps(1)} />
                            </Tabs>
                        </Box>
                        {value === 0 && <Login handleClose={handleClose} />}
                        {value === 1 && <Signup handleClose={handleClose} />}
                        <Box style={{
                            padding: 24,
                            paddingTop: 0,
                            display: "flex",
                            flexDirection: "column",
                            textAlign: "center",
                            gap: 20,
                            fontSize: 20,
                        }}>
                            <span>OR</span>
                            <GoogleButton
                                style={{ width: "100%", outline: "none" }}
                                onClick={signInWithGoogle}
                            />
                        </Box>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}
