let contador = 1;
const formulario = document.querySelector(".form-create");
formulario.addEventListener("submit", (e)=>{
    e.preventDefault();
    const descripcion = document.querySelector("#descripcion").value;
    const contenedor = document.querySelector(".publicaciones");
    contenedor.innerHTML +=` <div class="publicacion"div>
    <p>id:${contador}</p>
    <p>${descripcion}</p>
    <button id="Editar" onclick="editar(this)">Editar</button>
    <button id="Eliminar" onclick="eliminar(this)">Eliminar</button>
    </div> `;
    ++contador;
});


function editar(e){

}

function eliminar(e){
    const publicacion = e.parentElement;
    publicacion.remove();
}