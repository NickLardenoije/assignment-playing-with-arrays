let array1 = [300, 20, 60, 100, 400, 130, 270, 290, 30, 450, 50];
let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

array1.sort((a, b) => a - b);
array1.splice(-1, 1);
array1.splice(0, 1);
console.log(`Array1 bestaat nu uit: ${array1}`);

let array3 = array2.map(array2 => array2* 4);
console.log(`Array3 bestaat nu uit: ${array3}`);