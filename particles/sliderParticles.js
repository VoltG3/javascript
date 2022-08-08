const particlesText = document.getElementById('particlesText');
const particlesSpeed = document.getElementById('sliderParticles');

    // DEFAULT onload
    particlesText.textContent = getSpeed() + '%';
    particlesSpeed.value = getSpeed();


particlesSpeed.addEventListener('input', () => {
particlesText.textContent = `${sliderParticles.value}%`;

setSpeed(sliderParticles.value)
EXECUTE()

})