function fixLetter(letter:string) {
  //Dejar un espacio después de cada coma si no lo hay
  letter = letter.replace(/([^\s]),/g, '$1, ').trim()
  //Eliminar todos los espacios en blanco que existan en la cadena
  letter = letter.replace(/\s+/g, ' ')
  //Quitar espacios en blanco antes del signo de interrogación si los hay
  letter = letter.replace(/\s+(\?)/g, '$1')
  //Quitar los espacios en blanco an tes de la coma o punto si los hay
  letter = letter.replace(/\s+([,\.])/g, '$1')
  //Las preguntas sólo deben terminar con un signo de interrogación y quitar los signos de interrogación duplicados
  letter = letter.replace(/\?+/g,'?')
  // La primera letra de cada oración debe estar en mayúscula
  letter = letter.charAt(0).toUpperCase() + letter.slice(1)
  // la primera letra de cada oración debe estar en mayúscula considreando el espacio dejado
  letter = letter.replace(/(\.|\?|\!)\s*(\w)/g, (match) => match.toUpperCase())
  // Poner en mayúscula la palabra "Santa Claus" si aparece en la carta
  letter = letter.replace(/santa claus/gi, 'Santa Claus')
  // Poner un punto final si no tiene puntuación
  letter = letter.replace(/(\w)(\s*)$/, '$1.')
  return letter
}

fixLetter(` hello,  how are you??     do you know if santa claus exists?  i really hope he does!  bye  `)
//  Hello, how are you? Do you know if Santa Claus exists? I really hope he does! Bye.
//! Hello, how are you? Do you know if Santa Claus exists? I really hope he does! Bye.

fixLetter("  Hi Santa claus. I'm a girl from Barcelona , Spain . please, send me a bike.  Is it possible?")
//  Hi Santa Claus. I'm a girl from Barcelona, Spain. Please, send me a bike. Is it possible?
//! Hi Santa Claus. I'm a girl from Barcelona, Spain. Please, send me a bike. Is it possible?

fixLetter('  hi,santa claus. are you there ?   ')
//  Hi, Santa Claus. Are you there?
//! Hi, Santa Claus. Are you there?
//? instrucciones
// Eliminar espacios al inicio y al final
// Eliminar múltiples espacios en blanco y dejar sólo uno
// Dejar un espacio después de cada coma
// Quitar espacios antes de coma o punto
// Las preguntas sólo deben terminar con un signo de interrogación
// La primera letra de cada oración debe estar en mayúscula
// Poner en mayúscula la palabra "Santa Claus" si aparece en la carta
// Poner un punto al final de la frase si no tiene puntuación