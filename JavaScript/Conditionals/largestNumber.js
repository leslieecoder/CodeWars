//Write a program that takes three numbers and prints the largest number.

let num1 = prompt("Enter number 1: ")
let num2 = prompt("Enter number 2: ")
let num3 = prompt("Enter number 3: ")


if (num1 >= num2 && num1 >= num3) {
    console.log("num1 is the largest")
}else if (num2 >= num1 && num2 >= num3){
    console.log("num2 is the largest")
}else{
    console.log("num3 is the largest")
}


