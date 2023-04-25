/*
Create a function `abbreviate` which converts a name into initials.

The output should be capital letters with a dot separating them.

Example:
* "Alyson Hannigan" -> "A.H"
* "Cobie Smulders" -> "C.S"
* "Neil Patrick Harris" -> "N.P.H"

Add you own tests.

*/

// TODO add your code here

function abbreviate (name) {
    const arrayOfNames = name.split(" ");
    let abbreviation = "";
    arrayOfNames.forEach((name) => {
        abbreviation = abbreviation + "." + name[0] ;
    });
    return abbreviation.slice(1);
}

// console.log(abbreviate("Alyson Hannigan"))
 module.exports = abbreviate;
