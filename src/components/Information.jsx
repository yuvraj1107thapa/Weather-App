import { Box, Typography, makeStyles } from '@material-ui/core'
import LocationOnIcon from '@material-ui/icons/LocationOn';
import SettingsBrightnessIcon from '@material-ui/icons/SettingsBrightness';
import OpacityIcon from '@material-ui/icons/Opacity';
import Brightness5Icon from '@material-ui/icons/Brightness5';
import Brightness4Icon from '@material-ui/icons/Brightness4';

const useStyles = makeStyles({
    container: {
        margin: 30
    },
    row: {
        padding: 7,
        fontSize: 22,
        letterSpacing: 1
    },
    value: {
        color: "white"
    },
    icon: {
        marginRight: 15,
        color: 'fff'
    }
});

const Information = ({ data }) => {
    const classes = useStyles();
    return (
        data ? 
        <Box className = {classes.container}>
            <Typography className = {classes.row}><LocationOnIcon className = {classes.icon}/> Location: <Box className = {classes.value} component = "span">{data.name}, {data.sys.country}</Box></Typography>
            <Typography className = {classes.row}><SettingsBrightnessIcon className = {classes.icon}/> Temperature: <Box className = {classes.value} component = "span">{data.main.temp} °Celcius</Box> </Typography>
            <Typography className = {classes.row}><OpacityIcon className = {classes.icon}/> Humidity: <Box className = {classes.value} component = "span">{data.main.humidity} %</Box></Typography>
            <Typography className = {classes.row}><Brightness5Icon className = {classes.icon}/> Sunrise: <Box className = {classes.value} component = "span">{new Date(data.sys.sunrise * 1000).toLocaleTimeString()}</Box></Typography>
            <Typography className = {classes.row}><Brightness4Icon className = {classes.icon}/> Sunset: <Box className = {classes.value} component = "span">{new Date(data.sys.sunset * 1000).toLocaleTimeString()}</Box></Typography>
            {/* <Typography></Typography>
            <Typography></Typography>
            <Typography></Typography> */}
        </Box>  : null
    )
}

export default Information;