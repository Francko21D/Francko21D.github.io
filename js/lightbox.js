const imagenes = document.querySelectorAll('.img-galeria')
const imagenesLight = document.querySelector('.agregar-imagen')
const contenedorLight = document.querySelector('.imagen-light')
const hamburguesa1 = document.querySelector('.hamburguesa');


imagenes.forEach(imagen =>{
    imagen.addEventListener('click', ()=>{
        
        aparecerImagen(imagen.getAttribute('src'))

        
    })
})
contenedorLight.addEventListener('click', (e)=>{
    if (e.target !== imagenesLight){
        contenedorLight.classList.toggle('show')
        magenesLight.classList.toggle('showImage')
        hamburguesa1.style.opacity = '2'
}


})
const aparecerImagen = (imagen)=> {
    imagenesLight.src =imagen;
    contenedorLight.classList.toggle('show')
    imagenesLight.classList.toggle('showImage')
    hamburguesa1.style.opacity = '0'
}
