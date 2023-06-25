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
    fechaDia.innerHTML = `${diaSemanaTexto[diaSemana]}, ${dia} de ${mes} del ${año} ${horaAMPM}`
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
    "image/zumos/pago_ace.jpg", "image/zumos/pago_arandano.jpg", "image/zumos/pago_banana.jpg", "image/zumos/pago_fresa.jpg",
    "image/zumos/pago_lima_limon.jpg", "image/zumos/pago_mango.jpg", "image/zumos/pago_manzana.jpg", "image/zumos/pago_melocoton.jpg",
    "image/zumos/pago_naranja.jpg", "image/zumos/pago_pera.jpg", "image/zumos/pago_piña.jpg", "image/zumos/pago_ponelo.jpg",
    "image/zumos/pago_tomate.jpg", "image/refrescos/aquabona-manantial-pena-umbria.jpg", "image/refrescos/aquabona-singular-manantial-pena-umbria.jpg",
    "image/cafes/cafe-solo.jpg", "image/cafes/cafe-con-leche.avif", "image/cafes/cortado.jpg", "image/cafes/cafe-con-hielo.jpg",
    "image/cafes/cafe-bombon.jpg", "image/cafes/carajillo.webp", "image/cafes/cafe-irish.jpg", "image/cafes/cafe-descafeinado.jpg",
    "image/refrescos/7up.jpg", "image/refrescos/coca-cola.jpg", "image/refrescos/coca-cola_lignt.jpg",
    "image/refrescos/coca-cola-zero.jpg", "image/refrescos/coca-cola-zero-zero.jpg",
    "image/refrescos/nestea-te-negro-al-limon.jpg", "image/refrescos/aquarius-limon.png",
    "image/refrescos/aquarius-naranja.png", "image/refrescos/schweppes-tonica.png", "image/refrescos/schweppes-limon.jpg",
    "image/refrescos/schweppes-naranja.jpg", "image/refrescos/mahou-00-tostada.jpg", "",
    "", "", "",
    "", "", "",
];
//array de precios
const precios = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50
];
//crear funcion  de imagen
function imagenes() {
    const consumibles = document.querySelectorAll('.consumibles');

    document.addEventListener('mousemove', function (event) {

        const figure = document.querySelector('.figure');
        const img = document.querySelector('#img');
        const figcaption = document.querySelector('.figcaption');

        if (figure) {
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
            figure.style.zIndex = '1000';
            figure.style.borderRadius = '10px';
            figure.style.boxShadow = '0 0 10px #000';
            figure.style.objectFit = "contain";
            figure.style.height = '15%';
            figure.style.width = '15%';
            figure.style.display = 'flex';
            figure.style.justifyContent = 'fitconten';
            figure.style.alignItems = 'center';
            figure.style.flexFlow = 'column';


            const img = document.createElement('img');
            img.setAttribute('src', imgConsumibles[index]);
            img.setAttribute('class', 'img');
            img.setAttribute('id', 'img');
            figure.appendChild(img);
            img.style.height = '100%';
            img.style.width = '25%';
            img.style.position = 'relative';
            img.style.objectFit = "contain";
            img.style.borderRadius = '10px';
            img.style.boxShadow = '0 0 10px #000';




            const figcaption = document.createElement('figcaption');
            figcaption.setAttribute('class', 'figcaption');
            figcaption.innerHTML = precios[index];
            //estilo
            figcaption.style.position = 'absolute';
            figcaption.style.left = '0';
            figcaption.style.top = '0';
            figcaption.style.width = '25%';
            figcaption.style.height = '24';
            figcaption.style.backgroundColor = 'rgba(0,0,0,0.5)';
            figcaption.style.color = 'white';
            figcaption.style.textAlign = 'center';
            figcaption.style.padding = '10px';
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
                document.body.removeChild(figure); figure
            }
        });


    });
}

imagenes();

//funcion para mostrar el nombre del usuario
function nombreUsuario() {
    const user = document.querySelector('.user');
    user.innerHTML = localStorage.getItem('nombre');
}



