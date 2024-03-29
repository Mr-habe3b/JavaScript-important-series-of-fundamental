// standard Way
const score = 400;
// console.log(score);

// modern way
//number has minimum type of properties
const balance = new Number(100);
// console.log(balance);
// console.log(balance.toString().length);
// console.log(balance.toFixed(1));

const  otherNumber = 23.8966;// use precise because if you want number priority 2 then give  2
//  priority wise use
// console.log(otherNumber.toPrecision(3));

const hundered = 1000000;
//"en-IN" use for Indian currency 
// console.log(hundered.toLocaleString('en-IN'));

//``````````````````` Maths ```````````````````````

// console.log(Math);
//only negative value change to position value but positive will never to negative
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4,3,6,8));
// console.log(Math.max(4,3,6,8));

// console.log(Math.random()); // maths.random value will between 0 to 1
// console.log(Math.floor(Math.random()*10) + 1); 

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1))+ min);