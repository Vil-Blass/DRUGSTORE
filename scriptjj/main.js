//mostrar la hora y la fecha local en fechaDia
const fechaDia =document.querySelector('#fechaDia')
// funcion de relog automatico
setInterval(()=>{
    const fecha = new Date()
    const diaSemana= fecha.getDay()
    const diaSemanaTexto = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado']
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


//crear carousel automatico con el array 
let carousel = document.getElementById('carousel');
let img = document.createElement('img');
img.setAttribute('id', 'img');
img.setAttribute('class', 'img');
img.setAttribute('src', juegos[0]);
carousel.appendChild(img);
 img.style.height = '100%';

//cambiar imagenes automaticamente
let i = 0;
setInterval( ()=> {
    if (i < juegos.length - 1) {
        i++;
    } else {
        i = 0;
    }
    img.setAttribute('src', juegos[i]);
}
    , 2500);
// dar tamaños
img.style.width = '80%';
img.style.height = '100%';
//animar y dar estilo
img.addEventListener('mouseover', function () {
    img.style.transform = 'scale(1.2)';
    img.style.transition = 'all 1s';
}
);
img.addEventListener('mouseout', function () {
    img.style.transform = 'scale(1)';
    img.style.transition = 'all 1s';
}
);
console.log('ESTOY')






