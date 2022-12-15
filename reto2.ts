function countHours(year : number, holidays : string[]) {
  const verificacionDeFechas = ((holiday : string) => {
    let date = new Date(`${year}/${holiday}`).getDay()
    return date !== 6 && date !== 0
  })
  return holidays.filter(verificacionDeFechas).length * 2
}
const year = 2022
const holidays = ['01/06', '04/01', '12/25'] // formato MM/DD

// 01/06 es el 6 de enero, jueves. Cuenta.
// 04/01 es el 1 de abril, un viernes. Cuenta.
// 12/25 es el 25 de diciembre, un domingo. No cuenta.

console.time('Tiempo de ejecución')
console.log(countHours(year, holidays))// 2 días -> 4 horas extra en el año
console.timeEnd('Tiempo de ejecución')