var numbers = process.argv;

var sum = 0;

for (i = 2; i < numbers.length; i++) {
    sum+= +numbers[i];
  }

console.log(sum);
