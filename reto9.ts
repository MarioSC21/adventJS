function countTime(leds : number[]) {
  let arr = leds.join("").split("1")
  console.log(arr)
  arr[0] += arr.pop()
  return Math.max(...arr.map((led) => led.length)) * 7
}

//Todo : Se juntan todo los ceros antes del primer 1 y despues del ultimo 1
//Todo : Si no hay ningun cero antes del primer 1, se le pone como cero 
//Todo : Si no hay ningun cero despues del ultimo 1, se le pone como cero
//Todo : El maximo de los ceros que se juntaron, se multiplica por 7

const leds = [0, 1, 1, 0, 1] // ? antes del primer 1 hay 1 cero, despues del ultimo 1 hay 0 ceros = total -> 1 cero + 0 ceros = 1 cero
console.log(countTime(leds)) // 7
// 7 segundos ya que en el primer cambio
// todas las luces se encendieron
// 0s: [0, 1, 1, 0, 1]
// 7s: [1, 1, 1, 1, 1]s
console.log(countTime([0, 0, 0, 1]))  // 21 // ? antes del primer 1 hay 3 ceros, despues del ultimo 1 hay 0 ceros = total -> 3 ceros + 0 ceros = 3 ceros
// 21 segundos ya que necesita tres cambios:
// 0s: [0, 0, 0, 1]
// 7s: [1, 0, 0, 1]
// 14s: [1, 1, 0, 1]
// 21s: [1, 1, 1, 1]

console.log(countTime([0, 0, 1, 0, 0]) ) // 28 // ? antes del primer 1 hay 2 ceros, despues del ultimo 1 hay 2 ceros = total -> 2 ceros + 2 ceros = 4 ceros
// 28 segundos ya que necesita cuatro cambios:
// 0s: [0, 0, 1, 0, 0]
// 7s: [0, 0, 1, 1, 0]
// 14s: [0, 0, 1, 1, 1]
// 21s: [1, 0, 1, 1, 1]
// 28s: [1, 1, 1, 1, 1]

console.log(countTime([1, 0, 0, 1, 0, 0])) // 14 // ? antes del primer 1 hay 0 ceros, despues del ultimo 1 hay 2 ceros = total -> 0 ceros + 2 ceros = 2 ceros
// 0s: [1, 0, 0, 1, 0, 0]
// 7s: [1, 1, 0, 1, 0, 0]
// 14s: [1, 1, 1, 1, 0, 0]
// 21s: [1, 0, 0, 1, 0, 0]