
let currentWeatherWrapper=document.getElementById('currentWeatherWrapper');
async function getWeatherInformation(city){
	let weatherAPI=`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=00ce8bb57f44c4150c6de59a6b497260
`;

	let response=await fetch(weatherAPI,{method:"GET"});

	let result=await response.json();


	if(result.name!=undefined){
		currentWeatherWrapper.style.display='block';
		document.querySelector('.invalidCity').innerHTML="";

		let cityName=document.getElementById('city');
		cityName.innerHTML=`${result.name}<span class='country'>${result.sys.country}</span>`;


		let temp=document.getElementById('temp');
		temp.innerHTML=`${Math.round(result.main.temp)}<sup>&#8451;</sup>`;

		let icon=document.querySelector('.weathericon');
		icon.setAttribute('src',`http://openweathermap.org/img/wn/${result.weather[0].icon}@2x.png`);

		let weatherDescription=document.getElementById('Description');
		weatherDescription.innerHTML=result.weather[0].main;

		let humidity=document.getElementById('humidityDegree');
		humidityDegree.textContent=`Humidity:${result.main.humidity}%`;

		let winds=document.getElementById('windSpeed');
		winds.innerHTML=`Wind:${result.wind.deg}&#8451, ${result.wind.speed} m/s`;
	}else{
		currentWeatherWrapper.style.display='none';
		document.querySelector('.invalidCity').innerHTML="Not found.Please enter correct... &#x1F61E;";
	}

	console.log(result);
	
}

let searchBtn=document.getElementById("searchBtn");

searchBtn.onclick=() => {
	let city=document.getElementById("cityName");
	if (city.value!="") {
		currentWeatherWrapper.style.display='none';
		getWeatherInformation(city.value);
	}else{
		currentWeatherWrapper.style.display='none';
		document.querySelector('.invalidCity').innerHTML="You did not enter.&#x1F61E;";
	}
}





