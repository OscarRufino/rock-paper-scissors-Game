function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function roboto () {
    let game = ['piedra', 'papel', 'tijera']
    let selected = getRandomInt(3)
    if (game[selected] === 'piedra' ){
      document.getElementById('opcion-cpu').setAttribute('src','./imagenes/piedra.jpeg')
      return robot = 'piedra'
    } else if (game[selected] === 'papel' ){
        document.getElementById('opcion-cpu').setAttribute('src','./imagenes/papel.jpeg')
        return robot = 'papel'
    } else if (game[selected] === 'tijera' ){
      document.getElementById('opcion-cpu').setAttribute('src','./imagenes/tijeras.jpeg')
      return robot = 'tijera'
    }
}

let scoreHuman = 0
let scoreRobot = 0

function seleccionar(human) {
  roboto()
    if (human === robot){
      document.getElementById('ganador').innerText = 'Empate'
    } else if (human === 'tijera'){
      if (robot === 'papel'){
        document.getElementById('ganador').innerText = 'Ganaste :D';
        scoreHuman ++;
      } else{
        document.getElementById('ganador').innerText = 'Perdiste :('
        scoreRobot ++;
      }
    } else if (human === 'papel'){
      if (robot === 'piedra'){
        document.getElementById('ganador').innerText = 'Ganaste :D'
        scoreHuman ++;
      } else{
        document.getElementById('ganador').innerText = 'Perdiste :('
        scoreRobot ++;
      }
    } else if (human === 'piedra'){
      if (robot === 'tijera'){
        document.getElementById('ganador').innerText = 'Ganaste :D'
        scoreHuman ++;
      } else{
        document.getElementById('ganador').innerText = 'Perdiste :('
        scoreRobot ++;
      }
    }
  document.getElementById('human').innerText = scoreHuman
  document.getElementById('robot').innerText = scoreRobot
}