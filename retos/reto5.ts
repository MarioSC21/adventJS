function getMaxGifts(giftsCities : number[], maxGifts: number, maxCities : number) : number {
  //if(maxGifts < 1 || giftsCities.length < 1 || maxCities < 1) return 0 //Todo: para mejorar la performance en el adventJs
  //get the combination of all possible data from the giftsCities array
  const realizarCombinaciones = (arreglo : number[]) => {
    let combinaciones = arreglo.reduce((a : number[][], v) => a.concat(a.map(r => [v, ...r])), [[]]).slice(1)
    return combinaciones 
  }
  const combinations = realizarCombinaciones(giftsCities)
  //iterate combinations
  const maxGiftsSuma = (combinations : number[][]) => {
    let maxGiftsSum = 0
    combinations.forEach((combination) => {
      let sum = combination.reduce((a,b) => a + b, 0)
      if(combination.length <= maxCities && sum <= maxGifts && sum > maxGiftsSum) maxGiftsSum = sum
      }
    )
    return maxGiftsSum
  }
  return maxGiftsSuma(combinations)

}


const giftsCities = [12, 3, 11, 5, 7]
const maxGifts = 20
const maxCities = 3

// la suma más alta de regalos a repartir
// visitando un máximo de 3 ciudades
// es de 20: [12, 3, 5]

// la suma más alta sería [12, 7, 11]
// pero excede el límite de 20 regalos y tendría
// que dejar alguna ciudad a medias.

console.log(getMaxGifts(giftsCities, maxGifts, maxCities)) // 20

console.log(getMaxGifts([12, 3, 11, 5, 7], 20, 3) )// 20
console.log(getMaxGifts([50], 15, 1) )// 0
console.log(getMaxGifts([50], 100, 1) )// 50
console.log(getMaxGifts([50, 70], 100, 1) )// 70
console.log(getMaxGifts([50, 70, 30], 100, 2) )// 100
console.log(getMaxGifts([50, 70, 30], 100, 3) )// 100
console.log(getMaxGifts([50, 70, 30], 100, 4) )// 100
console.log(getMaxGifts([50, 70, 30, 23, 23], 200, 4) )