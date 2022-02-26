
//variables for dive site images
const mapStart = document.querySelector('#mapStart');
const metridium = document.querySelector('#metridiumFieldDiveSite');
const sanCarlos = document.querySelector('#sanCarlosSite');
const monastery = document.querySelector('#monasteryBeachSite');
const pointLobos = document.querySelector('#pointLobosSite');

//variables for dive site links
//const monasteryLink = document.querySelector('#monasteryBeach');
//const metridiumLink = document.querySelector('#metridiumField');

//functions to call when dive site link is clicked
document.querySelector('#metridiumField').addEventListener('click', function(){
    showMetridium();
    clickedMetridium();
});

document.querySelector('#sanCarlosBeach').addEventListener('click', showSanCarlos);

document.querySelector('#pointLobos').addEventListener('click', showPointLobos);

document.querySelector('#monasteryBeach').addEventListener('click', function(){
    showMonastery();
    clickedMonastery();
});

function clickedMonastery(){
    metridiumLink.classList.toggle('unClicked');
    monasteryLink.classList.add('clicked');
}

function clickedMetridium(){
    metridiumLink.classList.toggle('clicked');
    monasteryLink.classList.add('unClicked');
}

function showMetridium(){
    mapStart.classList.add('hidden');
    sanCarlos.classList.add('hidden');
    pointLobos.classList.add('hidden');
    monastery.classList.add('hidden');
    metridium.classList.toggle('hidden');

    if (metridium.classList.contains('hidden') == true && mapStart.classList.contains('hidden') == true){
        mapStart.classList.toggle('hidden');
    }
}

function showSanCarlos(){
    mapStart.classList.add('hidden');
    metridium.classList.add('hidden');
    pointLobos.classList.add('hidden');
    monastery.classList.add('hidden');
    sanCarlos.classList.toggle('hidden');

    if (sanCarlos.classList.contains('hidden') == true && mapStart.classList.contains('hidden') == true){
        mapStart.classList.toggle('hidden');
    }
}

function showMonastery(){
    mapStart.classList.add('hidden');
    metridium.classList.add('hidden');
    sanCarlos.classList.add('hidden');
    pointLobos.classList.add('hidden');
    monastery.classList.toggle('hidden');

    if (monastery.classList.contains('hidden') == true && mapStart.classList.contains('hidden') == true){
        mapStart.classList.toggle('hidden');
    }
}

function showPointLobos(){
    mapStart.classList.add('hidden');
    metridium.classList.add('hidden');
    sanCarlos.classList.add('hidden');
    monastery.classList.add('hidden');
    pointLobos.classList.toggle('hidden');

    if (pointLobos.classList.contains('hidden') == true && mapStart.classList.contains('hidden') == true){
        mapStart.classList.toggle('hidden');
    }
}

