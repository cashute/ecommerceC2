
window.addEventListener("load",inicio);

function inicio(){
    document.getElementById("procesadoresIntel").addEventListener("click",mostrarProcesadoresIntel);
    document.getElementById("procesadoresAMD").addEventListener("click",mostrarProcesadoresAMD);
    document.getElementById("mothersIntel").addEventListener("click",mostrarMothersIntel);
    document.getElementById("mothersAMD").addEventListener("click",mostrarMothersAMD);
    document.getElementById("ramDDR3").addEventListener("click",mostrarRamDDR3);
    document.getElementById("ramDDR4").addEventListener("click",mostrarRamDDR4);
    document.getElementById("gpuGeforce").addEventListener("click",mostrarGpuGeforce);
    document.getElementById("gpuAMD").addEventListener("click",mostrarGpuAMD);
    document.getElementById("discosHDD").addEventListener("click",mostrarDiscosHDD);
    document.getElementById("discosSSD").addEventListener("click",mostrarDiscosSSD);
    document.getElementById("gabinetes").addEventListener("click",mostrarGabinetes);
    document.getElementById("fuentes").addEventListener("click",mostrarFuentes);

    
}

function mostrarProcesadoresIntel(){
    document.getElementById("productos").innerHTML = `
    
    <div class="card mb-3 ">
        <a href="#"><img src="img/default.jpg" class="card-img-top" alt=""></a>
        <div class="card-body">
        <h6 class="card-title">Procesador intel 1</h6>
        <p class="card-text">$0000</p>
        <a href="#" class="btn btn-outline-primary w-100">Agregar</a>
        </div>
    </div>
    
    <div class="card mb-3 ">
        <a href="#"><img src="img/default.jpg" class="card-img-top" alt=""></a>
        <div class="card-body">
        <h6 class="card-title">Procesador intel 2</h6>
        <p class="card-text">$0000</p>
        <a href="#" class="btn btn-outline-primary w-100">Agregar</a>
        </div>
    </div>

    <div class="card mb-3 ">
        <a href="#"><img src="img/default.jpg" class="card-img-top" alt=""></a>
        <div class="card-body">
        <h6 class="card-title">Procesador intel 3</h6>
        <p class="card-text">$0000</p>
        <a href="#" class="btn btn-outline-primary w-100">Agregar</a>
        </div>
    </div>

    `;
}

function mostrarProcesadoresAMD(){
    document.getElementById("productos").innerHTML = `
    
    <div class="card mb-3 ">
        <a href="#"><img src="img/default.jpg" class="card-img-top" alt=""></a>
        <div class="card-body">
        <h6 class="card-title">Procesador AMD 1</h6>
        <p class="card-text">$0000</p>
        <a href="#" class="btn btn-outline-primary w-100">Agregar</a>
        </div>
    </div>
    
    <div class="card mb-3 ">
        <a href="#"><img src="img/default.jpg" class="card-img-top" alt=""></a>
        <div class="card-body">
        <h6 class="card-title">Procesador AMD 2</h6>
        <p class="card-text">$0000</p>
        <a href="#" class="btn btn-outline-primary w-100">Agregar</a>
        </div>
    </div>

    <div class="card mb-3 ">
        <a href="#"><img src="img/default.jpg" class="card-img-top" alt=""></a>
        <div class="card-body">
        <h6 class="card-title">Procesador AMD 3</h6>
        <p class="card-text">$0000</p>
        <a href="#" class="btn btn-outline-primary w-100">Agregar</a>
        </div>
    </div>

    `;
}

function mostrarMothersIntel(){
    document.getElementById("productos").innerHTML = `
    
    <div class="card mb-3 ">
        <a href="#"><img src="img/default.jpg" class="card-img-top" alt=""></a>
        <div class="card-body">
        <h6 class="card-title">Motherboard intel 1</h6>
        <p class="card-text">$0000</p>
        <a href="#" class="btn btn-outline-primary w-100">Agregar</a>
        </div>
    </div>
    
    <div class="card mb-3 ">
        <a href="#"><img src="img/default.jpg" class="card-img-top" alt=""></a>
        <div class="card-body">
        <h6 class="card-title">Motherboard intel 2</h6>
        <p class="card-text">$0000</p>
        <a href="#" class="btn btn-outline-primary w-100">Agregar</a>
        </div>
    </div>

    <div class="card mb-3 ">
        <a href="#"><img src="img/default.jpg" class="card-img-top" alt=""></a>
        <div class="card-body">
        <h6 class="card-title">Motherboard intel 3</h6>
        <p class="card-text">$0000</p>
        <a href="#" class="btn btn-outline-primary w-100">Agregar</a>
        </div>
    </div>

    `;
}

