//parseInt(): Converte uma string em um inteiro.
console.log(parseInt("42"));       // 42
console.log(parseInt("42.5"));    // 42
console.log(parseInt("42abc"));   // 42

//parseFloat(): Converte uma string em um ponto flutuante.
console.log(parseFloat("42.5"));   // 42.5
console.log(parseFloat("42.5.8")); // 42.5
console.log(parseFloat("42abc"));  // 42

//isNaN(): Verifica se um valor é NaN (Not-a-Number).
console.log(isNaN(NaN));          // true
console.log(isNaN(42));           // false
console.log(isNaN("42"));         // false

//isFinite(): Verifica se um valor é um número finito.
console.log(isFinite(42));        // true
console.log(isFinite(Infinity));  // false
console.log(isFinite(-Infinity)); // false
console.log(isFinite(NaN));       // false

//encodeURI() e decodeURI(): Estas funções são usadas para codificar e decodificar URIs completos, respectivamente. Eles não codificam caracteres especiais como :, /, ? e #.
const uri = "https://www.example.com/?name=John&age=30";
const encoded = encodeURI(uri);
console.log(encoded);  // "https://www.example.com/?name=John&age=30" (sem alterações neste caso)
console.log(decodeURI(encoded)); // Recupera o URI original

//encodeURIComponent() e decodeURIComponent(): Estas funções são usadas para codificar e decodificar componentes individuais de um URI. Elas codificarão caracteres como :, /, ?, e #.
const uriComponent = "name=John&age=30";
const encodedComponent = encodeURIComponent(uriComponent);
console.log(encodedComponent);  // "name%3DJohn%26age%3D30"
console.log(decodeURIComponent(encodedComponent)); // Recupera o componente original "name=J