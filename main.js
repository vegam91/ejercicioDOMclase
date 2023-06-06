// const divwrapper = document.getElementById("wrapper");

// const articleNew = document.createElement ("article")
// articleNew.id = "article"

// divwrapper.appendChild(articleNew)




// const titulo = document.createElement("h2")

// titulo.innerText = "Product"
// articleNew.appendChild(titulo)




// console.log(articleNew)

function addproduct (producto,descripcion){
console.log(producto)

    const divwrapper = document.getElementById("wrapper");

 const articleNew = document.createElement ("article")
 articleNew.id = "article"
 articleNew.classList.add("item")

divwrapper.appendChild(articleNew)

const titulo = document.createElement("h2")

titulo.innerText = producto
 articleNew.appendChild(titulo)

 const botonDos = document.createElement ("button")
 botonDos.innerText= "borrar"
 articleNew.appendChild(botonDos)

 const botonNuevo = document.createElement ("button")
 botonNuevo.innerText= "ver más"
articleNew.appendChild(botonNuevo)



const parrafoNuevo = document.createElement ("p")
parrafoNuevo.innerText= descripcion
articleNew.appendChild(parrafoNuevo)
parrafoNuevo.classList.add("hidden")


botonNuevo.addEventListener("click", sayclick)
function sayclick(e){
    console.log("click")
    console.log(e.target.nextElementSibling.classList.toggle("hidden"))
}
botonDos.addEventListener("click", siguienteelemento)
 function siguienteelemento (e) {
    console.log("click")
    e.target.parentElement.remove()
    
 }
console.log(articleNew);
}



const botonAnadir = document.getElementById("bo")
botonAnadir.addEventListener("click", handleclik)
function handleclik(e){
   
    e.preventDefault()
 
     const nombre = document.getElementById("nombre")
     const comentario = document.getElementById("areatexto")
    
     addproduct(nombre.value,comentario.value)
}



