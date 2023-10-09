//Number.EPSILON: A diferença entre 1 e o menor valor maior que 1 que pode ser representado como um Number.
console.log(Number.EPSILON);  // 2.220446049250313e-16

//Number.MAX_VALUE: O maior valor positivo representável como um Number.
console.log(Number.MAX_VALUE);  // 1.7976931348623157e+308

//Number.MIN_VALUE: O menor valor positivo representável como um Number (que é positivo e maior que zero).
console.log(Number.MIN_VALUE);  // 5e-324

//Number.MAX_SAFE_INTEGER: O maior inteiro que pode ser representado com precisão em JavaScript.
console.log(Number.MAX_SAFE_INTEGER);  // 9007199254740991

//Number.MIN_SAFE_INTEGER: O menor inteiro que pode ser representado com precisão em JavaScript.
console.log(Number.MIN_SAFE_INTEGER);  // -9007199254740991

//Number.NaN: Representa "Not-a-Number" (Não é um número).
console.log(Number.NaN);  // NaN

//Number.NEGATIVE_INFINITY: Representa o valor negativo infinito.
console.log(Number.NEGATIVE_INFINITY);  // -Infinity

//Number.POSITIVE_INFINITY: Representa o valor positivo infinito.
console.log(Number.POSITIVE_INFINITY);  // Infinity

//Number.isNaN(): Determina se o valor passado é NaN. É uma versão mais confiável do que a função global isNaN().
console.log(Number.isNaN(NaN));  // true
console.log(Number.isNaN(42));  // false

//Number.isFinite(): Determina se o valor passado é um número finito.
console.log(Number.isFinite(42));         // true
console.log(Number.isFinite(Infinity));   // false

//Number.isInteger(): Determina se o valor passado é um inteiro.
console.log(Number.isInteger(42));    // true
console.log(Number.isInteger(42.5));  // false

//Number.isSafeInteger(): Determina se o valor passado é um inteiro seguro (ou seja, um número que pode ser representado com precisão).
console.log(Number.isSafeInteger(42));                   // true
console.log(Number.isSafeInteger(9007199254740992));     // false, pois é maior que Nu