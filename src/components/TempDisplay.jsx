import React, { useContext } from 'react';
import {TemperatureContext} from './DisplayArea';
import MaxMinTemp from './MaxMinTemp';

const TempDisplay = props =>{
    const [temperature,setTemperature] = useContext(TemperatureContext);

    return(
        <>
        <center className='my-auto display-4'>
        {temperature.temp} Cel
        <br/>
        <MaxMinTemp />
        </center>
        </>
    )
}

export default TempDisplay;
