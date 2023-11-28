// INICIALIZAMOS LA FUNCION QUE VA A TRAER EL MAPA
function initMap() {
    // CREAMOS LAS CONSTANTES Y VARIABLES CON LAS CUALES VAMOS A TRABAJAR
    const map = document.querySelector("#mapa");
    let autocomplete;
    const ubicacionUsuario = document.querySelector("#ubicacion");
    let directionsService = new google.maps.DirectionsService;
    let directionsRenderer = new google.maps.DirectionsRenderer;
    const indicaciones = document.querySelector("#indicaciones");

    // CON ESTA CONST TRABAJAREMOS LA UBICACION QUE APARECERA POR DEFECTO EN EL MAPA
    const ubicacionInicial = new google.maps.LatLng(40.413895, -3.7266841);

    // CREAMOS LA CONSTANTE opciones LA CUAL CONTIENE EL ZOOM
    const opciones = {
        zoom: 14,
        center: ubicacionInicial,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    // DAMOS INICIACION AL MAPA GRAFICAMENTE
    const mapa = new google.maps.Map(map, opciones);

    // CREAMOS LA MARCA, LA CUAL NOS MOSTRARÁ LA UBICACIÓN DE LA EMPRESA
    const marca = new google.maps.Marker({
        position: ubicacionInicial,
        map: mapa,
        title: "JG MUSIC"
    })

    // CONTENIDO HECHO EN ETIQUETA HTML
    const contenido = '<h2>JG MUSIC</h2>'+
                      '<img class="foto-contenido" src="../assets/img/JGMusic.jpg"<br/>'+
                      '<p><strong>Dirección:</strong> Paseo de Extremadura piso 3</p>'+
                      '<p><strong>Madrid</strong></p>'+
                      '<p><strong>Telefono:</strong>602416030</p>';

    // CON ESTA CONSTANTE DAMOS INICIO A LA VENTANA PARA MOSTRAR EL CONTENIDO 
    const ventanaInformacion = new google.maps.InfoWindow({
        content: contenido
    }) 

    // CON ESTA FUNCION VAMOS ABRIR LA VENTANA QUE NOS MUESTRA LA IMAGEN Y EL CONTENIDO
    marca.addListener("click",()=>{
        ventanaInformacion.open({
            map: map,
            anchor: marca,
            shouldFocus: false
        })
    });

    // ACA VAMOS A TRAER TANTO LAS INDICACIONES COMO EL DIBUJO DE LA RUTA ENTRE JG MUSIC Y LA UBICACIÓN DEL USUARIO
    directionsRenderer.setMap(mapa);
    directionsRenderer.setPanel(indicaciones);

    // CREAMOS LA FUNCIÓN DE AUTOCOMPLETAR LA BUSQUEDA EN EL INPUT
    function autocompletarBusqueda() {
        autocomplete = new google.maps.places.Autocomplete(ubicacionUsuario);
        autocomplete.addListener("place_changed", () => {
            const lugar = autocomplete.getPlace();
            if (!lugar.geometry) {
                alert("No se pudieron encontrar las coordenadas para la ubicación proporcionada");
                return;
            }

            let inicioRuta = ubicacionInicial;
            let finRuta = lugar.geometry.location;

            // UTILIZAMOS EL METODO route PARA CALCULAR LA RUTA
            directionsService.route({
                origin: inicioRuta,
                destination: finRuta,
                travelMode: google.maps.TravelMode.DRIVING
            }, function (response, status) {
                if (status == google.maps.DirectionsStatus.OK) {
                    directionsRenderer.setDirections(response);
                } else {
                    alert("Error al obtener direcciones: " + status);
                }
            });
        });
    }

    autocompletarBusqueda();
}


    