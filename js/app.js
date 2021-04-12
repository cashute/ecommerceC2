
window.addEventListener("load",inicio);

function inicio(){
    document.getElementById("procesadoresIntel").addEventListener("click",cambioProductos);
}

function cambioProductos(){
    document.getElementById("productos").innerHTML = "holahola";
}

