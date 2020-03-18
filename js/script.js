let array1 = [300,20,60,100,400,130,270,290,30,450,50];
let array2 = [1,2,3,4,5,6,7,8,9,10];

array1.sort((a, b) => a - b);
array1.splice(-1,1);
array1.splice(0,1);

console.log(`array1 is nu: ${array1}`)

let array3 = array2.map(el => el * 4);

console.log(`array3 is nu: ${array3}`)