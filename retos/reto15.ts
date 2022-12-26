interface comb {
  [key: string]: string
}

function decorateTree(base: string) {
  // objeto con las combinaciones 
  const combinaciones:comb = {
    'BB': 'B',
    'PP': 'P',
    'RR': 'R',
    'BP': 'R',
    'PB': 'R',
    'RP': 'B',
    'PR': 'B',
    'BR': 'P',
    'RB': 'P',
  }
  // unir los elementos de la lista con un espacio
  let newBase = base.split(' ')
  const arbolArray : string[] = []
  //? function para crear las combinaciones
  const combinacion = (array: string[]) => [...array].slice(1).map((a, i) => combinaciones[array[i] + a]).join(' ')
  
  while(newBase.length >= 1) {
    arbolArray.unshift(newBase.join(' '))
    newBase = newBase.slice(1).map((a, i) => combinaciones[newBase[i] + a])

  }
  return arbolArray
}
//
//? Combinaciones
//? B B -> B
//? P P -> P
//? R R -> R
//? B P -> R   P B -> R  
//? R P -> B   P R -> B
//? B R -> P   R B -> P
console.log(decorateTree('B P R P'))
// [
// 'R',
// 'P B',
// 'R B B',
// 'B P R P'
// ]

console.log(decorateTree('B B')) // ['B', 'B B']