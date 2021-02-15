let submit = document.getElementById("submit");
let tempDisplay = document.getElementById("temp-display");
let humDisplay = document.getElementById("hum-display");
let winDisplay = document.getElementById("win-display");

//before the click
fetch("https://api.openweathermap.org/data/2.5/weather?q=edmonton&appid=5463c3c15602ed66710566e2ce2a4af0&units=metric")
   .then(function(res){
    return res.json();
    })
    .then(function(data){
      tempDisplay.innerText = data.main.temp + "°C";
      humDisplay.innerText = data.main.humidity+"%";
      winDisplay.innerText = data.wind.speed + "KM/HR"
    
  })
//after the click
submit.addEventListener("click", handleClick);

function handleClick(e){
  e.preventDefault();
  let city = document.getElementById("cityInput").value;
 if(city !==""){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5463c3c15602ed66710566e2ce2a4af0&units=metric`)
   .then(function(res){
    return res.json();
    })
    .then(function(data){
      tempDisplay.innerText = data.main.temp + "°C";
      humDisplay.innerText = data.main.humidity+"%";
      winDisplay.innerText = data.wind.speed + "KM/HR"
    
  })
 }
 
}

