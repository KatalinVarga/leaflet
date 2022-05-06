document.addEventListener('DOMContentLoaded', ()=>{

    var addLocationForm = document.querySelector('#addLocationForm');

    addLocationForm.addEventListener('submit', (event)=>{
        event.preventDefault();
    
        db.collection('location').doc().set({

            name: addLocationForm.name.value,
            latitude: addLocationForm.latitude.value,
            longitude: addLocationForm.longitude.value

   }).then(()=>{
        addLocationForm.name.value ='',
        addLocationForm.latitude.value ='',
        addLocationForm.longitude.value =''
        
        location.reload();
   })

    })
})