//  TABLA MULTIPLICAR
function tablaGenerar() {
  const numInput = document.getElementById('numInput').value;
  const pWrite = document.getElementById('pWrite');
  if (numInput >= 1 && numInput <= 20) {
    for (let i = 1; i <= 10; i++) {
      let multi = numInput * i;
      pWrite.innerHTML += `${numInput} x ${i}= ${multi} <br>`;
      console.log(`${numInput} x ${i} = (${multi})`);
    }
    // } else {
    //   alert('Debe ingresar un numero dentro del Rango');
    // }

    console.log(`=====================`);
    //  TABLA FACTORIAL
    for (let i = 1; i <= numInput; i++) {
      let res = 1;
      for (let j = 1; j <= i; j++) {
        res = res * j;
      }
      pWrite2.innerHTML += `Factorial de ${i} es: ${res}<br>`;

      console.log(`Factorial de ${i} es: ${res}`);
    }
  } else {
    alert('Debe ingresar un numero dentro del Rango');
  }
}

//  BOTON DESHABILITAR
const boton = document.getElementById('boton');
boton.addEventListener('click', botonBlock);

function botonBlock() {
  const numInput = document.getElementById('numInput').value;
  if (numInput.value === true) {
    boton.disabled = false;
  } else {
    boton.disabled = true;
  }
}
//  TOOLTIP
var tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});
