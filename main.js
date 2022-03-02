const mapStart = document.querySelector('#mapStart');
const metridium = document.querySelector('#metridiumFieldDiveSite');

document.querySelector('#metridiumField').addEventListener('click', showMetridium);

function showMetridium(){
    mapStart.classList.add('hidden');
    metridium.classList.toggle('hidden');
}