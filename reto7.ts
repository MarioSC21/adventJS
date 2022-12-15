function getGiftsToRefill(a1 : string[], a2 : string[], a3 : string[]) { 
  return [...new Set([...a1, ...a2, ...a3])].filter((gift) => +a1.includes(gift) + +a2.includes(gift) + +a3.includes(gift) < 2)
}

const a1 = ['bici', 'coche', 'bici', 'bici']
const a2 = ['coche', 'bici', 'muñeca', 'coche']
const a3 = ['bici', 'pc', 'pc']

const gifts = getGiftsToRefill(a1, a2, a3) // ['muñeca', 'pc']
console.log(getGiftsToRefill(['a', 'a'], ['b', 'b'], ['c', 'c']))
console.log(gifts)