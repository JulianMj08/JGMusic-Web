<?php

/* CREAMOS LA VARIABLE enlace Y LE ASIGNAMOS EL mysqli_connect PARA ABRIR UN PUENTE DE CONEXIÓN ENTRE
EL SERVIDOR Y LA BBDD. */
$enlace = mysqli_connect("localhost:3308", "root", "", "JGMUSIC");

// HACEMOS ESTE if SOLO CON EL FIN DE CORROBORAR EL EXITO DE LA CONEXIÓN.

/*if(!$enlace) {
    die ("No pudo conectarse" . mysqli_error());
}
echo "Exito al conectarse";*/


// DECLARAMOS LAS VARIABLES DE LOS NOMBRES QUE TENEMOS EN EL FORMULARIO
$nombreUsuario = $_POST["nombre-usuario"];
$apellidosUsuario = $_POST["apellidos-usuario"];
$telefonoUsuario = $_POST["telefono-usuario"];
$emailUsuario = $_POST["email-usuario"];
$eligePlan = $_POST["elige-plan"];
$tiempoPlan = $_POST["tiempo-plan"];
$presupuestoEstimado = $_POST["presupuesto-estimado"];
$presupuestoTotal = $_POST["presupuesto-total"];
$privacidad = $_POST["privacidad"];


//CREAMOS UNA VARIABLE sql QUE ES LA ENCARGADA DE INSERTAR LOS DATOS A LA BBDD.
$sql = "INSERT INTO Formulario (`nombre-usuario`, `apellidos-usuario`, `telefono-usuario`, `email-usuario`, `elige-plan`, `tiempo-plan`, `presupuesto-estimado`, `presupuesto-total`, `privacidad`)
VALUES ('$nombreUsuario', '$apellidosUsuario', '$telefonoUsuario', '$emailUsuario', '$eligePlan', '$tiempoPlan', '$presupuestoEstimado', '$presupuestoTotal', '$privacidad')";

//GENERAMOS LA CONSULTA.
if(mysqli_query($enlace, $sql)) {
    // REDIRIGE A EL USUARIO DE NUEVO A LA PÁGINA presupuesto.html)
    header("Location: presupuesto.html");
    exit(); // ASEGURA QUE EL SCRIPT SE DETENGA DESPUES DE LA REDIRECCIÓN.
} else {
    echo "Error en la consulta: " . mysqli_error($enlace);
}

?>
