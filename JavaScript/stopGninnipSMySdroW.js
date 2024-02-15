//Instructions

/* Write a function that takes in a string of one or more words,
 and returns the same string, but with all words that have 
 five or more letters reversed (Just like the name of this Kata).
 Strings passed in will consist of only letters and spaces. 
 Spaces will be included only when more than one word is present. */

 //PREP
 //P: string = one or more words
 //R: same string with words of 5+ letters reverse, console or array?


 function spinWords(string){
    //TODO 
    //Split the string into words
    const words = string.split(" ")

    //Iterate to each word inside the array
    const processedWords= words.map( word => {
        //Check the length of the word
        if(word.length > 5) {
            //reverse the word
            return word.split('').reverse().join('');
        //If the word is less than 5 return the normal word
        }else{
            return word
        }
    }
    
    )
    //join all the processed words to be a single string
    return processedWords.join(" ")
  

  }


console.log(spinWords('hello my amazing friend')) // 'gnizama', dneirf