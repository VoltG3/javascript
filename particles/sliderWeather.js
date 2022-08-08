const weatherText = document.getElementById('weatherText');
const particlesWeather = document.getElementById('sliderWeather');

    // DEFAULT onload
    weatherText.textContent = getWeather();
    particlesWeather.value = getWeather();

particlesWeather.addEventListener('input', () => {
weatherText.textContent = w() + `${sliderWeather.value}`;

/* setSpacing(x)
EXECUTE()  */ 

})

let sign = '';
function w(){
    if(sliderWeather.value > 0) { 
        sign = '+'
    } 

    else {
        sign = ''
    }

    return sign
}