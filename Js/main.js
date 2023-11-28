// DECLARACION DE CONSTANTES PARA MANIPULAR LOS ELEMENTOS HTML
const imagenUno = document.getElementById("img-1");
const imagenDos = document.getElementById("img-2");
const imagenTres = document.getElementById("img-3");
const imagenCuatro = document.getElementById("img-4");
const imagenCinco = document.getElementById("img-5");
const imagenSeis = document.getElementById("img-6");
const listReggaeton = document.querySelector(".lista-reproduccion-reggaeton");
const listElectronica = document.querySelector(".lista-reproduccion-electronica");
const listBachata = document.querySelector(".lista-reproduccion-bachata");
const listvallenato = document.querySelector(".lista-reproduccion-vallenato");
const listSalsa = document.querySelector(".lista-reproduccion-salsa");
const listRock = document.querySelector(".lista-reproduccion-rock");
let cancionUno = document.querySelector("#id1");
let cancionDos = document.querySelector("#id2");
let cancionTres = document.querySelector("#id3");
let cancionCuatro = document.querySelector("#id4");
let cancionCinco = document.querySelector("#id5");
let cancionSeis = document.querySelector("#id6");
let cancionSiete = document.querySelector("#id7");
let cancionOcho = document.querySelector("#id8");
let cancionNueve = document.querySelector("#id9");
let cancionDiez = document.querySelector("#id10");
let cancionOnce = document.querySelector("#id11");
let cancionDoce = document.querySelector("#id12");
let cancionTrece = document.querySelector("#id13");
let cancionCatorce = document.querySelector("#id14");
let cancionQuince = document.querySelector("#id15");
let cancionDiezYSeis = document.querySelector("#id16");
let cancionDiezYSiete = document.querySelector("#id17");
let cancionDiezYOcho = document.querySelector("#id18");
let cancionDiezYNueve = document.querySelector("#id19");
let cancionVeinte = document.querySelector("#id20");
let cancionVeintiUno = document.querySelector("#id21");
let cancionVeintiDos = document.querySelector("#id22");
let cancionVeintiTres = document.querySelector("#id23");
let cancionVeintiCuatro = document.querySelector("#id24");
const pagInicio = document.querySelectorAll(".inicio");
const titulos = document.querySelectorAll(".titulo");
const generoElectronica = document.querySelectorAll(".electronica");
const generoReggaeton = document.querySelectorAll(".reggaeton");
const generoBachata = document.querySelectorAll(".bachata");
const generoVallenato = document.querySelectorAll(".vallenato");
const generoSalsa = document.querySelectorAll(".salsa");
const generoRock = document.querySelectorAll(".rock");
let iconoPausar = document.querySelector(".icono-pause");
const menuMobil = document.querySelector(".menu-hamburguesa");
const contenedorMenuMovil = document.querySelector(".contenedor-nav-mobile");
const header = document.querySelector("header");

// FUNCIÓN PARA PANTALLAS MOBILE
menuMobil.addEventListener('click', abrirMenu);

function abrirMenu() {
    contenedorMenuMovil.classList.toggle("activo");
}

// BOTONES ATRAS Y ADELANTE DEL CARRUSEL
const atras = document.querySelector(".contenedor-atras");
const siguiente = document.querySelector(".contenedor-siguiente");

// EVENTOS
atras.addEventListener('click', moverAtras);
siguiente.addEventListener('click', moverAdelante);
imagenDos.addEventListener('click', cancionesReggaeton);
imagenUno.addEventListener('click', cancionesElectronica);
imagenTres.addEventListener('click', cancionesBachata);
imagenCuatro.addEventListener('click', cancionesVallenato);
imagenCinco.addEventListener('click', cancionesSalsa);
imagenSeis.addEventListener('click', cancionesRock);

// UTILIZAMOS EL SIGUIENTE BLOQUE DE CODIGO PARA PODER HACER REUTILIZACION DE CLASES POR MEDIO DEL querySelectorAll().

// ITERA SOBRE CADA ELEMENTO Y AGREGA EL EVENTO DE CLICK
generoElectronica.forEach((Electronica) => {
    Electronica.addEventListener('click', cancionesElectronica);
});

generoReggaeton.forEach((Reggaton) => {
    Reggaton.addEventListener('click', cancionesReggaeton);
});

generoBachata.forEach((Bachata) => {
    Bachata.addEventListener('click', cancionesBachata);
});

generoVallenato.forEach((Vallenato) => {
    Vallenato.addEventListener('click', cancionesVallenato);
});

generoSalsa.forEach((Salsa) => {
    Salsa.addEventListener('click', cancionesSalsa);
});

generoRock.forEach((Rock) => {
    Rock.addEventListener('click', cancionesRock);
});

pagInicio.forEach(function(inicio) {
    inicio.addEventListener('click', volverInicio);
});

