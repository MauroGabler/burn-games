function perdiste() {
  Swal.fire({
    icon: 'error',
    title: 'PERDISTE',
    text: 'Quieres continuar jugando?',
    confirmButtonText: 'OK',
    confirmButtonColor: 'rgb(1, 65, 1)',
    background: 'green',
    color: '#fff',
    iconColor: 'red',
    customClass: {
      popup: 'popup-class'
    }
  })

}

function ganaste() {
  Swal.fire({
    icon: 'success',
    title: 'Genial!!! Ganaste',
    text: 'Quieres continuar jugando?',
    confirmButtonText: 'OK',
    confirmButtonColor: 'rgb(1, 65, 1)',
    background: 'green',
    color: '#fff',
    iconColor: 'rgb(1, 65, 1)',
    customClass: {
      popup: 'popup-class'
    }
  })

}

function textoNoCorresponde() {
  Swal.fire({
    icon: 'error',
    title: 'No debe ingresar caracteres especiales',
    text: 'Elija una letra nuevamente!',
    confirmButtonText: 'OK',
    confirmButtonColor: 'rgb(1, 65, 1)',
    background: 'green',
    color: '#fff',
    iconColor: 'red',
    customClass: {
      popup: 'popup-class'
    }
  })

}

function letraocupada(letra) {
  Swal.fire({
    icon: 'error',
    title: 'La letra "' + letra + '" ya ha sido utilizada',
    text: 'Ingrese una letra nuevamente',
    confirmButtonText: 'OK',
    confirmButtonColor: 'rgb(1, 65, 1)',
    background: 'green',
    color: '#fff',
    iconColor: 'red',
    customClass: {
      popup: 'popup-class'
    }
  })

}

function palabraNoCorresponde() {
  Swal.fire({
    icon: 'error',
    title: 'No debe ingresar caracteres especiales',
    text: 'Ingrese una palabra nuevamente!',
    confirmButtonText: 'OK',
    confirmButtonColor: 'rgb(1, 65, 1)',
    background: 'green',
    color: '#fff',
    iconColor: 'red',
    customClass: {
      popup: 'popup-class'
    }
  })

}

function palabraAgregadaCorrectamente() {
  Swal.fire({
    icon: 'success',
    title: 'La nueva palabra ha sido ingresada correctamente',
    confirmButtonText: 'OK',
    confirmButtonColor: 'rgb(1, 65, 1)',
    background: 'green',
    color: '#fff',
    iconColor: 'rgb(1, 65, 1)',
    customClass: {
      popup: 'popup-class'
    }
  })

}

function palabraAgregadaRepetida(palabra) {
  Swal.fire({
    icon: 'error',
    title: 'La palabra "' + palabra + '" ya se encuentra en nuestra coleccion de palabras secretas',
    text: 'Ingrese una palabra nuevamente',
    confirmButtonText: 'OK',
    confirmButtonColor: 'rgb(1, 65, 1)',
    background: 'green',
    color: '#fff',
    iconColor: 'red',
    customClass: {
      popup: 'popup-class'
    }
  })

}