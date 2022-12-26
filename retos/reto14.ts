function getOptimalPath(path:number[][]) : number {
  return path.reduceRight((previous, current) => {
    return current.map((val, index) => {
      return val + Math.min(previous[index], previous[index + 1])//buscamos el menor de los dos y los sumamos
    })
  })[0] //devolvemos la primera posicion
}

getOptimalPath([[0], [2, 3]]) // 2
// // 0 -> 2

getOptimalPath([[0], [3, 4], [9, 8, 1]]) // 5
// // 0 -> 4 -> 1

getOptimalPath([[1], [1, 5], [7, 5, 8], [9, 4, 1, 3]]) // 8
// 1 -> 1 -> 5 -> 1
//getOptimalPath([[1], [1, 5], [7, 5, 8], [9, 4, 1, 3], [-1, -1, -1, -1, -1]])

//?explicaion
// previous = [9, 8, 1]
// current = [3, 4]
// current.map((val, index) => {
   /*
 2 Elementos en current así que:

 Iteración 1:
   val = 3
   index = 0

 Iteración 2:
   val = 4
   index = 1

   */
// }
// Ahora nuestros dos números a comparar serian previous[index] y previous[index+1]

// current.map((val, index) => {
  /*
   2 Elementos en current así que:

   Iteración 1:
     val = 3
     index = 0
       previous[index] = 9
       previous[index + 1] = 8

   Iteración 2:
     val = 4
     index = 1
       previous[index] = 8
       previous[index + 1] = 1

   */
// }
// Y Math.min() nos dara el mínimo:

// current.map((val, index) => {
//  return val + Math.min(previous[index], previous[index + 1])
// }
// Representación
// 1er Iteración
//  9 8 1
//   3 4
//    0
// Pasa a ser

//   11 5
//    0
// 2nda Iteración
//   11 5
//    0
// Pasa a ser

//    5
