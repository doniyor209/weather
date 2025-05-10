const ota = document.getElementById("ota");
const input = document.getElementById("input");
const btn = document.getElementById("btn");

const apiKey = "0837213505e842f3a3b0490b885afd02";
const units = 'metric';


const sana = new Date(1746710641 * 1000);
console.log(sana.toString().split(" "));





btn.addEventListener("click", async () => {
    if (input.value.trim().length < 1) {
        alert("Shaharlarni kiriting!!");
    } else {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&units=${units}&appid=${apiKey}`;
        const res = await fetch(url);
        const data = await res.json();
        chizish(data);
    }
})


function chizish(malumot) {
    console.log(malumot);
    const icon = malumot.weather[0].icon;
    const sana = new Date(malumot.dt * 1000);

    ota.innerHTML = `
     
            <img src=${`https://openweathermap.org/img/w/${icon}.png`} alt="">
            <h1>${malumot.main.temp}°</h1>
            <h3>${malumot.name}</h3>
            <h5>Max:${malumot.main.temp_max}° Min:${malumot.main.temp_min}°</h5>
            <div class="df">
                <h4>Today:</h4>
                <h4>${sana.toString().split(" ")[1]}, ${sana.toString().split(" ")[2]}</h4>
            </div>
    `
}

