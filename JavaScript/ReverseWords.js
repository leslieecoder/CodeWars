// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// str spaces
// str console log


function reverseWords(str) {
    //get each word split

    let words = str.split(" ")
     
    //reverse each word loop
    let reverseWords = words.map((word)=>{
        return word.split('').reverse().join('')
    }

    )

    return reverseWords.join(' ')
  }


console.log(reverseWords('the dog is orange'))







reverseWords("the dog is orange") // "eht god si egnaro"