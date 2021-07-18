const url = 'url_api'

fetch(url)
.then(response => response.json() )
.then(data =>{


    
    elementNasa(data);
});


//Funcion mostrar elementos

function elementNasa(data){

    const{ copyright , date, explanation, hdurl, media_type, url, title }= data;
    const mostrar = document.getElementById('mostrar');

    //html

    mostrar.innerHTML = `
        <h1>${title}</h1>
        <img class="img-fluid" src="${url}">
        <p class="p-3 fs-5">${explanation}</p>
        <p class="derecha">Autor: ${copyright}</p>
        <p class="derecha">${date}</p>
    
    
    `;


}

// time y footer

const fecha = new Date();
const anio = fecha.getFullYear();


document.getElementById('fecha').innerHTML = `

<p style ="text-align: center;">Ubicación de la Estación Espacial - Astronautas - Imagen NASA 🌐 | Copyright © ${anio} 🔥 Proyecto realizado por: <a class="enlace" target="_blank" href="https://twitter.com/garri4p">garri</a> </p>
`;