titulos.forEach(function(titulo) {
    titulo.addEventListener('click', volverInicio);
});

// CARRUSEL

//POSICION ACTUAL DEL CARRUSEL
let posicionActual = 0;


//FUNCIONES
function moverAdelante() {
    // RESTA 50% A LA POSICION ACTUAL 
    if (posicionActual > -300){
        posicionActual -= 20;
        // APLICA LA TRANSFORMACION DE LAS IMAGENES
    imagenUno.style.transform = `translateX(${posicionActual}%)`;
    imagenDos.style.transform = `translateX(${posicionActual}%)`;
    imagenTres.style.transform = `translateX(${posicionActual}%)`;
    imagenCuatro.style.transform = `translateX(${posicionActual}%)`;
    imagenCinco.style.transform = `translateX(${posicionActual}%)`;
    imagenSeis.style.transform = `translateX(${posicionActual}%)`;
    };
};

function moverAtras() {
    if(posicionActual < 0){
        posicionActual += 20;
        imagenUno.style.transform = `translateX(${posicionActual}%)`;
        imagenDos.style.transform = `translateX(${posicionActual}%)`;
        imagenTres.style.transform = `translateX(${posicionActual}%)`;
        imagenCuatro.style.transform = `translateX(${posicionActual}%)`;
        imagenCinco.style.transform = `translateX(${posicionActual}%)`;
        imagenSeis.style.transform = `translateX(${posicionActual}%)`;
    };
};

// SE CREAN ESTAS FUNCIONES PARA QUE AL DAR CLICK LAS CATEGORIAS DE LAS CANCIONES, ESTAS NOS ENVIEN A SU RESPECTIVA LISTA DE REPRODUCCIÓN.
function cancionesReggaeton() {
    volverInicio();
    listReggaeton.classList.toggle("activo");
  }

function cancionesElectronica() {
    volverInicio();
    listElectronica.classList.toggle("activo");
  }

function cancionesBachata() {
    volverInicio();
    listBachata.classList.toggle("activo");
  }

function cancionesVallenato() {
    volverInicio();
    listvallenato.classList.toggle("activo");
}  

function cancionesSalsa() {
    volverInicio();
    listSalsa.classList.toggle("activo");
}

function cancionesRock() {
    volverInicio();
    listRock.classList.toggle("activo");
}

function volverInicio() {
    listReggaeton.classList.remove("activo");
    listElectronica.classList.remove("activo");
    listBachata.classList.remove("activo");
    listvallenato.classList.remove("activo");
    listSalsa.classList.remove("activo");
    listRock.classList.remove("activo");
};

