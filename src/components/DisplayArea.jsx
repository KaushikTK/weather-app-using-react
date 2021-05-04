import React, { createContext, useState } from 'react';
import SearchTag from './SearchTag';
import TempDisplay from './TempDisplay';
import GetButton from './GetButton';

const TemperatureContext = createContext();
const CityContext = createContext();

const DisplayArea = props =>{
    const [Temperature,setTemperature] = useState({'temp':'0','min':'0','max':'0'});
    const [City,setCity] = useState('Chennai');
    return(
        <>
        <TemperatureContext.Provider value={[Temperature,setTemperature]}>
        <div className='container'>
            <div className='row vh-100' style={{minHeight:'100vh'}}>
                <div className='col-md-6 mx-auto my-auto'>
                <div className='card'>
                <CityContext.Provider value={[City,setCity]}>
                    <div class='card-body'>
                        <SearchTag />
                    </div>
                    <div className='card-body'><TempDisplay /></div>
                    <div className='card-body'><GetButton/></div>
                </CityContext.Provider>
                </div>

                </div>
            </div>
        </div>
        </TemperatureContext.Provider>
        </>
    );
}

export default DisplayArea;
export {TemperatureContext, CityContext};