interface resultado {
  [key: string]: number[]
}
function checkStepNumbers(systemNames:string[], stepNumbers:number[]) {
  const resultado : resultado= {}
  systemNames.forEach((el,i) => {
    if(resultado[el]){
      resultado[el].push(stepNumbers[i])
    }else{
      resultado[el] = [stepNumbers[i]]
    }
  })
  const resulFlat = Object.values(resultado)

  return resulFlat.every(el => el.every((el,i,arr) => i === 0 || el > arr[i-1]))
}

const systemNames = ["tree_1", "tree_2", "house", "tree_1", "tree_2", "house"]
const stepNumbers = [1, 33, 10, 2, 44, 20]

checkStepNumbers(systemNames, stepNumbers) // => true

// tree_1 tiene los pasos: [1, 2]
// tree_2 tiene los pasos: [33, 44]
// house tiene los pasos: [10, 20]

// true: Los pasos de cada sistema están en orden estrictamente creciente

checkStepNumbers(["tree_1", "tree_1", "house"], [2, 1, 10]) // => false

// tree_1 tiene los pasos: [2, 1]
// house tiene los pasos: [10]

// false: tree_1 tiene los pasos de forma decreciente

checkStepNumbers(["house", "house", "tree_1", "tree_1", "house", "tree_2", "tree_2", "tree_3"], [5, 2, 1, 2, 3, 4, 5, 6])
// Expected:
// false