function mostrarMothersAMD(){
    document.getElementById("productos").innerHTML = `
    
    <div class="card mb-3 ">
        <a href="#"><img src="img/default.jpg" class="card-img-top" alt=""></a>
        <div class="card-body">
        <h6 class="card-title">Motherboard AMD 1</h6>
        <p class="card-text">$0000</p>
        <a href="#" class="btn btn-outline-primary w-100">Agregar</a>
        </div>
    </div>
    
    <div class="card mb-3 ">
        <a href="#"><img src="img/default.jpg" class="card-img-top" alt=""></a>
        <div class="card-body">
        <h6 class="card-title">Motherboard AMD 2</h6>
        <p class="card-text">$0000</p>
        <a href="#" class="btn btn-outline-primary w-100">Agregar</a>
        </div>
    </div>

    <div class="card mb-3 ">
        <a href="#"><img src="img/default.jpg" class="card-img-top" alt=""></a>
        <div class="card-body">
        <h6 class="card-title">Motherboard AMD 3</h6>
        <p class="card-text">$0000</p>
        <a href="#" class="btn btn-outline-primary w-100">Agregar</a>
        </div>
    </div>

    `;
}

function mostrarRamDDR3(){
    document.getElementById("productos").innerHTML = `
    
    <div class="card mb-3 ">
        <a href="#"><img src="img/default.jpg" class="card-img-top" alt=""></a>
        <div class="card-body">
        <h6 class="card-title">Memoria RAM DDR3 1</h6>
        <p class="card-text">$0000</p>
        <a href="#" class="btn btn-outline-primary w-100">Agregar</a>
        </div>
    </div>
    
    <div class="card mb-3 ">
        <a href="#"><img src="img/default.jpg" class="card-img-top" alt=""></a>
        <div class="card-body">
        <h6 class="card-title">Memoria RAM DDR3 2</h6>
        <p class="card-text">$0000</p>
        <a href="#" class="btn btn-outline-primary w-100">Agregar</a>
        </div>
    </div>

    <div class="card mb-3 ">
        <a href="#"><img src="img/default.jpg" class="card-img-top" alt=""></a>
        <div class="card-body">
        <h6 class="card-title">Memoria RAM DDR3 3</h6>
        <p class="card-text">$0000</p>
        <a href="#" class="btn btn-outline-primary w-100">Agregar</a>
        </div>
    </div>

    `;
}

function mostrarRamDDR4(){
    document.getElementById("productos").innerHTML = `
    
    <div class="card mb-3 ">
        <a href="#"><img src="img/default.jpg" class="card-img-top" alt=""></a>
        <div class="card-body">
        <h6 class="card-title">Memoria RAM DDR4 1</h6>
        <p class="card-text">$0000</p>
        <a href="#" class="btn btn-outline-primary w-100">Agregar</a>
        </div>
    </div>
    
    <div class="card mb-3 ">
        <a href="#"><img src="img/default.jpg" class="card-img-top" alt=""></a>
        <div class="card-body">
        <h6 class="card-title">Memoria RAM DDR4 2</h6>
        <p class="card-text">$0000</p>
        <a href="#" class="btn btn-outline-primary w-100">Agregar</a>
        </div>
    </div>

    <div class="card mb-3 ">
        <a href="#"><img src="img/default.jpg" class="card-img-top" alt=""></a>
        <div class="card-body">
        <h6 class="card-title">Memoria RAM DDR4 3</h6>
        <p class="card-text">$0000</p>
        <a href="#" class="btn btn-outline-primary w-100">Agregar</a>
        </div>
    </div>

    `;
}

function mostrarGpuGeforce(){
    document.getElementById("productos").innerHTML = `
    
    <div class="card mb-3 ">
        <a href="#"><img src="img/default.jpg" class="card-img-top" alt=""></a>
        <div class="card-body">
        <h6 class="card-title">Placa de video 1</h6>
        <p class="card-text">$0000</p>
        <a href="#" class="btn btn-outline-primary w-100">Agregar</a>
        </div>
    </div>
    
    <div class="card mb-3 ">
        <a href="#"><img src="img/default.jpg" class="card-img-top" alt=""></a>
        <div class="card-body">
        <h6 class="card-title">Placa de video 2</h6>
        <p class="card-text">$0000</p>
        <a href="#" class="btn btn-outline-primary w-100">Agregar</a>
        </div>
    </div>

    <div class="card mb-3 ">
        <a href="#"><img src="img/default.jpg" class="card-img-top" alt=""></a>
        <div class="card-body">
        <h6 class="card-title">Placa de video 3</h6>
        <p class="card-text">$0000</p>
        <a href="#" class="btn btn-outline-primary w-100">Agregar</a>
        </div>
    </div>

    `;
}

function mostrarGpuAMD(){
    document.getElementById("productos").innerHTML = `
    
    <div class="card mb-3 ">
        <a href="#"><img src="img/default.jpg" class="card-img-top" alt=""></a>
        <div class="card-body">
        <h6 class="card-title">Placa de video 1</h6>
        <p class="card-text">$0000</p>
        <a href="#" class="btn btn-outline-primary w-100">Agregar</a>
        </div>
    </div>
    
    <div class="card mb-3 ">
        <a href="#"><img src="img/default.jpg" class="card-img-top" alt=""></a>
        <div class="card-body">
        <h6 class="card-title">Placa de video 2</h6>
        <p class="card-text">$0000</p>
        <a href="#" class="btn btn-outline-primary w-100">Agregar</a>
        </div>
    </div>

    <div class="card mb-3 ">
        <a href="#"><img src="img/default.jpg" class="card-img-top" alt=""></a>
        <div class="card-body">
        <h6 class="card-title">Placa de video 3</h6>
        <p class="card-text">$0000</p>
        <a href="#" class="btn btn-outline-primary w-100">Agregar</a>
        </div>
    </div>

    `;
}

