const clock = document.querySelector("h1#clock");
const helloGreeting = document.querySelector("div#greeting span:first-child");

function helloGreetingControll(hour){
	if (hour>=6 && hour<12 ) {
		helloGreeting.innerText = "Good Morning! ";
	} else if ( hour>=12 && hour<18) {
		helloGreeting.innerText = "Good Afternoon! ";
	} else if (hour>=18) {
		helloGreeting.innerText = "Good Evening! ";
	}
}
function getTimes(){
	const date = new Date();
	const hours = date.getHours();
	const minutes = date.getMinutes();
	const seconds = date.getSeconds();
	
	clock.innerText = `${String(hours).padStart(2, "0")} : ${String(minutes).padStart(2,"0")} : ${String(seconds).padStart(2, "0")}`

	helloGreetingControll(hours);
	
}

if (clock) {
	getTimes();
	setInterval(getTimes, "1000");
}