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

    const fueling3 = {
        date: "16/06/2022",
        stationName: "ARAL",
        stationLocation: "Tornesch, Germany",
        odo: 154744,
        liters: 86.37,
        cost: 153.91,
    };

    fuelings.push(fueling3);  

    const fueling4 = {
        date: "20/06/2022",
        stationName: "OK",
        stationLocation: "Skagen, Denmark",
        odo: 155210,
        liters: 19.09+59.50,
        cost: 152.24,
    };

    fuelings.push(fueling4);  

    const fueling5 = {
        date: "23/06/2022",
        stationName: "SHELL",
        stationLocation: "Roldal, Norway",
        odo: 155616,
        liters: 33.97+44.51,
        cost: 159.07,
    };

    fuelings.push(fueling5);  

    const fueling6 = {
        date: "24/06/2022",
        stationName: "OKQ8",
        stationLocation: "Tvaaker, Sweden",
        odo: 156042,
        liters: 17.73+55.58,
        cost: 158.11,
    };

    fuelings.push(fueling6); 

    const fueling7 = {
        date: "25/06/2022",
        stationName: "ARAL",
        stationLocation: "Sottrum, Germany",
        odo: 156453,
        liters: 85.37,
        cost: 171.95,
    };

    fuelings.push(fueling7);

    const fueling8 = {
        date: "25/06/2022",
        stationName: "ESSO",
        stationLocation: "Maidstone, UK",
        odo: 157010,
        liters: 24.38,
        cost: 50.24,
    };

    fuelings.push(fueling8); 

    for (const f of fuelings) {
        let fuelingwrapper = document.querySelector('#fuelingwrapper');
        let fueling = document.createElement('div');
        fueling.classList.add("fuelingItem");
        let pdate = document.createElement('p');
        pdate.textContent = f.date + ' ' + f.stationLocation;
        fueling.appendChild(pdate);
        let pname = document.createElement('p');
        pname.textContent = f.stationName;
        fueling.appendChild(pname);
        let pliters = document.createElement('p');
        pliters.textContent = f.liters.toFixed(2) + ' liters';
        fueling.appendChild(pliters);
        let pcost = document.createElement('p');
        pcost.textContent = '£' + f.cost + ' ('+ (f.cost/f.liters).toFixed(2) +' £/l)';
        fueling.appendChild(pcost);
        fuelingwrapper.appendChild(fueling);
    }



    function calcfuelStatsKms() {
        const start = 153948;
        const end = fuelings[fuelings.length - 1].odo;
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
        return (totalL/totalKM*100)   
    }

    fuelStatsKms.textContent = calcfuelStatsKms().toFixed(0) + ' KMs';
    fuelStatsLiters.textContent = calcfuelStatsLiters().toFixed(2) + ' l';
    fuelStatsCost.textContent = '£' + calcfuelStatsCost().toFixed(2);
    fuelStatsMPG.textContent = calcfuelStatsMPG().toFixed(1) + ' l/100km';

    //live location section
    let map = L.map('map').setView([55, 5], 4);   
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
    }).addTo(map);

    //camping 1 - CAMPING MEMLING
    //51.17796037807209, 3.1462270521345164

    //camping 2 - GREEN HEART
    //52.19073285923369, 4.834967289238963

    //camping 3 - SANKT PETER ORDING
    //54.32951367083406, 8.589464051992495

    //camping 4 - denmark forest
    //56.29081700926285, 8.134772757947575

    //camping 5 - norway fjord camping
    //58.06354750387391, 7.065807873872447

    //camping 6 - tau 
    //59.05532089672244, 5.922616991193654

    let marker = L.marker([51.20618770843452, -1.4568982767950496]).addTo(map);  

    //tracks section

    let maptracks = L.map('maptracks').setView([55, 5], 4);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap'
    }).addTo(maptracks);

    let tracks = [
        {url:'https://raw.githubusercontent.com/UP941374/norwaytrip/main/gpx/day1.gpx', col:'green'},
        {url:'https://raw.githubusercontent.com/UP941374/norwaytrip/main/gpx/day2.gpx', col:'blue'}, 
        {url:'https://raw.githubusercontent.com/UP941374/norwaytrip/main/gpx/day4.gpx', col:'red'},
        {url:'https://raw.githubusercontent.com/UP941374/norwaytrip/main/gpx/day6.gpx', col:'magenta'},
        {url:'https://raw.githubusercontent.com/UP941374/norwaytrip/main/gpx/day7.gpx', col:'orange'},
        {url:'https://raw.githubusercontent.com/UP941374/norwaytrip/main/gpx/day8.gpx', col:'brown'},
        {url:'https://raw.githubusercontent.com/UP941374/norwaytrip/main/gpx/day9.gpx', col:'yellow'},
        {url:'https://raw.githubusercontent.com/UP941374/norwaytrip/main/gpx/day11.gpx', col:'pink'},
        {url:'https://raw.githubusercontent.com/UP941374/norwaytrip/main/gpx/day12.gpx', col:'lime'},
        {url:'https://raw.githubusercontent.com/UP941374/norwaytrip/main/gpx/day13.gpx', col:'hotpink'},
    ];

    for (const tr of tracks) {
        new L.GPX(tr.url, {async: true,  marker_options: {
            startIconUrl: 'gpx/marker.png',
            endIconUrl: 'gpx/marker.png',
            shadowUrl: 'gpx/marker.png'
          }, polyline_options: {
            color: tr.col,
            opacity: 1,
            weight: 5,
            lineCap: 'round'
          }}).addTo(maptracks);        
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

