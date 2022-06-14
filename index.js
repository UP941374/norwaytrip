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
    let totalKM = 0;
    let totalL = 0;

    const fueling1 = {
        date: "11/06/2022",
        stationName: "BP",
        stationLocation: "Andover, UK",
        odo: 153948,
        liters: 81.46,
        cost: 159.96,
      };
    fuelings.push(fueling1);

      const fueling2 = {
        date: "14/06/2022",
        stationName: "TOTAL",
        stationLocation: "Den Haag, Netherlands",
        odo: 154313,
        liters: 73.06,
        cost: 146.55,
      };
    fuelings.push(fueling2);  
    
    function randomRGB() {
        let r = Math.floor(Math.random() * 255) + 1;
        let g = Math.floor(Math.random() * 255) + 1;
        let b = Math.floor(Math.random() * 255) + 1;
        return "rgb("+r+" ,"+g+","+ b+")"; 
    }
    

    function calcfuelStatsKms() {
        const start = 153948;
        const end = fuelings[fuelings.length-1].odo;
        const diff = (end - start) * 1.6;
        totalKM = diff;
        return diff
    };

    function calcfuelStatsLiters(){
        let liters = 0;
        for (let i = 0; i < fuelings.length - 1; i++) {
            liters = liters + fuelings[i].liters
        }
        totalL  = liters;
        return liters
    };

    function calcfuelStatsCost(){
        let cost = 0;
        for (let i = 0; i < fuelings.length - 1; i++) {
            cost = cost + fuelings[i].cost
        }
        return cost
    };

    function calcfuelStatsMPG(){
        return totalL/totalKM*100   
    }

    fuelStatsKms.textContent = calcfuelStatsKms() + ' KMs';
    fuelStatsLiters.textContent = calcfuelStatsLiters().toFixed(2) + ' l';
    fuelStatsCost.textContent = '£' + calcfuelStatsCost().toFixed(2);
    fuelStatsMPG.textContent = calcfuelStatsMPG().toFixed(1) + ' l/100km';

    //live location section
    let map = L.map('map').setView([55, 5], 4);   

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
    }).addTo(map);

    //camping 1
    //51.17796037807209, 3.1462270521345164

    //camping 2
    //52.19073285923369, 4.834967289238963

    let marker = L.marker([52.1907, 4.8349]).addTo(map);  

    //tracks section

    let maptracks = L.map('maptracks').setView([55, 5], 4);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap'
    }).addTo(maptracks);

    const tracks = [
        'https://raw.githubusercontent.com/UP941374/norwaytrip/main/gpx/day1.gpx',
        'https://raw.githubusercontent.com/UP941374/norwaytrip/main/gpx/day2.gpx'
    ];

    for (const tr of tracks) {
        new L.GPX(tr, {async: true,  marker_options: {
            startIconUrl: 'gpx/marker.png',
            endIconUrl: 'gpx/marker.png',
            shadowUrl: 'gpx/marker.png'
          }, polyline_options: {
            color: randomRGB(),
            opacity: 1,
            weight: 5,
            lineCap: 'round'
          }}).on('loaded', function(e) {
            maptracks.fitBounds(e.target.getBounds());
          }).addTo(maptracks);        
    }

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

