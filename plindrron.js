let n = 12
let reverse = 0;
let remander = 0;
let dublicate = n;
while (n > 0) {
  remander = n % 10;
  reverse = reverse * 10 + remander;
  n = Math.floor(n / 10);
}

console.log(reverse);

if (reverse == dublicate) {
  console.log("is plindrom");
} else {
  console.log("not a plindron");
}
