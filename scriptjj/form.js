const fechaDia = document.querySelector('#fechaDia')
setInterval(() => {
    const fecha = new Date()
    const diaSemana = fecha.getDay()
    const diaSemanaTexto = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado']
    const dia = fecha.getDate()
    const mes = fecha.getMonth()
    const año = fecha.getFullYear()
    const hora = fecha.getHours()
    const minutos = fecha.getMinutes()
    const segundos = fecha.getSeconds()
    const ampm = hora >= 12 ? 'PM' : 'AM'
    const hora12 = (hora % 12) || 12
    const horaAMPM = hora12 + ':' + minutos + ':' + segundos + ' ' + ampm
    fechaDia.innerHTML = `${diaSemanaTexto[diaSemana]}, ${dia} de ${mes} del ${año} ${horaAMPM}`
})
localStorage.setItem('fechaDia', JSON.stringify(fechaDia));



const usuarios = [];

const nombre = document.querySelector('.nombre');
const apellido = document.querySelector('.apellido');
const edad = document.querySelector('.edad')
const email = document.querySelector('.email');
const password = document.querySelector('.pass');
const password2 = document.querySelector('.pass');
const check = document.querySelector('.check');
const envio = document.querySelector('.envio');
// registrar usuaros 
envio.addEventListener('click', function () {
    if (nombre.value == '' || apellido.value == '' || edad.value == '' || email.value == '' || password.value == '' || password2.value == '') {
        alert('rellene todos los campos');
    } else if (password.value != password2.value) {
        alert('las contraseñas no coinciden');
    } else if (check.checked == false) {
        alert('acepte los terminos y condiciones');
    } else {
        alert('usuario registrado');
        const usuario = {
            nombre: nombre.value,
            apellido: apellido.value,
            edad: edad.value,
            email: email.value,
            password: password.value,
        }

        usuarios.push(usuario);
        nombre.value = '';
        apellido.value = '';
        edad.value = '';
        email.value = '';
        password.value = '';
        password2.value = '';
        check.checked = false;
    }
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
    const usuariosRecuperados = JSON.parse(localStorage.getItem('usuarios'));

    //si es todo correcto llevar al index
    if (usuariosRecuperados) {
        window.location.href = './index.html';
    }
})

localStorage.setItem('envio', JSON.stringify(envio));