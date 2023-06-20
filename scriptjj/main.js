


//mostrar la hora y la fecha local en fechaDia
const fechaDia = document.querySelector('#fechaDia')
// funcion de relog automatico
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
    fechaDia.innerHTML = `${diaSemanaTexto[diaSemana]}, ${dia} de ${mes} del ${año} a las ${horaAMPM}`
})
//guardar en local
localStorage.setItem('fechaDia', JSON.stringify(fechaDia));



// listado zumos pago

// //crear carousel automatico con el array 
// const carousel = document.querySelector('carousel');
// const img = document.createElement('img');
// img.setAttribute('id', 'img');
// img.setAttribute('class', 'img');
// img.setAttribute('src', juegos[0]);
// carousel.appendChild(img);
//  img.style.height = '100%';

// //cambiar imagenes automaticamente
// const i = 0;
// setInterval( ()=> {
//     if (i < juegos.length - 1) {
//         i++;
//     } else {
//         i = 0;
//     }
//     img.setAttribute('src', juegos[i]);
// }
//     , 2500);
// // dar tamaños
// img.style.width = '80%';
// img.style.height = '100%';
// //animar y dar estilo
// img.addEventListener('mouseover', function () {
//     img.style.transform = 'scale(1.2)';
//     img.style.transition = 'all 1s';
// }
// );
// img.addEventListener('mouseout', function () {
//     img.style.transform = 'scale(1)';
//     img.style.transition = 'all 1s';
// }
// );
console.log('ESTOY')


    // crear un array para nuevo usuario
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
            console.log(usuarios);
            nombre.value = '';
            apellido.value = '';
            edad.value = '';
            email.value = '';
            password.value = '';
            password2.value = '';
            check.checked = false;
        }
        //guadar en sesion
        localStorage.setItem('usuarios', JSON.stringify(usuarios));
        //recuperar
        const usuariosRecuperados = JSON.parse(localStorage.getItem('usuarios'));
        console.log(usuariosRecuperados + '          SIIIIII');
    })











// //exportar
// export default laHora;


