/*Muestra información personal*/
function MostrarTelefono(){
    document.getElementById("telefono").innerHTML = "01136090005";
}

function MostrarDomicilio(){
    document.getElementById("domicilio").innerHTML = "Calle 130 N°647, Depto 5 - Berazategui, Prov. Buenos Aires";
}

function MostrarDNI(){
    document.getElementById("DNI").innerHTML = "36873559 / 27368735596";
}

function MostrarFechaNacimiento(){
    document.getElementById("fechanacimiento").innerHTML = "28/03/1992";
}

/*Muestra y oculta información de los distintos segmentos*/
function mostrarCursos() {
    div = document.getElementById('informacionCursos');
    div.style.display = '';
    div2 = document.getElementById('mostrarCursos');
    div2.style.display = 'none';
    div3 = document.getElementById('cerrarCursos');
    div3.style.display = '';
}

function cerrarCursos() {
    div = document.getElementById('informacionCursos');
    div.style.display = 'none';
    div2 = document.getElementById('mostrarCursos');
    div2.style.display = '';
    div3 = document.getElementById('cerrarCursos');
    div3.style.display = 'none';
}

function mostrarRedes() {
    div = document.getElementById('informacionRedes');
    div.style.display = '';
    div2 = document.getElementById('mostrarRedes');
    div2.style.display = 'none';
    div3 = document.getElementById('cerrarRedes');
    div3.style.display = '';
}
    
function cerrarRedes() {
    div = document.getElementById('informacionRedes');
    div.style.display = 'none';
    div2 = document.getElementById('mostrarRedes');
    div2.style.display = '';
    div3 = document.getElementById('cerrarRedes');
    div3.style.display = 'none';
}
function mostrarHabilidades() {
    div = document.getElementById('informacionHabilidades');
    div.style.display = '';
    div2 = document.getElementById('mostrarHabilidades');
    div2.style.display = 'none';
    div3 = document.getElementById('cerrarHabilidades');
    div3.style.display = '';
}
        
function cerrarHabilidades() {
    div = document.getElementById('informacionHabilidades');
    div.style.display = 'none';
    div2 = document.getElementById('mostrarHabilidades');
    div2.style.display = '';
    div3 = document.getElementById('cerrarHabilidades');
    div3.style.display = 'none';
}
