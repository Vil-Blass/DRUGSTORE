


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


const entrando = document.querySelector('.entrando')
const entrar = document.querySelector('.entrar')
//displa block en hacer click en entrar
entrar.addEventListener('click', function () {
    if (entrando.style.display === 'none') {
        entrando.style.display = 'block';
    } else {
        entrando.style.display = 'none';
    }
})

const user = document.querySelector('.user');

const pass = document.querySelector('.password');
const aqui = document.querySelector('.aqui');

aqui.addEventListener('click', () => {
    //si ussr y pass son iguales a email y password
    if (user.value == 'email' && pass.value == 'password') {
        window.location.href = 'index.html';
        alert('Hola, bienvenido!');
    } else {
        alert('Usuario o contraseña incorrectos');
    }

    window.location.href = 'index.html';
    alert('Hola, bienvenido!');
});



const imgConsumibles = [
    "image/zumos/pago_ace.jpg","image/zumos/pago_arandano.jpg","image/zumos/pago_banana.jpg","image/zumos/pago_fresa.jpg",
    "image/zumos/pago_lima_limon.jpg","image/zumos/pago_mango.jpg","image/zumos/pago_manzana.jpg","image/zumos/pago_melocoton.jpg",
    "image/zumos/pago_naranja.jpg","image/zumos/pago_pera.jpg","image/zumos/pago_piña.jpg","image/zumos/pago_ponelo.jpg",
    "image/zumos/pago_tomate.jpg","image/refrescos/aquabona-manantial-pena-umbria.jpg","image/refrescos/aquabona-singular-manantial-pena-umbria.jpg",
    "image/cafes/cafe-solo.jpg","image/cafes/cafe-con-leche.avif","image/cafes/cortado.jpg","image/cafes/cafe-con-hielo.jpg",
    "image/cafes/cafe-bombon.jpg","image/cafes/carajillo.webp","image/cafes/cafe-irish.jpg","image/cafes/cafe-descafeinado.jpg",
    "image/refrescos/7up.jpg","image/refrescos/coca-cola.jpg","image/refrescos/coca-cola_lignt.jpg",
    "image/refrescos/coca-cola-zero.jpg","image/refrescos/coca-cola-zero-zero.jpg",
    "image/refrescos/nestea-te-negro-al-limon.jpg","C:/Users/Usuario/Desktop/DRUGSTORE/image/refrescos/aquarius-limon.png",
    "image/refrescos/aquarius-naranja-2022.jpg","image/refrescos/schweppes-tonica.png","image/refrescos/schweppes-limon.jpg",
    "image/refrescos/schweppes-naranja.jpg","image/refrescos/mahou-00-tostada.jpg","",
    "","","",
    "","","",
];

const consumibles = document.querySelectorAll('.consumibles');

document.addEventListener('mousemove', function (event) {
   
    const figure = document.querySelector('.figure');
    const img = document.querySelector('#img');
    const figcaption=document.querySelector('.figcaption');

    if ( figure ) {
        const x = event.clientX + 10;
        const y = event.clientY;
        figure.style.position = 'absolute';
        figure.style.left = `${x}px`;
        figure.style.top = `${y}px`;
        
    }
  

    
});

consumibles.forEach((consumibles, index) => {
    consumibles.addEventListener('mouseenter', function () {
        //crear figure
        const figure = document.createElement('figure');
        figure.setAttribute('class', 'figure');
        figure.setAttribute('id', 'figure');
        document.body.appendChild(figure);
        figure.style.position = 'absolute';
        figure.style.transition = 'all 1s';
        figure.style.zIndex = '1000';
        figure.style.borderRadius = '10px';
        figure.style.boxShadow = '0 0 10px #000';
        figure.style.objectFit= "contain";
        figure.style.height = '20%';
        figure.style.width = '20%';
        figure.style.display = 'flex';
        figure.style.justifyContent = 'fitconten';
        figure.style.alignItems = 'center';
        figure.style.flexFlow = 'column';

        
        const img = document.createElement('img');
        img.setAttribute('src', imgConsumibles[index]);
        img.setAttribute('class', 'img');
        img.setAttribute('id', 'img');
        figure.appendChild(img);
        img.style.height = '75%';
        img.style.width = '100%';
        img.style.objectFit= "contain";

        img.style.transition = 'all 1s';
        img.style.transform = 'scale(1.5)';
        img.style.borderRadius = '10px';
        img.style.boxShadow = '0 0 10px #000';
        
        
       const figcaption = document.createElement('figcaption');
       figcaption.setAttribute('class', 'figcaption');
       figcaption.innerHTML = imgConsumibles[index];
       figure.appendChild(figcaption);
    });
    
    

    consumibles.addEventListener('mousemove', function (event) {
        const img = document.querySelector('#img');
        if (figure) {
            const x = event.clientX + 100;
            const y = event.clientY;
            figure.style.position = 'absolute';
            figure.style.left = `${x}px`;
            figure.style.top = `${y}px`;
        }
    });

    consumibles.addEventListener('mouseleave', function () {
        const figure = document.querySelector('.figure');
        if (figure) {
            document.body.removeChild(figure);figure
        }
    });
  

});





// //crear carousel automatico con el array 
// const carousel = document.querySelector('carousel');
// const img = document.createElement('img');
// img.setAttribute('id', 'img');
// img.setAttribute('class', 'img');
// img.setAttribute('src', juegos[0]);
// carousel.appendChild(img);
//  img.style.height = '100%';

// //cambiar imgConsumibles automaticamente
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

    //si es todo correcto llevar al index
    if (usuariosRecuperados) {
        window.location.href = './index.html';
    }
})

localStorage.setItem('envio', JSON.stringify(envio));























//codeium //