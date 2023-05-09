const datos = {
    name: '',
    email: '',
    message: ''
}
const name = document.querySelector ('#name');
const email = document.querySelector ('#email');
const message = document.querySelector ('#message');

name.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
message.addEventListener('input', leerTexto);

// Evento submit
const form = document.querySelector('.form');
form.addEventListener('submit', function(e){
    e.preventDefault();

    // Validar el formulario
    const { name, email, message} = datos;
    if(name =='' || email == '' || message == ''){
        mostrarAlerta('Todos los campos son obligatorios.','error')
        return
    }

    // Crear alerta de que el mensaje fue enviado correctamente

    mostrarAlerta('Mensaje enviado correctamente.')
})

function leerTexto(e){
    datos[e.target.id] = e.target.value;
 }

function mostrarAlerta(message, error = null){
    const alert = document.createElement('P')
    alert.textContent = message;
    if(error){
        alert.classList.add('error')
    } else {
        alert.classList.add('confirmation')
    }

    form.appendChild(alert)
    setTimeout(()=>{
        alert.remove();
    },3000)
}