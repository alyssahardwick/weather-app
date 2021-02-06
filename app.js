window.addEventListener('load', ()=> {
    let long;
    let lat;
    let temperatureDescription = document.querySelector('.temperature-description');
    let temperatureDegree = document.querySelector('.temperature-degree');
    let locationTimeZone = document.querySelector('.location-timezone');
    let iconPlacement = document.querySelector('.icon');
    let iconImg = document.createElement("img");


    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position =>{
            long = position.coords.longitude;
            lat = position.coords.latitude;

            const api = `https://api.weatherapi.com/v1/current.json?key=f1fa4ac4a07e48658f5220351201808&q=${lat},${long}`;

            fetch(api)
            .then(response =>{
                return response.json();
            })
            .then(data =>{
                console.log(data)
                const {temp_f} = data.current;
                const {text} = data.current.condition;
                const {name,region} = data.location;
                const {icon} = data.current.condition;
                const icon_link = "https:" + icon; 
                //set DOM elements from the API
                
                temperatureDegree.textContent = temp_f;
                temperatureDescription.textContent = text;
                locationTimeZone.textContent = name + "," + " " + region;
                
                iconPlacement.appendChild(iconImg); //converts icon link to img
                iconImg.src = icon_link;
                
                region;

                });

        
        });
    }

});

