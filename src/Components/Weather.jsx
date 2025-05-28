import React, { useState } from 'react'
import '../assets/styles/weather.css'
import axios from 'axios'
import { NavLink } from 'react-router-dom';

const Weather = () => {
    let [data, setData] = useState({});
    let [location, setLocation] = useState('');
    let [bool, setBool] = useState(false)

    let fetchWeather = async () => {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=bb1d20aef4dd7e96182cbe393d2991b4`
        let response = await axios.get(url);
        setData(response.data);
        setBool(true)
    };

       let searchLocation = async (event) => {
        if (event.key === 'Enter') {
            fetchWeather(location);
            setLocation('');
        }
    };

    return (
        <div className="weather">
            <div className="header">
                <h1>Weather</h1>
            </div>

            <div className="container">
                <div className="search">
                    <input
                        type="text"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        onKeyPress={searchLocation}
                        placeholder="Enter location"
                    />
                </div>
                <div className="top">
                    <div className="location">
                        {bool ? <p>{data.name}</p> : <p>Bengaluru</p>}
                    </div>
                    <div className="temp">
                        {data.main && bool ? <h1>{data.main.temp}&deg;F</h1> : <h1>72.21&deg;F</h1>}
                    </div>

                </div>
                <div className="description">
                    {data.weather && bool ? <p>{data.weather[0].main}</p> : <p>Clouds</p>}
                </div>

                <div className="bottom">
                    <div className="feels">
                        {bool ? <p>{data.main.feels_like}&deg;F</p> : <p>82.71&deg;F</p>}
                        <p>Feels Like</p>
                    </div>
                    <div className="humidity">
                        {bool ? <p>{data.main.humidity}%</p> : <p>32%</p>}
                        <p>Humidity</p>
                    </div>
                    <div className="wind">
                        {bool ? <p>{data.wind.speed} MPH</p> : <p>4.04 MPH</p>}
                        <p>Wind Speed</p>
                    </div>
                </div>
                <div className="joke-link-div">
                    <p>The weather seems good , if you want to hear a joke ? <NavLink to="/loginportal/jokes">click here</NavLink></p>
                </div>

            </div>
        </div>
    )
}

export default Weather