// CONEXION POR MEDIO DE AJAX PARA HACER USO DE LOS OBEJTOS JSON
window.onload = function() {

    // GENERAMOS LA VARIABLE xhr QUE SERA LA ENTRADA DEL OBJETO XMLHttpRequest.
    var xhr = new XMLHttpRequest();

    // CREAMOS UNA CONST URL QUE SEA QUIEN GUARDARA LA FUENTE DE LAS CANCIONES EN FORMATO JSON.
    const url = "canciones.json";
    
    // UTILIZAMOS EL MÉTODO OPEN QUE CONTIENE EL METHOD GET, LA URL Y EL TRUE PARA CONFIRMAR QUE LO QUE QUEREMOS ES TRAER LOS DATOS
    xhr.open("GET", url, true);
    
    // CREAMOS UNA FUNCION QUE SERA LA ENCARGADA DE CARGAR EL ARCHIVO JSON CUANDO LA PÁGINA CARGUE
    xhr.onload = function () {
        if(xhr.status === 200) {
            var canciones = JSON.parse(xhr.responseText);
            console.log(canciones);
        }else {
            console.error("Error al cargar las canciones");
        };
        // DENTRO DE LA FUNCION CREAMOS EVENTOS DE CLICK PARA QUE CUANDO DEMOS CLICK EN LA CANCIÓN ESTA SE REPRODUZCA
        cancionUno.addEventListener('click', playPista);
        cancionDos.addEventListener('click', playPista);
        cancionTres.addEventListener('click', playPista);
        cancionCuatro.addEventListener('click', playPista);
        cancionCinco.addEventListener('click', playPista);
        cancionSeis.addEventListener('click', playPista);
        cancionSiete.addEventListener('click', playPista);
        cancionOcho.addEventListener('click', playPista);
        cancionNueve.addEventListener('click', playPista);
        cancionDiez.addEventListener('click', playPista);
        cancionOnce.addEventListener('click', playPista);
        cancionDoce.addEventListener('click', playPista);
        cancionTrece.addEventListener('click', playPista);
        cancionCatorce.addEventListener('click', playPista);
        cancionQuince.addEventListener('click', playPista);
        cancionDiezYSeis.addEventListener('click', playPista);
        cancionDiezYSiete.addEventListener('click', playPista);
        cancionDiezYOcho.addEventListener('click', playPista);
        cancionDiezYNueve.addEventListener('click', playPista);
        cancionVeinte.addEventListener('click', playPista);
        cancionVeintiUno.addEventListener('click', playPista);
        cancionVeintiDos.addEventListener('click', playPista);
        cancionVeintiTres.addEventListener('click', playPista);
        cancionVeintiCuatro.addEventListener('click', playPista);
        
        
        // FUNCION PARA REPRODUCIR LAS CANCIONES POR MEDIO DEL EVENTO addEventListener
        function playPista() {
                       
            // DETERMINA EN CUAL CANCION SE HIZO CLICK
            let playCancion;

            if (this.id === "id1") {
                playCancion = canciones[0];
            } else if (this.id === "id2") {
                playCancion = canciones[1];
            } else if (this.id === "id3") {
                playCancion = canciones[2];
            } else if (this.id === "id4") {
                playCancion = canciones[3];
            } else if (this.id === "id5") {
                playCancion = canciones[4];
            } else if (this.id === "id6") {
                playCancion = canciones[5];
            } else if (this.id === "id7") {
                playCancion = canciones[6];
            } else if (this.id === "id8") {
                playCancion = canciones[7];
            } else if (this.id === "id9") {
                playCancion = canciones[8];
            } else if (this.id === "id10") {
                playCancion = canciones[9];
            } else if (this.id === "id11") {
                playCancion = canciones[10];
            } else if (this.id === "id12") {
                playCancion = canciones[11];
            } else if (this.id === "id13") {
                playCancion = canciones[12];
            } else if (this.id === "id14") {
                playCancion = canciones[13];
            } else if (this.id === "id15") {
                playCancion = canciones[14];
            }  else if (this.id === "id16"){
                playCancion = canciones[15];
            } else if (this.id === "id17") {
                playCancion = canciones[16];
            } else if (this.id === "id18") {
                playCancion = canciones[17];
            } else if (this.id === "id19") {
                playCancion = canciones[18];
            } else if (this.id === "id20") {
                playCancion = canciones[19];
            } else if (this.id === "id21") {
                playCancion = canciones[20];
            } else if (this.id === "id22") {
                playCancion = canciones[21];
            } else if (this.id === "id23") {
                playCancion = canciones[22];
            } else if (this.id === "id24") {
                playCancion = canciones[23];
            }
            if (playCancion) {
                const contenedorAudio = document.querySelector(".contenedor-audio");
                const contenedorCancionesRecientes = document.querySelector(".canciones-recientes");
                const audioReproductor = document.querySelector(".sonido");
                source = audioReproductor.querySelector("source");
                
                    source.src = playCancion.url;
                    audioReproductor.load();
                    audioReproductor.play();
                    iconoPausar.classList.toggle("activo");


            // GENERAMOS UN EVENTO QUE CONTENDRA UNA FUNCION PARA PAUSAR LAS CANCIONES.       
                    iconoPausar.addEventListener('click', pausarCancion);

                    function pausarCancion() {
                        if (audioReproductor.paused) {
                            audioReproductor.play();  
                        } else {
                            audioReproductor.pause();
                        };
                         
                    }
                    // TAMBIEN GENERAMOS DOS EVENTOS PARA QUE TAMBIEN PUEDAN DAR PLAY Y PAUSA Y AL MISMO TIEMPO CAMBIAR EL ICONO AGREDADO EN LA PARTE SUPERIOR DEL ASIDE
                        audioReproductor.addEventListener('pause', function() {
                        iconoPausar.src = "./assets/iconos/icono-play.png";
                         });
                         audioReproductor.addEventListener('play', function() {
                         iconoPausar.src = "./assets/iconos/pause_5644585.png";
                         contenedorAudio.classList.remove("invisible");
                         contenedorCancionesRecientes.classList.add("invisible");
                         });
            }
         }
    }
    // ENVIAMOS LA PETICIÓN
    xhr.send();
}

// ESTA FUNCION ES CREADA CON EL FIN DE QUE CUANDO SE DE CLICK EN LA CATEGORIA DE LAS CANCIONES EL SCROLL SUBA HASTA EL INCIO QUE ES DONDE APARECE SU RESPECTIVA LISTA DE REPRODUCCIÓN.
var imagenesGenero = document.querySelectorAll('.item-carrusel');

// ITERA SOBRE CADA IMAGEN Y AGREGA EL EVENTO CLICK
imagenesGenero.forEach(function(imagenGenero) {
    imagenGenero.addEventListener('click', function() {
        // USA scrollTo PARA HACER SCROLL AL INICIO DE LA PÁGINA
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});

