function myPage() {
    let count = 1;
let oddNumbers = [];

while (oddNumbers.length < 25) {
  if (count % 2 !== 0) {
    oddNumbers.push(count);
  }
  count++;
}

document.getElementById('container').innerHTML= oddNumbers;
}
myPage()