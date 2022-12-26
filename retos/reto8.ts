function checkPart(part : string) {
  const palin = [...part].reverse()
  const pafunction = (palin : string[]) => {
    //con some
    return palin.some((_, i) => {
      let palin2 = [...palin]
      palin2.splice(i, 1)
      return palin2.join('') === palin2.reverse().join('')
    })
  }
  return palin.join('') === part || pafunction(palin)
}

//* alternativa con mejor rendimneto
// function checkPart(part:string):boolean {
//   return [...part].some((_letter, i) => {
//       const sliceIndex = part.slice(0,i) + part.slice(i+1)
//       return [...sliceIndex].reverse().join('') === sliceIndex
//   })
// }

console.log(checkPart("uwu")) // true
// "uwu" es un palíndromo sin eliminar ningún carácter

console.log(checkPart("miidim")) // true
// "miidim" puede ser un palíndromo después de eliminar la primera "i"
// ya que "midim" es un palíndromo

console.log(checkPart("midu")) // false
// "midu" no puede ser un palíndromo después de eliminar un carácter

