'use strict';

let a = [1,4,5,6,7,8];

let b = a.map(num=>num*2);
console.log(b);

let c = a.filter(num=>num%2==0);
console.log(c);