const weatherForm = document.querySelector('form')
const searchEl = document.querySelector('input')
const msg1 = document.querySelector('#msg-1')
const msg2 = document.querySelector('#msg-2')

weatherForm.addEventListener('submit', async (e) => {
    e.preventDefault()
    const location = searchEl.value

    msg1.textContent = 'Loading...'
    msg2.textContent = ''

    const response = await fetch(`/weather?address=${location}`)
    const responseData = await response.json()

    if (responseData.error) {
        msg1.textContent = responseData.error
    } else {
        msg1.textContent = 'Forecast: ' + responseData.forecast
        msg2.textContent = 'Location: ' + responseData.location
    }
})


   // fetch(`http://localhost:3000/weather?address=${location}`)
    //     .then(response => {
    //         response.json()
    //             .then(data => {
    //                 if (data.error) {
    //                     msg1.textContent = data.error
    //                 } else {
    //                     msg1.textContent = 'Forecast: ' + data.forecast
    //                     msg2.textContent = 'Location: ' + data.location
    //                 }
    //             })
    //     })