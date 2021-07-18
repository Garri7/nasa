const url = 'url_Api'

fetch(url)
.then(response => response.json() )
.then(data =>{


   // console.log(data.people.length);
    losAstronautas(data.people);
   
});

function losAstronautas(data){

    const mostrar = document.getElementById('mostrarAs');
    const astroNumero = document.getElementById('astroNumero');

    data.forEach(muestra =>{
        const { name, craft } = muestra;
        const numero = data.length;

        astroNumero.innerHTML= `<h3>Número de astronautas: ${numero}</h3>`;
        mostrar.innerHTML += `
        <div class="col-lg-4 col-12 col-xs-12 col-md-12 card m-2 p-2"> 
        <div class="col card-body">
        <h3 class="card-title">Nombre: <b>${name}</b></h3>
        <h3 class="card-title">Trabajo: <b>${craft}</b></h3>
        
        
        </div>
        </div>
        
        
        `;
    });

};

// time y footer

const fecha = new Date();
const anio = fecha.getFullYear();


document.getElementById('fecha').innerHTML = `

<p style ="text-align: center;">Ubicación de la Estación Espacial - Astronautas - Imagen NASA 🌐 | Copyright © ${anio} 🔥 Proyecto realizado por: <a class="enlace" target="_blank" href="https://twitter.com/garri4p">garri</a> </p>
`;