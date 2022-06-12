window.onload = function() {
    const newsButton = document.querySelector('#newsButton');
    const liveButton = document.querySelector('#liveButton');
    const streamButton = document.querySelector('#streamButton');
    const fuelButton = document.querySelector('#fuelButton');
    const trackButton = document.querySelector('#trackButton');

    const news = document.querySelector('#news');
    const live = document.querySelector('#live');
    const stream = document.querySelector('#stream');
    const fuel = document.querySelector('#fuel');
    const track = document.querySelector('#track');

    const fuelStatsKms = document.querySelector('#fuelStatsKms');
    const fuelStatsLiters = document.querySelector('#fuelStatsLiters');
    const fuelStatsCost = document.querySelector('#fuelStatsCost');
    const fuelStatsMPG = document.querySelector('#fuelStatsMPG');

    const fuelings = [];

    const fueling1 = {
        date: "11/06/2022",
        stationName: "BP",
        stationLocation:"Andover, UK",
        odo:153948,
        liters: 81.46,
        cost: 159.96,
      };

    fuelings.push(fueling1);

    function calcfuelStatsKms() {
        return 0
    };

    function calcfuelStatsLiters(){
        let liters = 0;
        for (const fueling of fuelings) {
            liters = liters + fueling.liters
        }
        return liters
    };

    function calcfuelStatsCost(){
        let cost = 0;
        for (const fueling of fuelings) {
            cost = cost + fueling.cost
        }
        return cost
    };

    function calcfuelStatsMPG(){
        return 0    
    }

    fuelStatsKms.textContent = calcfuelStatsKms() + ' KMs';
    fuelStatsLiters.textContent = calcfuelStatsLiters() + ' l';
    fuelStatsCost.textContent = '£' + calcfuelStatsCost();
    fuelStatsMPG.textContent = calcfuelStatsMPG() + ' l/100km';

    //map section
    let map = L.map('map').setView([51.505, -0.09], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);


    //default landing page
    news.style.display = 'black';
    live.style.display = 'none';
    stream.style.display = 'none';
    fuel.style.display = 'none';
    track.style.display = 'none';

    newsButton.addEventListener('click',() => {
        news.style.display = 'block';
        live.style.display = 'none';
        stream.style.display = 'none';
        fuel.style.display = 'none';
        track.style.display = 'none';
    })

    liveButton.addEventListener('click',() => {
        news.style.display = 'none';
        live.style.display = 'block';
        stream.style.display = 'none';
        fuel.style.display = 'none';
        track.style.display = 'none';
    })

    streamButton.addEventListener('click',() => {
        news.style.display = 'none';
        live.style.display = 'none';
        stream.style.display = 'block';
        fuel.style.display = 'none';
        track.style.display = 'none';
    })

    fuelButton.addEventListener('click',() => {
        news.style.display = 'none';
        live.style.display = 'none';
        stream.style.display = 'none';
        fuel.style.display = 'block';
        track.style.display = 'none';
    })

    trackButton.addEventListener('click',() => {
        news.style.display = 'none';
        live.style.display = 'none';
        stream.style.display = 'none';
        fuel.style.display = 'none';
        track.style.display = 'block';
    })




}

