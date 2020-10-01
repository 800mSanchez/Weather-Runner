import React from 'react';
import './GetHourly.scss';

const GetHourly = (props) => {
    const milliseconds = props.dt
    const dateObject = new Date(milliseconds)
    const humanDateFormant = dateObject.toLocaleString()

    return (
        <div className='hourly'>
            <p>{humanDateFormant}</p>
            <p>Temperature: {Math.round(props.temp)} ℉</p>
            <p>{props.weatherdescription}</p>
            <img src={`http://openweathermap.org/img/wn/${props.weathericon}@2x.png`}/>
        </div>
    )
}

export default GetHourly;