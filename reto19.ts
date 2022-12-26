function sortToys(toys:string[], positions:number[]) {
  let toyOrder:string[] = []
  positions.forEach((position, index) => {
    toyOrder[position] = toys[index]
  })
  return toyOrder.slice(Math.min(...positions))

  //? MAS PUNTAJE y mejor solucion
  // const positionsOrder = [...positions].sort((a,b)=>a-b).map(v => toys[positions.indexOf(v)])
  // return positionsOrder

}

const toys = ['ball', 'doll', 'car', 'puzzle']
const positions = [2, 3, 1, 0]

console.log(sortToys(toys, positions))
// ['puzzle', 'car', 'ball', 'doll']

const moreToys = ['pc', 'xbox', 'ps4', 'switch', 'nintendo']
const morePositions = [8, 6, 5, 7, 9]

console.log(sortToys(moreToys, morePositions))
// ['ps4', 'xbox', 'switch', 'pc', 'nintendo']