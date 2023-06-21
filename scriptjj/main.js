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

listado = document.querySelectorAll('.listado')
listado.forEach(element => {
    element.addEventListener('click', () => {
        element.classList.toggle('active')
    })
})

// listado zumos pago

// //crear carousel automatico con el array 
// let carousel = document.getElementById('carousel');
// let img = document.createElement('img');
// img.setAttribute('id', 'img');
// img.setAttribute('class', 'img');
// img.setAttribute('src', juegos[0]);
// carousel.appendChild(img);
//  img.style.height = '100%';

// //cambiar imagenes automaticamente
// let i = 0;
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
let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

// registrar usuarios 
function registrar() {
    let nombre = document.querySelector('.last')
    let apellidos = document.querySelector('.first')
    let años = document.querySelector('.years')
    let email = document.querySelector('.email')
    let password = document.querySelector('.pass')
    let check = document.querySelector('.check')
    let texto=document.querySelector('.text')

    let usuario = {
        nombre: nombre.value,
        apellidos: apellidos.value,
        años: años.value,
        email: email.value,
        password: password.value
    };
    usuarios.push(usuario);
    console.log(usuarios);

    let envio = document.querySelector('.envio')
    envio.addEventListener('click', () => {
        // index
        window.location.href = 'index.html';
    });
    alert('Usuario registrado correctamente');

    // Agregar event listener al checkbox
    check.addEventListener('change', function() {
        if (this.checked) {
            localStorage.setItem('usuarios', JSON.stringify(usuarios));
        } else {
            localStorage.removeItem('usuarios');
        }
    });
    //no guardar texto en local
    texto.value='';

}




// crear funcion para logearse
function logIn() {
    //crear modal para usuarii y contraseña
    let modal = document.createElement('div')
    modal.setAttribute('class', 'modal')
    let div = document.createElement('div')
    div.setAttribute('class', 'modal-content')
    let p = document.createElement('p')
    p.setAttribute('class', 'close')
    p.innerHTML = 'X'
    modal.appendChild(div)
    div.appendChild(p)

    document.head.appendChild(modal)
    // crear input usuario
    let usuario = document.createElement('input')
    usuario.setAttribute('required', 'true')
    usuario.setAttribute('type', 'text')
    usuario.setAttribute('placeholder', 'Usuario')
    div.appendChild(usuario)
    // crear input contraseña
    let password = document.createElement('input')
    password.setAttribute('required', 'true')
    password.setAttribute('type', 'password')
    password.setAttribute('placeholder', 'Contraseña')
    div.appendChild(password)
    // crear boton
    let boton = document.createElement('button')
    boton.setAttribute('type', 'submit')
    boton.setAttribute('class', 'btn')
    boton.innerHTML = 'Ingresar'
    div.appendChild(boton)
    boton.addEventListener('click', () => {
        // su usuario y contraseca coincide
        if (usuario.value == usuarios[0].email && password.value == usuarios[0].password) {
            window.location.href = 'index.html'
        }
        else {
            alert('Usuario o contraseña incorrectos')
        }

    })

}

let entrar = document.querySelector('.entrar')

















