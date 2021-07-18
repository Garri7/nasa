let map;

document.addEventListener("DOMContentLoaded", () => {
 
  initMap(data.iss_position); 
  
  
});

const url = "url_api";

fetch(url)
  .then(response => response.json())
  .then(data => {

    
    initMap(data.iss_position);
    
  });

  

function initMap(data) {

  const laCoorde = { lat: parseFloat(data.latitude), lng: parseFloat(data.longitude) };

  map = new google.maps.Map(document.getElementById("map"), {
    center: laCoorde,
    zoom: 
    4,


  });

  new google.maps.Marker({
    position: laCoorde,
    map: map,
  })

  setTimeout(laCoorde, 5000); 

}

// time y footer

const fecha = new Date();
const anio = fecha.getFullYear();


document.getElementById('fecha').innerHTML = `

<p style ="text-align: center;">Ubicación de la Estación Espacial - Astronautas - Imagen NASA 🌐 | Copyright © ${anio} 🔥 Proyecto realizado por: <a class="enlace" target="_blank" href="https://twitter.com/garri4p">garri</a> </p>
`;