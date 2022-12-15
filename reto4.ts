function fitsInOneBox(boxes: {l : number, w : number, h : number}[]): boolean {
  const boxSort = boxes.sort((a, b) => b.l - a.l)

  let countL = boxSort[0].l
  let countW = boxSort[0].w
  let countH = boxSort[0].h

  const cabeEnUnaCaja = boxSort.map((box,index) => {
    const {l, w, h} = box
    if(index === boxSort.length - 1) return true
    return boxSort[index+1].l <= l && boxSort[index+1].w <= w && boxSort[index+1].h <= h && countL >= l && countW >= w && countH >= h
  })
  return !cabeEnUnaCaja.includes(false)
}

const boxes = [
  { l: 1, w: 1, h: 10 },
  { l: 3, w: 3, h: 12 },
  { l: 2, w: 2, h: 1 },
]


console.time('fitsInOneBox')
console.log(fitsInOneBox(boxes)) // true
console.timeEnd('fitsInOneBox')