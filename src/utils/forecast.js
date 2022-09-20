const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=d57386fde412242857ee368b7be1aa0b&query=${latitude},${longitude}`

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather services!', undefined)
        } else if (body.success === false) {
            callback('Unable to find the provided location. Please try again with a different search term.')
        } else {
            const { temperature, precip, feelslike, weather_descriptions, wind_dir, wind_speed } = body.current
            callback(undefined, `${weather_descriptions}. It is currently ${temperature} degrees out there, but feels like ${feelslike} degrees. 
            There is a ${precip}% chance to rain. Currently, the wind speed is at ${wind_speed} km/h with a direction of ${wind_dir}.`)
        }
    })
}

// const axios = require('axios')

// async function forecast(latitude, longitude, callback) {
//     const url = `http://api.weatherstack.com/current?access_key=d57386fde412242857ee368b7be1aa0b&query=${latitude},${longitude}`

//     const response = await axios.get(url)
//     const responseData = await response.data

//     if (responseData.success === false) {
//         callback('Unable to connect to location services!')
//     } else {
//             const { weather_descriptions, temperature, feelslike, precip} = responseData.current
//         callback(undefined, `${weather_descriptions}. It is currently ${temperature} degrees out there, but feels like ${feelslike} degrees. There is a ${precip}% chance to rain.`)
//     }
// }

module.exports = forecast