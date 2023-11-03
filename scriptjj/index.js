//mostrar la hora y la fecha local en fechaDia
let fechaDia = document.querySelector('#fechaDia')
let reloj = document.querySelector('#fechaDia1')
// funcion de relog automatico
setInterval(() => {
    //hora de españa
    const fecha = new Date()
    const diaSemana = fecha.getDay()
    const diaSemanaTexto = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado']
    const dia = fecha.getDate()
    const mes = fecha.getMonth()
    const mesTexto = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
    const año = fecha.getFullYear('es-ES')
    let hora = fecha.getHours()
    hora = hora < 10 ? '0' + hora : hora
    let minutos = fecha.getMinutes()
    minutos = minutos < 10 ? '0' + minutos : minutos
    let segundos = fecha.getSeconds()
    segundos = segundos < 10 ? '0' + segundos : segundos
    const ampm = hora >= 12 ? 'PM' : 'AM'
    const hora12 = (hora % 24) || 24
    const horaAMPM = hora12 + ':' + minutos + ':' + segundos + ' ' + ampm
    fechaDia.innerHTML = `${diaSemanaTexto[diaSemana]}, ${dia} de ${mesTexto[mes]} del ${año} ${horaAMPM}`
    fechaDia1.innerHTML = `${diaSemanaTexto[diaSemana]}, ${dia} de ${mesTexto[mes]} del ${año} ${horaAMPM}`

    if ((diaSemana >= 1 && diaSemana <= 4) && ((hora >= 21 && minutos >= 30) || hora < 8)) {
        fechaDia.style.color = 'red';
        fechaDia1.style.color = 'red';
    }
    if ((diaSemana === 5 && hora >= 3) || (diaSemana === 6 && hora < 17)) {
        fechaDia.style.color = 'red';
        fechaDia1.style.color = 'red';
    }
    if ((diaSemana === 6 && hora >= 3) || (diaSemana === 0) || (diaSemana === 1 && hora < 8)) {
        fechaDia.style.color = 'red';
        fechaDia1.style.color = 'red';
    }
    else {
        fechaDia.style.color = 'white';
        fechaDia1.style.color = 'white';
    }

}, 1000)

