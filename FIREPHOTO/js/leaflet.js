document.addEventListener('DOMContentLoaded',()=>{
    
    var map = L.map('map').setView([50.375384675566444,-4.14261817932129],13);

    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1Ijoia2F0YWxpbnYiLCJhIjoiY2t6YnZxZGZjMXRzajJubnhkaHBhemlpaiJ9.vogKmo-xezTaHkwMRuLDjg'
}).addTo(map);

})