function mostrarDiscosHDD(){
    document.getElementById("productos").innerHTML = `
    
    <div class="card mb-3 ">
        <a href="#"><img src="img/default.jpg" class="card-img-top" alt=""></a>
        <div class="card-body">
        <h6 class="card-title">Disco duro 1</h6>
        <p class="card-text">$0000</p>
        <a href="#" class="btn btn-outline-primary w-100">Agregar</a>
        </div>
    </div>
    
    <div class="card mb-3 ">
        <a href="#"><img src="img/default.jpg" class="card-img-top" alt=""></a>
        <div class="card-body">
        <h6 class="card-title">Disco duro 2</h6>
        <p class="card-text">$0000</p>
        <a href="#" class="btn btn-outline-primary w-100">Agregar</a>
        </div>
    </div>

    <div class="card mb-3 ">
        <a href="#"><img src="img/default.jpg" class="card-img-top" alt=""></a>
        <div class="card-body">
        <h6 class="card-title">Disco duro 3</h6>
        <p class="card-text">$0000</p>
        <a href="#" class="btn btn-outline-primary w-100">Agregar</a>
        </div>
    </div>

    `;
}

function mostrarDiscosSSD(){
    document.getElementById("productos").innerHTML = `
    
    <div class="card mb-3 ">
        <a href="#"><img src="img/default.jpg" class="card-img-top" alt=""></a>
        <div class="card-body">
        <h6 class="card-title">Disco solido 1</h6>
        <p class="card-text">$0000</p>
        <a href="#" class="btn btn-outline-primary w-100">Agregar</a>
        </div>
    </div>
    
    <div class="card mb-3 ">
        <a href="#"><img src="img/default.jpg" class="card-img-top" alt=""></a>
        <div class="card-body">
        <h6 class="card-title">Disco solido 2</h6>
        <p class="card-text">$0000</p>
        <a href="#" class="btn btn-outline-primary w-100">Agregar</a>
        </div>
    </div>

    <div class="card mb-3 ">
        <a href="#"><img src="img/default.jpg" class="card-img-top" alt=""></a>
        <div class="card-body">
        <h6 class="card-title">Disco solido 3</h6>
        <p class="card-text">$0000</p>
        <a href="#" class="btn btn-outline-primary w-100">Agregar</a>
        </div>
    </div>

    `;
}

function mostrarGabinetes(){
    document.getElementById("productos").innerHTML = `
    
    <div class="card mb-3 ">
        <a href="#"><img src="img/default.jpg" class="card-img-top" alt=""></a>
        <div class="card-body">
        <h6 class="card-title">Gabinete 1</h6>
        <p class="card-text">$0000</p>
        <a href="#" class="btn btn-outline-primary w-100">Agregar</a>
        </div>
    </div>
    
    <div class="card mb-3 ">
        <a href="#"><img src="img/default.jpg" class="card-img-top" alt=""></a>
        <div class="card-body">
        <h6 class="card-title">Gabinete 2</h6>
        <p class="card-text">$0000</p>
        <a href="#" class="btn btn-outline-primary w-100">Agregar</a>
        </div>
    </div>

    <div class="card mb-3 ">
        <a href="#"><img src="img/default.jpg" class="card-img-top" alt=""></a>
        <div class="card-body">
        <h6 class="card-title">Gabinete 3</h6>
        <p class="card-text">$0000</p>
        <a href="#" class="btn btn-outline-primary w-100">Agregar</a>
        </div>
    </div>

    `;
}

function mostrarFuentes(){
    document.getElementById("productos").innerHTML = `
    
    <div class="card mb-3 ">
        <a href="#"><img src="img/default.jpg" class="card-img-top" alt=""></a>
        <div class="card-body">
        <h6 class="card-title">Fuente 1</h6>
        <p class="card-text">$0000</p>
        <a href="#" class="btn btn-outline-primary w-100">Agregar</a>
        </div>
    </div>
    
    <div class="card mb-3 ">
        <a href="#"><img src="img/default.jpg" class="card-img-top" alt=""></a>
        <div class="card-body">
        <h6 class="card-title">Fuente 2</h6>
        <p class="card-text">$0000</p>
        <a href="#" class="btn btn-outline-primary w-100">Agregar</a>
        </div>
    </div>

    <div class="card mb-3 ">
        <a href="#"><img src="img/default.jpg" class="card-img-top" alt=""></a>
        <div class="card-body">
        <h6 class="card-title">Fuente 3</h6>
        <p class="card-text">$0000</p>
        <a href="#" class="btn btn-outline-primary w-100">Agregar</a>
        </div>
    </div>

    `;
}