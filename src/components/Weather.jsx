import { Box, makeStyles } from '@material-ui/core';
import Form from './Form';
import logo from '../images/weather-image.jpg';


const useStyles = makeStyles({
    component: {
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        width: '60%',
        margin: '0 auto'
    },
    leftContainer: {
        backgroundImage : `url(${logo})`,
        height: '90%',
        width: '37%',
        backgroundSize: 'cover',
        borderRadius: '20px 0 0 20px'
    },
    rightContainer: {
        background: 'linear-gradient(#4a8da2, #fac170)',
        height: '90%',
        width: '73%',
        borderRadius: '0 20px 20px 0'
    }
})

const Weather = () => {
    const 
    
    classes = useStyles();
    return (
        <Box className={classes.component}>
            <Box className={classes.leftContainer}></Box>
            <Box className={classes.rightContainer}>
                <Form />
            </Box>
        </Box>
    )
}

export default Weather;