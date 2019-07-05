function sumDigits(n)
{
  let initNum = n;
  let numToSum;
  let i = 0;
  let total = 0;

  while(initNum > 0)
  {
    numToSum = initNum % 10; //isolates number in 1-digit '4'
    total += numToSum; //running total
    initNum = Math.floor(initNum / 10); //deletes the 1-digit from n, makin the 10-digit the new 1-digit '234' -> '23'
  }
  console.log("the total of " + n + " is " + total);
}

sumDigits(1);
sumDigits(12);
sumDigits(123);
sumDigits(1234);
sumDigits(12345);