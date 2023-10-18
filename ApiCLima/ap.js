const ApiKey = '1b8a0b6dc4ca8a771bf2ffae2d85d35c';
const UrlBase = 'https://api.openweathermap.org/data/2.5/weather';


const btnCity = document.querySelector('#btnCity');
const inputCity = document.querySelector('#city');

const fetchapi = url => fetch(url).then(response => response.json());

async function getClimaByCity(city,apiKey){
    const url = `${UrlBase}?q=${city}&appid=${apiKey}`;
    console.log(url);
    const clima = await fetchapi(url);
    const temperatura =(clima.main.temp - 273.15).toFixed(2);
    document.querySelector('h2').innerHTML = temperatura +'°C - ' + clima.name;
    pintFondo(temperatura);
    pintaEmoji(temperatura);
}

function pintFondo(temp){
    const fondo = document.querySelector('body');
    if (temp < 13){
        fondo.style.background = '#0000FF'
    }else if (temp <22){
        fondo.style.background = '#00FFFF'
    } else {
        fondo.style.background = '#FF0000'
    }
}

function pintaEmoji(temp){
    const emo = document.querySelector('#emoji');
    if (temp < 13){
        emo.innerHTML = '🐧🐧';
    } else if (temp < 22){
        emo.innerHTML = '🍻';
    } else{
        emo.innerHTML = '🥵';
    }
}

async function getClima(lat,lon,apiKey){
    const url = `${UrlBase}?lat=${lat}&lon=${lon}&appid=${apiKey}`;
    const clima = await fetchapi(url);
    console.log(clima);
    const temperatura =(clima.main.temp - 273.15).toFixed(2);
    document.querySelector('h2').innerHTML = temperatura +'°C - ' + clima.name;
    pintFondo(temperatura);
    pintaEmoji(temperatura);
}

navigator.geolocation.getCurrentPosition((position) => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    getClima(lat,lon,ApiKey);
  });

function buttonAction(){
    const city = inputCity.value;
    if (city){
        getClimaByCity(city,ApiKey);
    }
}

btnCity.addEventListener('click', buttonAction);