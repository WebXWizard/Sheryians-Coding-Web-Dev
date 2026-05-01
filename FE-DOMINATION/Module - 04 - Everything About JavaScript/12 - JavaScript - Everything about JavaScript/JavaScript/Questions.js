// 1-WAP to check if a number is prime or not--

console.log("..........")
console.log()
let n=29,count;
if(n<=1)
{
    console.log("The Number is not Prime");//for  checking 1 and negatve 
}

for(i=2;i<=n;i++)
{
    if(n%i==0)
    {
        count++;
    }
}

if(count>1)
{
    console.log("The Number is not Prime");
}
else{
    console.log("The Number is  Prime",n)
}

console.log()

// 2- WAP to print all prime numbers in range of 200 to 360--





// 3- WAP to reverse a number--
  
  console.log("---------")
  console.log()

  var s="54321";
  for(i=s.length;i>=0;i--)
  {
//   console.log(s[i])
  }
console.log(s)


console.log()


// 4- WAP to add all odd numbers in range of 130 to 490--

 console.log("-------")

 console.log()

let Sum=0;
for (i=130;i<=490;i++)
{
    if(i%2!=0)
    { 
        Sum=Sum+i;
    }
}
console.log(Sum)


console.log()

console.log("-----")

console.log()

// 5- WAP print factorial of a given number--

  var number = 5
  var fact=1;
   for( i=1; i<=5; i++ )
   { 
    fact=fact*i;

   }
console.log("Factorial" , fact)

   