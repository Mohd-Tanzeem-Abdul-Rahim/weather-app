
const inputCity = document.getElementById("myCity");
const searchButton = document.getElementById("searchButton");
const weatherImage = document.querySelector(".weather_img");
const temperature= document.querySelector(".temperature");
const description = document.querySelector(".discribtion");
const Humidity = document.getElementById("Humidity");
const windSpeed = document.getElementById("wind_speed");
const error = document.querySelector(".error");
const weatherBody = document.querySelector(".weather_body");
const city = document.querySelector("#city");
async function checkweather(cityName){
        const API_key = "87cdebff897835e2fd5b6724b873c3a2";
        const url =`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_key}&units=metric`;
        const weatherData = await fetch(url).then(data => data.json());
        console.log(weatherData);
        if(weatherData.cod === 404){
            error.style.display="flex";
            weatherBody.style.display="none"
            }
        else{
            error.style.display="none";
            weatherBody.style.display="flex";
        }

        city.innerHTML = cityName;
        temperature.textContent = (weatherData.main.temp+"°C");
        description.textContent= weatherData.weather[0].description;
        Humidity.innerHTML= (weatherData.main.humidity+"%");
        windSpeed.innerHTML= (weatherData.wind.speed+"Km/h");

        switch (weatherData.weather[0].description) {
            case "clear Sky":
                weatherImage.src = "clear.png";
                break;
            case "cloud":
                weatherImage.src = "cloud.png.png";
                break;
            case "mist":
                weatherImage.src = "mist.png";
                break;
            case "rain":
                weatherImage.src = "rain.png";
                break;
            case "snow":
                weatherImage.src = "snow.png";
                break;
            default:
                weatherImage.src = "cloud.png";
                break;
        }


}
// searchButton.addEventListener("click", ()=>console.log(inputCity.value));
searchButton.addEventListener("click" , ()=>{
    console.log(inputCity.value)
 checkweather(inputCity.value);
});