//guardar en local
localStorage.setItem('fechaDia', JSON.stringify(fechaDia));
localStorage.setItem('fechaDia1', JSON.stringify(fechaDia1));


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
    "image/zumos/pago_ace.webp", "image/zumos/pago_arandano.webp", "image/zumos/pago_banana.webp", "image/zumos/pago_fresa.webp",
    "image/zumos/pago_lima_limon.webp", "image/zumos/pago_mango.webp", "image/zumos/pago_manzana.webp", "image/zumos/pago_melocoton.webp",
    "image/zumos/pago_naranja.webp", "image/zumos/pago_pera.webp", "image/zumos/pago_piña.webp", "image/zumos/pago_ponelo.webp",
    "image/zumos/pago_tomate.webp", "image/refrescos/aquabona-manantial-pena-umbria.webp", "image/refrescos/aquabona-singular-manantial-pena-umbria.webp",
    "image/cafes/cafe-solo.webp", "image/cafes/cafe-con-leche.avif", "image/cafes/cortado.webp", "image/cafes/cafe-con-hielo.webp",
    "image/cafes/cafe-bombon.webp", "image/cafes/carajillo.webp", "image/cafes/cafe-irish.webp", "image/cafes/cafe-descafeinado.webp",
    "image/refrescos/7up.webp", "image/refrescos/coca-cola.webp", "image/refrescos/coca-cola_lignt.webp",
    "image/refrescos/coca-cola-zero.webp", "image/refrescos/coca-cola-zero-zero.webp",
    "image/refrescos/nestea-te-negro-al-limon.webp", "image/refrescos/aquarius-limon.webp",
    "image/refrescos/aquarius-naranja.webp", "image/refrescos/schweppes-tonica.webp", "image/refrescos/schweppes-limon.webp",
    "image/refrescos/schweppes-naranja.webp", "image/refrescos/mahou-00-tostada.webp",
    "image/rones/ron-barcelo.webp", "image/rones/brugal-anejo.webp", "image/rones/ron-brugal-extraviejo.webp",
    "image/rones/ron-cacique.webp", "image/rones/ron-havana-club-3-anos.webp", "image/rones/035486_00_1.webp",
    "image/rones/legendario-elixir-de-cuba.webp", "image/rones/ron-pampero.webp", "image/rones/51o45REDFML._AC_SL1500_.webp",
    "image/rones/zacapa-centenario-solera-23-anos.webp", "image/rones/legendario-elixir-de-cuba.webp", "image/whisky/whisky-jack-daniels.webp",
    "image/whisky/whisky-johnnie-walker-red-40-r2-2115_4.webp", "image/whisky/712Lf-uUu7L.__AC_SY445_SX342_QL70_ML2_.webp", "image/whisky/E219bd87854b645b6a004c0783c5d39c0N.jpg_2200x2200q80.webp",
    "image/whisky/dyc.webp", "image/whisky/91910-Whisky-J_B-Botella-70-cl.webp", "image/whisky/whisky-johnnie-walker-black-label-vinopremier.webp",
    "", "image/whisky/61A+H7B6q+L._AC_SL1200_.webp", "image/whisky/bot-jameson_0.webp",
    "image/whisky/003413.webp", "image/whisky/whisky-glenfiddich-15-anos.webp", "image/licores/orujo-de-cafe-panizo.webp",
    "image/licores/licor-licor-43-31-i1-1879_3.webp", "image/licores/licor-crema-de-fresa-con-tequila-teichenne-70-cl.webp", "image/licores/70A5070-Editar-copia.webp",
    "image/licores/000357_00_2_Bodega.webp", "image/licores/juger.webp", "image/licores/Ee11a15ab0a96480a837596733c1096fdL.jpg_2200x2200q80.webp",
    "image/licores/orujo-de-hierbas-panizo.webp", "image/cerveza/cerveza-heineken-botellin-33cl-pack-24.webp", "image/cerveza/61L1V0J0tCL._AC_SL1500_.webp",
    "image/cerveza/61GEI-A9tzL._AC_SL1500_.webp", "image/cerveza/rs=w 262,h 406.webp", "image/cerveza/00118602800726____2__1200x1200.webp",
    "image/cerveza/61fxEMmR0-L._AC_SL1366_.webp", "image/cerveza/00118602800916____3__1200x1200.webp", "image/cerveza/mahou-5-estrellas-botella-33-cl.webp",
    "image/cerveza/san-miguel-selecta-203770.webp", "", "",
    "", "", "",
    "", "", "",
    "", "", "",
    "", "", "",
    "", "", "",
];
//array para rellenar el alt de img
const alt = [
    "Zumo de aceite", "Zumo de arandano", "Zumo de banano", "Zumo de fresa",
    "Zumo de lima limon", "Zumo de mango", "Zumo de manzana", "Zumo de melocoton",
    "Zumo de naranja", "Zumo de pera", "Zumo de piña", "Zumo de ponelo",
    "Zumo de tomate", "Refresco aquabona manantial pena umbria", "Refresco aquabona singular pena umbria",
    "Cafe solo", "Cafe con leche", "Cafe con hielo", "Cafe con hielo",
    "Cafe bombon", "Cafe irish", "Cafe descafeinado", "Refresco 7up",
    "Refresco coca cola", "Refresco coca cola lignt", "Refresco coca cola zero",
    "Refresco coca cola zero zero", "Refresco aquarius limon", "Refresco aquarius naranja",
    "Refresco Schweppes tonica", "Refresco Schweppes limon", "Refresco Schweppes naranja",
    "Refresco Schweppes naranja", "Refresco mahou 00 tostada",
    "Rones ron barcelo", "Rones brugal anejo", "Rones ron brugal extraviejo",
    "Rones ron cacique", "Rones ron havana club 3 anos", "Rones 035486_00_1",
    "Rones legendario elixir de cuba", "Rones ron pampero", "Rones 51o45REDFML._AC_SL1500_.webp",
    "Rones legendario elixir de cuba", "Rones ron johnnie walker red 40 r2 2115 4",
    "Rones 712Lf-uUu7L.__AC_SY445_SX342_QL70_ML2_.webp", "Whisky E219bd87854b645b6a004c0783c5d39c0N.jpg_2200x2200q80.webp",
    "Whisky whisky johnnie walker red 40 r2 2115 4", "Whisky 712Lf-uUu7L.__AC_SY445_SX342_QL70_ML2_.webp",
    "Whisky whisky johnnie walker black label vinopremier", "", "Whisky bot jameson",
    "Whisky 003413", "Whisky whisky glenfiddich 15 anos", "Licores orujo de cafe panizo",
    "Licores licores crema de fresa con tequila teichenne 70 cl", "Licores 70A5070-Editar copia",
    "Licores juger", "Licores licores 43 31 i1 1879 3", "Licores 000357_00_2 Bodega",
    "Licores orujo de hierbas panizo", "Cerveza cerveza heineken botellin 33cl pack 24",
    "Cerveza 61L1V0J0tCL._AC_SL1500_.webp", "Cerveza 61GEI-A9tzL._AC_SL1500_.webp",
    "Cerveza 00118602800726____2__1200x1200.webp", "Cerveza 61fxEMmR0-L._AC_SL1366_.webp",
    "Cerveza 00118602800916____3__1200x1200.webp", "Cerveza mahou 5 estrellas botella 33 cl",
    "Cerveza san miguel selecta 203770", "", "",
    "", "", "",


]


