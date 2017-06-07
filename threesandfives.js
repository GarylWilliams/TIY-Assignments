function sequence() {
  let sum = 0;
  let number = 0;
  while (number < 1000) {
    if (number % 3 === 0 || number % 5 === 0) {
      sum += number;
    }
    number++;
  }
  return sum;
}
sequence();
