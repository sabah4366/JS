function checkWheather(){
    let cityname=id_city.value
    console.log(cityname)

    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=6fa99e1f96f024f79970c5a3532b2ac6&units=metric`).then(res=>res.json()).then(data=>displaywheather(data))
}



function displaywheather(data){
// fetching all data from server
    let temperature=data.main.temp;
    let mintemp=data.main.temp_min;
    let maxtemp=data.main.temp_max;
    let humidity=data.main.humidity
    let feelslike=data.main.feels_like
    let winddegree=data.wind.deg
    let windspeed=data.wind.speed
    let sunrisetime=data.sys.sunrise
    let sunsettime=data.sys.sunset

// first data
    let temperaturedata=`
    <div class="card text-center rounded-pill " style="background-color: #0786ed;">
    <div class="card-header text-white">
     <h3><i class="fa-solid fa-temperature-three-quarters"></i> Temperatures</h3>
     <h3></h3>
      
    </div>
    <div class="card-body text-white">
    <h5 class="card-title">Temperature:${temperature}°C </h5>
      <h5 class="card-title">MinTemperature:${mintemp}°C</h5>
      <p class="card-text">MaxTemperature:${maxtemp}°C</p>
    
    </div>
    <div class="card-footer  text-white">
        today
    </div>
  </div>

    `



// id lek data kodukkunnu
    id_temp.innerHTML=temperaturedata
    id_cityname.innerHTML=`<h1 class=" text-white">Wheather in ${data.name}</h1>`




// second data
    let humiditydata=`
    <div class="card text-center rounded-pill" style="background-color: #0786ed;">
    <div class="card-header text-white">
    
    <h3> Humidity</h3>
      
    </div>
    <div class="card-body text-white">
    <h5 class="card-title">Humidity:${humidity} </h5>
      <h5 class="card-title">Feels like:${feelslike}</h5>
      <p class="card-text">Wind Degree:${winddegree}</p>
    
    </div>
    <div class="card-footer  text-white">
        today
    </div>
  </div>

    
    `



// id lek data kodukkunnu
    id_humidity.innerHTML=humiditydata



// third data

let winddata=`
<div class="card text-center rounded-pill" style="background-color: #0786ed;">
    <div class="card-header text-white">
    
    <h3>Wind Info</h3>
      
    </div>
    <div class="card-body text-white">
    <h5 class="card-title">wind Speed:${windspeed}Km/hr </h5>
      <h5 class="card-title">Sun Rise:${sunrisetime }</h5>
      <p class="card-text">Sun Set:${sunsettime}</p>
    
    </div>
    <div class="card-footer  text-white">
        today
    </div>
  </div>



`

id_wind.innerHTML=winddata




}

function getWhetherByCurrentLocation(){
    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition((pos)=>{
            let lat=pos.coords.latitude
            let long=pos.coords.longitude
            fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=e01a23079ff02431bef9747c8cd73fe0`).then(res=>res.json()).then(data=>displaywheather(data))

        })
    }




}