const apikey = "4f9a3df906204dc02a811cbf6c061bc2";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");


async function checkweather(city) {
    const response = await fetch(apiurl + city + `&appid=${apikey}`);
    let data = await response.json();

    console.log(data);
    document.querySelector("#city").innerHTML = data.name;
    document.querySelector("#temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector("#humid-speed").innerHTML = data.main.humidity + "%";
    document.querySelector("#wind-speed").innerHTML = data.wind.speed + "km/h";
}

searchbtn.addEventListener("click", () => {
   
    console.log(searchbox);
        checkweather(searchbox.value);
    });