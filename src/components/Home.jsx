import React, { useEffect, useState } from 'react'
import '../styles/In.css'
import { getGeo, getWeather } from '../helpers/getData'

const Home = () => {
    // ================ COORDENADAS ==============
    const [loc, setLoc] = useState({
        lat: '4.59889',
        lon: '-74.08083',
        ubi: 'Bogotá, Colombia'
    })
    const { lat, lon, ubi } = loc

    // ============ BUSCADOR ================
    const [search, setSearch] = useState({
        place: ''
    })
    const { place } = search

    const handleInput = ({ target }) => {
        setSearch({
            ...search,
            [target.name]: target.value
        })
    }
    // ============== CLIMA ============
    const [weather, setWeather] = useState({})
    // const weatherIcon = () => {
    //     let skyStatus = ''
            
    //     if (weather.current.weather[0].main === 'Clouds') {
    //         skyStatus = 'https://res.cloudinary.com/dlkynkfvq/image/upload/v1646101236/Personal/1146869_upkhkl.png'
    //     } else if (weather.current.weather[0].main === 'Rain') {
    //         skyStatus = 'https://res.cloudinary.com/dlkynkfvq/image/upload/v1646101349/Personal/3093390_knwqku.png'
    //     } else {
    //         skyStatus = 'https://res.cloudinary.com/dlkynkfvq/image/upload/v1646101835/Personal/740879_roadqm.png'
    //     }
    //     return skyStatus
    // }
    
    // =========== PETICIONES ===================
    const Data = () => {
        let api = ''
        let apiW = ''
        if (place !== '') {
            api = `https://api.mapbox.com/geocoding/v5/mapbox.places/${place}.json?types=place%2Cpostcode%2Caddress&access_token=pk.eyJ1IjoieG5pY29sYXNnIiwiYSI6ImNsMDc4OTZiMjE2bmEzZG55c2M4bjFueGsifQ.T2xo4PK4gC-6fPNta68o0A`;
            apiW = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely&appid=46c36164e37014afb9ebfc1a4d9f874b`
        } else {
            console.log('esperando ubicación');
            api = `https://api.mapbox.com/geocoding/v5/mapbox.places/bogota.json?types=place%2Cpostcode%2Caddress&access_token=pk.eyJ1IjoieG5pY29sYXNnIiwiYSI6ImNsMDc4OTZiMjE2bmEzZG55c2M4bjFueGsifQ.T2xo4PK4gC-6fPNta68o0A`;
            apiW = `https://api.openweathermap.org/data/2.5/onecall?lat=4.59889&lon=-74.08083&exclude=minutely&appid=46c36164e37014afb9ebfc1a4d9f874b`
        }
        getGeo(api, setLoc)
        getWeather(apiW, setWeather)
        console.log(weather);
    }
    
    useEffect(() => {
        Data()
        
        // weatherIcon()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [place])

    // console.log();
    return (
        <>
            <div className='HomeCont'>
                <div className='Main'>
                    <center>
                        <input className='Search' name='place' value={place} onChange={handleInput} placeholder='Buscar por ciudad...' type="text" />
                    </center>
                    <h3 className='ubication'>{ubi}</h3>
                    <div className="contIconW">
                        <img src='https://res.cloudinary.com/dlkynkfvq/image/upload/v1646101835/Personal/740879_roadqm.png' alt="." className="weatherIcon" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home