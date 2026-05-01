                 //Looping Statements--

    //Types Of Looping Statements:

    //1-for Loop(Range Pata ho tab use karenge)

    //2-while loop(Range na pata ho Jabtak Conditions False na ho jaaye)


//1-for loop-

 for (let i=1; i<=10; i++) // i-Pointer Variable)
 {
    //console.log(i)  [1 to 10 tak print hoga]
    console.log("Aloneboy",i)
       
 }

        
let a=" ";
for(let i=1; i<5; i++){
    a=a + i + " "
    console.log(a)
}
console.log(' ')

console.log('------------ ')

console.log(a)


console.log("-------")
     //2-while loops

     let count=0;
     while(count<=5){
        console.log("count: " + count )
        count++
    }

    console.log("count: " + count )

    console.log(count)





  let fruits =['Apple','Banana','Mango','Orange','Watermelon']
  for(let i=0;i<fruits.length;i++){
    console.log(fruits[i]);
  }
  console.log(fruits);

  

 // Calculate the sum of all given numbers in an array-

let numbers = [10, 20, 30, 40, 50]
let sum = 0
for (let i=0; i<numbers.length; i++){
    sum = sum + numbers[i]
}
console.log("Sum of all numbers: " + sum)