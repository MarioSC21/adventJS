function canExit(maze:string[][]) {
  const replace = (str:string) =>
    str
      .replace(/[S][\sE]/g, "SS")//reemplaza los espacios y la E por SS
      .replace(/[\sE][S]/g, "SS")//reemplaza los espacios y la E por SS
      .split("");

  let x:string[][][] = [];
  new Array(20).fill(0).forEach(() => {
    let check = [...maze];
    maze.map((horizontal, i) => {
      maze[i] = replace(horizontal.join(""));
      let v = maze[0].map((_, i) => replace(maze.map((x) => x[i]).join("")));
      maze[i] = v.map((x) => x[i]);
    });
    check.flat().join("") == maze.flat().join("") && x.push(check);
  });
  return !x.flat(2).includes("E");
}

canExit([
  [' ', ' ', 'W', ' ', 'S'],
  [' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', 'W', ' '],
  ['W', 'W', ' ', 'W', 'W'],
  [' ', ' ', ' ', ' ', 'E']
]) // -> true

// Se puede salir porque empezamos en [0, 4]
// y hay un camino hasta la salida que es [4, 4]

canExit([
  [' ', ' ', 'W', 'W', 'S'],
  [' ', ' ', ' ', 'W', ' '],
  [' ', ' ', ' ', 'W', ' '],
  ['W', 'W', ' ', 'W', 'W'],
  [' ', ' ', ' ', ' ', 'E']
]) // -> false

// No hay manera de llegar de [0, 4] a [4, 4]

// W: Es una pared, no se puede pasar por ahí.
// S: Punto de entrada al almacén.
// E: Punto de salida del almacén.
// : Los espacios en blanco es por donde se puede pasar.
// Los movimientos válidos son de una posición hacia arriba, abajo, izquierda o derecha. No se puede mover en diagonal.
// Sólo tienes que devolver si se puede salir del laberinto con un booleano.
// Las paredes W no se pueden saltar.
// No se pueden salir de los límites de la matriz, siempre hay que seguir un camino interno.