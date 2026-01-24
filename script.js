const apiKey="c5de33d9f319b1b43f5b3e5010c2fc89";

function getWeatherData(){
    const city=document.querySelector(".textbox").value;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`).then(response=>response.json()).then(data=>{
        document.querySelector(".output").innerHTML=`
        <h3>${data.name}</h3>
        <p>Temperature: ${data.main.temp} °C</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Weather: ${data.weather[0].description}</p>
        `;
    }).catch(()=>{
        document.querySelector(".output").innerHTML="City not found!";
    });
};