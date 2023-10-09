//Addition assignment (Atribuição de adição): +=
let a = 5;
a += 3;  // a = a + 3; => a agora é 8
console.log(a);  // 8

//Subtraction assignment (Atribuição de subtração): -=
let b = 10;
b -= 4;  // b = b - 4; => b agora é 6
console.log(b);  // 6

//Multiplication assignment (Atribuição de multiplicação): *=
let c = 7;
c *= 2;  // c = c * 2; => c agora é 14
console.log(c);  // 14

//Division assignment (Atribuição de divisão): /=
let d = 20;
d /= 4;  // d = d / 4; => d agora é 5
console.log(d);  // 5

//Remainder assignment (Atribuição de resto): %=
let e = 15;
e %= 4;  // e = e % 4; => e agora é 3
console.log(e);  // 3

//Exponentiation assignment (Atribuição de exponenciação): **=
let f = 3;
f **= 3;  // f = f ** 3; => f agora é 27
console.log(f);  // 27

//Left shift assignment (Atribuição de deslocamento à esquerda): <<=
let g = 5;
g <<= 2;  // g = g << 2; => g agora é 20
console.log(g);  // 20

//Right shift assignment (Atribuição de deslocamento à direita): >>=
let h = 16;
h >>= 2;  // h = h >> 2; => h agora é 4
console.log(h);  // 4

//Unsigned right shift assignment (Atribuição de deslocamento à direita sem sinal): >>>=
let i = -16;
i >>>= 2;  
console.log(i);  // Resultado é um número grande pois estamos usando deslocamento à direita sem sinal

//Bitwise AND assignment (Atribuição AND bit a bit): &=
let j = 14;  // 1110 em binário
j &= 11;     // j = j & 11; 11 é 1011 em binário => j agora é 10 (1010 em binário)
console.log(j);  // 10

//Bitwise XOR assignment (Atribuição XOR bit a bit): ^=
let k = 12;  // 1100 em binário
k ^= 10;     // k = k ^ 10; 10 é 1010 em binário => k agora é 6 (0110 em binário)
console.log(k);  // 6

//Bitwise OR assignment (Atribuição OR bit a bit): |=
let l = 12;  // 1100 em binário
l |= 3;      // l = l | 3; 3 é 0011 em binário => l agora é 15 (1111 em binário)
console.log(l);  // 15