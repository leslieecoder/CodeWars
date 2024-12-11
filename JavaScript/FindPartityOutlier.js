// You are given an array (which will have a length of at least 3, but could be very large) containing integers. 
// The array is either entirely comprised of odd integers or entirely comprised 
// of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" 



//PREP
//P: array of integer = numbers
//R: outlier -> number the one that is not even or is not odd
//E: [2, 4, 6, 7] = 7


function findOutlier(arrayOfNumbers){

    //TO DO 
    
    //Get the first three elements
    const firstThree = arrayOfNumbers.slice(0, 3)
    
    // Count how many are even and how many are odd
    let even = 0
    let odd = 0
    
    //Check the first three elements
    
    for(let i = 0; i <3; i++ ){
        if (firstThree[i] % 2 === 0) even++;
        else odd++;}
    
    
    // If even is greater, the majority are even, so the outlier is odd
    const isEvenMajority = even > odd
    
    // Find the outlier
    
    
    for(let i = 0; i < arrayOfNumbers.length; i++ ){
        if (isEvenMajority && arrayOfNumbers[i] % 2 !== 0){
            return console.log(arrayOfNumbers[i])
        }else if (!isEvenMajority && arrayOfNumbers[i] % 2 === 0){
            return console.log(arrayOfNumbers[i])
        }
    
    }
    
    //if they are odd return number modulus == 0
    
    }
    
    let arr = [1,3,5,7,8]
    
    findOutlier(arr)