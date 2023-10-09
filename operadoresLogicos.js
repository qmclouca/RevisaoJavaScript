//Logical AND assignment (Atribuição AND lógica): &&=
//Se a variável à esquerda for truthy (verdadeira), ela é reatribuída ao valor da expressão à direita.
let a = 5;
a &&= 10;  // Como a é truthy (5), a agora será 10
console.log(a);  // 10

let b = 0;
b &&= 10;  // Como b é falsy (0), b permanecerá 0
console.log(b);  // 0

//Logical OR assignment (Atribuição OR lógica): ||=
//Se a variável à esquerda for falsy (falsa), ela é reatribuída ao valor da expressão à direita.
let c = 5;
c ||= 10;  // Como c é truthy (5), c permanecerá 5
console.log(c);  // 5

let d = 0;
d ||= 10;  // Como d é falsy (0), d agora será 10
console.log(d);  // 10

//Logical nullish assignment (Atribuição nula lógica): ??=
//Se a variável à esquerda for null ou undefined, ela é reatribuída ao valor da expressão à direita.
let e = 5;
e ??= 10;  // Como e não é null nem undefined, e permanecerá 5
console.log(e);  // 5

let f;
f ??= 10;  // Como f é undefined, f agora será 10
console.log(f);  // 10

let g = null;
g ??= 20;  // Como g é null, g agora será 20
console.log(g);  // 20