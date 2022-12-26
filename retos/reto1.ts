function wrapping(gifts : string[]) {
  //usando for
  // let regalosEnvuetos : string[]= []
  // for (let i = 0; i < gifts.length; i++) {
  //   let printPapelRegalo = "*".repeat(gifts[i].length + 2)
  //   regalosEnvuetos.push(`${printPapelRegalo}\n*${gifts[i]}*\n${printPapelRegalo}`)
  // }
  const regalosEnvuetos = gifts.map((gift) => {
    let sizeGift = gift.length + 2
    let printPapelRegalo = "*".repeat(sizeGift)
    return `${printPapelRegalo}\n*${gift}*\n${printPapelRegalo}`
  })
  return regalosEnvuetos
}

const gifts = ['cat', 'game', 'socks']

console.time('Tiempo de ejecución')
const wrapped = wrapping(gifts)
console.log(wrapped)
console.timeEnd('Tiempo de ejecución')
