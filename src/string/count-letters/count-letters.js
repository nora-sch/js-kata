/*
Create a function `countChar` which counts, in a given string, the number of times a character appears.

If the string or the character is null, return -1.
If the character length is other than 1, return -1.

Example:
* "" and "a" -> 0
* "a" and "a" -> 1
* "aaaaabbbaa" and "a" -> 7
* "bbacbaaa" and "c" -> 1
* "bbcc" and "a" -> 0
* null and "a" -> -1
* "hello" and "he" -> -1
* "hello" and "" -> -1
* "hello" and null -> -1
Add you own tests.

*/

// TODO add your code here
function countChar(string, char){
let charCount = 0;
if(string === null || char === null || char.length !== 1){
    return -1;
}else{
    const arrayOfString = string.split("");
    arrayOfString.forEach(letter => {
        if (letter === char) {
            charCount++;
        }
    });
}
return charCount;
}




module.exports = countChar;
