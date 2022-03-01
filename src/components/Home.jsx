import React, { useEffect, useState } from 'react'
import '../styles/In.css'
import {useDispatch} from 'react-redux'
import { getGeo, getWeather } from '../helpers/getData'
import { AsyncDelete, AsyncList, AsyncListActions } from '../actions/ListActions'
import { useSelector } from 'react-redux'

const Home = () => {

const dispatch = useDispatch()
    // ============ BUSCADOR ================
    const [search, setSearch] = useState({
        place: ''
    })
    let { place } = search

    const handleInput = ({ target }) => {
        setSearch({
            ...search,
            [target.name]: target.value
        })
    }
    // ================ COORDENADAS ==============
    const [loc, setLoc] = useState({
        lat: '4.59889',
        lon: '-74.08083',
        ubi: place
    })
    const { lat, lon, ubi } = loc
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
    const local = () => {
        localStorage.setItem('ciudades', JSON.stringify(place))
    }
    // =========== PETICIONES ===================
    const Data = () => {
        let api = ''
        let apiW = ''
        if (place !== '') {
            api = `https://api.mapbox.com/geocoding/v5/mapbox.places/${place}.json?types=place%2Cpostcode%2Caddress&access_token=pk.eyJ1IjoieG5pY29sYXNnIiwiYSI6ImNsMDc4OTZiMjE2bmEzZG55c2M4bjFueGsifQ.T2xo4PK4gC-6fPNta68o0A`;
            apiW = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely&appid=46c36164e37014afb9ebfc1a4d9f874b`
            local()
        } else {
            console.log('esperando ubicación');

            api = `https://api.mapbox.com/geocoding/v5/mapbox.places/bogota.json?types=place%2Cpostcode%2Caddress&access_token=pk.eyJ1IjoieG5pY29sYXNnIiwiYSI6ImNsMDc4OTZiMjE2bmEzZG55c2M4bjFueGsifQ.T2xo4PK4gC-6fPNta68o0A`;
            apiW = `https://api.openweathermap.org/data/2.5/onecall?lat=4.59889&lon=-74.08083&exclude=minutely&appid=46c36164e37014afb9ebfc1a4d9f874b`

        }
        getGeo(api, setLoc)
        getWeather(apiW, setWeather)
        console.log(weather);
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        dispatch(AsyncListActions(place))
    }
    
    const listing =() =>{
        dispatch(AsyncList())
    }
    useEffect(() => {
        Data()
        // weatherIcon()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [place])
    useEffect(()=>{

        listing()
    },[])
    const {cities} = useSelector(store => store.ciudades)
    // console.log();
    return (
        <>
            <div className='HomeCont'>
                <div className='Main'>
                    <form className='saveCities' onSubmit={handleSubmit}>
                    <center>
                        <input className='Search' name='place' value={place} onChange={handleInput} placeholder='Buscar por ciudad...' type="text" />
                    </center>
                    <button className='btnS' type='submit'>Guardar Ciudad</button>
                    </form>
                    <h3 className='ubication'>{ubi}</h3>
                    <div className='info'>
                        <div className='contPrin'>
                            <div className="contIconW">
                                <img src='https://res.cloudinary.com/dlkynkfvq/image/upload/v1646101835/Personal/740879_roadqm.png' alt="." className="weatherIcon" />
                            </div>
                            <div className="card">
                                <h5>Temperatura actual (F°):</h5>
                            </div>
                        </div>
                        <main className="dias">
                            <div className='dia' >
                                <h4>Dia 2</h4>
                                <h5>Temperatura promedio:</h5>
                                <h2>(F°)</h2>
                            </div>
                            <div  className='dia'>
                                <h4> Dia 3</h4>
                                <h5>Temperatura promedio:</h5>
                                <h2>(F°)</h2>
                            </div>
                        </main>
                    </div>
                    <table className='favs' >
                        <thead>
                            <tr>
                                <th>Ciudades</th>
                                <th>Borrar</th>
                            </tr>
                        </thead>
                        <tbody >
                            {
                                cities ?
                                (
                                    cities.map((cities, index)=>(
                                        <tr key={index}>
                                            <td>{cities.place}</td>
                                            <td><button onClick={()=> dispatch(AsyncDelete(cities.place))} className='btnS'>Eliminar</button></td>
                                        </tr>
                                    ))
                                )
                                : <h1>no hay ciudades agregadas</h1>
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Home