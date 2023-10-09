import * as assert from 'assert/strict';

//print();
// print2();

// //normal comparison
// function print() {    
//     setInterval(() => {
//         try {
//             assert.equal(3 + 5, 7);
//             console.log("Resultado está correto!");
//         } catch (error) {
//             console.log("Erro:", error.message);
//         }
 
//     }, 1000);  // Executa a cada 1 segundo
// }

// //deep comparison

// function print2() {    
//     setInterval(() => {
//         try {
//             assert.deepEqual({a: 1, b: 4, c: 'teste'}, {a: 1, b: 4, c: 'test'});
//             console.log("Resultado está correto!");
//         } catch (error) {
//             console.log("Erro:", error.message);
//         }
 
//     }, 1000);  // Executa a cada 1 segundo
// }

//******Exemplo 2 *********/

// Exemplo com notEqual
// try {
//     assert.notEqual(3 + 2, 5);
// } catch (error) {
//     console.log("notEqual:", error.message);  // Esta linha será executada porque 3 + 2 é igual a 5
// }

// try {
//     assert.notEqual(3 + 3, 5);
// } catch (error) {
//     console.log("notEqual:", error.message);  // Esta linha não será executada porque 3 + 3 não é igual a 5
// }

// // Exemplo com notDeepEqual
// const objA = {
//     a: {
//         b: 1
//     }
// };

// const objB = {
//     a: {
//         b: 1,
//         c: 2
//     }
// };

// const objC = {
//     a: {
//         b: 1
//     }
// };

// try {
//     assert.notDeepEqual(objA, objB);
// } catch (error) {
//     console.log("notDeepEqual:", error.message);  // Esta linha não será executada porque objA e objB são diferentes
// }

// try {
//     assert.notDeepEqual(objA, objC);
// } catch (error) {
//     console.log("notDeepEqual:", error.message);  // Esta linha será executada porque objA e objC são equivalentes
// }

//Exemplo 3

// function divide(x, y) {
//     if (y === 0) {
//         throw new Error("Não se pode dividir por zero!");
//     }
//     return x / y;
// }

// // Testando se um erro é lançado quando tentamos dividir por zero
// try {
//     assert.throws(
//         () => {
//             divide(5, 0);
//         },
//         {
//             name: 'Error',
//             message: 'Não se pode dividir por zero!'
//         }
//     );
//     console.log("Teste 1 passou: Erro correto foi lançado ao dividir por zero.");
// } catch (error) {
//     console.log("Teste 1 falhou:", error.message);
// }

// // Teste alternativo apenas verificando a existência de um erro, sem especificar qual
// try {
//     assert.throws(
//         () => {
//             divide(5, 0);
//         }
//     );
//     console.log("Teste 2 passou: Algum erro foi lançado ao dividir por zero.");
// } catch (error) {
//     console.log("Teste 2 falhou:", error.message);
// }

//exemplo 4
function divide(x, y) {
    if (y === 0) {
        throw new Error("Não se pode dividir por zero!");
    }
    return x / y;
}

// Testando se um erro é lançado quando tentamos dividir por zero
try {
    try {
        divide(5, 0);
        assert.fail("Não foi lançado um erro ao dividir por zero");
    } catch (error) {
        if (error.message !== 'Não se pode dividir por zero!') {
            assert.fail("Erro lançado, mas a mensagem estava incorreta");
        }
    }
    console.log("Teste 1 passou: Erro correto foi lançado ao dividir por zero.");
} catch (error) {
    console.log("Teste 1 falhou:", error.message);
}

// Teste alternativo apenas verificando a existência de um erro, sem especificar qual
try {
    try {
        divide(5, 0);
    } catch (error) {
        console.log("Teste 2 passou: Algum erro foi lançado ao dividir por zero.");
        // Sai do bloco try-catch atual, evitando o assert.fail abaixo
    }
    assert.fail("Não foi lançado um erro ao dividir por zero");
} catch (error) {
    console.log("Teste 2 falhou:", error.message);
}


