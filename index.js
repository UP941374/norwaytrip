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

    news.style.display = 'block';
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

