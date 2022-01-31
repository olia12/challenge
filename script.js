let num = 266219;
num = String(num);
let numLength = num.length;
let product = 1;
let degree;

for (let i = 0; i < numLength; i++) {
  product *= num[i];
}
console.log(product);

degree = product ** 3;
degree = String(degree);
console.log(degree.substring(0, 2));
