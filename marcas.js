let imagenes = [
  {
      "url": "toyota-logo-2.png",
      "nombre": "Toyota",
      "descripcion": "Fundada en 1937, Toyota se convierto en una de las Empresas Niponas mas destacadas en la epoca de los 90', lanzando autos iconicos como el AE86, el Celica o su aclamado MK4 Supra."
  },
  {
      "url": "nissan-logo-4.jpg",
      "nombre": "Nissan",
      "descripcion": "Los creadores del aclamado R-32, o mejor conocido como 'Godzilla' en el occidente, una compañia que a dia de hoy sigue haciendo autos deportivos de Alta Gamma."

  },
  {
      "url": "mitsubishi-logo-3.jpg",
      "nombre": "Mitsubishi",
      "descripcion": "Una marca que vive de la gloria de su pasado, Mitsubishi fue capaz de dominar los circuitos de Rally gracias a su inovacion, el apodado Lancer Evolution I, fue el primero de muchos por venir, que gracias a su traccion de cuatro ruedas dominaron los circuitos."

  },
  {
    "url": "subaru-logo-2.jpg",
    "nombre": "Subaru",
    "descripcion": "La reconocida marca de color azul, destacada por ser rival de Mitsubishi en los circuitos de rally, el Subaru Impreza WRX STI es uno de los grandes itos de la generacion de rally en su epoca, vistiendo su color azul y dorado, peleaba cabeza a cabeza con el Evo."
  },
  {
    "url": "mazda-logo-1.png",
    "nombre": "Mazda",
    "descripcion": "Una marca poco reconocida, pero que se destaco por su 'inovador' motor rotativo, el 13B-Rew, capaz de llevar su pequeño piston tringualar a revoluciones por encima de las 7000rpm, creadores del Rx7 y el Miata, autos deportivos de gran renombre en los 90."
  },
]


let atras = document.getElementById('atras');
let adelante = document.getElementById('adelante');
let imagen = document.getElementById('img');
let puntos = document.getElementById('puntos');
let texto = document.getElementById('texto')
let actual = 0
posicionCarrusel()

atras.addEventListener('click', function(){
  actual -=1

  if (actual == -1){
      actual = imagenes.length - 1
  }

  imagen.innerHTML = ` <img class="img" src="${imagenes[actual].url}" alt="logo pagina" loading="lazy"></img>`
  texto.innerHTML = `
  <h3>${imagenes[actual].nombre}</h3>
  <p>${imagenes[actual].descripcion}</p>
  `
  posicionCarrusel()
})  
adelante.addEventListener('click', function(){
  actual +=1

  if (actual == imagenes.length){
      actual = 0
  }

  imagen.innerHTML = ` <img class="img" src="${imagenes[actual].url}" alt="logo pagina" loading="lazy"></img>`
  texto.innerHTML = `
  <h3>${imagenes[actual].nombre}</h3>
  <p>${imagenes[actual].descripcion}</p>
  `
  posicionCarrusel()
})  

function posicionCarrusel() {
  puntos.innerHTML = ""
  for (var i = 0; i <imagenes.length; i++){
      if(i == actual){
          puntos.innerHTML += '<p class="bold">.<p>'
      }
      else{
          puntos.innerHTML += '<p>.<p>'
      }
  } 
}