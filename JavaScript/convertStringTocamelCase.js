/* Complete the method/function so that it converts dash/underscore delimited words into camel casing.
The first word within the output should be capitalized only if the original word was capitalized 
(known as Upper Camel Case, also often referred to as Pascal case). 
The next words should be always capitalized.
"the-stealth-warrior" gets converted to "theStealthWarrior"

"The_Stealth_Warrior" gets converted to "TheStealthWarrior"

"The_Stealth-Warrior" gets converted to "TheStealthWarrior"

*/ 

//String that includes - _ Uppercases
//string

function toCamelCase(str){

    //Separate the words

    let words = str.split(/[- _]/)

    //iterate on each word to veryfy uppercase or lowercase
    return words.map((word, index) => {

        //verify if the first letter is UpperCase

        if(index === 0 && str[0] === str[0].toLowerCase()){
            return word
        } return word.toUpperCase() + word.slice(1);
    }).join('');


    

    

}


console.log(toCamelCase('This_Is_An_Example') )// thisIsAnExample


