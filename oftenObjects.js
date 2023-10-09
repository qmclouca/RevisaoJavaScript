//Object.assign(): Copia valores de propriedades de um ou mais objetos fonte para um objeto destino.
const target = { a: 1 };
const source = { b: 2, c: 3 };
Object.assign(target, source);
console.log(target);  // { a: 1, b: 2, c: 3 }

//Object.create(): Cria um novo objeto com o protótipo especificado.
const prototypeObj = { greet: () => "Hello" };
const newObj = Object.create(prototypeObj);
console.log(newObj.greet());  // "Hello"

//Object.defineProperty(): Define uma nova propriedade em um objeto ou modifica uma já existente.
Object.defineProperty(target, 'd', {
  value: 4,
  writable: true,
  enumerable: true,
  configurable: true
});
console.log(target.d);  // 4

//Object.defineProperties(): Define várias propriedades em um objeto.
Object.defineProperties(target, {
  'e': { value: 5, writable: true },
  'f': { value: 6, writable: true }
});
console.log(target.e, target.f);  // 5 6

//Object.entries(): Retorna um array de pares [chave, valor] das propriedades enumeráveis do objeto.
console.log(Object.entries(target));  // [ ['a', 1], ['b', 2], ['c', 3], ['d', 4], ['e', 5], ['f', 6] ]

//Object.keys(): Retorna um array das chaves das propriedades enumeráveis do objeto.
console.log(Object.keys(target));  // [ 'a', 'b', 'c', 'd', 'e', 'f' ]

//Object.values(): Retorna um array dos valores das propriedades enumeráveis do objeto.
console.log(Object.values(target));  // [ 1, 2, 3, 4, 5, 6 ]

//Object.freeze(): Impede modificações no objeto.
Object.freeze(target);
target.g = 7;  // Isso não terá efeito
console.log(target.g);  // undefined

//Object.isFrozen(): Determina se um objeto foi congelado.
console.log(Object.isFrozen(target));  // true

//Object.seal(): Previne que novas propriedades sejam adicionadas e marca todas as propriedades existentes como não configuráveis.
const sealedObj = { x: 10, y: 20 };
Object.seal(sealedObj);
sealedObj.z = 30;  // Isso não terá efeito
console.log(sealedObj.z);  // undefined

//Object.isSealed(): Determina se um objeto foi selado.
console.log(Object.isSealed(sealedObj));  // true

//Object.preventExtensions(): Previne que novas propriedades sejam adicionadas ao objeto.
const extObj = { a: 1 };
Object.preventExtensions(extObj);
extObj.b = 2;  // Isso não terá efeito
console.log(extObj.b);  // undefined

//Object.isExtensible(): Determina se é possível adicionar novas propriedades a um objeto.
console.log(Object.isExtensible(extObj));  // false

//Object.is(): Determina se dois valores são o mesmo valor.
console.log(Object.is('foo', 'foo'));  // true
console.log(Object.is(NaN, NaN));     // true, diferente do ===

//Object.hasOwnProperty(): Verifica se o objeto possui uma propriedade como uma propriedade direta (não herdada).
console.log(target.hasOwnProperty('a'));  // true
console.log(target.hasOwnProperty('z'));  // false