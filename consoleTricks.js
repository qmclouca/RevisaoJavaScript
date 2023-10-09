console.log("teste log");
console.log('Test: %s %j', 123, 'abc');
console.log('%o', {foo: 123, bar: 'abc'});
console.log('%j', {foo: 123, bar: 'abc'});
console.log('%s%%', 99);
console.log(JSON.stringify({first: 'Jane', last: 'Doe'}, null, 2));
console.error('Test: %s %j', 123, 'abc');

