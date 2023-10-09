//charAt(): Retorna o caractere em um índice especificado.
console.log("JavaScript".charAt(4));  // S

//concat(): Combina várias strings.
console.log("Hello".concat(" ", "World!"));  // "Hello World!"

//includes(): Verifica se uma string contém a substring especificada.
console.log("Hello, World!".includes("World"));  // true

//endsWith(): Verifica se uma string termina com a substring especificada.
console.log("Hello, World!".endsWith("!"));  // true

//indexOf(): Retorna o índice da primeira ocorrência da substring. Retorna -1 se não for encontrado.
console.log("Hello, World!".indexOf("World"));  // 7

//lastIndexOf(): Retorna o índice da última ocorrência da substring. Retorna -1 se não for encontrado.
console.log("Hello, World, Hello!".lastIndexOf("Hello"));  // 13

//match(): Procura uma string por uma correspondência usando uma expressão regular e retorna as correspondências.
console.log("Hello, World!".match(/\w+/g));  // ["Hello", "World"]

//repeat(): Retorna uma nova string com um número especificado de cópias da string original.
console.log("abc".repeat(3));  // "abcabcabc"

//replace(): Substitui uma substring ou padrão por outra substring.
console.log("Hello, World!".replace("World", "JavaScript"));  // "Hello, JavaScript!"

//search(): Procura uma substring usando uma expressão regular e retorna o índice da ocorrência. Retorna -1 se não for encontrado.
console.log("Hello, World!".search(/World/));  // 7

//slice(): Extrai uma parte da string e retorna uma nova string.
console.log("JavaScript".slice(0, 4));  // "Java"

//split(): Divide uma string em um array de substrings.
console.log("Hello World!".split(" "));  // ["Hello", "World!"]

//startsWith(): Verifica se uma string começa com a substring especificada.
console.log("Hello, World!".startsWith("Hello"));  // true

//substring(): Retorna uma nova string entre dois índices especificados.
console.log("JavaScript".substring(0, 4));  // "Java"

//toLowerCase(): Retorna a string em letras minúsculas.
console.log("HELLO".toLowerCase());  // "hello"

//toUpperCase(): Retorna a string em letras maiúsculas.
console.log("hello".toUpperCase());  // "HELLO"

//trim(): Remove espaços em branco do início e do fim da string.
console.log("   Hello World!   ".trim());  // "Hello World!"