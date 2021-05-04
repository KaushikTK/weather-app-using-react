import React, {useContext, useEffect} from 'react';
import {CityContext,TemperatureContext} from './DisplayArea';

const search_for_temp = async (region,setTemp)=>{
    // enter your url here
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${region}&appid=d6a669e5a79cxxxxxxxxxxxxxxxxxxxx&units=metric`
    let response = await fetch(url);
    if(response.ok)
    {
        response = await response.json();
        setTemp({temp:response.main.temp, max:response.main.temp_max,min:response.main.temp_min});
    }
    else setTemp('No data available')
} 

const SearchTag = props =>{
    const [city,setCity] = useContext(CityContext);
    const [Temperature,setTemperature] = useContext(TemperatureContext);
    console.log(Temperature);

    useEffect(()=>{
        search_for_temp(city,setTemperature);
    },[])

    const changeCity = e=>{
        setCity(e.target.value);
    }

    return(
    <>
    <input type='text' style={{textTransform:'capitalize'}} className='form-control' placeholder='Name of the region' value={city} onChange={changeCity} id='city' name='city'/>

    </>)
}

export default SearchTag;
export {search_for_temp};
