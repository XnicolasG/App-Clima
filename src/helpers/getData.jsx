export const getGeo = async(api,setLoc) =>{ 

    const resp = await fetch(api)
    const data = await resp.json();
    
    const lat = data.features[0].center[1]
    const long = data.features[0].center[0]
    const ubic = data.features[0].place_name
    setLoc({
        lat:lat,
        lon: long,
        ubi: ubic
    })
}

export const getWeather = async(apiW, setWeather) =>{
    const resp = await fetch(apiW);
    const data = await resp.json();
    setWeather(data); 
    
}