//array de precios
const precios = [
    1.5, 1.8, 2.5, 2.8, 3.5, 3.8, 4.5, 4.8, 5.5, 5.8, 6.5, 7.5, 8.5, 9.5, 10.5, 11.5, 12.5

]
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
            figure.style.position = 'fixed';
            figure.style.left = `${x}px`;
            figure.style.top = `${y}px`;
            img.style.width = '100%';
            img.style.height = '100%';
            img.style.borderRadius = '10px';
            img.style.objectFit = "contain";
            img.style.display = 'flex';
            img.style.justifyContent = 'fitconten';
            img.style.alignItems = 'center';
            img.style.flexFlow = 'column';
            img.style.boxShadow = '0 0 10px #000';
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
            img.setAttribute('alt', alt[index]);
            figure.appendChild(img);
            const figcaption = document.createElement('figcaption');
            figcaption.setAttribute('class', 'figcaption');
            figcaption.innerHTML = precios[index];
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
            const figure = document.querySelector('#figure');
            if (figure) {
                const x = event.clientX + 100;
                const y = event.clientY;
                figure.style.position = 'fixed';
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
    //cerrar figure al transcurrido el tiempo

}
imagenes();
//funcion para mostrar el nombre del usuario
function nombreUsuario() {
    const user = document.querySelector('.user');
    user.innerHTML = localStorage.getItem('nombre');
}
function carro() {

    const combis = [
        "image/combis/1557247687-Whiskey-Cola__highres1.webp", ,
        "image/combis/gim tonic.webp",
        "image/combis/icon_1533143982-Rum-and-Coke__highres.webp",
        "image/combis/icon_1533144518-Boston-Tea_highres.webp",
        "image/combis/icon_1536956871-Vodka-with-Sprite__highres.webp",
        "image/combis/icon_1537312076-jam-jackpot-highres.webp",
        "image/combis/icon_1537434627-Desert-Island__highres.webp",
        "image/combis/icon_1537737143-Sabotage__highres.webp",
        "image/combis/icon_1537763505-Dark-Rum-and-Coke__highres.webp",
        "image/combis/icon_1556010491-Grapefruit-Liqueur-and-Cola__highres.webp",
        "image/combis/icon_1556121518-Old-fashioned-w800px.webp",
        "image/combis/icon_1557242375-Tequila-Batanga__highres.webp",
        "image/combis/icon_1629717664-Whiskey.webp",
        "image/combis/images.webp",
        "image/combis/ron cola.webp",

    ]
    const carousel = document.querySelector('.carousel');
    const img_c = document.createElement('img');
    img_c.setAttribute('id', 'img_c');
    img_c.setAttribute('class', 'img__c');
    img_c.setAttribute('src', combis[0]);
    carousel.appendChild(img_c);
    //estilo
    img_c.style.width = '100%';
    img_c.style.height = '100%';
    img_c.style.borderRadius = '10px';
    img_c.style.objectFit = "contain";



    //cambiar imgConsumibles automaticamente
    let i = 0;
    setInterval(() => {
        if (i < combis.length - 1) {
            //ramdom
            i = Math.floor(Math.random() * combis.length);

        } else {
            i = 0;
        }
        img_c.setAttribute('src', combis[i]);
    }
        , 2500);



}

carro();


function scroll() {
    //crear boton
    let btnScrollTop = document.createElement('button');
    btnScrollTop.setAttribute('id', 'btnScrollTop');
    btnScrollTop.innerHTML = 'Ir arriba';
    btnScrollTop.style.position = 'fixed';
    btnScrollTop.style.right = '200px';
    btnScrollTop.style.bottom = '20px';
    btnScrollTop.style.backgroundColor = '#ff0000';
    btnScrollTop.style.color = '#fff';
    btnScrollTop.style.borderRadius = '40%';
    btnScrollTop.style.border = 'none';
    btnScrollTop.style.display = 'none'
    btnScrollTop.style.padding = '10px';
    document.body.appendChild(btnScrollTop);


    btnScrollTop = document.querySelector('#btnScrollTop');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            btnScrollTop.style.display = "block";
        } else {
            btnScrollTop.style.display = "none";
        }
    })
    btnScrollTop.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}
scroll();
