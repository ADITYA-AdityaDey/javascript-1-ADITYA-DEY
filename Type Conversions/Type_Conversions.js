// Type Conversions
/*

* Implicit Conversion : also known as type coerciom where JavaScript itself will automatically convert the type

* Explicit Conversion : where I manually convert the type

*/



// Implicit Conversion

console.log(5 + '6');
console.log(true + '6');



console.log('6' - '3');
console.log('8' * '3');
console.log('9' / '3');

console.log('Adi' - 'tya');

console.log('10' - true);
console.log('10' - false);

console.log('20' - null);



console.log(3 + undefined);



// Explicit Conversion

console.log(Number('100'));
console.log(Number(false));
console.log(Number(''));

console.log(parseInt('100'));
console.log(parseFloat("3.14"));



console.log(String('100'));
console.log(String(false));
console.log(String(null));
console.log(String(undefined));

console.log((500).toString());



console.log(Boolean(10));
console.log(Boolean(null)); // null, undefined, 0, '', NaN return false when converted to boolean, Everything else will return true