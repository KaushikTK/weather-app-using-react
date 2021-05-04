import React, { useContext } from 'react';
import { TemperatureContext } from './DisplayArea';
const MaxMinTemp = props =>{
    const [Temperature,setTemperature] = useContext(TemperatureContext);

    return(
        <>
            <p style={{fontSize:'2rem'}}>{`Min:${Temperature.min}`} || {`Max:${Temperature.max}`}</p>
        </>
    )
}
export default MaxMinTemp;