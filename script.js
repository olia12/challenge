let num = 266219;
num = String(num);
let numLength = num.length;
let product = 1;

for (let i = 0; i < numLength; i++) {
  product *= num[i];
}
console.log(product);
