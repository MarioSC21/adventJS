//character paraa arma el cubo /, \, _
//function para crear un cubo de tamaño n
//   /\_\_\_\
//  /\/\_\_\_\
// /\/\/\_\_\_\
// \/\/\/_/_/_/
//  \/\/_/_/_/
//   \/_/_/_/

function createCube(size: number) {
  let strCube = ''
  let strCube2 = ''
  for (let i = 1; i <= size; i++) {
    strCube += ' '.repeat(size - i) + '/\\'.repeat(i) + '_\\'.repeat(size) + '\n'
    strCube2 += ' '.repeat(i - 1) + '\\/'.repeat(size - i + 1) + '_/'.repeat(size) + '\n'
  }
  return strCube.concat(strCube2.trimEnd())
}


console.log ( createCube(3) )
console.log ( createCube(1) )
console.log ( createCube(2) )