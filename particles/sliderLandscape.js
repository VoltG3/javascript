const landscapeText = document.getElementById('landscapeText');
const L = document.getElementById('sliderLandscape');

    // DEFAULT onload
    landscapeText.textContent = 0;
    L.value = 0;

L.addEventListener('input', () => {
    if(L.value > 0 && L.value < 25) {  landscapeBlue()   }
    if(L.value > 25 && L.value < 50) { landscapeYellow() }
    if(L.value > 50 && L.value < 75) { landscapeGray()   }
    if(L.value > 75 && L.value < 100) { landscapeBlack()  }

   /*  console.log(slider.value)  */
landscapeText.textContent = `${sliderLandscape.value}%`;
})

function landscapeBlue(){
    document.documentElement.style.setProperty('--landscape--start', '#040429');
    document.documentElement.style.setProperty('--landscape--end', ' #257eb7');
}

function landscapeYellow(){
    document.documentElement.style.setProperty('--landscape--start', '#7d6608');
    document.documentElement.style.setProperty('--landscape--end', '#DFFF00');
}

function landscapeGray(){
    document.documentElement.style.setProperty('--landscape--start', '#4d5656');
    document.documentElement.style.setProperty('--landscape--end', '#f2f4f4');
}

function landscapeBlack(){
    document.documentElement.style.setProperty('--landscape--start', '#000000');
    document.documentElement.style.setProperty('--landscape--end', '#a8a8a8 ');
}