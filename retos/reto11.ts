function getCompleted(part:string, total:string) {
  const [hour, minute, sec] = part.split(':')
  const [hour2, minute2, sec2] = total.split(':')
  const totalSecPart = +hour * 3600 + +minute * 60 + +sec
  const totalSecTotal = +hour2 * 3600 + +minute2 * 60 + +sec2

  //hallamos el mcd de los dos numeros
  // const simplifyFraction = (max:number, partT:number) => {
  //   let copy :number;
  //   while(partT) {
  //     copy = partT
  //     partT = max % part
  //     max = copy
  //   }
  //   return max
  // }

  //? Con recursividad
  // const simplifyFraction = (a: number, b:number):number => {
  //   return b === 0 ? a : simplifyFraction(b, a % b)
  // }
 
  //? sacando fuera de ua funcion
  let divisor = totalSecTotal
  let aux1 = totalSecPart
  while (aux1 % divisor) {
      let aux2 = divisor
      divisor = aux1 % divisor
      aux1 = aux2
  }
  // return ${numerator/divisor}/${denominator/divisor}
  // const mcd = simplifyFraction(totalSecTotal, totalSecPart)
  // const numerator = totalSecPart / mcd
  // const denominator = totalSecTotal / mcd
  // Devolvemos la fracción en formato de cadena
  return `${totalSecPart/divisor}/${totalSecTotal/divisor}`
}


// Usage
console.log(getCompleted('01:00:00', '03:00:00')) // '1/3'
console.log(getCompleted('02:00:00', '04:00:00')) // '1/2'
console.log(getCompleted('01:00:00', '01:00:00')) // '1/1'
console.log(getCompleted('00:10:00', '01:00:00')) // '1/6'
console.log(getCompleted('01:10:10', '03:30:30')) // '1/3'
console.log(getCompleted('03:30:30', '05:50:50')) // '3/5