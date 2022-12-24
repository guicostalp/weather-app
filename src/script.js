var pageData = {}


async function getData(location) {
    // const location = prompt("Please select location")
    const api = "https://api.openweathermap.org/data/2.5/weather?q="+location+"&APPID=891a74240948d51b3a4b8bf8c2b60141"
    const response = await fetch(api)
    const data = await response.json()
    console.log(`getData() will return: `,data)

    filterData(data)


}

function filterData (data) {

    const location = data.name
    const feels_like = data.main.feels_like
    const temp = data.main.temp
    const tempMax = data.main.temp_max
    const tempMin = data.main.temp_min
    const getWeather = data.weather
    const weather = getWeather[0].main
    const weatherDesc = getWeather[0].description
    const wind = data.wind.speed
    pageData = {
        location: location,
        feels_like: feels_like,
        temp: temp,
        temp_max: tempMax, 
        temp_min: tempMin,
        clouds: weather,
        description: weatherDesc,
        wind_speed: wind

    }

    console.log(pageData)



}


export {getData}

