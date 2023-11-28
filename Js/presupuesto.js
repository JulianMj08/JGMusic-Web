// FORMULARIO DE REGISTRO

function validarFormulario(form){
    // CREAMOS CONSTANTES PARA MANIPULAR CADA INPUT
    const nombreUsuario = form.querySelector("#nombre-usuario");
    const apellidosUsuario = form.querySelector("#apellidos-usuario");
    const telefonoUsuario = form.querySelector("#telefono-usuario");
    const emailUsuario = form.querySelector("#email-usuario");
    const privacidad = document.querySelector("#privacidad");
    
    
    // VALIDACIÓN DEL NOMBRE
    if((nombreUsuario.value.length > 15) || (!/^[A-Za-z\s]+$/.test(nombreUsuario.value))) {
        alert("El campo Nombre debe de tener un máximo de quince LETRAS");
        return false;    
    }

    // VALIDACION DE LOS APELLIDOS
    if((apellidosUsuario.value.length > 40) || (!/^[A-Za-z\s]+$/.test(apellidosUsuario.value))) {
        alert("El campo Apellidos debe de tener un máximo de cuarenta LETRAS");
        return false;
    }

    // VALIDACION DEL TELEFONO
    if((telefonoUsuario.value.length > 9) || (isNaN(telefonoUsuario.value))){
        alert("el campo Telefono debe tener máximo nueve NÚMEROS");
        return false;
    }

    // VALIDACION PRIVACIDAD
    if(privacidad.checked === false){
        alert("Debe Aceptar las política de privaciad");
        return false;
    }

    // VALIDACION DEL CORREO ELECTRÓNICO
    const validarEmail = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[_a-z0-9-]+(\.[_a-z0-9-]+)*(\.[a-z]{2,3})$/;

    if(!validarEmail.test(emailUsuario.value)){
        alert("el campo de correo no es válido");
        return false;
    }
    else {
        alert("Formulario Enviado con Éxito");
        return true;
    }

}

// PRESUPUESTO DEL FORMULARIO
const elegirPlan = document.querySelector("#elige-plan");
const tiempoPlan = document.querySelector("#tiempo-plan");
const presupuestoEstimado = document.querySelector("#presupuesto-estimado");
const descargaMusica = document.querySelector("#descargar-musica");
const listaReproduccion = document.querySelector("#lista-reproduccion");
const escuchaSinInternet = document.querySelector("#sin-internet");
const presupuestoTotal = document.querySelector("#presupuesto-total");

// EVENTOS CHANGE
elegirPlan.addEventListener('change', actualizarPresupuesto);
tiempoPlan.addEventListener('change', actualizarPresupuesto);
descargaMusica.addEventListener('change', actualizarPresupuesto);
listaReproduccion.addEventListener('change', actualizarPresupuesto);
escuchaSinInternet.addEventListener('change', actualizarPresupuesto);

//FUNCION PARA DARLE INTERACTIVIDAD AL PRESUPUESTO
function actualizarPresupuesto() {
    const seleccionPlan = elegirPlan.value;
    const seleccionTiempo = tiempoPlan.value;
    
    presupuestoEstimado.value = `escogiste un plan ${seleccionPlan} por ${seleccionTiempo}`;
    
    //PLAN GRATUITO
    if(elegirPlan.value === "Gratis") {
        tiempoPlan.value = " ";
        presupuestoEstimado.value = "Escogiste un plan Gratuito";
        descargaMusica.disabled = true;
        listaReproduccion.disabled = true;
        escuchaSinInternet.disabled = true;
        presupuestoTotal.value = " ";
    }
    else {
        descargaMusica.disabled = false;
        listaReproduccion.disabled = false;
        escuchaSinInternet.disabled = false;
    }

    //DECLARAMOS UNA VARIABLE let con valor 0.
    let valorChecked = 0;

    // CRESMOS CONDICIONALES PARA QUE ESTA VARIABLE EMPIECE A ITERAR AUMENTANDO EN 3 QUE ES VALOR EN EUROS DE CADA EXTRA.
    if(descargaMusica.checked === true){
        valorChecked += 3;
    }
    if(listaReproduccion.checked === true){
        valorChecked += 3;
    }
    if(escuchaSinInternet.checked === true){
        valorChecked += 3;
    }

    // PLAN BASICO
    let presupuestoParcial = 0;

    if (elegirPlan.value === "Básico") {
        if (tiempoPlan.value === "3 Meses") {
            presupuestoParcial = 20;
        } else if (tiempoPlan.value === "6 Meses") {
            presupuestoParcial = 30;
        } else if (tiempoPlan.value === "12 Meses") {
            presupuestoParcial = 50;
        } else {
            presupuestoTotal.value = "";
        }
    } else {
        presupuestoTotal.value = "";
    }

    // PLAN PREMIUM
    if (elegirPlan.value === "Premium") {
        if (tiempoPlan.value === "3 Meses") {
            presupuestoParcial = 30;
        } else if (tiempoPlan.value === "6 Meses") {
            presupuestoParcial = 50;
        } else if (tiempoPlan.value === "12 Meses") {
            presupuestoParcial = 90;
        } else {
            presupuestoTotal.value = "";
        }
    } else {
        presupuestoTotal.value = "";
    }
    
    function sumaPresupuesto(presupuestoParcial, valorChecked) {
        return presupuestoParcial + valorChecked;
    }

    if(elegirPlan.value === "Gratis"){
        presupuestoTotal.value = "";
    } else {
        presupuestoTotal.value = `Valor total a Pagar: ${sumaPresupuesto(presupuestoParcial, valorChecked)} €`;
    }   
};



