//push(): Adiciona um ou mais elementos ao final de um array e retorna o novo comprimento.
let arr = [1, 2, 3];
arr.push(4, 5);
console.log(arr);  // [1, 2, 3, 4, 5]

//pop(): Remove o último elemento de um array e o retorna.
arr.pop();
console.log(arr);  // [1, 2, 3, 4]

//shift(): Remove o primeiro elemento de um array e o retorna.
arr.shift();
console.log(arr);  // [2, 3, 4]

//unshift(): Adiciona um ou mais elementos ao início de um array e retorna o novo comprimento.
arr.unshift(1);
console.log(arr);  // [1, 2, 3, 4]

//concat(): Une dois ou mais arrays e retorna um novo array.
let newArr = arr.concat([5, 6]);
console.log(newArr);  // [1, 2, 3, 4, 5, 6]

//join(): Une todos os elementos de um array em uma string.
console.log(arr.join("-"));  // "1-2-3-4"

//slice(): Retorna uma cópia superficial de uma porção do array.
console.log(arr.slice(1, 3));  // [2, 3]

//splice(): Altera o conteúdo de um array, adicionando, removendo ou substituindo elementos.
arr.splice(2, 1, 'a', 'b');
console.log(arr);  // [1, 2, 'a', 'b', 4]

//forEach(): Executa uma função em cada elemento do array.
arr.forEach(item => console.log(item));

//map(): Cria um novo array com os resultados da chamada de uma função em cada elemento do array.
let squared = arr.map(item => item * item);
console.log(squared);  // [1, 4, 'a'a', 'b'b', 16] (a e b são convertidos para NaN quando multiplicados)

//filter(): Cria um novo array com todos os elementos que passam no teste implementado pela função fornecida.
let evens = [1, 2, 3, 4, 5, 6].filter(num => num % 2 === 0);
console.log(evens);  // [2, 4, 6]

//reduce(): Aplica uma função a um acumulador e a cada valor do array (da esquerda para a direita) para reduzi-lo a um único valor.
let sum = [1, 2, 3, 4].reduce((acc, val) => acc + val, 0);
console.log(sum);  // 10

//find(): Retorna o primeiro elemento no array que satisfaz a função de teste fornecida.
let found = [1, 2, 3, 4].find(num => num > 2);
console.log(found);  // 3

//findIndex(): Retorna o índice do primeiro elemento que satisfaz a função de teste fornecida.
let foundIndex = [1, 2, 3, 4].findIndex(num => num > 2);
console.log(foundIndex);  // 2

//every(): Verifica se todos os elementos no array satisfazem a função de teste fornecida.
console.log([2, 4, 6, 8].every(num => num % 2 === 0));  // true

//some(): Verifica se pelo menos um dos elementos no array satisfaz a função de teste fornecida.
console.log([1, 3, 5, 8].some(num => num % 2 === 0));  // true

//sort(): Ordena os elementos de um array in-place e retorna o array.
console.log([3, 1, 4, 1, 5, 9].sort());  // [1, 1, 3, 4, 5, 9]

//reverse(): Inverte os elementos de um array in-place.
console.log([1, 2, 3, 4].reverse());  // [4, 3, 2, 1]

//isArray(): Verifica se o valor fornecido é um array.
console.log(Array.isArray([1, 2, 3]));  // true
console.log(Array.isArray({a: 1}));    // false

//flat(): Cria um novo array com todos os elementos de sub-array concatenados.
console.log([1, [2, 3, [4, 5]]].flat(2));  // [1, 2, 3, 4, 5]

//flatMap(): Primeiro mapeia cada elemento usando uma função e, em seguida, aplana o resultado em um novo array.
console.log([1, 2, 3].flatMap(x => [x, x * 2]));  // [1, 2, 2, 4, 3, 6]