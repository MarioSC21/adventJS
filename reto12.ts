function selectSleigh(distance:number, sleighs: {name:string , consumption:number}[]): string | null {
  sleighs = sleighs.filter(({consumption}) => consumption * distance <= 20)
  return sleighs.length > 0 ? sleighs[sleighs.length -1].name : null
}

//? mas putaje
// function selectSleigh(distance:number, sleighs: {name:string , consumption?:number}[]): string | null {
//   sleighs = sleighs.filter(({consumption}) => consumption * distance <= 20)
//   sleighs.unshift({ name: null })
//   return sleighs[sleighs.length - 1].name
// }

const distance = 30
const sleighs = [
  { name: "Dasher", consumption: 0.3 },
  { name: "Dancer", consumption: 0.5 },
  { name: "Rudolph", consumption: 0.7 },
  { name: "Midu", consumption: 1 }
]

console.log(selectSleigh(distance, sleighs)) // => "Dancer"