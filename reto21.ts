function printTable(gifts:{name:string, quantity:number}[]) {

  const nam = Math.max(...gifts.map((g) => g.name.length),4)
  const qt = Math.max(...gifts.map((g) => g.quantity.toString().length),8)
  const total = nam + qt + 7
  let table = "+".repeat(total) + "\n";
  table += "| Gift" + " ".repeat(nam - 4);
  table += " | Quantity" + " ".repeat(qt - 8) + " |" + "\n";
  table += "| " + "-".repeat(nam) + " | " + "-"
   .repeat(qt) + " |" + "\n"
  
  gifts.forEach((g) => {
    table += "| " + g.name + " ".repeat(nam - g.name.length)
    table += " | " + g.quantity
    table += " ".repeat(qt - g.quantity.toString().length) + " |" + "\n"
  }) 
  // es mejor usar el += para concatenar strings que colocar todo en un solo string
  // mas legible y mas eficiente
  table += "*".repeat(total)

  return table
}

// Todo: mínimo tendrán que ser del espacio de los títulos Gift y Quantity
// Todo: La tabla no termina con salto de línea.
console.log(printTable([
  { name: 'Game', quantity: 2 },
  { name: 'Bike', quantity: 1 },
  { name: 'Book', quantity: 3 }
]))
// +++++++++++++++++++
// | Gift | Quantity |
// | ---- | -------- |
// | Game | 2        |
// | Bike | 1        |
// | Book | 3        |
// *******************

console.log(printTable([
  { name: 'PlayStation 5', quantity: 9234782374892 },
  { name: 'Book Learn Web Dev', quantity: 23531 }
]))

// ++++++++++++++++++++++++++++++++++++++
// | Gift               | Quantity      |
// | ------------------ | ------------- |
// | PlayStation 5      | 9234782374892 |
// | Book Learn Web Dev | 23531         |
// **************************************