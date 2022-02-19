import { Box, TextField, Button, makeStyles } from "@material-ui/core";
import React, { useEffect, useState } from 'react';
import { getData } from '../service/api'
import Information from "./Information";

const useStyles = makeStyles({
    container: {
        padding: 10,
        backgroundColor: '#498ba0'
    },
    input: {
        color: 'white',
        marginRight: 15,
    },
    button: {
        width: 140,
        height: 40,
        marginTop: 7
    }
});

const Form = () => {
    const classes = useStyles();
    const [data, getWeatherData] = useState();
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [click, handleClick] = useState(false);

    useEffect(() => {
        const getWeather = async () => {
            city && await getData(city, country).then( response => {
                getWeatherData(response.data);
                console.log(response.data);
            })
        }
        getWeather();
        handleClick(false);
    }, [click]);

    const handleCityChange = (value) => {
        setCity(value);
    }
    
    const handleCountryChange = (value) => {
        setCountry(value);
    }

    return (
        <>
            <Box className = {classes.container}>
                <TextField 
                label = "City" 
                onChange = {(e) => handleCityChange(e.target.value)}
                inputProps = {{className: classes.input}}
                className = {classes.input}/>
                <TextField 
                label = "Country"
                onChange = {(e) => handleCountryChange(e.target.value)}
                inputProps={{className: classes.input}}
                className = {classes.input}/>
                <Button 
                    variant = "contained" color = "primary"
                    className = {classes.button}
                    onClick={() => handleClick(true)}>
                    Get Weather
                </Button>
            </Box>
            <Information data={data}/>
        </>
    )
}

export default Form;