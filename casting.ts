let x: unknown = 'hello';

console.log((x as string).length);

// let trim: unknown = 4;
// console.log((t as string).length);

let t: unknown = 'hello';
console.log((<string>t).length);