function checkJump(heights: number[]){
  // No puede volver a subir una vez que ha bajado, ni puede iniciar el viaje bajando
  const antesDelMax = heights.splice(0, heights.indexOf(Math.max(...heights))) // retorna un array del 0 hasta el maximo de este array

  // revisar que todos los que estan antes del maximo sean menor que este
  const esTrueAntesMax = antesDelMax
  .slice(1)
  .every((l, i) => l >= antesDelMax[i])

  //  revisar que los que esten despues del maximo sean menores al maximo
  const esTrueDespuesMax = heights
  .slice(1)
  .every((h, i) => h <= heights[i])

  //? splice -> se modifica el array 
  //? slice -> no modifica el array
  //? every -> no modifica el array
  
return esTrueAntesMax && esTrueDespuesMax && !!antesDelMax.length && heights.length > 1
}

const heights1 = [1, 3, 8, 5, 2]
console.log(checkJump(heights1)) // true
/*
Es `true`.
El salto va de abajo a arriba y luego de arriba a abajo:

    8 (punto más alto)
   ↗ ↘
  3   5
 ↗     ↘
1       2
*/

const heights = [1, 7, 3, 5]
console.log(checkJump(heights)) // false

/*
Es `false`.
Va de abajo a arriba, de arriba a abajo y luego sube otra vez.

  7   5 
 ↗ ↘ ↗
1   3
*/

// console.log(checkJump([1, 2, 3, 2, 1]))
console.log(checkJump([2, 2, 2, 2]))
console.log(checkJump([1, 1000, 100, 800]))
console.log(checkJump([1, 2, 3]))
console.log(checkJump([1, 2, 2, 2, 1]))
console.log(checkJump([1, 1000, 900, 800]))
console.log(checkJump([1, 2, 3, 1, 3, 1]))