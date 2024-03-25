const temperature = document.querySelector("div#weather span:first-child");
const city = document.querySelector("div#weather span:nth-child(3)")
const API_KEY = "29a5d38c18d83fbd7dca07e0055abea9"


function success(position){
	const lat = position.coords.latitude;
	const lon = position.coords.longitude;
	const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
	fetch(url)
		.then((res) => res.json())
		.then((data) => {
			temperature.innerText = data.main.temp;
			city.innerText = data.name;
		})
}
function error(){
	console.log("error");
}
navigator.geolocation.getCurrentPosition(success, error);