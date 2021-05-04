import React,{useContext} from 'react';
import {TemperatureContext, CityContext} from './DisplayArea';
import { search_for_temp } from './SearchTag';

const GetButton = props=>{
    const [Temperature,setTemperature] = useContext(TemperatureContext);
    const [city, setCity] = useContext(CityContext);
    console.log(city);

    return(
        <>
        <center>
            <button className='btn btn-primary col-sm-8' onClick={()=>{search_for_temp(city,setTemperature)}}>Get Data</button>
        </center>
        </>
    )
}

export default GetButton;