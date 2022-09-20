const request = require('request')

const geocode = (address, callback) => {
    const url = `http://api.positionstack.com/v1/forward?access_key=f03f795b0f5e5bda8cb2ed852136e57b&query=${encodeURIComponent(address)}&limit=1`

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (!body.data) {
            callback('Unable to find the location provided. Please try again with a different search term.', undefined)
        } else {
            // callback(undefined, { latitude, longitude, label } = body.data[0])
            callback(undefined, {
                latitude: body.data[0].latitude,
                longitude: body.data[0].longitude,
                location: body.data[0].label
            })
        }
    })
}

module.exports = geocode