import { findAllByAltText } from '@testing-library/react';
import React, { useEffect, useState } from 'react';
import GetWeather from '../GetWeather/GetWeather';
import SearchBar from '../SearchBar/SearchBar';
import GetHourly from '../GetHourly';
import Clothing from '../Clothing/Clothing';
import Footer from '../Footer/Footer';

const Weather = () => {
  const [weather, setWeather] = useState([]);
  const [hourly, setHourly] = useState([]);
  const [isShowing] = useState(true);
  const [index, setIndex] = useState(1)
  const APIKEY = '2d90cd2ad195805d051c268178b0923d';
  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(getCoordinates);
    } else {
      alert('not supported');
    }
  };

useEffect(() => {
  getLocation()
}, [])
async function getCoordinates(position) {
  // console.log(position);
  // props.yes()
  const latitude = position.coords.latitude
  const longitude = position.coords.longitude
 const api = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIKEY}`)
 .then((res) => res.json())
 .then(api => {

   setWeather({
     data: api,
     name: api.name,
     city: api.city,
     country: api.sys.country,
     description: api.weather[0].description,
     main: api.weather[0].main,
     image: api.weather[0].icon,
     temperature: Math.round(api.main.temp /* 9 */ /* / 5 - 459.67 */), // Returns temp in F from Kelvin
     wind: Math.round(api.wind.speed),
     humidity: api.main.humidity,
     error: '',
   })
   ;

 })
if (latitude && longitude) {
} else {
  setWeather({
    data: '',
    city: '',
    country: '',
    description: '',
    main: '',
    image: '',
    temperature: '',
    wind: '',
    humidity: '',
    error: alert('Please turn on location'),
  });
}
const hourlyApi = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely,daily&units=imperial&appid=${APIKEY}`)
.then((res) => res.json())
.then(hourlyApi => {
  setHourly(
    hourlyApi.hourly)
})
}
const mappedHourly = hourly.map(hour => {
  return <GetHourly
  dt={hour.dt * 1000}
  temp={hour.temp}
  weathermain={hour.weather[0].main}
  weatherdescription={hour.weather[0].description}
  weathericon={hour.weather[0].icon}
  />
})
const splicedHourly = mappedHourly.splice(0, mappedHourly.length - 23)


  async function fetchData(e) {
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    e.preventDefault();

    const apiData = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=imperial&APPID=${APIKEY}`
    )
      .then((res) => res.json())
      .then((data) => data);
    if (city && country) {
      setWeather({
        data: apiData,
        name: apiData.name,
        city: apiData.city,
        country: apiData.sys.country,
        description: apiData.weather[0].description,
        main: apiData.weather[0].main,
        image: apiData.weather[0].icon,
        temperature: Math.round(apiData.main.temp),
        wind: Math.round(apiData.wind.speed),
        humidity: apiData.main.humidity,

        error: '',
      });
    } else {
      setWeather({
        data: '',
        name: '',
        city: '',
        country: '',
        description: '',
        image: '',
        main: '',
        temperature: '',
        wind: '',
        humidity: '',
        error: alert('Please Type A City And Country'),
      });
    }
    const latitude = apiData.coord.lat
    const longitude = apiData.coord.lon
    const searchHourlyApi = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely,daily&units=imperial&appid=${APIKEY}`)
.then((res) => res.json())
.then(searchHourlyApi => {
  setHourly(
    searchHourlyApi.hourly)
})
  }

  const next = () => {
    if(index < 4) {
    setIndex(index + 1)
    }
  }
    
  const previous = () => {
   if(index > 1){ 
     setIndex(index - 1)
    } }
   
    const firstSplicedHourly = splicedHourly.splice(0, 6)
    const secondSplicedHourly = splicedHourly.splice(0, 6)
    const thirdSplicedHourly = splicedHourly.splice(0, 6)
    const FourthSplicedHourly = splicedHourly.splice(0, 6)
    const displayHourly = () => {
      if(index <= 1) {
        return firstSplicedHourly
      } else if(index <= 2) {
        return secondSplicedHourly
      } else if(index <= 3) {
        return thirdSplicedHourly
      } else {
        return FourthSplicedHourly

      }
 }

  return (
    <div className="App">
      <SearchBar getWeather={fetchData} />
      {isShowing ? (
        <div>
        <GetWeather
          name={weather.name}
          city={weather.city}
          country={weather.country}
          description={weather.description}
          image={weather.image}
          temperature={weather.temperature}
          wind={weather.wind}
          humidity={weather.humidity}
          error={weather.error}
          main={weather.main}
        />

        <div className='hourlycontainer'>
        <button className='hourlybtn prev' onClick={previous}> &#8592; </button>
        {displayHourly()}
        <button className='hourlybtn next' onClick={next}> &#8594; </button>
        </div>

        <div className="clothing-box">
          <h1>Clothing For Your Run</h1>
          <Clothing temp={weather.temperature} main={weather.main} image={weather.image}/> 
        </div> 

        <Footer />
        </div>
        ) : null}
      {/* {console.log('weather', weather.data)} */}
      {/* {console.log('HOURLY', mappedHourly)} */}
    </div>
  );
};

export default Weather;