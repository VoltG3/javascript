const intensityText = document.getElementById('intensityText');
const particlesIntensity = document.getElementById('sliderIntensity');

    // DEFAULT onload
    intensityText.textContent = getSpacing() + '%';
    particlesIntensity.value = getSpacing();

particlesIntensity.addEventListener('input', () => {
intensityText.textContent = `${sliderIntensity.value}%`;

let x;
if(sliderIntensity.value == 0) { x = 0.1 }
if(sliderIntensity.value == 1) { x = 0.2 }
if(sliderIntensity.value == 2) { x = 0.3 }
if(sliderIntensity.value == 3) { x = 0.4 }
if(sliderIntensity.value == 4) { x = 0.5 }
if(sliderIntensity.value == 5) { x = 0.6 }
if(sliderIntensity.value == 6) { x = 0.7 }
if(sliderIntensity.value == 7) { x = 0.8 }
if(sliderIntensity.value == 9)  { x = 1 }
if(sliderIntensity.value == 10) { x = 2 }
if(sliderIntensity.value == 11) { x = 3 }
if(sliderIntensity.value == 12) { x = 4 }
if(sliderIntensity.value == 13) { x = 5 }
if(sliderIntensity.value == 14) { x = 6 }
if(sliderIntensity.value == 15) { x = 7 }
if(sliderIntensity.value == 16) { x = 8 }
if(sliderIntensity.value == 17) { x = 9 }
if(sliderIntensity.value == 18) { x = 10 } 

setSpacing(x)
EXECUTE() 

})