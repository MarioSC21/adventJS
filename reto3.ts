function distributeGifts(packOfGifts: string[], reindeers: string[]) {
  // let countGifts = 0
  // let countReindeers = 0
  // packOfGifts.forEach(packOfGift => {
  //   countGifts += packOfGift.length
  // })
  // reindeers.forEach(reindeer => {
  //   countReindeers += reindeer.length * 2
  // })
  //usando reduce
  const countGifts = packOfGifts.reduce((acc, packOfGift) => acc + packOfGift.length, 0)
  const countReindeers = reindeers.reduce((acc, reindeer) => acc + reindeer.length * 2, 0)
  return Math.floor(countReindeers / countGifts)
}

const packOfGifts = ["book", "doll", "ball"]
const reindeers = ["dasher", "dancer"]

console.time('Tiempo de ejecución')
console.log( distributeGifts(packOfGifts, reindeers))
console.timeEnd('Tiempo de ejecución')
