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

    // db.collection('locations').get().then((querysnapshot)=>{
    //     querysnapshot.forEach((doc) =>{
    //         console.log(doc.data());
    //         var loc = doc.data();
    //         var marker = L.marker([loc.lat, loc.lng]).addTo(map);
    //     })
    // })

    var modalElems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(modalElems);

    var addImageModal = document.querySelector('#addImageModal');
    var instance = M.Modal.getInstance(addImageModal);

    // var latPlaceboholder=document.querySelector('#latPlaceboholder');
    // var lngPlaceboholder=document.querySelector('#lngPlaceboholder');

    var latField = document.querySelector('#latField');
    var lngField = document.querySelector('#lngField');

map.on('click', clickedMap);

function clickedMap(event){

    instance.open();

    latField.value = event.latlng.lat;
    lngField.value = event.latlng.lng;
    
    // console.log(event);
    
    // console.log(event.latlng.lat, event.latlng.lng);  // this syntax is referred to as a 'period' (in the US)  -- it is called traverse an object, a dot notation (the name of the method)

//    latPlaceboholder.textContent = event.latlng.lat;
//    lngPlaceboholder.textContent = event.latlng.lng;


    }   

})

