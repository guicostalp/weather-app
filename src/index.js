import { getData } from "./script";





//Call Elements from the DOM

const app = document.querySelector('.weather-app');
const temp = document.querySelector('.temp');
const dateOutput = document.querySelector('.date');
const timeOutput = document.querySelector('.time');
const conditionOutput = document.querySelector('.condition');
const NameOutput = document.querySelector('.name');
const icon = document.querySelector('.icon');
const cloudOutput = document.querySelector('.cloud');
const humidityOutput = document.querySelector('.humidity');
const windOutput = document.querySelector('.wind');
const form = document.getElementById('locationInput');
const search = document.querySelector('.search');
const btn = document.querySelector('.submit');
const cities = document.querySelectorAll('.city');


//Default city when the page loads
let cityInput = "London";
getData(cityInput)

//Event listener for each city on the side menu
cities.forEach((city) => {
    city.addEventListener ('click', (e) => {
        //Change input to city clicked
        cityInput = e.target.innerHTML;
        //Fetch data with API
        getData(cityInput);
        //Fade out effect on app
        // app.style.opacity = "0";

    });    
});
//Add submit event to the input form

form.addEventListener('submit', (e) => {
    if(search.value.length === 0) {
        alert('Please enter a city name');
    } else {
        //Set city input and fetch data with API
        cityInput = search.value
        getData(cityInput);
        search.value = "" //Cleans search input    
    }
    //Prevent default behaviour (Refresh page)
    e.preventDefault();
})